---
title: FullPage
lang: en-US
---
# FullPage 全屏滚动
不依赖任何第三方插件，滚动不会修改页面路由，可设置滚动时间，延迟时间，

<cp-full-page>
    <cp-section>section1</cp-section>
    <cp-section>section2</cp-section>
    <cp-section>section3</cp-section>
</cp-full-page>
```vue
<template>
    <cp-full-page>
        <cp-section>section1</cp-section>
        <cp-section>section2</cp-section>
        <cp-section>section3</cp-section>
</cp-full-page>
</template>
```

## 参数说明

| 名称        | 说明             | 类型              | 默认值     |
| ----------- |:-----------------| -----------------|-----------|
| dots        | 控制按钮-菜单     | `'array'`        | ``default``|
| duration    | 滚动持续时间 | `'number'`         | ``300ms``|
| delay       | 延迟时间       | `'number'`       | ``100ms``  |