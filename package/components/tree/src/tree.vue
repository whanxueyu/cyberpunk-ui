<template>
  <div
    class="cp-cyber-tree cyber-tree"
    :class="[`theme-${theme}`, `effect-${effect}`]"
  >
    <div
      v-for="node in flatNodes"
      :key="`${node.id}-${node._expanded}-${node._selected}-${refreshKey}`"
      class="tree-node"
      :class="{
        expanded: node._expanded,
        leaf: isLeaf(node),
        'last-child': node._isLastChild,
      }"
      :style="{ paddingLeft: `${getNodeIndent(node)}px` }"
    >
      <div
        v-if="showConnectors && getNodeLevel(node) > 0"
        class="tree-connectors"
        aria-hidden="true"
      >
        <span
          v-for="level in getAncestorLevels(node)"
          :key="level"
          class="ancestor-line"
          :class="{ hidden: isAncestorLastChild(node, level) }"
          :style="{ left: `${level * indent + connectorOffset}px` }"
        ></span>

        <span
          class="parent-line"
          :class="{ 'is-last': node._isLastChild }"
          :style="{ left: `${(getNodeLevel(node) - 1) * indent + connectorOffset}px` }"
        ></span>

        <span
          class="horizontal-line"
          :style="{
            left: `${(getNodeLevel(node) - 1) * indent + connectorOffset}px`,
            width: `${indent - connectorOffset + 20}px`,
          }"
        ></span>

        <span
          class="connector-joint"
          :style="{ left: `${(getNodeLevel(node) - 1) * indent + connectorOffset}px` }"
        ></span>
      </div>

      <div
        class="node-content-wrapper"
        @click.stop="handleContentClick(node)"
      >
        <div
          class="node-content"
          :class="{ selected: node._selected }"
        >
          <button
            v-if="!isLeaf(node)"
            class="node-expand-icon"
            type="button"
            :aria-expanded="node._expanded"
            :aria-label="node._expanded ? 'Collapse node' : 'Expand node'"
            @click.stop="toggleNode(node)"
          >
            <span class="expand-arrow" :class="{ rotated: node._expanded }"></span>
          </button>
          <span v-else class="node-expand-placeholder"></span>

          <span class="node-icon" :class="getNodeIconClass(node)">
            <span class="icon-core"></span>
          </span>

          <span class="node-label">
            <span class="label-text">{{ node.label }}</span>
          </span>

          <span
            v-if="showStatus && node.status"
            class="node-status"
            :title="statusText(node.status)"
          >
            <span class="status-indicator" :class="`status-${node.status}`"></span>
            <span class="status-text">{{ node.status }}</span>
          </span>
        </div>
      </div>
    </div>

    <div v-if="flatNodes.length === 0" class="tree-empty">
      No data
    </div>

    <div class="tree-scanline" v-if="showScanline && effect !== 'static'"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { TreeNode, InternalTreeNode } from './instance'

defineOptions({
  name: 'CyberTree',
})

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
  indent: 30,
  defaultExpandAll: false,
  expandOnClick: true,
  multiple: false,
});

const emit = defineEmits<{
  (e: 'node-click', node: TreeNode): void;
  (e: 'node-expand', node: TreeNode): void;
  (e: 'node-collapse', node: TreeNode): void;
  (e: 'select-change', selectedNodes: TreeNode[]): void;
}>()

const internalData = ref<InternalTreeNode[]>([]);
const selectedNodes = ref<InternalTreeNode[]>([]);
const refreshKey = ref(0);
const connectorOffset = 14;

const flatNodes = computed(() => {
  const result: InternalTreeNode[] = [];

  const flatten = (nodes: InternalTreeNode[], level = 0, parent?: InternalTreeNode) => {
    nodes.forEach((node, index) => {
      node._level = level;
      node._parent = parent;
      node._expanded = node.expanded ?? (props.defaultExpandAll || level === 0);
      node._selected = node.selected ?? false;
      node._isLastChild = index === nodes.length - 1;

      result.push(node);

      if (node._expanded && node.children && node.children.length > 0) {
        flatten(node.children as InternalTreeNode[], level + 1, node);
      }
    });
  };

  flatten(internalData.value);
  return result;
});

const initializeData = () => {
  const convertNode = (node: TreeNode, level = 0): InternalTreeNode => {
    const internalNode: InternalTreeNode = {
      ...node,
      _expanded: node.expanded ?? (props.defaultExpandAll || level === 0),
      _selected: node.selected ?? false,
      _level: level,
      _parent: undefined,
      _isLastChild: false,
    };

    if (node.children && node.children.length > 0) {
      internalNode.children = node.children.map(child => convertNode(child, level + 1));
    }

    return internalNode;
  };

  internalData.value = props.data.map(node => convertNode(node));
  selectedNodes.value = flatNodes.value.filter(node => node._selected);
};

const isLeaf = (node: InternalTreeNode) => {
  return !node.children || node.children.length === 0;
};

const getNodeLevel = (node: InternalTreeNode) => {
  return node._level ?? 0;
};

