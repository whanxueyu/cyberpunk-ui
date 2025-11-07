# DigitalCounter 数字翻滚组件

数字翻滚组件提供了动态翻滚效果的数值展示，适合在赛博朋克风格界面中展示数字变化。

## 基本用法

<cyber-digital-counter :value="num1" />
<br />
<cyber-button type="warning" size="small" @click="reLoad" content="重新加载">重新加载</cyber-button>

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

<cyber-digital-counter :from="0" :value="num1" :duration="2000" />

```vue
<template>
  <cyber-digital-counter :from="0" :value="num1" :duration="2000" />
</template>
```

## 不同主题

<cyber-digital-counter :value="num2" theme="neon"></cyber-digital-counter>
<br/>
<cyber-digital-counter :value="num2" theme="digital"></cyber-digital-counter>
<br/>
<cyber-digital-counter :value="num2" theme="hologram"></cyber-digital-counter>
<br />
<cyber-button type="warning" size="small" @click="reLoad" content="重新加载">重新加载</cyber-button>

```vue
<template>
  <cyber-digital-counter :value="num2" theme="neon" />
  <cyber-digital-counter :value="num2" theme="digital" />
  <cyber-digital-counter :value="num2" theme="hologram" />
</template>
```


## 前缀和后缀

<cyber-digital-counter :value="num2" prefix="$" />
<br/>
<cyber-digital-counter :value="num3" suffix="%" />
<br/>
<cyber-digital-counter :value="num3" prefix="Level " suffix=" Achieved" />
<br />
<cyber-button type="warning" size="small" @click="reLoad" content="重新加载">重新加载</cyber-button>

```vue
<template>
  <cyber-digital-counter :value="num2" prefix="$" />
  <cyber-digital-counter :value="num3" suffix="%" />
  <cyber-digital-counter :value="num3" prefix="Level " suffix=" Achieved" />
</template>
```

## 小数和分隔符

<cyber-digital-counter :value="num5" :decimal="2" />
<br/>
<cyber-digital-counter :value="num2" separator="," />
<br/>
<cyber-digital-counter :value="num5" :decimal="2" separator=" " />
<br />
<cyber-button type="warning" size="small" @click="reLoad" content="重新加载">重新加载</cyber-button>

```vue
<template>
  <cyber-digital-counter :value="num5" :decimal="2" />
  <cyber-digital-counter :value="num2" separator="," />
  <cyber-digital-counter :value="num5" :decimal="2" separator=" " />
</template>
```

<script setup>
import { ref, nextTick } from 'vue'
const num1 = ref(999)
const num2 = ref(12345)
const num3 = ref(75)
const num4 = ref(1234.56789)
const num5 = ref(1234567.89)
const reLoad = () => {
    num1.value = 0;
    num2.value = 0;
    num3.value = 0;
    num4.value = 0;
    num5.value = 0;
    nextTick(() => {
        num1.value = 999;
        num2.value = 12345;
        num3.value = 75;
        num4.value = 1234.56789;
        num5.value = 1234567.89;
    })
}
</script>

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
