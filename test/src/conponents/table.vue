<template>
    <div class="content">
        <!-- 基础用法 -->
        <div class="section">
            <div class="section-title">基础用法（Neon 主题）</div>
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

        <!-- 不同主题 -->
        <div class="section">
            <div class="section-title">不同主题 (theme: neon | hologram | terminal | matrix)</div>
            <pre class="code-block"><code class="html">&lt;!-- Hologram 主题 --&gt;
&lt;CyberInfiniteTable theme="hologram" :data="localData" :columns="columns" /&gt;

&lt;!-- Terminal 主题 --&gt;
&lt;CyberInfiniteTable theme="terminal" :data="localData" :columns="columns" /&gt;

&lt;!-- Matrix 主题 --&gt;
&lt;CyberInfiniteTable theme="matrix" :data="localData" :columns="columns" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Hologram</p>
                    <CyberInfiniteTable
                        theme="hologram"
                        :data="localData"
                        :columns="columns"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Terminal</p>
                    <CyberInfiniteTable
                        theme="terminal"
                        :data="localData"
                        :columns="columns"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Matrix</p>
                    <CyberInfiniteTable
                        theme="matrix"
                        :data="localData"
                        :columns="columns"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
            </div>
        </div>

        <!-- 自动滚动控制 -->
        <div class="section">
            <div class="section-title">自动滚动控制 (autoScroll, scrollType, waitTime)</div>
            <pre class="code-block"><code class="html">&lt;!-- 禁用自动滚动 --&gt;
&lt;CyberInfiniteTable :auto-scroll="false" :data="localData" :columns="columns" /&gt;

&lt;!-- 逐行滚动 --&gt;
&lt;CyberInfiniteTable :auto-scroll="true" scroll-type="line" :wait-time="1000" /&gt;

&lt;!-- 整页滚动 --&gt;
&lt;CyberInfiniteTable :auto-scroll="true" scroll-type="page" :wait-time="2000" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">禁用自动滚动</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :auto-scroll="false"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">逐行滚动 (1s)</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :auto-scroll="true"
                        scroll-type="line"
                        :wait-time="1000"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">整页滚动 (2s)</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :auto-scroll="true"
                        scroll-type="page"
                        :wait-time="2000"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
            </div>
        </div>

        <!-- 悬停暂停 -->
        <div class="section">
            <div class="section-title">悬停暂停 (hoverPause)</div>
            <pre class="code-block"><code class="html">&lt;!-- 悬停时继续滚动 --&gt;
&lt;CyberInfiniteTable :hover-pause="false" :auto-scroll="true" /&gt;

&lt;!-- 悬停时暂停滚动（默认） --&gt;
&lt;CyberInfiniteTable :hover-pause="true" :auto-scroll="true" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">悬停继续滚动</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :auto-scroll="true"
                        :hover-pause="false"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">悬停暂停滚动</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :auto-scroll="true"
                        :hover-pause="true"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
            </div>
        </div>

        <!-- 行数控制 -->
        <div class="section">
            <div class="section-title">显示行数 (rowNum)</div>
            <pre class="code-block"><code class="html">&lt;CyberInfiniteTable :row-num="3" /&gt;
&lt;CyberInfiniteTable :row-num="5" /&gt;
&lt;CyberInfiniteTable :row-num="8" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">3 行</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :row-num="3"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">5 行</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :row-num="5"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">8 行</p>
                    <CyberInfiniteTable
                        :data="localData"
                        :columns="columns"
                        :row-num="8"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
            </div>
        </div>

        <!-- 行高设置 -->
        <div class="section">
            <div class="section-title">行高设置 (rowHeight)</div>
            <pre class="code-block"><code class="html">&lt;CyberInfiniteTable :row-height="30" /&gt;
&lt;CyberInfiniteTable :row-height="40" /&gt;
&lt;CyberInfiniteTable :row-height="60" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">30px</p>
                    <CyberInfiniteTable
                        :data="localData.slice(0, 10)"
                        :columns="columns"
                        :row-height="30"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">40px</p>
                    <CyberInfiniteTable
                        :data="localData.slice(0, 10)"
                        :columns="columns"
                        :row-height="40"
                    ></CyberInfiniteTable>
                </div>
                <div class="demo-item">
                    <p class="demo-label">60px</p>
                    <CyberInfiniteTable
                        :data="localData.slice(0, 10)"
                        :columns="columns"
                        :row-height="60"
                    ></CyberInfiniteTable>
                </div>
            </div>
        </div>

        <!-- 列配置示例 -->
        <div class="section">
            <div class="section-title">列配置 (columns: width, minWidth, align)</div>
            <pre class="code-block"><code class="html">const columns = [
  { title: "ID", field: "id", width: "80px", align: "center" },
  { title: "Name", field: "name", minWidth: "150px" },
  { title: "Email", field: "email", minWidth: "200px" },
  { title: "Status", field: "status", width: "100px", align: "center" },
  { title: "Department", field: "department", minWidth: "150px" }
]</code></pre>
            <CyberInfiniteTable
                :data="localData.slice(0, 5)"
                :columns="columns"
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

.demo-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
}

.demo-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    flex: 1;
}

.demo-label {
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
}
</style>
