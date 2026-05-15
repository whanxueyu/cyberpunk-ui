<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-tree
  :data="treeData"
  @node-click="handleNodeClick"
  @select-change="handleSelectChange"
&gt;&lt;/cyber-tree&gt;</code></pre>
            <div class="demo-panel">
                <cyber-tree
                    :data="treeData"
                    @node-click="handleNodeClick"
                    @select-change="handleSelectChange"
                ></cyber-tree>
            </div>
        </div>

        <div class="section">
            <div class="section-title">多层级结构与清晰连线</div>
            <pre class="code-block"><code class="html">&lt;cyber-tree
  :data="deepTreeData"
  theme="hologram"
  effect="scan"
  :default-expand-all="true"
&gt;&lt;/cyber-tree&gt;</code></pre>
            <div class="demo-panel wide">
                <cyber-tree
                    :data="deepTreeData"
                    theme="hologram"
                    effect="scan"
                    :default-expand-all="true"
                    @node-expand="handleNodeExpand"
                    @node-collapse="handleNodeCollapse"
                ></cyber-tree>
            </div>
        </div>

        <div class="section">
            <div class="section-title">主题效果</div>
            <pre class="code-block"><code class="html">&lt;cyber-tree :data="treeData" theme="neon" effect="scan" /&gt;
&lt;cyber-tree :data="treeData" theme="terminal" effect="pulse" /&gt;
&lt;cyber-tree :data="treeData" theme="matrix" effect="glitch" /&gt;
&lt;cyber-tree :data="treeData" theme="hologram" effect="static" /&gt;</code></pre>
            <div class="demo-grid">
                <div class="demo-item">
                    <p class="demo-label">Neon + Scan</p>
                    <cyber-tree :data="treeData" theme="neon" effect="scan"></cyber-tree>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Terminal + Pulse</p>
                    <cyber-tree :data="treeData" theme="terminal" effect="pulse"></cyber-tree>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Matrix + Glitch</p>
                    <cyber-tree :data="treeData" theme="matrix" effect="glitch"></cyber-tree>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Hologram + Static</p>
                    <cyber-tree :data="treeData" theme="hologram" effect="static"></cyber-tree>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">状态展示</div>
            <pre class="code-block"><code class="html">&lt;cyber-tree
  :data="statusTreeData"
  theme="neon"
  effect="pulse"
  :show-status="true"
&gt;&lt;/cyber-tree&gt;</code></pre>
            <div class="demo-panel">
                <cyber-tree
                    :data="statusTreeData"
                    theme="neon"
                    effect="pulse"
                    :show-status="true"
                    :default-expand-all="true"
                ></cyber-tree>
            </div>
        </div>

        <div class="section">
            <div class="section-title">多选与点击不展开</div>
            <pre class="code-block"><code class="html">&lt;cyber-tree
  :data="treeData"
  theme="terminal"
  :multiple="true"
  :expand-on-click="false"
&gt;&lt;/cyber-tree&gt;</code></pre>
            <div class="demo-panel">
                <cyber-tree
                    :data="treeData"
                    theme="terminal"
                    :multiple="true"
                    :expand-on-click="false"
                    @select-change="handleSelectChange"
                ></cyber-tree>
            </div>
        </div>

        <div class="section">
            <div class="section-title">自定义缩进</div>
            <pre class="code-block"><code class="html">&lt;cyber-tree :data="deepTreeData" :indent="42" theme="matrix" /&gt;
&lt;cyber-tree :data="deepTreeData" :indent="22" theme="neon" /&gt;</code></pre>
            <div class="demo-grid two">
                <div class="demo-item">
                    <p class="demo-label">宽缩进 42px</p>
                    <cyber-tree
                        :data="deepTreeData"
                        :indent="42"
                        theme="matrix"
                        effect="scan"
                        :default-expand-all="true"
                    ></cyber-tree>
                </div>
                <div class="demo-item">
                    <p class="demo-label">紧凑缩进 22px</p>
                    <cyber-tree
                        :data="deepTreeData"
                        :indent="22"
                        theme="neon"
                        effect="static"
                        :default-expand-all="true"
                    ></cyber-tree>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">关闭连接线和状态</div>
            <pre class="code-block"><code class="html">&lt;cyber-tree
  :data="treeData"
  theme="hologram"
  :show-connectors="false"
  :show-status="false"
  :show-scanline="false"
