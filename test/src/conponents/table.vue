<template>
    <div class="content">
        <!-- Neon 主题（默认） -->
        <div class="section">
            <div class="section-title">Neon 主题（默认）</div>
            <pre class="code-block"><code class="html">&lt;CyberInfiniteTable
  :data="localData"
  :columns="columns"
  :auto-scroll="true"
  :row-num="5"
  :wait-time="1000"
  :hover-pause="true"
  :row-height="40"
/&gt;</code></pre>
            <CyberInfiniteTable
                :data="localData"
                :columns="columns"
                :auto-scroll="true"
                :row-num="5"
                :wait-time="1000"
                :hover-pause="true"
                :row-height="40"
            ></CyberInfiniteTable>
        </div>

        <!-- Hologram 主题 -->
        <div class="section">
            <div class="section-title">Hologram 主题</div>
            <pre class="code-block"><code class="html">&lt;CyberInfiniteTable
  theme="hologram"
  :data="localData"
  :columns="columns"
  :auto-scroll="true"
  :row-num="5"
  scroll-type="page"
  :wait-time="2000"
  :hover-pause="true"
  :row-height="40"
/&gt;</code></pre>
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
        </div>

        <!-- Terminal 主题 -->
        <div class="section">
            <div class="section-title">Terminal 主题</div>
            <pre class="code-block"><code class="html">&lt;CyberInfiniteTable
  theme="terminal"
  :data="localData"
  :columns="columns"
  :auto-scroll="true"
  :row-num="5"
  scroll-type="page"
  :wait-time="3000"
  :hover-pause="true"
  :row-height="40"
/&gt;</code></pre>
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
        </div>

        <!-- Matrix 主题 -->
        <div class="section">
            <div class="section-title">Matrix 主题</div>
            <pre class="code-block"><code class="html">&lt;CyberInfiniteTable
  theme="matrix"
  :data="localData"
  :columns="columns"
  :row-num="5"
  :wait-time="2000"
  :hover-pause="true"
  :row-height="40"
/&gt;</code></pre>
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
<style scoped lang="scss">
.content {
    padding: 20px;
    text-align: left;
}

.section {
    margin-bottom: 60px;
}

.section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}
</style>
