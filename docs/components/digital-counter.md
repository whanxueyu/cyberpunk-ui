# DigitalCounter 数字翻滚组件

数字翻滚组件提供了动态翻滚效果的数值展示，适合在赛博朋克风格界面中展示数字变化。

## 基本用法

  <cyber-digital-counter :value="99" />

```vue
<template>
  <cyber-digital-counter :value="value" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1234);
</script>
```

## 动画效果

<cyber-digital-counter :from="0" :value="1000" :duration="2000" />

```vue
  <cyber-digital-counter :from="0" :value="1000" :duration="2000" />
```

## 不同主题

<cyber-digital-counter :value="1234" theme="neon" />
  <cyber-digital-counter :value="1234" theme="digital" />
  <cyber-digital-counter :value="1234" theme="hologram" />

```vue
<template>
  <cyber-digital-counter :value="1234" theme="neon" />
  <cyber-digital-counter :value="1234" theme="digital" />
  <cyber-digital-counter :value="1234" theme="hologram" />
</template>
```

## 前缀和后缀

  <cyber-digital-counter :value="1234" prefix="$" />
  <cyber-digital-counter :value="75" suffix="%" />
  <cyber-digital-counter :value="42" prefix="Level " suffix=" Achieved" />

```vue
<template>
  <cyber-digital-counter :value="1234" prefix="$" />
  <cyber-digital-counter :value="75" suffix="%" />
  <cyber-digital-counter :value="42" prefix="Level " suffix=" Achieved" />
</template>
```

## 小数和分隔符

<cyber-digital-counter :value="1234.56" :decimal="2" />
  <cyber-digital-counter :value="1234567" separator="," />
  <cyber-digital-counter :value="1234.56" :decimal="2" separator=" " />

```vue
<template>
  <cyber-digital-counter :value="1234.56" :decimal="2" />
  <cyber-digital-counter :value="1234567" separator="," />
  <cyber-digital-counter :value="1234.56" :decimal="2" separator=" " />
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| value | 显示的值 | number / string | — | 0 |
| from | 动画起始值 | number / string | — | 0 |
| to | 动画目标值 | number / string | — | null |
| duration | 动画持续时间（毫秒） | number | — | 1000 |
| format | 格式化选项 | object | — | {} |
| prefix | 前缀 | string | — | '' |
| suffix | 后缀 | string | — | '' |
| separator | 千位分隔符 | string | — | ',' |
| decimal | 小数位数 | number | — | 0 |
| effect | 动画效果 | string | flip / roll / fade / glitch | flip |
| theme | 主题 | string | neon / digital / hologram | neon |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化时触发 | value: number |
