# CyberNotification 消息提示

消息提示组件提供了具有未来感的通知系统，适合在赛博朋克风格界面中展示各类通知信息。

<script setup>
import { ref } from 'vue';

const notificationRef = ref(null);

const showInfo = () => {
  notificationRef.value?.info({
    title: '信息通知',
    message: '这是一条信息通知',
    duration: 3000
  });
};

const showSuccess = () => {
  notificationRef.value?.success({
    title: '成功通知',
    message: '操作已成功完成',
    duration: 3000
  });
};

const showWarning = () => {
  notificationRef.value?.warning({
    title: '警告通知',
    message: '请注意可能的风险',
    duration: 3000
  });
};

const showError = () => {
  notificationRef.value?.error({
    title: '错误通知',
    message: '操作失败，请重试',
    duration: 3000
  });
};

const showHologram = () => {
  notificationRef.value?.info({
    title: '全息效果',
    message: '这是全息效果通知',
    effect: 'hologram',
    duration: 3000
  });
};

const showGlitch = () => {
  notificationRef.value?.info({
    title: '故障效果',
    message: '这是故障效果通知',
    effect: 'glitch',
    duration: 3000
  });
};

const showCircuit = () => {
  notificationRef.value?.info({
    title: '电路效果',
    message: '这是电路效果通知',
    effect: 'circuit',
    duration: 3000
  });
};

const showWithActions = () => {
  notificationRef.value?.warning({
    title: '带操作按钮',
    message: '这条通知包含操作按钮',
    duration: 0,
    actions: [
      {
        text: '确认',
        callback: () => {
          console.log('点击了确认');
        }
      },
      {
        text: '取消',
        callback: () => {
          console.log('点击了取消');
        }
      }
    ]
  });
};
</script>

## 基本用法

<cyber-button @click="showInfo">显示通知</cyber-button>
<cyber-notification ref="notificationRef" />

```vue
<template>
  <cyber-button @click="showNotification">显示通知</cyber-button>
  <cyber-notification ref="notificationRef" />
</template>

<script setup>
import { ref } from 'vue';

const notificationRef = ref(null);

const showNotification = () => {
  notificationRef.value?.info({
    title: '信息通知',
    message: '这是一条信息通知',
    duration: 3000
  });
};
</script>
```

## 不同类型

<cyber-button @click="showInfo">信息通知</cyber-button>
<cyber-button @click="showSuccess">成功通知</cyber-button>
<cyber-button @click="showWarning">警告通知</cyber-button>
<cyber-button @click="showError">错误通知</cyber-button>

```vue
<template>
  <cyber-button @click="showInfo">信息通知</cyber-button>
  <cyber-button @click="showSuccess">成功通知</cyber-button>
  <cyber-button @click="showWarning">警告通知</cyber-button>
  <cyber-button @click="showError">错误通知</cyber-button>
  <cyber-notification ref="notificationRef" />
</template>

<script setup>
import { ref } from 'vue';

const notificationRef = ref(null);

const showInfo = () => {
  notificationRef.value?.info({
    title: '信息通知',
    message: '这是一条信息通知'
  });
};

const showSuccess = () => {
  notificationRef.value?.success({
    title: '成功通知',
    message: '操作已成功完成'
  });
};

const showWarning = () => {
  notificationRef.value?.warning({
    title: '警告通知',
    message: '请注意可能的风险'
  });
};

const showError = () => {
  notificationRef.value?.error({
    title: '错误通知',
    message: '操作失败，请重试'
  });
};
</script>
```

## 不同位置

<cyber-button @click="showInfo">显示通知(右上角)</cyber-button>

<cyber-notification ref="notificationRef" position="top-right" />
<cyber-notification position="top-left" />
<cyber-notification position="bottom-right" />
<cyber-notification position="bottom-left" />
<cyber-notification position="center" />

```vue
<template>
  <cyber-notification position="top-right" />
  <cyber-notification position="top-left" />
  <cyber-notification position="bottom-right" />
  <cyber-notification position="bottom-left" />
  <cyber-notification position="center" />
</template>
```

