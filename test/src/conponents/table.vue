<template>
  <div class="dashboard">
    <CyberInfiniteTable :data="realTimeData" :columns="columns" :speed="0.1" :loop="true" :pause-on-hover="true"
      theme="neon">
      <!-- 自定义状态列 -->
      <template #cell-status="{ row }">
        <span :class="`status-indicator ${row.status}`"></span>
        {{ row.status }}
      </template>
    </CyberInfiniteTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const columns = ref([
  { key: 'id', title: 'ID', width: 80 },
  { key: 'name', title: '名称', width: 150 },
  { key: 'status', title: '状态', width: 100, sortable: true },
  { key: 'value', title: '数值', width: 120 },
  { key: 'timestamp', title: '时间', width: 180 }
]);

const realTimeData = ref([]);
let dataCounter = 0;

// 模拟实时数据
const generateData = () => {
  return {
    id: dataCounter++,
    name: `设备-${Math.floor(Math.random() * 100)}`,
    status: ['online', 'offline', 'warning'][Math.floor(Math.random() * 3)],
    value: Math.floor(Math.random() * 1000),
    timestamp: new Date().toLocaleTimeString()
  };
};


onMounted(() => {
  // 初始化数据
  for (let i = 0; i < 10; i++) {
    realTimeData.value.push(generateData());
  }
});
</script>