const getNodeIndent = (node: InternalTreeNode) => {
  return getNodeLevel(node) * props.indent;
};

const getAncestorLevels = (node: InternalTreeNode) => {
  const level = getNodeLevel(node);
  return Array.from({ length: Math.max(level - 1, 0) }, (_, index) => index);
};

const isAncestorLastChild = (node: InternalTreeNode, level: number): boolean => {
  let current: InternalTreeNode | undefined = node;
  let currentLevel = getNodeLevel(node);

  while (current && currentLevel > level) {
    current = current._parent;
    currentLevel--;
  }

  return current?._isLastChild ?? false;
};

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
  if (props.multiple) {
    node._selected = !node._selected;
    node.selected = node._selected;
  } else if (node._selected) {
    node._selected = false;
    node.selected = false;
  } else {
    selectedNodes.value.forEach(selectedNode => {
      selectedNode._selected = false;
      selectedNode.selected = false;
    });
    node._selected = true;
    node.selected = true;
  }

  updateSelectedNodes();
  emit('select-change', selectedNodes.value);
  emit('node-click', node);

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
  return node._expanded ? 'icon-folder-open' : 'icon-folder';
};

const statusText = (status?: TreeNode['status']) => {
  const map = {
    online: 'Online',
    offline: 'Offline',
    warning: 'Warning',
    error: 'Error',
  };

  return status ? map[status] : '';
};

const forceUpdate = () => {
  refreshKey.value++;
};

watch(() => props.data, () => {
  initializeData();
}, { deep: true, immediate: true });

defineExpose({
  getSelectedNodes: () => selectedNodes.value,
  clearSelection: () => {
    selectedNodes.value.forEach(node => {
      node._selected = false;
      node.selected = false;
    });
    selectedNodes.value = [];
    forceUpdate();
  },
});
</script>

<style lang="scss" scoped>
.cp-cyber-tree {
  position: relative;
  overflow: hidden;
  min-height: 50px;
  padding: 10px;
  color: var(--tree-text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 14px;

  --tree-primary: #00e6f6;
  --tree-secondary: #ff2f70;
  --tree-accent: #47f2c6;
  --tree-warning: #f7da66;
  --tree-muted: rgba(210, 236, 255, 0.55);
  --tree-text: rgba(245, 252, 255, 0.92);
  --tree-bg: rgba(8, 16, 28, 0.58);
  --tree-bg-hover: rgba(0, 230, 246, 0.12);
  --tree-bg-selected: rgba(0, 230, 246, 0.18);
  --tree-border: rgba(0, 230, 246, 0.24);
  --tree-border-hover: rgba(0, 230, 246, 0.62);
  --tree-connector: rgba(125, 224, 255, 0.68);
  --tree-connector-glow: rgba(0, 230, 246, 0.35);
  --tree-shadow: rgba(0, 230, 246, 0.22);

  &.theme-hologram {
    --tree-primary: #b78cff;
    --tree-secondary: #ff4fd8;
    --tree-accent: #71f6ff;
    --tree-bg-hover: rgba(183, 140, 255, 0.14);
    --tree-bg-selected: rgba(183, 140, 255, 0.22);
    --tree-border: rgba(183, 140, 255, 0.28);
    --tree-border-hover: rgba(183, 140, 255, 0.72);
    --tree-connector: rgba(198, 164, 255, 0.72);
    --tree-connector-glow: rgba(183, 140, 255, 0.36);
    --tree-shadow: rgba(183, 140, 255, 0.24);
  }

  &.theme-terminal {
    --tree-primary: #47f26b;
    --tree-secondary: #ff5252;
    --tree-accent: #b4ff70;
    --tree-bg-hover: rgba(71, 242, 107, 0.12);
    --tree-bg-selected: rgba(71, 242, 107, 0.18);
    --tree-border: rgba(71, 242, 107, 0.25);
    --tree-border-hover: rgba(71, 242, 107, 0.7);
    --tree-connector: rgba(99, 255, 130, 0.68);
    --tree-connector-glow: rgba(71, 242, 107, 0.32);
    --tree-shadow: rgba(71, 242, 107, 0.2);
  }

  &.theme-matrix {
    --tree-primary: #00ff41;
    --tree-secondary: #ff3b3b;
    --tree-accent: #c2f132;
    --tree-bg-hover: rgba(0, 255, 65, 0.12);
    --tree-bg-selected: rgba(0, 255, 65, 0.2);
    --tree-border: rgba(0, 255, 65, 0.24);
    --tree-border-hover: rgba(0, 255, 65, 0.68);
    --tree-connector: rgba(0, 255, 65, 0.7);
    --tree-connector-glow: rgba(0, 255, 65, 0.28);
    --tree-shadow: rgba(0, 255, 65, 0.18);
  }
}

.tree-node {
  position: relative;
  min-height: 40px;
  transition: padding-left 0.2s ease, opacity 0.2s ease;
}

.tree-connectors {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.ancestor-line,
.parent-line {
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  border-radius: 999px;
  background: linear-gradient(180deg, transparent, var(--tree-connector) 12%, var(--tree-connector) 88%, transparent);
  box-shadow: 0 0 8px var(--tree-connector-glow);

  &.hidden {
    display: none;
  }
}

.parent-line {
  &.is-last {
    bottom: 50%;
  }
}

.horizontal-line {
  position: absolute;
  top: 50%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--tree-connector), rgba(255, 255, 255, 0.18), transparent);
  box-shadow: 0 0 8px var(--tree-connector-glow);
  transform: translateY(-50%);
}