## 不同效果

<cyber-button @click="showGlitch">故障效果</cyber-button>
<cyber-button @click="showHologram">全息效果</cyber-button>
<cyber-button @click="showCircuit">电路效果</cyber-button>

```vue
<template>
  <cyber-button @click="showGlitch">故障效果</cyber-button>
  <cyber-button @click="showHologram">全息效果</cyber-button>
  <cyber-button @click="showCircuit">电路效果</cyber-button>
  <cyber-notification ref="notificationRef" />
</template>

<script setup>
import { ref } from 'vue';

const notificationRef = ref(null);

const showGlitch = () => {
  notificationRef.value?.info({
    title: '故障效果',
    message: '这是故障效果通知',
    effect: 'glitch'
  });
};

const showHologram = () => {
  notificationRef.value?.info({
    title: '全息效果',
    message: '这是全息效果通知',
    effect: 'hologram'
  });
};

const showCircuit = () => {
  notificationRef.value?.info({
    title: '电路效果',
    message: '这是电路效果通知',
    effect: 'circuit'
  });
};
</script>
```

## 自定义持续时间

<cyber-button @click="showWithDuration(2000)">2秒后关闭</cyber-button>
<cyber-button @click="showWithDuration(5000)">5秒后关闭</cyber-button>
<cyber-button @click="showWithDuration(0)">不自动关闭</cyber-button>

```vue
<template>
  <cyber-button @click="showWithDuration(2000)">2秒后关闭</cyber-button>
  <cyber-button @click="showWithDuration(5000)">5秒后关闭</cyber-button>
  <cyber-button @click="showWithDuration(0)">不自动关闭</cyber-button>
  <cyber-notification ref="notificationRef" />
</template>

<script setup>
import { ref } from 'vue';

const notificationRef = ref(null);

const showWithDuration = (duration) => {
  notificationRef.value?.info({
    title: '持续时间',
    message: duration === 0 ? '不会自动关闭' : `${duration / 1000}秒后关闭`,
    duration
  });
};
</script>
```

## 带操作按钮

<cyber-button @click="showWithActions">显示带操作的通知</cyber-button>

```vue
<template>
  <cyber-button @click="showWithActions">显示带操作的通知</cyber-button>
  <cyber-notification ref="notificationRef" />
</template>

<script setup>
import { ref } from 'vue';

const notificationRef = ref(null);

const showWithActions = () => {
  notificationRef.value?.warning({
    title: '带操作按钮',
    message: '这条通知包含操作按钮',
    duration: 0,
    actions: [
      {
        text: '确认',
        callback: () => {
          console.log('点击了确认');
        }
      },
      {
        text: '取消',
        callback: () => {
          console.log('点击了取消');
        }
      }
    ]
  });
};
</script>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| position | 通知框位置 | string | top-right / top-left / bottom-right / bottom-left / center | top-right |
| maxCount | 最大通知数量 | number | — | 10 |
| duration | 默认显示时间（毫秒） | number | — | 4500 |
| effect | 默认效果 | string | glitch / hologram / circuit | glitch |

## 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| info | 显示信息通知 | options |
| success | 显示成功通知 | options |
| warning | 显示警告通知 | options |
| error | 显示错误通知 | options |
| create | 创建自定义通知 | options |
| close | 关闭指定通知 | id |
| clearAll | 清除所有通知 | — |

## 通知选项

| 选项名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| title | 通知标题 | string | — | — |
| message | 通知内容 | string | — | — |
| type | 通知类型 | string | info / success / warning / error | info |
| duration | 显示时间（毫秒），设为0则不会自动关闭 | number | — | 同组件的duration属性 |
| showClose | 是否显示关闭按钮 | boolean | — | true |
| showIcon | 是否显示图标 | boolean | — | true |
| actions | 操作按钮数组 | Array<{text: string, callback: Function}> | — | [] |
| effect | 通知效果 | string | glitch / hologram / circuit | 同组件的effect属性 |
| onClose | 关闭时的回调函数 | Function | — | — |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 通知关闭时触发 | id: number |
