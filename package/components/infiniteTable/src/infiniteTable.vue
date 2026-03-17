<template>
  <div class="cyber-infinite-table" :class="[`theme-${theme}`, `scroll-${scrollType}`]">
    <!-- 固定表头 -->
    <div class="table-header" :style="{ backgroundColor: getHeaderBgColor() }">
      <div class="header-row">
        <div 
          v-for="(column, index) in columns" 
          :key="column.field || index"
          class="header-cell"
          :style="{ 
            width: getColumnWidth(index),
            minWidth: column.minWidth || '100px',
            textAlign: column.align || 'left'
          }"
        >
          <div class="header-content" :style="{ justifyContent: getTextAlign(column.align || 'left') }">
            <span class="header-text">{{ column.title }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 滚动内容区 - 固定高度显示固定行数 -->
    <div 
      class="table-body" 
      ref="bodyRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="rows-container" :style="{ height: bodyHeight + 'px' }">
        <transition-group name="scroll-list">
          <div
            class="table-row"
            v-for="row in visibleRows"
            :key="row.key"
            :style="{
              height: rowHeight + 'px',
              lineHeight: rowHeight + 'px',
              backgroundColor: getRowBackgroundColor(row.index)
            }"
          >
            <div 
              v-for="(column, colIndex) in columns" 
              :key="column.field || colIndex"
              class="table-cell"
              :style="{ 
                width: getColumnWidth(colIndex),
                minWidth: column.minWidth || '100px',
                justifyContent: getTextAlign(column.align || 'left')
              }"
            >
              <slot :name="column.field" :row="row.data" :column="column">
                <span class="cell-text">{{ getCellValue(row.data, column.field) }}</span>
              </slot>
            </div>
            
            <!-- 行扫描线效果 -->
            <div class="row-scanline" v-if="showScanline"></div>
          </div>
        </transition-group>
      </div>
    </div>
    
    <!-- 边框装饰 -->
    <div class="table-border-effect"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue';

defineOptions({
  name: 'CyberInfiniteTable',
})

interface TableColumn {
  title: string;
  field: string;
  width?: string;
  minWidth?: string;
  align?: 'left' | 'center' | 'right';
}

interface TableRow {
  [key: string]: any;
  _uniqueKey?: string;
}

const props = withDefaults(defineProps<{
  data?: TableRow[];
  columns?: TableColumn[];
  theme?: 'neon' | 'hologram' | 'terminal' | 'matrix';
  rowHeight?: number;
  bufferSize?: number;
  scrollType?: 'single' | 'page';
  showScanline?: boolean;
  loadMore?: () => Promise<void>;
  remoteMethod?: (params: { page: number; size: number }) => Promise<{ data: TableRow[]; total: number; hasMore: boolean }>;
  autoScroll?: boolean; // 是否自动滚动
  rowNum?: number; // 显示的行数
  waitTime?: number; // 滚动等待时间（毫秒）
  hoverPause?: boolean; // 鼠标悬停暂停
}>(), {
  data: () => [],
  columns: () => [],
  theme: 'neon',
  rowHeight: 40,
  bufferSize: 5,
  scrollType: 'single',
  showScanline: true,
  autoScroll: true,
  rowNum: 5,
  waitTime: 2000,
  hoverPause: true
});

// DOM 引用
const bodyRef = ref<HTMLElement | null>(null);

// 状态管理
const isLoading = ref(false);
const hasMore = ref(true);
const currentPage = ref(1);
const animationIndex = ref(0); // 动画索引
const isPaused = ref(false); // 是否暂停
const updater = ref(0); // 更新计数器

// 内部数据管理
const internalData = reactive<TableRow[]>([]);

// 同步外部数据
if (props.data.length > 0) {
  internalData.splice(0, internalData.length, ...props.data);
}

// 生成唯一键
let uniqueIdCounter = 0;
const generateUniqueKey = (): string => {
  return `row-${++uniqueIdCounter}-${Date.now()}`;
};

// 计算表格总高度
const tableHeight = computed(() => {
  return props.rowNum * props.rowHeight;
});

// 内容区域高度
const bodyHeight = computed(() => {
  return tableHeight.value;
});

// 计算可见区域的数据（使用类似 DataV 的逻辑）
const visibleRows = computed(() => {
  const dataLength = internalData.length;
  const displayNum = props.rowNum;
  
  if (dataLength === 0) return [];
  
  interface VisibleRow {
    key: string;
    data: TableRow;
    index: number;
  }
  
  // 如果数据量小于等于显示行数，直接返回
  if (dataLength <= displayNum) {
    return internalData.map((row, i) => ({
      key: row._uniqueKey || generateUniqueKey(),
      data: row,
      index: i
    }));
  }
  
  // 复制数据以实现无缝滚动
  let rowsData = [...internalData];
  if (dataLength > displayNum && dataLength < 2 * displayNum) {
    rowsData = [...rowsData, ...rowsData];
  }
  
  // 添加唯一键和索引
  rowsData = rowsData.map((d, i) => ({
    key: d._uniqueKey || generateUniqueKey(),
    data: d,
    index: i,
    scroll: i
  }));
  
  // 根据动画索引切片 - 始终显示完整的 rowNum 行
  let rows = rowsData.slice(animationIndex.value);
  rows.push(...rowsData.slice(0, animationIndex.value));
  
  // 只取需要显示的行数（不额外多加）
  const visibleRows = rows.slice(0, displayNum);
  
  return visibleRows;
});