.connector-joint {
  position: absolute;
  top: 50%;
  width: 7px;
  height: 7px;
  border: 1px solid var(--tree-primary);
  border-radius: 50%;
  background: #08111f;
  box-shadow: 0 0 10px var(--tree-primary);
  transform: translate(-2.5px, -50%);
}

.node-content-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
}

.node-content {
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  min-width: 230px;
  min-height: 30px;
  padding: 5px 10px;
  overflow: hidden;
  color: var(--tree-text);
  background: linear-gradient(90deg, var(--tree-bg), rgba(255, 255, 255, 0.025));
  border: 1px solid var(--tree-border);
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.025);
  transition: border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    opacity: 0;
    transform: translateX(-100%);
  }

  &:hover {
    border-color: var(--tree-border-hover);
    background: linear-gradient(90deg, var(--tree-bg-hover), rgba(255, 255, 255, 0.04));
    box-shadow: 0 0 18px var(--tree-shadow);
    transform: translateX(3px);
  }

  &.selected {
    border-color: var(--tree-primary);
    background: linear-gradient(90deg, var(--tree-bg-selected), rgba(255, 255, 255, 0.05));
    box-shadow: 0 0 18px var(--tree-shadow), inset 3px 0 0 var(--tree-primary);
  }
}

.node-expand-icon,
.node-expand-placeholder {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  flex: 0 0 18px;
}

.node-expand-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--tree-primary);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--tree-border);
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    border-color: var(--tree-primary);
    box-shadow: 0 0 10px var(--tree-shadow);
  }
}

.expand-arrow {
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid currentColor;
  transition: transform 0.18s ease;

  &.rotated {
    transform: rotate(90deg);
  }
}

.node-icon {
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 9px;
  flex: 0 0 18px;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--tree-primary), transparent 68%);
    opacity: 0.18;
  }
}

.icon-core {
  position: absolute;
  inset: 3px;
  border: 1px solid var(--tree-primary);
  border-radius: 3px;
  background: rgba(0, 230, 246, 0.08);
  box-shadow: 0 0 8px var(--tree-shadow);
}

.icon-folder,
.icon-folder-open {
  .icon-core {
    border-radius: 2px;

    &::before {
      content: '';
      position: absolute;
      top: -4px;
      left: -1px;
      width: 9px;
      height: 5px;
      border: 1px solid var(--tree-primary);
      border-bottom: 0;
      border-radius: 2px 2px 0 0;
      background: rgba(0, 230, 246, 0.1);
    }
  }
}

.icon-folder-open .icon-core {
  transform: skewX(-8deg);
}

.icon-file .icon-core {
  border-radius: 2px;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    width: 5px;
    height: 5px;
    background: var(--tree-primary);
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    opacity: 0.85;
  }
}

.node-label {
  min-width: 0;
  flex: 1 1 auto;
}

.label-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 0.2px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
}

.node-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 14px;
  flex: 0 0 auto;
  color: var(--tree-muted);
  font-size: 12px;
  text-transform: uppercase;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-shadow: 0 0 10px currentColor;

  &.status-online {
    color: var(--tree-accent);
    background: var(--tree-accent);
  }

  &.status-offline {
    color: #8a94a6;
    background: #8a94a6;
  }

  &.status-warning {
    color: var(--tree-warning);
    background: var(--tree-warning);
  }

  &.status-error {
    color: var(--tree-secondary);
    background: var(--tree-secondary);
  }
}

.tree-empty {
  padding: 18px;
  color: var(--tree-muted);
  border: 1px dashed var(--tree-border);
  border-radius: 6px;
  text-align: center;
}

.tree-scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, var(--tree-primary), transparent);
  box-shadow: 0 0 14px var(--tree-primary);
  opacity: 0.35;
  z-index: 10;
  animation: tree-scan 4.5s linear infinite;
}

.effect-glitch {
  .node-content:hover {
    animation: tree-glitch 0.36s steps(2, end);
  }
}

.effect-pulse {
  .node-icon::before,
  .status-indicator {
    animation: tree-pulse 1.8s ease-in-out infinite;
  }
}

.effect-static {
  .tree-scanline,
  .node-icon::before,
  .status-indicator {
    animation: none;
  }
}

@keyframes tree-scan {
  0% {
    top: 0;
    opacity: 0;
  }
  12%,
  88% {
    opacity: 0.35;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

@keyframes tree-pulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.18);
  }
}

@keyframes tree-glitch {
  0% {
    transform: translateX(3px);
  }
  35% {
    transform: translateX(7px) skewX(-4deg);
  }
  65% {
    transform: translateX(0) skewX(4deg);
  }
  100% {
    transform: translateX(3px);
  }
}
</style>
