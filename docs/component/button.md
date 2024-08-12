---
title: Button
lang: en-US
---
# button 按钮
按钮分为三种，第一种故障按钮，第二种是反光按钮，第三种是描边按钮
## 故障按钮
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


## 霓虹按钮
这是一个霓虹效果且具有反光的按钮
### 按钮大小
从左到右依次是：``large`` 大、``default`` 中（默认）、``small`` 小
<div>
    <cp-nenobutton type="primary" size="large">PRIMARY</cp-nenobutton>
    <cp-nenobutton type="primary" size="default">PRIMARY</cp-nenobutton>
    <cp-nenobutton type="primary" size="small">PRIMARY</cp-nenobutton>
</div>
<br>

```vue
<template>
    <cp-nenobutton type="primary" size="large">PRIMARY</cp-nenobutton>
    <cp-nenobutton type="primary" size="default">PRIMARY</cp-nenobutton>
    <cp-nenobutton type="primary" size="small">PRIMARY</cp-nenobutton>
</template>

```

### 按钮类型
从左到右依次是：``primary`` 、``success`` 、``warning``、``danger``
<div>
    <cp-nenobutton type="primary" size="default">PRIMARY</cp-nenobutton>
    <cp-nenobutton type="success" size="default">SUCCESS</cp-nenobutton>
    <cp-nenobutton type="warning" size="default">WARNING</cp-nenobutton>
    <cp-nenobutton type="danger" size="default">DANGER</cp-nenobutton>
</div>
<br>

```vue
<template>
    <cp-nenobutton type="primary" size="default">PRIMARY</cp-nenobutton>
    <cp-nenobutton type="success" size="default">SUCCESS</cp-nenobutton>
    <cp-nenobutton type="warning" size="default">WARNING</cp-nenobutton>
    <cp-nenobutton type="danger" size="default">DANGER</cp-nenobutton>
</template>

```

### 背景色

写法说明，直接 ``bg`` 或 ``:bg=“true”`` 都可以
<div>
    <div>
        <cp-nenobutton type="primary">PRIMARY</cp-nenobutton>
        <cp-nenobutton type="primary" :bg="true">PRIMARY</cp-nenobutton>
    </div>
    <div>
        <cp-nenobutton type="success">SUCCESS</cp-nenobutton>
        <cp-nenobutton type="success" :bg="true">SUCCESS</cp-nenobutton>
    </div>
    <div>
        <cp-nenobutton type="warning">WARNING</cp-nenobutton>
        <cp-nenobutton type="warning" bg>WARNING</cp-nenobutton>
    </div>
    <div>
        <cp-nenobutton type="danger">DANGER</cp-nenobutton>
        <cp-nenobutton type="danger" bg>DANGER</cp-nenobutton>
    </div>
</div>

```vue
<template>
    <div>
        <cp-nenobutton type="primary">PRIMARY</cp-nenobutton>
        <cp-nenobutton type="primary" :bg="true">PRIMARY</cp-nenobutton>
    </div>
    <div>
        <cp-nenobutton type="success">SUCCESS</cp-nenobutton>
        <cp-nenobutton type="success" :bg="true">SUCCESS</cp-nenobutton>
    </div>
    <div>
        <cp-nenobutton type="warning">WARNING</cp-nenobutton>
        <cp-nenobutton type="warning" bg>WARNING</cp-nenobutton>
    </div>
    <div>
        <cp-nenobutton type="danger">DANGER</cp-nenobutton>
        <cp-nenobutton type="danger" bg>DANGER</cp-nenobutton>
    </div>
</template>

```

## 反光按钮
这是一个镜面反射效果且具有描边动画效果的按钮
``注意`` 由于这个按钮有反光镜面效果，所以按钮下方最好空出来
### 按钮大小
从左到右依次是：``large`` 大、``default`` 中（默认）、``small`` 小
<div>
    <cp-reflectbutton type="primary" size="large">PRIMARY</cp-reflectbutton>
    <cp-reflectbutton type="primary" size="default">PRIMARY</cp-reflectbutton>
    <cp-reflectbutton type="primary" size="small">PRIMARY</cp-reflectbutton>
