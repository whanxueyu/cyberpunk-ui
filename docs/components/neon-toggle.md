# NeonToggle 霓虹开关

霓虹开关组件提供了带有电流流动视觉效果的开关控件，适合用于赛博朋克风格界面中的状态切换。

## 基本用法
let value = true;
<cyber-neon-toggle v-model="value" />

```vue
<template>
  <cyber-neon-toggle v-model="value" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(false);
</script>
```

## 不同形状
let value = true;
<cyber-neon-toggle v-model="value" shape="circle" />
  <cyber-neon-toggle v-model="value" shape="square" />
  <cyber-neon-toggle v-model="value" shape="hex" />

```vue
<template>
  <cyber-neon-toggle v-model="value" shape="circle" />
  <cyber-neon-toggle v-model="value" shape="square" />
  <cyber-neon-toggle v-model="value" shape="hex" />
</template>
<script setup>
import { ref } from 'vue';

const value = ref(false);
</script>
```

## 自定义颜色

  <cyber-neon-toggle v-model="value" active-color="#ff00ff" />


```vue
<template>
  <cyber-neon-toggle v-model="value" active-color="#ff00ff" />
</template>
<script setup>
import { ref } from 'vue';

const value = ref(false);
</script>
```

## 禁用状态

  <cyber-neon-toggle v-model="value" disabled />


```vue
<template>
  <cyber-neon-toggle v-model="value" disabled />
</template>
<script setup>
import { ref } from 'vue';

const value = ref(false);
</script>
```

## 脉冲效果

<cyber-neon-toggle v-model="value" :pulse-effect="true" />
  <cyber-neon-toggle v-model="value" :pulse-effect="false" />

```vue
<template>
  <cyber-neon-toggle v-model="value" :pulse-effect="true" />
  <cyber-neon-toggle v-model="value" :pulse-effect="false" />
</template>
<script setup>
import { ref } from 'vue';

const value = ref(false);
</script>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue / v-model | 绑定值 | boolean | — | false |
| shape | 开关形状 | string | circle / square / hex | circle |
| activeColor | 激活状态颜色 | string | — | #00e6f6 |
| pulseEffect | 是否启用脉冲效果 | boolean | — | true |
| disabled | 是否禁用 | boolean | — | false |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化时触发 | value: boolean |
| change | 状态变化时触发 | value: boolean |