// 获取列宽
const getColumnWidth = (index: number) => {
  if (props.columns[index]?.width) {
    return props.columns[index].width;
  }
  return 'auto';
};

// 获取文本对齐方式
const getTextAlign = (align: string) => {
  if (align === 'center') return 'center';
  if (align === 'right') return 'flex-end';
  return 'flex-start';
};

// 获取表头背景色
const getHeaderBgColor = () => {
  if (props.theme === 'neon') return 'rgba(0, 230, 246, 0.15)';
  if (props.theme === 'hologram') return 'rgba(138, 43, 226, 0.2)';
  if (props.theme === 'terminal') return 'rgba(0, 255, 0, 0.15)';
  if (props.theme === 'matrix') return 'rgba(0, 255, 65, 0.15)';
  return 'rgba(0, 230, 246, 0.15)';
};

// 获取行背景色
const getRowBackgroundColor = (index: number) => {
  const actualIndex = (animationIndex.value + index) % internalData.length;
  if (actualIndex % 2 === 0) {
    return 'var(--table-row-bg)';
  }
  return 'var(--table-row-hover)';
};

// 获取单元格值（支持嵌套字段）
const getCellValue = (row: TableRow, field: string) => {
  const keys = field.split('.');
  let value: any = row;
  for (const key of keys) {
    value = value?.[key];
  }
  return value ?? '';
};

// 加载更多数据
const loadMoreData = async () => {
  if (isLoading.value || !hasMore.value) return;
  
  isLoading.value = true;
  try {
    if (props.remoteMethod) {
      const result = await props.remoteMethod({
        page: currentPage.value,
        size: props.bufferSize * 10
      });
      
      if (result.data && result.data.length > 0) {
        // 为新数据添加唯一键
        const newData = result.data.map((row) => {
          if (!row._uniqueKey) {
            row._uniqueKey = generateUniqueKey();
          }
          return row;
        });
        
        if (currentPage.value === 1) {
          // 第一页：替换所有数据
          internalData.splice(0, internalData.length, ...newData);
        } else {
          // 后续页：追加数据
          internalData.push(...newData);
        }
        
        // 同步到 props.data（如果需要）
        if (props.data) {
          props.data.splice(0, props.data.length, ...internalData);
        }
      }
      
      hasMore.value = result.hasMore ?? false;
      currentPage.value++;
    } else if (props.loadMore) {
      await props.loadMore();
    }
  } catch (error) {
    console.error('Failed to load more data:', error);
    hasMore.value = false;
  } finally {
    isLoading.value = false;
  }
};

// 开始自动滚动（使用 CSS 动画实现平滑效果）
const startAutoScroll = async () => {
  if (!props.autoScroll || isPaused.value) return;
  
  const dataLength = internalData.length;
  const displayNum = props.rowNum;
  
  if (dataLength <= displayNum) return;
  
  // 等待初始时间
  await new Promise(resolve => setTimeout(resolve, props.waitTime));
  if (isPaused.value) return;
  
  const animate = async () => {
    if (isPaused.value) return;
    
    const currentUpdater = updater.value;
    
    // 根据 scrollType 决定滚动距离
    const scrollDistance = props.scrollType === 'page' ? displayNum : 1;
    
    // 移动指定行数
    animationIndex.value = (animationIndex.value + scrollDistance) % dataLength;
    
    // 等待动画完成（0.3s 或 0.5s）
    const animDuration = props.scrollType === 'page' ? 500 : 300;
    await new Promise(resolve => setTimeout(resolve, animDuration));
    if (updater.value !== currentUpdater || isPaused.value) return;
    
    // 动画完成后，静止等待 waitTime 时长
    await new Promise(resolve => setTimeout(resolve, props.waitTime));
    if (updater.value !== currentUpdater || isPaused.value) return;
    
    // 继续下一轮
    animate();
  };
  
  animate();
};

// 停止自动滚动
const stopAnimation = () => {
  updater.value = (updater.value + 1) % 999999;
};

// 鼠标进入处理
const handleMouseEnter = () => {
  if (props.hoverPause) {
    isPaused.value = true;
    stopAnimation();
  }
};

// 鼠标离开处理
const handleMouseLeave = () => {
  if (props.hoverPause) {
    isPaused.value = false;
    startAutoScroll();
  }
};

// 初始化
onMounted(() => {
  // 如果有 remoteMethod 且没有数据，加载第一页
  if (props.remoteMethod && internalData.length === 0) {
    loadMoreData();
  }
  
  // 如果启用自动滚动，启动动画
  if (props.autoScroll) {
    startAutoScroll();
  }
});
</script>

