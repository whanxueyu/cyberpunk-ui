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
      @scroll="handleScroll">
      <div class="scroll-container" :style="{ height: `${totalHeight}px` }">
        <table :style="{ transform: `translateY(${offsetY}px)` }">
          <colgroup>
            <col v-for="(column, index) in columns" :key="`col-${index}`" :style="getColumnStyle(column)">
          </colgroup>
          <tbody>
            <tr 
              v-for="(row, rowIndex) in visibleData" 
              :key="getRowKey(row, rowIndex)"
              :class="{ 'selected': isRowSelected(row) }"
              @click="handleRowClick(row)">
              <td 
                v-for="(column, colIndex) in columns" 
                :key="`cell-${rowIndex}-${colIndex}`">
                <slot 
                  :name="`cell-${column.key}`" 
                  :row="row" 
                  :column="column" 
                  :index="startIndex + rowIndex">
                  {{ getCellValue(row, column) }}
                </slot>
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
  name: 'CpInfiniteTable',
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
  // 虚拟滚动相关
  bufferSize: {
    type: Number,
    default: 5
  }
});

const emit = defineEmits(['row-click', 'sort-change', 'load-more']);

// 引用
const headerRef = ref<HTMLElement | null>(null);
const bodyRef = ref<HTMLElement | null>(null);

// 虚拟滚动状态
const startIndex = ref(0);
const endIndex = ref(0);
const offsetY = ref(0);
const visibleCount = ref(0);

// 排序状态
const sortState = ref<SortState>({
  key: props.defaultSort?.key || '',
  order: props.defaultSort?.order || ''
});

// 计算总高度
const totalHeight = computed(() => {
  return (props.data?.length || 0) * props.rowHeight;
});

// 计算可见数据
const visibleData = computed(() => {
  if (!props.data || props.data.length === 0) return [];
  
  // 应用排序
  let sortedData = [...props.data];
  if (sortState.value.key && sortState.value.order) {
    sortedData.sort((a, b) => {
      const aValue = a[sortState.value.key];
      const bValue = b[sortState.value.key];
      
      if (sortState.value.order === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }
  
  // 应用虚拟滚动
  return sortedData.slice(startIndex.value, endIndex.value);
});

// 获取行的唯一键
const getRowKey = (row: any, index: number): string => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row);
  } else if (typeof props.rowKey === 'string') {
    return row[props.rowKey];
  }
  return `row-${index}`;
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

// 判断行是否被选中
const isRowSelected = (row: any): boolean => {
  if (!props.selectedRows || props.selectedRows.length === 0) return false;
  
  const rowKey = getRowKey(row, props.data.indexOf(row));
  return props.selectedRows.some((selectedRow: any) => {
    const selectedRowKey = getRowKey(selectedRow, props.data.indexOf(selectedRow));
    return rowKey === selectedRowKey;
  });
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

// 处理滚动
const handleScroll = () => {
  if (!bodyRef.value) return;
  
  const scrollTop = bodyRef.value.scrollTop;
  const clientHeight = bodyRef.value.clientHeight;
  
  // 计算开始索引
  const newStartIndex = Math.max(0, Math.floor(scrollTop / props.rowHeight) - props.bufferSize);
  
  // 计算结束索引
  const newEndIndex = Math.min(
    props.data.length,
    Math.ceil((scrollTop + clientHeight) / props.rowHeight) + props.bufferSize
  );
  
  // 计算偏移量
  const newOffsetY = newStartIndex * props.rowHeight;
  
  // 更新状态
  startIndex.value = newStartIndex;
  endIndex.value = newEndIndex;
  offsetY.value = newOffsetY;
  
  // 检查是否需要加载更多
  if (newEndIndex >= props.data.length - 10 && !props.loading) {
    emit('load-more');
  }
};

// 更新可见行数
const updateVisibleCount = () => {
  if (!bodyRef.value) return;
  
  const clientHeight = bodyRef.value.clientHeight;
  visibleCount.value = Math.ceil(clientHeight / props.rowHeight) + 2 * props.bufferSize;
  
  // 初始化结束索引
  endIndex.value = Math.min(props.data.length, visibleCount.value);
};

// 同步表头和表体的滚动
const syncHeaderScroll = () => {
  if (!headerRef.value || !bodyRef.value) return;
  
  headerRef.value.scrollLeft = bodyRef.value.scrollLeft;
};

// 监听数据变化
watch(() => props.data, () => {
  // 重新计算可见区域
  nextTick(() => {
    handleScroll();
  });
}, { deep: true });

// 监听默认排序变化
watch(() => props.defaultSort, (newVal) => {
  if (newVal && newVal.key) {
    sortState.value = { ...newVal };
  }
}, { deep: true });

// 组件挂载
onMounted(() => {
  updateVisibleCount();
  
  // 添加滚动事件监听
  if (bodyRef.value) {
    bodyRef.value.addEventListener('scroll', syncHeaderScroll);
  }
  
  // 添加窗口大小变化监听
  window.addEventListener('resize', updateVisibleCount);
});

// 组件卸载
onUnmounted(() => {
  // 移除事件监听
  if (bodyRef.value) {
    bodyRef.value.removeEventListener('scroll', syncHeaderScroll);
  }
  
  window.removeEventListener('resize', updateVisibleCount);
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
    overflow: auto;
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
    }
    
    td {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
