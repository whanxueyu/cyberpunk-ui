<template>
  <div :class="['cp-infinite-table', { 'loading': loading }]">
    <!-- 表格头部 -->
    <div class="table-header" ref="headerRef">
      <table>
        <colgroup>
          <col v-for="(column, index) in columns" :key="`col-${index}`" :style="getColumnStyle(column)">
        </colgroup>
        <thead>
          <tr>
            <th 
              v-for="(column, index) in columns" 
              :key="`header-${index}`"
              :class="{ 'sortable': column.sortable }"
              @click="handleSort(column)">
              <div class="th-content">
                <span>{{ column.title }}</span>
                <span v-if="column.sortable" class="sort-icon">
                  <span class="sort-up" :class="{ 'active': sortState.key === column.key && sortState.order === 'asc' }">▲</span>
                  <span class="sort-down" :class="{ 'active': sortState.key === column.key && sortState.order === 'desc' }">▼</span>
                </span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    
    <!-- 表格内容 -->
    <div 
      class="table-body" 
      ref="bodyRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd">
      <div class="scroll-container" :style="{ height: `${totalHeight}px` }">
        <table :style="{ transform: `translateY(${offsetY}px)`, transition: isScrolling ? 'transform 0.3s ease-out' : 'none' }">
          <colgroup>
            <col v-for="(column, index) in columns" :key="`col-${index}`" :style="getColumnStyle(column)">
          </colgroup>
          <tbody>
            <!-- 前置克隆行（仅第一行） -->
            <tr 
              v-if="loop && data.length > 0" 
              :key="'clone-first'"
              class="clone-row"
              :style="{ height: `${rowHeight}px` }">
              <td v-for="(column, colIndex) in columns" :key="colIndex">
                {{ getCellValue(data[data.length - 1], column) }}
              </td>
            </tr>
            
            <!-- 实际数据 - 虚拟滚动实现 -->
            <tr 
              v-for="(row, rowIndex) in visibleRows" 
              :key="`row-${getRowIndex(rowIndex)}`"
              v-memo="[row, sortState]"
              :class="{ 'selected': isRowSelected(row) }"
              :style="{ height: `${rowHeight}px` }"
              @click="handleRowClick(row)">
              <td 
                v-for="(column, colIndex) in columns" 
                :key="`cell-${rowIndex}-${colIndex}`">
                <slot 
                  :name="`cell-${column.key}`" 
                  :row="row" 
                  :column="column" 
                  :index="getRowIndex(rowIndex)">
                  {{ getCellValue(row, column) }}
                </slot>
              </td>
            </tr>
            
            <!-- 后置克隆行（仅第一行） -->
            <tr 
              v-if="loop && data.length > 0" 
              :key="'clone-last'"
              class="clone-row"
              :style="{ height: `${rowHeight}px` }">
              <td v-for="(column, colIndex) in columns" :key="colIndex">
                {{ getCellValue(data[0], column) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-overlay">
        <div class="loading-spinner">
          <div class="spinner-circle"></div>
          <div class="spinner-text">加载中...</div>
        </div>
      </div>
      
      <!-- 空数据状态 -->
      <div v-if="!loading && (!data || data.length === 0)" class="empty-data">
        <slot name="empty">
          <div class="empty-content">
            <div class="empty-icon">⚠</div>
            <div class="empty-text">暂无数据</div>
          </div>
        </slot>
      </div>
    </div>
    
    <!-- 表格控制栏 -->
    <div class="table-controls" v-if="showControls">
      <div class="control-button" @click="togglePause">
        <span v-if="isPaused">▶</span>
        <span v-else>⏸</span>
      </div>
      <div class="control-speed">
        <span>速度:</span>
        <input 
          type="range" 
          min="0.5" 
          max="5" 
          step="0.5" 
          v-model="currentSpeed" 
          @input="handleSpeedChange">
      </div>
    </div>
    
    <!-- 表格底部 -->
    <div class="table-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
    
    <!-- 表格扫描线效果 -->
    <div class="table-scanline"></div>
    
    <!-- 表格故障效果 -->
    <div class="table-glitch-effect"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';

defineOptions({
  name: 'CyberInfiniteTable',
})

// 列定义接口
interface TableColumn {
  key: string;
  title: string;
  width?: string | number;
  sortable?: boolean;
  formatter?: (row: any, column: TableColumn, index: number) => any;
}

// 排序状态接口
interface SortState {
  key: string;
  order: 'asc' | 'desc' | '';
}

const props = defineProps({
  data: {
    type: Array as () => any[],
    default: () => []
  },
  columns: {
    type: Array as () => TableColumn[],
    required: true
  },
  rowKey: {
    type: [String, Function],
    default: 'id'
  },
  rowHeight: {
    type: Number,
    default: 40
  },
  loading: {
    type: Boolean,
    default: false
  },
  selectedRows: {
    type: Array,
    default: () => []
  },
  defaultSort: {
    type: Object as () => { key: string, order: 'asc' | 'desc' },
    default: () => ({ key: '', order: 'asc' })
  },
  // 自动滚动相关配置
  autoScroll: {
    type: Boolean,
    default: true
  },
  speed: {
    type: Number,
    default: 1,
    validator: (value: number) => value >= 0.5 && value <= 5
  },
  loop: {
    type: Boolean,
    default: true
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  showControls: {
    type: Boolean,
    default: true
  },
  // 虚拟滚动相关
  bufferSize: {
    type: Number,
    default: 5
  }
});

const emit = defineEmits(['row-click', 'sort-change', 'load-more', 'scroll-pause', 'scroll-resume']);

// 引用
const headerRef = ref<HTMLElement | null>(null);
const bodyRef = ref<HTMLElement | null>(null);

// 滚动控制状态
const isScrolling = ref(false);
const isPaused = ref(false);
const pausedByTouch = ref(false);
const currentSpeed = ref(props.speed);
const scrollRequestId = ref<number | null>(null);
const currentIndex = ref(0);
const isAdjusting = ref(false);

// 排序状态
const sortState = ref<SortState>({
  key: props.defaultSort?.key || '',
  order: props.defaultSort?.order || ''
});

// 计算总高度（包含克隆行）
const totalHeight = computed(() => {
  const rowCount = props.data.length + (props.loop ? 2 : 0);
  return rowCount * props.rowHeight;
});

// 获取行的唯一键
const getRowKey = (row: any): string => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row);
  } else if (typeof props.rowKey === 'string') {
    return row[props.rowKey];
  }
  return String(row.id ?? row._id ?? Math.random().toString(36).substr(2, 9));
};

