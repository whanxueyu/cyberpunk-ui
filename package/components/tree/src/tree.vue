<template>
  <div class="cyber-tree" :class="[`theme-${theme}`]">
    <div 
      v-for="(node, index) in flatNodes" 
      :key="`${node.id}-${node._expanded}-${refreshKey}`"
      :class="['tree-node', { 'expanded': node._expanded, 'leaf': isLeaf(node), 'last-child': isLastChild(node, index) }]"
      :style="{ paddingLeft: `${getNodeIndent(node)}px` }"
    >
      <!-- 连接线(多层级) -->
      <div 
        class="tree-connectors" 
        v-if="showConnectors && getNodeLevel(node) > 0"
      >
        <!-- 祖先层级的垂直线(不包括当前节点的父级) -->
        <template v-for="level in getNodeLevel(node) - 1" :key="level">
          <div 
            class="ancestor-line" 
            :class="{
              'ancestor-hidden': isAncestorLastChild(node, level)
            }"
            :style="{ left: `${level * indent}px` }"
          ></div>
        </template>
        <!-- 当前节点父级的垂直线(从上方延伸到当前节点中部) -->
        <div 
          class="parent-line"
          :style="{ left: `${(getNodeLevel(node) - 1) * indent}px` }"
        ></div>
        <!-- 当前节点的水平连接线(从父级垂直线延伸到图标前) -->
        <div 
          class="horizontal-line" 
          :style="{
            left: `${(getNodeLevel(node) - 1) * indent}px`,
            width: `${indent - 8}px`
          }"
        ></div>
      </div>
      
      <!-- 节点内容 -->
      <div 
        class="node-content-wrapper"
        @click.stop="handleContentClick(node)"
      >
        <div 
          class="node-content"
          :class="{ 'selected': node._selected }"
        >
          <!-- 展开/收起图标 -->
          <div class="node-expand-icon" v-if="!isLeaf(node)">
            <span class="expand-arrow" :class="{ 'rotated': node._expanded }">▶</span>
          </div>
          
          <!-- 节点标签 -->
          <div class="node-label">
            <span class="label-text">{{ node.label }}</span>
          </div>
          
          <!-- 节点状态指示器 -->
          <div class="node-status" v-if="showStatus && node.status">
            <div class="status-indicator" :class="`status-${node.status}`"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 扫描线效果 -->
    <div class="tree-scanline" v-if="showScanline"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

defineOptions({
  name: 'CyberTree',
})

interface TreeNode {
  id: string | number;
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
  selected?: boolean;
  status?: 'online' | 'offline' | 'warning' | 'error';
  icon?: string;
  [key: string]: any;
}

interface InternalTreeNode extends TreeNode {
  _expanded: boolean;
  _selected: boolean;
  _level: number;
  _parent?: InternalTreeNode;
  _isLastChild: boolean;
}

const props = withDefaults(defineProps<{
  data?: TreeNode[];
  theme?: 'neon' | 'hologram' | 'terminal' | 'matrix';
  effect?: 'glitch' | 'scan' | 'pulse' | 'static';
  showConnectors?: boolean;
  showStatus?: boolean;
  showScanline?: boolean;
  indent?: number;
  defaultExpandAll?: boolean;
  expandOnClick?: boolean;
  multiple?: boolean;
}>(), {
  data: () => [],
  theme: 'neon',
  effect: 'scan',
  showConnectors: true,
  showStatus: true,
  showScanline: true,
  indent: 24,
  defaultExpandAll: false,
  expandOnClick: true,
  multiple: false
});

const emit = defineEmits<{
  (e: 'node-click', node: TreeNode): void;
  (e: 'node-expand', node: TreeNode): void;
  (e: 'node-collapse', node: TreeNode): void;
  (e: 'select-change', selectedNodes: TreeNode[]): void;
}>()

// 状态管理
const internalData = ref<InternalTreeNode[]>([]);
const selectedNodes = ref<InternalTreeNode[]>([]);
const refreshKey = ref(0);

