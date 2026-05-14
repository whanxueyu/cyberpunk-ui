<template>
  <div class="cyber-tree" :class="[`theme-${theme}`, `effect-${effect}`]">
    <div 
      v-for="(node, index) in flatNodes" 
      :key="`${node.id}-${node._expanded}-${refreshKey}`"
      :class="['tree-node', { 'expanded': node._expanded, 'leaf': isLeaf(node), 'last-child': isLastChild(node, index) }]"
      :style="{ paddingLeft: `${getNodeIndent(node)}px` }"
    >
      <!-- 连接线渲染 -->
      <div class="node-connectors">
        <template v-for="level in getNodeLevel(node)" :key="level">
          <div 
            class="vertical-line" 
            :class="{ 'hidden': shouldHideVerticalLine(node, level) }"
            :style="{ left: `${getNodeIndent(node) - 12}px` }"
          ></div>
        </template>
      </div>
      
      <!-- 展开/收起控制器 -->
      <div 
        class="node-toggle" 
        v-if="!isLeaf(node)"
        @click.stop="toggleNode(node)"
        :style="{ left: `${getNodeIndent(node) - 20}px` }"
      >
        <div class="toggle-icon" :class="{ 'rotated': node._expanded }">
          <div class="icon-line vertical"></div>
          <div class="icon-line horizontal"></div>
        </div>
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
          <!-- 节点图标 -->
          <div class="node-icon">
            <div class="icon-glow"></div>
            <div class="icon-core" :class="getNodeIconClass(node)"></div>
          </div>
          
          <!-- 节点标签 -->
          <div class="node-label">
            <span class="label-text">{{ node.label }}</span>
            <div class="label-underline" v-if="node._selected"></div>
          </div>
          
          <!-- 节点状态指示器 -->
          <div class="node-status" v-if="showStatus && node.status">
            <div class="status-indicator" :class="`status-${node.status}`"></div>
          </div>
        </div>
      </div>
      
      <!-- 水平连接线 -->
      <div 
        class="horizontal-connector" 
        v-if="getNodeLevel(node) > 0"
        :style="{ left: `${getNodeIndent(node) - 12}px` }"
      ></div>
    </div>
    
    <!-- 扫描线效果 -->
    <div class="tree-scanline" v-if="showScanline"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';

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
const shouldHideVerticalLine = (node: InternalTreeNode, level: number) => {
  if (!props.showConnectors) return true;
  
  // 找到指定层级的祖先节点
  let current: InternalTreeNode | undefined = node;
  let currentLevel = getNodeLevel(node);
  
  while (current && currentLevel > level) {
    current = current._parent;
    currentLevel--;
  }
  
  // 如果是该层级的最后一个子节点，则隐藏垂直线
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
  font-family: 'Courier New', monospace;
  color: #fff;
  overflow: hidden;
  min-height: 50px;
  
  // 主题变量
  &.theme-neon {
    --tree-primary: #00e6f6;
    --tree-secondary: #ff013c;
    --tree-accent: #0f0;
    --tree-bg: rgba(10, 10, 20, 0.8);
    --tree-border: rgba(0, 230, 246, 0.3);
    --tree-connector: rgba(0, 230, 246, 0.5);
  }
  
  &.theme-hologram {
    --tree-primary: #8a2be2;
    --tree-secondary: #00ffff;
    --tree-accent: #ff1493;
    --tree-bg: rgba(30, 30, 60, 0.7);
    --tree-border: rgba(138, 43, 226, 0.4);
    --tree-connector: rgba(138, 43, 226, 0.5);
  }
  
  &.theme-terminal {
    --tree-primary: #0f0;
    --tree-secondary: #008000;
    --tree-accent: #00ff00;
    --tree-bg: rgba(0, 20, 0, 0.9);
    --tree-border: rgba(0, 255, 0, 0.3);
    --tree-connector: rgba(0, 255, 0, 0.5);
  }
  
  &.theme-matrix {
    --tree-primary: #00ff41;
    --tree-secondary: #008f11;
    --tree-accent: #003b00;
    --tree-bg: rgba(0, 10, 0, 0.95);
    --tree-border: rgba(0, 255, 65, 0.2);
    --tree-connector: rgba(0, 255, 65, 0.3);
  }
}