// 获取行索引（用于虚拟滚动）
const getRowIndex = (index: number): number => {
  return visibleStartIndex.value + index;
};

// 获取单元格值
const getCellValue = (row: any, column: TableColumn): any => {
  if (column.formatter) {
    return column.formatter(row, column, props.data.indexOf(row));
  }
  return row[column.key];
};

// 获取列样式
const getColumnStyle = (column: TableColumn): any => {
  if (column.width) {
    return { width: typeof column.width === 'number' ? `${column.width}px` : column.width };
  }
  return {};
};

// 虚拟滚动计算
const visibleStartIndex = computed(() => {
  return Math.max(0, currentIndex.value - props.bufferSize);
});

const visibleEndIndex = computed(() => {
  return Math.min(props.data.length, currentIndex.value + props.bufferSize + 1);
});

const visibleRows = computed(() => {
  if (props.data.length === 0) return [];
  return props.data.slice(visibleStartIndex.value, visibleEndIndex.value);
});

// 判断行是否被选中
const isRowSelected = (row: any): boolean => {
  if (!props.selectedRows || props.selectedRows.length === 0) return false;
  
  const rowKey = getRowKey(row);
  return props.selectedRows.some(selectedRow => 
    getRowKey(selectedRow) === rowKey
  );
};

// 处理行点击
const handleRowClick = (row: any) => {
  emit('row-click', row);
};

// 处理排序
const handleSort = (column: TableColumn) => {
  if (!column.sortable) return;
  
  let order: 'asc' | 'desc' | '' = 'asc';
  
  if (sortState.value.key === column.key) {
    if (sortState.value.order === 'asc') {
      order = 'desc';
    } else if (sortState.value.order === 'desc') {
      order = '';
    } else {
      order = 'asc';
    }
  }
  
  sortState.value = {
    key: column.key,
    order
  };
  
  emit('sort-change', { ...sortState.value });
};