// 扁平化节点数据
const flatNodes = computed(() => {
  const result: InternalTreeNode[] = [];
  
  const flatten = (nodes: InternalTreeNode[], level: number = 0, parent?: InternalTreeNode) => {
    nodes.forEach((node, index) => {
      // 设置内部属性
      node._level = level;
      node._parent = parent;
      node._expanded = node.expanded ?? (props.defaultExpandAll || level === 0);
      node._selected = node.selected ?? false;
      node._isLastChild = index === nodes.length - 1;
      
      result.push(node);
      
      // 递归处理子节点
      if (node._expanded && node.children && node.children.length > 0) {
        flatten(node.children as InternalTreeNode[], level + 1, node);
      }
    });
  };
  
  flatten(internalData.value);
  return result;
});

// 初始化数据
const initializeData = () => {
  const convertNode = (node: TreeNode, level: number = 0): InternalTreeNode => {
    const internalNode: InternalTreeNode = {
      ...node,
      _expanded: node.expanded ?? (props.defaultExpandAll || level === 0),
      _selected: node.selected ?? false,
      _level: level,
      _parent: undefined,
      _isLastChild: false
    };
    
    if (node.children && node.children.length > 0) {
      internalNode.children = node.children.map(child => convertNode(child, level + 1));
    }
    
    return internalNode;
  };
  
  internalData.value = props.data.map(node => convertNode(node));
  selectedNodes.value = [];
};

// 辅助方法
const isLeaf = (node: InternalTreeNode) => {
  return !node.children || node.children.length === 0;
};

const getNodeLevel = (node: InternalTreeNode) => {
  return node._level ?? 0;
};

const getNodeIndent = (node: InternalTreeNode) => {
  return getNodeLevel(node) * props.indent;
};

const isLastChild = (node: InternalTreeNode, index: number) => {
  return node._isLastChild;
};

// 连接线逻辑
const isAncestorLastChild = (node: InternalTreeNode, level: number): boolean => {
  if (!props.showConnectors) return true;
  
  // 找到指定层级的祖先节点
  let current: InternalTreeNode | undefined = node;
  let currentLevel = getNodeLevel(node);
  
  while (current && currentLevel > level) {
    current = current._parent;
    currentLevel--;
  }
  
  // 如果该祖先节点是其父节点的最后一个子节点，则隐藏垂直线
  return current?._isLastChild ?? false;
};

// 节点操作
const toggleNode = (node: InternalTreeNode) => {
  node._expanded = !node._expanded;
  node.expanded = node._expanded;
  
  if (node._expanded) {
    emit('node-expand', node);
  } else {
    emit('node-collapse', node);
  }
  
  forceUpdate();
};

const handleContentClick = (node: InternalTreeNode) => {
  // 处理选中逻辑
  if (props.multiple) {
    // 多选模式
    node._selected = !node._selected;
    node.selected = node._selected;
  } else {
    // 单选模式
    if (node._selected) {
      // 已选中则取消选中
      node._selected = false;
      node.selected = false;
    } else {
      // 未选中则选中，并取消其他选中项
      selectedNodes.value.forEach(selectedNode => {
        selectedNode._selected = false;
        selectedNode.selected = false;
      });
      node._selected = true;
      node.selected = true;
    }
  }
  
  // 更新选中节点数组
  updateSelectedNodes();
  
  emit('select-change', selectedNodes.value);
  emit('node-click', node);
  
  // 点击展开逻辑
  if (props.expandOnClick && !isLeaf(node)) {
    toggleNode(node);
  }
};

const updateSelectedNodes = () => {
  selectedNodes.value = flatNodes.value.filter(node => node._selected);
};

const getNodeIconClass = (node: InternalTreeNode) => {
  if (node.icon) return node.icon;
  if (isLeaf(node)) return 'icon-file';
  if (node._expanded) return 'icon-folder-open';
  return 'icon-folder';
};

const forceUpdate = () => {
  refreshKey.value++;
};

// 生命周期
onMounted(() => {
  initializeData();
});

watch(() => props.data, () => {
  initializeData();
}, { deep: true });

