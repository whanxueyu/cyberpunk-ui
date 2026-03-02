<template>
    <div class="content">
        <div class="flex">
            <cyber-banner :imgWidth="200" :imgHeight="120" :imgList="imgList"></cyber-banner>
            <cyber-banner :animationDuration="20" :imgList="imgList1" :shadow="false"></cyber-banner>
        </div>
        <cyber-tree :data="treeData"
      theme="neon"
      effect="scan"
      :show-status="true"
      :show-connectors="true"
      @node-click="handleNodeClick"
      @select-change="handleSelectChange"></cyber-tree>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const imgList = [
    'https://axydemo.netlify.app/images/img/Cyber.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber2.jpg',
    'https://axydemo.netlify.app/images/img/Cyber3.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber4.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber5.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber6.jpg',
    'https://axydemo.netlify.app/images/img/Cyber7.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber8.jpeg',
]
const imgList1 = [
    'https://axydemo.netlify.app/images/img/Cyber.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber2.jpg',
    'https://axydemo.netlify.app/images/img/Cyber3.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber4.jpeg',
]
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

const handleNodeClick = (node) => {
  console.log('Node clicked:', node);
};

const handleSelectChange = (selectedNodes) => {
  console.log('Selected nodes:', selectedNodes);
};
</script>
<style scoped lang="scss">
.content {
    border-left: 1px solid #ccc;
    padding: 20px;
    text-align: left;
}
.flex {
    display: flex;
    gap: 40px;
}
</style>