// 计算当前偏移量
const offsetY = computed(() => {
  // 考虑前置克隆行
  const adjustedIndex = props.loop ? currentIndex.value + 1 : currentIndex.value;
  return -adjustedIndex * props.rowHeight;
});

// 逐帧滚动逻辑
const scrollFrame = () => {
  if (isPaused.value || isAdjusting.value || props.data.length === 0) {
    return;
  }

  isScrolling.value = true;
  
  // 计算下一个索引
  let nextIndex = currentIndex.value + 1;
  
  // 处理循环逻辑
  if (props.loop) {
    if (nextIndex > props.data.length) {
      // 到达克隆行后，瞬间跳转到开始位置
      isAdjusting.value = true;
      currentIndex.value = 0;
      setTimeout(() => {
        isAdjusting.value = false;
      }, 50); // 与CSS过渡时间匹配
    } else {
      currentIndex.value = nextIndex;
    }
  } else {
    // 非循环模式
    if (nextIndex < props.data.length) {
      currentIndex.value = nextIndex;
    } else {
      // 到达底部后停止
      stopAutoScroll();
      return;
    }
  }
  
  // 计算下一帧时间
  const frameTime = 1000 / (60 * currentSpeed.value);
  scrollRequestId.value = window.setTimeout(() => {
    window.requestAnimationFrame(scrollFrame);
  }, frameTime);
};

// 启动自动滚动
const startAutoScroll = () => {
  if (scrollRequestId.value || props.data.length === 0) return;
  
  scrollFrame();
};

// 停止自动滚动
const stopAutoScroll = () => {
  if (scrollRequestId.value) {
    clearTimeout(scrollRequestId.value);
    scrollRequestId.value = null;
  }
  isScrolling.value = false;
};

// 暂停/继续滚动
const togglePause = () => {
  isPaused.value = !isPaused.value;
  
  if (isPaused.value) {
    stopAutoScroll();
    emit('scroll-pause');
  } else {
    startAutoScroll();
    emit('scroll-resume');
  }
};

// 处理速度变化
const handleSpeedChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  currentSpeed.value = parseFloat(target.value);
  
  // 重新设置滚动
  if (!isPaused.value) {
    stopAutoScroll();
    startAutoScroll();
  }
};

// 鼠标事件处理
const handleMouseEnter = () => {
  if (props.pauseOnHover && !isPaused.value) {
    isPaused.value = true;
    stopAutoScroll();
  }
};

const handleMouseLeave = () => {
  if (props.pauseOnHover && isPaused.value && props.autoScroll) {
    isPaused.value = false;
    startAutoScroll();
  }
};

// 触摸事件处理
const handleTouchStart = () => {
  if (!isPaused.value) {
    isPaused.value = true;
    pausedByTouch.value = true;
    stopAutoScroll();
  }
};

const handleTouchEnd = () => {
  if (pausedByTouch.value) {
    isPaused.value = false;
    pausedByTouch.value = false;
    if (props.autoScroll) startAutoScroll();
  }
};

// 监听数据变化
watch(() => props.data.length, (newLen, oldLen) => {
  if (newLen !== oldLen) {
    // 数据变化后重置滚动位置
    currentIndex.value = 0;
    
    // 重新启动自动滚动
    if (props.autoScroll && !isPaused.value) {
      stopAutoScroll();
      startAutoScroll();
    }
  }
});

// 组件挂载
onMounted(() => {
  // 添加窗口大小变化监听
  const resizeHandler = () => {
    // 保持当前滚动位置
    currentIndex.value = Math.min(currentIndex.value, props.data.length - 1);
  };
  
  window.addEventListener('resize', resizeHandler);
  
  // 存储resize处理函数以便卸载时移除
  (window as any).__cyberInfiniteTableResizeHandler = resizeHandler;
  
  // 初始化自动滚动
  if (props.autoScroll) {
    startAutoScroll();
  }
});

// 组件卸载
onUnmounted(() => {
  // 清理自动滚动
  stopAutoScroll();
  
  // 移除事件监听
  const resizeHandler = (window as any).__cyberInfiniteTableResizeHandler;
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
    delete (window as any).__cyberInfiniteTableResizeHandler;
  }
});
</script>