<style lang="scss" scoped>
.cyber-infinite-table {
  position: relative;
  font-family: 'Courier New', monospace;
  color: #fff;
  background: rgba(10, 10, 20, 0.95);
  border: 1px solid var(--table-border);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  width: max-content;
  
  &.theme-neon {
    // 夜之城霓虹 - 赛博朋克 2077 经典配色
    --table-primary: #fcee0a;     // 赛博黄
    --table-secondary: #ff003c;   // 赛博红
    --table-accent: #00f0ff;      // 科技青
    --table-bg: rgba(10, 10, 15, 0.98);
    --table-border: rgba(252, 238, 10, 0.5);
    --table-row-bg: rgba(252, 238, 10, 0.06);
    --table-row-hover: rgba(252, 238, 10, 0.15);
    --table-header-bg: rgba(252, 238, 10, 0.2);
  }
  
  &.theme-hologram {
    // 荒坂集团 - 紫色企业科技感
    --table-primary: #a855f7;     // 企业紫
    --table-secondary: #f43f5e;   // 警示红
    --table-accent: #06b6d4;      // 数据青
    --table-bg: rgba(15, 10, 25, 0.97);
    --table-border: rgba(168, 85, 247, 0.5);
    --table-row-bg: rgba(168, 85, 247, 0.08);
    --table-row-hover: rgba(168, 85, 247, 0.18);
    --table-header-bg: rgba(168, 85, 247, 0.25);
  }
  
  &.theme-terminal {
    // 军用科技 - 战术终端界面
    --table-primary: #22c55e;     // 战术绿
    --table-secondary: #dc2626;   // 警戒红
    --table-accent: #fbbf24;      // 警告黄
    --table-bg: rgba(5, 15, 5, 0.98);
    --table-border: rgba(34, 197, 94, 0.5);
    --table-row-bg: rgba(34, 197, 94, 0.08);
    --table-row-hover: rgba(34, 197, 94, 0.18);
    --table-header-bg: rgba(34, 197, 94, 0.25);
  }
  
  &.theme-matrix {
    // 网络黑客 - 代码深渊
    --table-primary: #fbbf24;     // 琥珀黄
    --table-secondary: #ef4444;   // 危险红
    --table-accent: #10b981;      // 数据绿
    --table-bg: rgba(0, 5, 2, 0.99);
    --table-border: rgba(251, 191, 36, 0.3);
    --table-row-bg: rgba(251, 191, 36, 0.03);
    --table-row-hover: rgba(251, 191, 36, 0.08);
    --table-header-bg: rgba(251, 191, 36, 0.15);
  }
}

.table-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--table-border);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  display: flex;
  align-items: center;
  
  .header-row {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .header-cell {
    flex-shrink: 0;
    flex-grow: 0;
    padding: 12px 16px;
    border-right: 1px solid var(--table-border);
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    height: 40px; // 固定表头高度
    
    &:last-child {
      border-right: none;
    }
  }
  
  .header-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start; // 默认左对齐
    height: 100%;
    width: 100%;
    
    .header-text {
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-shadow: 0 0 5px var(--table-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.table-body {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.rows-container {
  position: relative;
  width: 100%;
}

// scrollType 为 page 时的样式 - 更平滑的过渡
.scroll-page {
  .table-row {
    transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
  }
  
  // 进入和离开动画使用更长的时间
  .scroll-list-enter-active,
  .scroll-list-leave-active {
    transition: all 0.5s ease;
  }
}

// 滚动动画效果 - 根据 scrollType 调整时间
.scroll-list-enter-active,
.scroll-list-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  left: 0;
  right: 0;
}

// page 模式下使用更长的动画时间
.scroll-page .scroll-list-enter-active,
.scroll-page .scroll-list-leave-active {
  transition: all 0.5s ease;
}

.scroll-list-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.scroll-list-leave-to {
  opacity: 0;
  transform: translateY(-100%);
  height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  border-width: 0 !important;
}

.table-row {
  display: flex;
  align-items: center;
  background: var(--table-row-bg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  will-change: transform, opacity;
  position: relative;
  
  &:hover {
    background: var(--table-row-hover);
    box-shadow: 0 0 20px rgba(0, 230, 246, 0.2);
    transform: translateX(5px);
    
    .cell-text {
      text-shadow: 0 0 8px var(--table-primary);
    }
  }
}

// page 模式下的过渡效果（由 scroll-list 动画控制）
.table-cell {
  flex-shrink: 0;
  flex-grow: 0;
  padding: 8px 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  
  &:last-child {
    border-right: none;
  }
  
  .cell-text {
    font-size: 13px;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.row-scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 230, 246, 0.03) 50%,
    transparent 100%
  );
  pointer-events: none;
  animation: row-scan 3s linear infinite;
}

.table-border-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid var(--table-border);
  pointer-events: none;
  z-index: 20;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      135deg,
      var(--table-primary) 0%,
      transparent 25%,
      transparent 75%,
      var(--table-secondary) 100%
    );
    opacity: 0.1;
    animation: border-glow 3s ease-in-out infinite;
  }
}

@keyframes row-scan {
  0% { 
    background-position: 0 -100%;
    opacity: 0;
  }
  50% { opacity: 1; }
  100% { 
    background-position: 0 100%;
    opacity: 0;
  }
}

@keyframes border-glow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}
</style>
