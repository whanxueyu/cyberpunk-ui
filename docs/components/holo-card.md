# HoloCard 全息卡片

全息卡片组件提供了具有3D视觉效果和动态光影变化的信息展示容器，适合展示重要信息或特殊内容。

## 基本用法

<cyber-holo-card title="全息投影">
    这是一个全息卡片组件，具有3D视觉效果和动态光影变化。
  </cyber-holo-card>

```vue
<template>
  <cyber-holo-card title="全息投影">
    这是一个全息卡片组件，具有3D视觉效果和动态光影变化。
  </cyber-holo-card>
</template>
```

## 不同效果

<cyber-holo-card title="默认效果" />
  <cyber-holo-card title="扫描效果" effect="scan" />
  <cyber-holo-card title="故障效果" effect="glitch" />
  <cyber-holo-card title="脉冲效果" effect="pulse" />

```vue
<template>
  <cyber-holo-card title="默认效果" />
  <cyber-holo-card title="扫描效果" effect="scan" />
  <cyber-holo-card title="故障效果" effect="glitch" />
  <cyber-holo-card title="脉冲效果" effect="pulse" />
</template>
```

## 不同主题

<cyber-holo-card title="霓虹主题" theme="neon" />
  <cyber-holo-card title="全息主题" theme="hologram" />
  <cyber-holo-card title="终端主题" theme="terminal" />

```vue
<template>
  <cyber-holo-card title="霓虹主题" theme="neon" />
  <cyber-holo-card title="全息主题" theme="hologram" />
  <cyber-holo-card title="终端主题" theme="terminal" />
</template>
```

## 自定义内容

<cyber-holo-card>
    <template #title>
      <div class="custom-title">
        <icon-component />
        自定义标题
      </div>
    </template>
    
    <div>自定义内容</div>
    
    <template #footer>
      <div class="custom-footer">
        自定义底部
      </div>
    </template>
  </cyber-holo-card>

```vue
<template>
  <cyber-holo-card>
    <template #title>
      <div class="custom-title">
        <icon-component />
        自定义标题
      </div>
    </template>
    
    <div>自定义内容</div>
    
    <template #footer>
      <div class="custom-footer">
        自定义底部
      </div>
    </template>
  </cyber-holo-card>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| title | 卡片标题 | string | — | — |
| theme | 卡片主题 | string | neon / hologram / terminal | neon |
| effect | 卡片效果 | string | default / scan / glitch / pulse | default |
| depth | 3D效果深度 | number | — | 5 |
| interactive | 是否启用交互效果 | boolean | — | true |
| bordered | 是否显示边框 | boolean | — | true |
| shadow | 是否显示阴影 | boolean | — | true |
| loading | 是否显示加载状态 | boolean | — | false |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 卡片内容 |
| title | 卡片标题 |
| footer | 卡片底部 |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 卡片点击事件 | event: Event |