<style lang="scss" scoped>
.cp-infinite-table {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  background-color: rgba(10, 10, 20, 0.8);
  border: 1px solid rgba(0, 230, 246, 0.3);
  border-radius: 4px;
  overflow: hidden;
  color: #fff;
  font-family: monospace;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 230, 246, 0.8), transparent);
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 230, 246, 0.8), transparent);
    z-index: 2;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  
  th, td {
    padding: 8px 12px;
    text-align: left;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .table-header {
    flex: none;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgba(0, 230, 246, 0.5);
    
    th {
      font-weight: bold;
      color: #00e6f6;
      text-shadow: 0 0 5px rgba(0, 230, 246, 0.5);
      user-select: none;
      
      &.sortable {
        cursor: pointer;
        
        &:hover {
          background-color: rgba(0, 230, 246, 0.1);
        }
      }
      
      .th-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .sort-icon {
        display: flex;
        flex-direction: column;
        margin-left: 4px;
        font-size: 8px;
        
        .sort-up, .sort-down {
          opacity: 0.3;
          
          &.active {
            opacity: 1;
            color: #00e6f6;
          }
        }
      }
    }
  }
  
  .table-body {
    flex: 1;
    overflow: hidden;
    position: relative;
    
    .scroll-container {
      position: relative;
    }
    
    tr {
      transition: background-color 0.2s;
      
      &:hover {
        background-color: rgba(0, 230, 246, 0.1);
      }
      
      &.selected {
        background-color: rgba(0, 230, 246, 0.2);
      }
      
      &.clone-row {
        opacity: 0.7;
        font-style: italic;
      }
    }
    
    td {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
  }
  
  .table-controls {
    flex: none;
    padding: 6px 12px;
    background-color: rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 230, 246, 0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    
    .control-button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(0, 230, 246, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background-color: rgba(0, 230, 246, 0.4);
        transform: scale(1.1);
      }
    }
    
    .control-speed {
      display: flex;
      align-items: center;
      gap: 5px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 12px;
      
      input[type="range"] {
        width: 100px;
        appearance: none;
        -webkit-appearance: none;
        height: 4px;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.2);
        outline: none;
        
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00e6f6;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        &::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #00a8b3;
        }
      }
    }
  }
  
  .table-footer {
    flex: none;
    padding: 8px 12px;
    border-top: 1px solid rgba(0, 230, 246, 0.3);
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 10;
    
    .loading-spinner {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .spinner-circle {
        width: 40px;
        height: 40px;
        border: 2px solid transparent;
        border-top-color: #00e6f6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        box-shadow: 0 0 10px rgba(0, 230, 246, 0.5);
      }
      
      .spinner-text {
        margin-top: 12px;
        color: #00e6f6;
        text-shadow: 0 0 5px rgba(0, 230, 246, 0.5);
      }
    }
  }
  
  .empty-data {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .empty-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgba(255, 255, 255, 0.5);
      
      .empty-icon {
        font-size: 24px;
        margin-bottom: 8px;
      }
      
      .empty-text {
        font-size: 14px;
      }
    }
  }
  
  .table-scanline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgba(0, 230, 246, 0.3);
    opacity: 0.5;
    z-index: 3;
    pointer-events: none;
    animation: scanline 3s linear infinite;
  }
  
  .table-glitch-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    animation: glitch-effect 10s infinite;
  }
  
  &.loading {
    .table-glitch-effect {
      animation: glitch-effect 5s infinite;
    }
  }
  
  /* 减少动画 - 可访问性优化 */
  @media (prefers-reduced-motion: reduce) {
    .table-scanline, .table-glitch-effect {
      animation: none;
    }
    
    table {
      transition: none !important;
    }
  }
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes glitch-effect {
  0%, 100% {
    opacity: 0;
  }
  92% {
    opacity: 0;
  }
  92.5% {
    opacity: 0.5;
    left: -5px;
    background-color: rgba(255, 0, 255, 0.1);
  }
  93% {
    opacity: 0;
  }
  93.5% {
    opacity: 0.5;
    left: 5px;
    background-color: rgba(0, 255, 255, 0.1);
  }
  94% {
    opacity: 0;
  }
}
</style>