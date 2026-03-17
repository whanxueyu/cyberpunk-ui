<template>
  <div class="dashboard">
    <CyberInfiniteTable
      :data="localData"
      :columns="columns"
      :auto-scroll="true"
      :row-num="5"
      :wait-time="1000"
      :hover-pause="true"
      :row-height="40"
    ></CyberInfiniteTable>
    <CyberInfiniteTable
      theme="hologram"
      :data="localData"
      :columns="columns"
      :auto-scroll="true"
      :row-num="5"
      scroll-type="page"
      :wait-time="2000"
      :hover-pause="true"
      :row-height="40"
    ></CyberInfiniteTable>
    <CyberInfiniteTable
      theme="terminal"
      :data="localData"
      :columns="columns"
      :auto-scroll="true"
      :row-num="5"
      scroll-type="page"
      :wait-time="3000"
      :hover-pause="true"
      :row-height="40"
    ></CyberInfiniteTable>
    <CyberInfiniteTable
      theme="matrix"
      :data="localData"
      :columns="columns"
      :row-num="5"
      :wait-time="2000"
      :hover-pause="true"
      :row-height="40"
    ></CyberInfiniteTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const columns = ref([
  { title: "ID", field: "id", width: "80px", align: "center" },
  { title: "Name", field: "name", minWidth: "150px" },
  { title: "Email", field: "email", minWidth: "200px" },
  { title: "Status", field: "status", width: "100px", align: "center" },
  { title: "Department", field: "department", minWidth: "150px" },
]);

const localData = ref<any[]>([]);

// Generate mock data
const generateLocalData = (count: number) => {
  const statuses = ["online", "offline", "warning", "error"];
  const departments = ["Engineering", "Design", "Marketing", "Sales", "HR"];
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace",
    "Henry",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${names[i % names.length]}_${i + 1}`,
    email: `user${i + 1}@cyberpunk.ui`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
  }));
};

localData.value = generateLocalData(1000);

onMounted(() => {
  // 初始化数据
});
</script>
<style scoped>
  .dashboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>