.tree-node {
  position: relative;
  margin: 2px 0;
  transition: all 0.3s ease;
  
  &:hover {
    .node-content {
      transform: translateX(5px);
      box-shadow: 0 0 15px var(--tree-primary);
    }
  }
}

// 连接线容器
.node-connectors {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.vertical-line {
  position: absolute;
  top: 0;
  width: 1px;
  height: 100%;
  background: var(--tree-connector);
  box-shadow: 0 0 2px var(--tree-connector);
  
  &.hidden {
    display: none;
  }
}

.horizontal-connector {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 1px;
  background: var(--tree-connector);
  box-shadow: 0 0 2px var(--tree-connector);
  transform: translateY(-50%);
}

.node-toggle {
  position: absolute;
  top: 50%;  /* Removed: left: -20px; */
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
  z-index: 3;
  
  .toggle-icon {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    
    &.rotated {
      transform: rotate(45deg);
    }
    
    .icon-line {
      position: absolute;
      background-color: var(--tree-primary);
      box-shadow: 0 0 5px var(--tree-primary);
      
      &.vertical {
        width: 2px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
      
      &.horizontal {
        height: 2px;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
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
  padding: 8px 12px;
  background: var(--tree-bg);
  border: 1px solid var(--tree-border);
  border-radius: 4px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &.selected {
    background: rgba(0, 230, 246, 0.2);
    border-color: var(--tree-primary);
    box-shadow: 0 0 10px var(--tree-primary);
  }
}

.node-icon {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  
  .icon-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--tree-primary) 0%, transparent 70%);
    opacity: 0.3;
    animation: icon-glow 2s ease-in-out infinite alternate;
  }
  
  .icon-core {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    
    // 文件夹图标
    &.icon-folder,
    &.icon-folder-open {
      &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 4px;
        height: 8px;
        border: 1px solid var(--tree-primary);
        border-bottom: none;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        background: rgba(0, 230, 246, 0.1);
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border: 1px solid var(--tree-primary);
        border-top: none;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        background: rgba(0, 230, 246, 0.05);
      }
    }
    
    &.icon-folder-open::before {
      transform: perspective(10px) rotateX(30deg);
      transform-origin: top;
    }
    
    // 文件图标
    &.icon-file {
      &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 6px;
        bottom: 2px;
        border: 1px solid var(--tree-primary);
        border-radius: 2px;
        background: rgba(0, 230, 246, 0.05);
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 2px;
        right: 2px;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-top: 6px solid var(--tree-primary);
        transform: rotate(20deg);
      }
    }
  }
}

.node-label {
  position: relative;
  flex: 1;
  
  .label-text {
    letter-spacing: 0.5px;
    text-shadow: 0 0 5px var(--tree-primary);
  }
  
  .label-underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, var(--tree-primary), transparent);
    animation: underline-glow 1s ease-in-out infinite alternate;
  }
}

.node-status {
  margin-left: 10px;
  
  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    box-shadow: 0 0 5px currentColor;
    
    &.status-online {
      background-color: var(--tree-accent);
      animation: status-pulse 1.5s ease-in-out infinite;
    }
    
    &.status-offline { background-color: #666; }
    &.status-warning {
      background-color: #ff9900;
      animation: status-blink 1s ease-in-out infinite;
    }
    &.status-error {
      background-color: var(--tree-secondary);
      animation: status-flash 0.5s ease-in-out infinite;
    }
  }
}

.tree-scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--tree-primary), transparent);
  box-shadow: 0 0 10px var(--tree-primary);
  z-index: 10;
  animation: tree-scan 3s linear infinite;
}

// 动画定义
@keyframes icon-glow {
  0% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.2); }
}

@keyframes underline-glow {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes status-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

@keyframes status-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes status-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes tree-scan {
  0% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
</style>