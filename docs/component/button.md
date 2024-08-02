---
title: Button
lang: en-US
---
# button 按钮
按钮分为三种，第一种故障按钮，第二种是反光按钮，第三种是描边按钮
## button 故障按钮
这是一个最基础的按钮，也是最具代表性的
<cp-button type="danger">CyberPunkUI</cp-button>
```vue
<template>
    <cp-button type="danger">CyberPunkUI</cp-button>
</template>
```
### 按钮样式
``primary``、``success``、``warning``、``danger``
<cp-button type="primary" content="PRIMARY">PRIMARY</cp-button>
<cp-button type="success" content="SUCCESS">SUCCESS</cp-button>
<br>
<br>
<cp-button type="warning" content="WARNING">WARNING</cp-button>
<cp-button type="danger" content="DANGER">DANGER</cp-button>
<br>
<br>

```vue
<template>
    <cp-button type="primary" content="PRIMARY">PRIMARY</cp-button>
    <cp-button type="success" content="SUCCESS">SUCCESS</cp-button>
    <cp-button type="warning" content="WARNING">WARNING</cp-button>
    <cp-button type="danger" content="DANGER">DANGER</cp-button>
</template>
```

<br>

### 按钮大小
从左到右依次是：``large`` 大、``default`` 中（默认）、``small`` 小
<div>
    <cp-button type="primary" size="large" content="PRIMARY">PRIMARY</cp-button>
    <cp-button type="primary" size="default" content="PRIMARY">PRIMARY</cp-button>
    <cp-button type="primary" size="small" content="PRIMARY">PRIMARY</cp-button>
</div>
<br>
<div>
    <cp-button type="success" size="large" content="SUCCESS">SUCCESS</cp-button>
    <cp-button type="success" size="default" content="SUCCESS">SUCCESS</cp-button>
    <cp-button type="success" size="small" content="SUCCESS">SUCCESS</cp-button>
</div>
<br>
<div>
    <cp-button type="warning" size="large" content="WARNING">WARNING</cp-button>
    <cp-button type="warning" size="default" content="WARNING">WARNING</cp-button>
    <cp-button type="warning" size="small" content="WARNING">WARNING</cp-button>
</div>
<br>
<div>
    <cp-button type="danger" size="large" content="DANGER">DANGER</cp-button>
    <cp-button type="danger" size="default" content="DANGER">DANGER</cp-button>
    <cp-button type="danger" size="small" content="DANGER">DANGER</cp-button>
</div>


```vue
<template>
    <div>
        <cp-button type="primary" size="large" content="PRIMARY">PRIMARY</cp-button>
        <cp-button type="primary" size="default" content="PRIMARY">PRIMARY</cp-button>
        <cp-button type="primary" size="small" content="PRIMARY">PRIMARY</cp-button>
    </div>
    <div>
        <cp-button type="success" size="large" content="SUCCESS">SUCCESS</cp-button>
        <cp-button type="success" size="default" content="SUCCESS">SUCCESS</cp-button>
        <cp-button type="success" size="small" content="SUCCESS">SUCCESS</cp-button>
    </div>
    <div>
        <cp-button type="warning" size="large" content="WARNING">WARNING</cp-button>
        <cp-button type="warning" size="default" content="WARNING">WARNING</cp-button>
        <cp-button type="warning" size="small" content="WARNING">WARNING</cp-button>
    </div>
    <div>
        <cp-button type="danger" size="large" content="DANGER">DANGER</cp-button>
        <cp-button type="danger" size="default" content="DANGER">DANGER</cp-button>
        <cp-button type="danger" size="small" content="DANGER">DANGER</cp-button>
    </div>
</template>
```


## button 反光按钮
这是一个霓虹效果且具有反光的按钮

## button 描边按钮
这是一个霓虹发光效果且具有描边动画效果的按钮

| 名称        | 说明             | 类型                                                            | 默认值      |
| ----------- |:-----------------| ---------------------------------------------------------------| -----------|
| size        | 控制按钮大小     | `'large'\| 'default'\| 'small'`                       | ``default``|
| type        | 控制按钮类型样式 | `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'`| ``primary``|