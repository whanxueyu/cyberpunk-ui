# InfiniteTable 无限滚动表格

无限滚动表格组件提供了赛博朋克风格的大数据表格，支持虚拟滚动、排序、自定义列等功能，适合展示大量数据。

## 基本用法

```vue
<template>
  <cp-infinite-table
    :data="tableData"
    :columns="columns"
    row-key="id"
    @row-click="handleRowClick"
  />
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  { id: 1, name: 'Neo', age: 35, city: 'Matrix' },
  { id: 2, name: 'Trinity', age: 32, city: 'Zion' },
  { id: 3, name: 'Morpheus', age: 40, city: 'Nebuchadnezzar' },
  // 更多数据...
]);

const columns = [
  { key: 'id', title: 'ID', width: 80 },
  { key: 'name', title: '姓名', width: 120 },
  { key: 'age', title: '年龄', width: 100 },
  { key: 'city', title: '城市' }
];

const handleRowClick = (row) => {
  console.log('点击行:', row);
};
</script>
```

## 可排序列

```vue
<template>
  <cp-infinite-table
    :data="tableData"
    :columns="columns"
    :default-sort="{ key: 'age', order: 'asc' }"
    @sort-change="handleSortChange"
  />
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  { key: 'id', title: 'ID', width: 80 },
  { key: 'name', title: '姓名', width: 120, sortable: true },
  { key: 'age', title: '年龄', width: 100, sortable: true },
  { key: 'city', title: '城市' }
];

const handleSortChange = (sort) => {
  console.log('排序变化:', sort);
};
</script>
```

## 自定义单元格

```vue
<template>
  <cp-infinite-table
    :data="tableData"
    :columns="columns"
  >
    <template #cell-name="{ row }">
      <div class="custom-name">
        <span class="name-prefix">Agent</span>
        {{ row.name }}
      </div>
    </template>
    
    <template #cell-actions="{ row }">
      <button @click.stop="editRow(row)">编辑</button>
      <button @click.stop="deleteRow(row)">删除</button>
    </template>
  </cp-infinite-table>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  { key: 'id', title: 'ID', width: 80 },
  { key: 'name', title: '姓名', width: 120 },
  { key: 'age', title: '年龄', width: 100 },
  { key: 'city', title: '城市' },
  { key: 'actions', title: '操作', width: 150 }
];

const editRow = (row) => {
  console.log('编辑行:', row);
};

const deleteRow = (row) => {
  console.log('删除行:', row);
};
</script>
```

## 加载状态

```vue
<template>
  <cp-infinite-table
    :data="tableData"
    :columns="columns"
    :loading="loading"
  />
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);

// 模拟异步加载数据
setTimeout(() => {
  loading.value = false;
}, 2000);
</script>
```

## 无限加载

```vue
<template>
  <cp-infinite-table
    :data="tableData"
    :columns="columns"
    :loading="loading"
    @load-more="loadMoreData"
  />
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([]);
const loading = ref(false);
const page = ref(1);
const pageSize = ref(20);

const loadMoreData = () => {
  if (loading.value) return;
  
  loading.value = true;
  
  // 模拟异步加载更多数据
  setTimeout(() => {
    const newData = Array.from({ length: pageSize.value }).map((_, index) => {
      const id = (page.value - 1) * pageSize.value + index + 1;
      return {
        id,
        name: `User-${id}`,
        age: Math.floor(Math.random() * 50) + 18,
        city: ['Matrix', 'Zion', 'Nebuchadnezzar'][Math.floor(Math.random() * 3)]
      };
    });
    
    tableData.value = [...tableData.value, ...newData];
    page.value++;
    loading.value = false;
  }, 1000);
};

// 初始加载
loadMoreData();
</script>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| data | 表格数据 | Array | — | [] |
| columns | 表格列配置 | Array | — | [] |
| rowKey | 行数据的唯一标识字段名或函数 | string / Function | — | 'id' |
| rowHeight | 行高（像素） | number | — | 40 |
| loading | 是否显示加载状态 | boolean | — | false |
| selectedRows | 选中的行数据 | Array | — | [] |
| defaultSort | 默认排序配置 | Object | — | { key: '', order: 'asc' } |
| bufferSize | 虚拟滚动缓冲区大小 | number | — | 5 |

## 列配置

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| key | 列标识，对应数据中的字段名 | string | — | — |
| title | 列标题 | string | — | — |
| width | 列宽度 | string / number | — | — |
| sortable | 是否可排序 | boolean | — | false |
| formatter | 单元格内容格式化函数 | Function(row, column, index) | — | — |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| cell-[key] | 自定义单元格内容，参数为 { row, column, index } |
| empty | 自定义空数据展示内容 |
| footer | 表格底部内容 |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| row-click | 行点击事件 | row: object |
| sort-change | 排序变化事件 | { key: string, order: 'asc' / 'desc' / '' } |
| load-more | 加载更多数据事件 | — |
