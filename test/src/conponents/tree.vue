<template>
    <div class="content">
        <div class="section">
            <div class="section-title">默认样式（跟随系统主题）</div>
            <cyber-tree :data="treeData" @node-click="handleNodeClick" @select-change="handleSelectChange"></cyber-tree>
        </div>
        <div class="section">
            <div class="section-title">多层级树结构</div>
            <cyber-tree :data="deepTreeData" theme="hologram" @node-click="handleNodeClick"></cyber-tree>
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
            <cyber-tree :data="treeData" theme="neon" :show-status="true" :show-connectors="true" @node-click="handleNodeClick"></cyber-tree>
        </div>
        <div class="section">
            <div class="section-title">关闭连接线和状态</div>
            <cyber-tree :data="treeData" theme="matrix" :show-connectors="false" :show-status="false" @node-click="handleNodeClick"></cyber-tree>
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

const deepTreeData = ref([
  {
    id: 1,
    label: 'Root',
    status: 'online',
    children: [
      {
        id: 2,
        label: 'Level 1-A',
        status: 'online',
        children: [
          {
            id: 3,
            label: 'Level 2-A',
            status: 'warning',
            children: [
              { id: 4, label: 'Level 3-A', status: 'online' },
              { id: 5, label: 'Level 3-B', status: 'offline' }
            ]
          },
          {
            id: 6,
            label: 'Level 2-B',
            status: 'online',
            children: [
              { id: 7, label: 'Level 3-C', status: 'error' }
            ]
          }
        ]
      },
      {
        id: 8,
        label: 'Level 1-B',
        status: 'offline',
        children: [
          { id: 9, label: 'Level 2-C', status: 'online' },
          { id: 10, label: 'Level 2-D', status: 'warning' }
        ]
      },
      {
        id: 11,
        label: 'Level 1-C',
        status: 'online',
        children: [
          {
            id: 12,
            label: 'Level 2-E',
            status: 'online',
            children: [
              {
                id: 13,
                label: 'Level 3-D',
                status: 'online',
                children: [
                  { id: 14, label: 'Level 4-A', status: 'online' },
                  { id: 15, label: 'Level 4-B', status: 'offline' }
                ]
              }
            ]
          }
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
}
</style>