</div>
<br><br><br><br>

```vue
<template>
    <cp-reflectbutton type="primary" size="large">PRIMARY</cp-reflectbutton>
    <cp-reflectbutton type="primary" size="default">PRIMARY</cp-reflectbutton>
    <cp-reflectbutton type="primary" size="small">PRIMARY</cp-reflectbutton>
</template>

```
### 按钮类型
从左到右依次是：``primary`` 、``success`` 、``warning``、``danger``
<div>
    <cp-reflectbutton type="primary" size="default">PRIMARY</cp-reflectbutton>
    <cp-reflectbutton type="success" size="default">SUCCESS</cp-reflectbutton>
    <cp-reflectbutton type="warning" size="default">WARNING</cp-reflectbutton>
    <cp-reflectbutton type="danger" size="default">DANGER</cp-reflectbutton>
    <br><br><br>
</div>
<br>

```vue
<template>
    <cp-reflectbutton type="primary" size="default">PRIMARY</cp-reflectbutton>
    <cp-reflectbutton type="success" size="default">SUCCESS</cp-reflectbutton>
    <cp-reflectbutton type="warning" size="default">WARNING</cp-reflectbutton>
    <cp-reflectbutton type="danger" size="default">DANGER</cp-reflectbutton>
</template>

```

### 背景色

写法说明，直接 ``bg`` 或 ``:bg=“true”`` 都可以
<div>
    <div>PRIMARY
        <cp-reflectbutton type="primary">PRIMARY</cp-reflectbutton>
        <cp-reflectbutton type="primary" :bg="true">PRIMARY</cp-reflectbutton>
    </div>
    <br><br><br>
    <div>SUCCESS
        <cp-reflectbutton type="success">SUCCESS</cp-reflectbutton>
        <cp-reflectbutton type="success" :bg="true">SUCCESS</cp-reflectbutton>
    </div>
    <br><br><br>
    <div>WARNING
        <cp-reflectbutton type="warning">WARNING</cp-reflectbutton>
        <cp-reflectbutton type="warning" bg>WARNING</cp-reflectbutton>
    </div>
    <br><br><br>
    <div>DANGER
        <cp-reflectbutton type="danger">DANGER</cp-reflectbutton>
        <cp-reflectbutton type="danger" bg>DANGER</cp-reflectbutton>
    </div>
    <br><br><br>
</div>

```vue
<template>
    <div>
        <cp-reflectbutton type="primary">PRIMARY</cp-reflectbutton>
        <cp-reflectbutton type="primary" :bg="true">PRIMARY</cp-reflectbutton>
    </div>
    <div>
        <cp-reflectbutton type="success">SUCCESS</cp-reflectbutton>
        <cp-reflectbutton type="success" :bg="true">SUCCESS</cp-reflectbutton>
    </div>
    <div>
        <cp-reflectbutton type="warning">WARNING</cp-reflectbutton>
        <cp-reflectbutton type="warning" bg>WARNING</cp-reflectbutton>
    </div>
    <div>
        <cp-reflectbutton type="danger">DANGER</cp-reflectbutton>
        <cp-reflectbutton type="danger" bg>DANGER</cp-reflectbutton>
    </div>
</template>

```



## 参数说明

| 名称        | 说明             | 类型                                                  | 默认值     |
| ----------- |:-----------------| -----------------------------------------------------|-----------|
| size        | 控制按钮大小     | `'large'\| 'default'\| 'small'`                       | ``default``|
| type        | 控制按钮类型样式 | `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'`| ``primary``|
| bg          | 是否有背景色(反光按钮，描边按钮生效) | boolean                             | ``false``  |