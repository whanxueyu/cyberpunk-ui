<template>
    <div class="content">
        <div class="section">
            <div class="section-title">默认样式</div>
            <cyber-tree :data="treeData" @node-click="handleNodeClick" @select-change="handleSelectChange"></cyber-tree>
        </div>
        <div class="section">
            <div class="section-title">Neon 主题</div>
            <cyber-tree :data="treeData" theme="neon" @node-click="handleNodeClick"></cyber-tree>
        </div>
        <div class="section">
            <div class="section-title">Terminal 主题</div>
            <cyber-tree :data="treeData" theme="terminal" @node-click="handleNodeClick"></cyber-tree>
        </div>
        <div class="section">
            <div class="section-title">Hologram 主题</div>
            <cyber-tree :data="treeData" theme="hologram" @node-click="handleNodeClick"></cyber-tree>
        </div>
        <div class="section">
            <div class="section-title">带状态显示</div>
            <cyber-tree :data="treeData" theme="neon" effect="scan" :show-status="true" :show-connectors="true" @node-click="handleNodeClick"></cyber-tree>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const treeData = ref([
  {
    id: 1,
    label: 'System Root',
    status: 'online',
    children: [
      {
        id: 2,
        label: 'Security Protocols',
        status: 'warning',
        children: [
          { id: 3, label: 'Firewall.v2', status: 'online' },
          { id: 4, label: 'Intrusion Detection', status: 'error' }
        ]
      },
      {
        id: 5,
        label: 'Data Core',
        status: 'online',
        children: [
          { id: 6, label: 'User Database', status: 'online' },
          { id: 7, label: 'System Logs', status: 'offline' }
        ]
      }
    ]
  }
]);

const handleNodeClick = (node: any) => {
  console.log('Node clicked:', node);
};

const handleSelectChange = (selectedNodes: any[]) => {
  console.log('Selected nodes:', selectedNodes);
};
</script>
<style scoped lang="scss">
.content {
    padding: 20px;
    text-align: left;
}

.section {
    margin-bottom: 40px;
}

.section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ccc;
}
</style>