// 暴露方法
defineExpose({
  getSelectedNodes: () => selectedNodes.value,
  clearSelection: () => {
    selectedNodes.value.forEach(node => {
      node._selected = false;
      node.selected = false;
    });
    selectedNodes.value = [];
    forceUpdate();
  }
});
</script>

<style lang="scss" scoped>
.cyber-tree {
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  overflow: hidden;
  min-height: 50px;
  
  // 主题配色变量
  &.theme-neon {
    --tree-primary: #00b4d8;
    --tree-secondary: #ff013c;
    --tree-accent: #00ff88;
    --tree-expand-icon: #00b4d8;
  }
  
  &.theme-hologram {
    --tree-primary: #8a2be2;
    --tree-secondary: #00ffff;
    --tree-accent: #ff1493;
    --tree-expand-icon: #8a2be2;
  }
  
  &.theme-terminal {
    --tree-primary: #2ecc71;
    --tree-secondary: #e74c3c;
    --tree-accent: #00ff00;
    --tree-expand-icon: #2ecc71;
  }
  
  &.theme-matrix {
    --tree-primary: #00ff41;
    --tree-secondary: #008f11;
    --tree-accent: #00ff41;
    --tree-expand-icon: #00ff41;
  }
    // 默认暗色主题的 CSS 变量
  --tree-bg-hover: rgba(204, 204, 204, 0.178);
  --tree-border-hover: rgba(77, 77, 77, 0.1);
  --tree-border-selected: var(--tree-primary);
  --tree-connector: rgba(128, 128, 128, 0.4);
  --tree-connector-hover: rgba(128, 128, 128, 0.6);
  --tree-selected-bg: rgba(0, 230, 246, 0.08);
}

.tree-node {
  position: relative;
  margin: 1px 0;
  transition: all 0.2s ease;
}

// 连接线容器
.tree-connectors {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

// 祖先垂直线
.ancestor-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--tree-connector);
  
  // 最后一个子节点：只显示上半部分
  &.ancestor-hidden {
    bottom: 50%;
  }
}

// 父级垂直线
.parent-line {
  position: absolute;
  top: 0;
  bottom: 50%;
  width: 1px;
  background: var(--tree-connector);
}

// 水平连接线
.horizontal-line {
  position: absolute;
  top: 50%;
  height: 1px;
  background: var(--tree-connector);
  transform: translateY(-50%);
}

.node-content-wrapper {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

.node-content {
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--tree-border);
  border-radius: 4px;
  transition: all 0.15s ease;
  
  &:hover {
    background: var(--tree-bg-hover);
    border-color: var(--tree-border-hover);
    
    .ancestor-line {
      background: var(--tree-connector-hover);
    }
    
    .horizontal-line {
      background: var(--tree-connector-hover);
    }
  }
  
  &.selected {
    background: var(--tree-selected-bg);
    border-color: var(--tree-border-selected);
  }
}

.node-expand-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  .expand-arrow {
    font-size: 10px;
    color: var(--tree-expand-icon);
    transition: transform 0.2s ease;
    display: inline-block;
    
    &.rotated {
      transform: rotate(90deg);
    }
  }
}

.node-label {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  
  .label-text {
    letter-spacing: 0.2px;
  }
}

.node-status {
  margin-left: 8px;
  flex-shrink: 0;
  
  .status-indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    
    &.status-online {
      background-color: var(--tree-accent);
    }
    
    &.status-offline { 
      background-color: #999; 
    }
    
    &.status-warning {
      background-color: #f39c12;
    }
    
    &.status-error {
      background-color: var(--tree-secondary);
    }
  }
}

.tree-scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--tree-primary), transparent);
  opacity: 0.15;
  z-index: 10;
  animation: tree-scan 5s linear infinite;
  pointer-events: none;
}

// 动画定义
@keyframes tree-scan {
  0% { top: 0; opacity: 0; }
  10% { opacity: 0.15; }
  90% { opacity: 0.15; }
  100% { top: 100%; opacity: 0; }
}
</style>