&gt;&lt;/cyber-tree&gt;</code></pre>
            <div class="demo-panel">
                <cyber-tree
                    :data="treeData"
                    theme="hologram"
                    :show-connectors="false"
                    :show-status="false"
                    :show-scanline="false"
                ></cyber-tree>
            </div>
        </div>

        <div class="section">
            <div class="section-title">事件回显</div>
            <pre class="event-log">{{ eventLog }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface TreeNode {
    id: string | number;
    label: string;
    status?: 'online' | 'offline' | 'warning' | 'error';
    expanded?: boolean;
    selected?: boolean;
    children?: TreeNode[];
}

const eventLog = ref('等待操作树节点...');

const treeData = ref<TreeNode[]>([
    {
        id: 1,
        label: 'System Root',
        status: 'online',
        expanded: true,
        children: [
            {
                id: 2,
                label: 'Security Protocols',
                status: 'warning',
                expanded: true,
                children: [
                    { id: 3, label: 'Firewall.v2', status: 'online' },
                    { id: 4, label: 'Intrusion Detection', status: 'error' },
                ],
            },
            {
                id: 5,
                label: 'Data Core',
                status: 'online',
                children: [
                    { id: 6, label: 'User Database', status: 'online' },
                    { id: 7, label: 'System Logs', status: 'offline' },
                ],
            },
        ],
    },
]);

const deepTreeData = ref<TreeNode[]>([
    {
        id: 'root',
        label: 'Command Network',
        status: 'online',
        expanded: true,
        children: [
            {
                id: 'ops',
                label: 'Operations Layer',
                status: 'online',
                expanded: true,
                children: [
                    {
                        id: 'ops-alpha',
                        label: 'Alpha District',
                        status: 'warning',
                        expanded: true,
                        children: [
                            { id: 'ops-alpha-sensor', label: 'Sensor Relay', status: 'online' },
                            { id: 'ops-alpha-camera', label: 'Camera Grid', status: 'offline' },
                        ],
                    },
                    {
                        id: 'ops-beta',
                        label: 'Beta District',
                        status: 'online',
                        expanded: true,
                        children: [
                            { id: 'ops-beta-drone', label: 'Drone Port', status: 'online' },
                            { id: 'ops-beta-gate', label: 'Access Gate', status: 'error' },
                        ],
                    },
                ],
            },
            {
                id: 'data',
                label: 'Data Spine',
                status: 'online',
                expanded: true,
                children: [
                    { id: 'data-cache', label: 'Edge Cache', status: 'online' },
                    {
                        id: 'data-core',
                        label: 'Core Archive',
                        status: 'warning',
                        expanded: true,
                        children: [
                            {
                                id: 'data-core-hot',
                                label: 'Hot Storage',
                                status: 'online',
                                expanded: true,
                                children: [
                                    { id: 'data-core-hot-01', label: 'Shard 01', status: 'online' },
                                    { id: 'data-core-hot-02', label: 'Shard 02', status: 'offline' },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 'ai',
                label: 'AI Review Queue',
                status: 'error',
                children: [
                    { id: 'ai-audit', label: 'Audit Stream', status: 'warning' },
                    { id: 'ai-policy', label: 'Policy Rules', status: 'online' },
                ],
            },
        ],
    },
]);

const statusTreeData = ref<TreeNode[]>([
    {
        id: 'status-root',
        label: 'Infrastructure',
        status: 'online',
        expanded: true,
        children: [
            { id: 'status-online', label: 'Online Node', status: 'online' },
            { id: 'status-warning', label: 'Warning Node', status: 'warning' },
            { id: 'status-error', label: 'Error Node', status: 'error' },
            { id: 'status-offline', label: 'Offline Node', status: 'offline' },
        ],
    },
]);

const handleNodeClick = (node: TreeNode) => {
    eventLog.value = `node-click: ${node.label}`;
    console.log('Node clicked:', node);
};

const handleSelectChange = (selectedNodes: TreeNode[]) => {
    const labels = selectedNodes.map(node => node.label).join(', ') || '无';
    eventLog.value = `select-change: ${labels}`;
    console.log('Selected nodes:', selectedNodes);
};

const handleNodeExpand = (node: TreeNode) => {
    eventLog.value = `node-expand: ${node.label}`;
};

const handleNodeCollapse = (node: TreeNode) => {
    eventLog.value = `node-collapse: ${node.label}`;
};
</script>

<style scoped lang="scss">
.content {
    padding: 20px;
    text-align: left;
}

.section {
    margin-bottom: 60px;
}

.section-title {
    margin-bottom: 20px;
    color: #00ffff;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.code-block,
.event-log {
    margin: 0 0 20px;
    padding: 14px 16px;
    overflow-x: auto;
    color: #d8fbff;
    background: rgba(5, 12, 24, 0.86);
    border: 1px solid rgba(0, 255, 255, 0.24);
    border-radius: 6px;
    box-shadow: inset 0 0 18px rgba(0, 255, 255, 0.08);
    font-size: 13px;
    line-height: 1.6;
}

.demo-panel,
.demo-item {
    padding: 18px;
    background: linear-gradient(135deg, rgba(8, 16, 30, 0.9), rgba(18, 12, 34, 0.72));
    border: 1px solid rgba(0, 255, 255, 0.16);
    border-radius: 6px;
}

.demo-panel {
    max-width: 760px;

    &.wide {
        max-width: 980px;
    }
}

.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 24px;

    &.two {
        grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    }
}

.demo-label {
    margin: 0 0 14px;
    color: #a5b8c8;
    font-size: 14px;
}

.event-log {
    max-width: 760px;
    color: #47f2c6;
}
</style>
