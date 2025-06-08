---
title: Button
lang: en-US
---
# button 按钮
按钮分为三种，第一种故障按钮，第二种是反光按钮，第三种是描边按钮
## 故障按钮
这是一个最基础的按钮，也是最具代表性的
<cyber-button type="danger">CyberPunkUI</cyber-button>
```vue
<template>
    <cyber-button type="danger">CyberPunkUI</cyber-button>
</template>
```
### 按钮样式
``primary``、``success``、``warning``、``danger``
<cyber-button type="primary" content="PRIMARY">PRIMARY</cyber-button>
<cyber-button type="success" content="SUCCESS">SUCCESS</cyber-button>
<br>
<br>
<cyber-button type="warning" content="WARNING">WARNING</cyber-button>
<cyber-button type="danger" content="DANGER">DANGER</cyber-button>
<br>
<br>

```vue
<template>
    <cyber-button type="primary" content="PRIMARY">PRIMARY</cyber-button>
    <cyber-button type="success" content="SUCCESS">SUCCESS</cyber-button>
    <cyber-button type="warning" content="WARNING">WARNING</cyber-button>
    <cyber-button type="danger" content="DANGER">DANGER</cyber-button>
</template>
```

<br>

### 按钮大小
从左到右依次是：``large`` 大、``default`` 中（默认）、``small`` 小
<div>
    <cyber-button type="primary" size="large" content="PRIMARY">PRIMARY</cyber-button>
    <cyber-button type="primary" size="default" content="PRIMARY">PRIMARY</cyber-button>
    <cyber-button type="primary" size="small" content="PRIMARY">PRIMARY</cyber-button>
</div>
<br>
<div>
    <cyber-button type="success" size="large" content="SUCCESS">SUCCESS</cyber-button>
    <cyber-button type="success" size="default" content="SUCCESS">SUCCESS</cyber-button>
    <cyber-button type="success" size="small" content="SUCCESS">SUCCESS</cyber-button>
</div>
<br>
<div>
    <cyber-button type="warning" size="large" content="WARNING">WARNING</cyber-button>
    <cyber-button type="warning" size="default" content="WARNING">WARNING</cyber-button>
    <cyber-button type="warning" size="small" content="WARNING">WARNING</cyber-button>
</div>
<br>
<div>
    <cyber-button type="danger" size="large" content="DANGER">DANGER</cyber-button>
    <cyber-button type="danger" size="default" content="DANGER">DANGER</cyber-button>
    <cyber-button type="danger" size="small" content="DANGER">DANGER</cyber-button>
</div>


```vue
<template>
    <div>
        <cyber-button type="primary" size="large" content="PRIMARY">PRIMARY</cyber-button>
        <cyber-button type="primary" size="default" content="PRIMARY">PRIMARY</cyber-button>
        <cyber-button type="primary" size="small" content="PRIMARY">PRIMARY</cyber-button>
    </div>
    <div>
        <cyber-button type="success" size="large" content="SUCCESS">SUCCESS</cyber-button>
        <cyber-button type="success" size="default" content="SUCCESS">SUCCESS</cyber-button>
        <cyber-button type="success" size="small" content="SUCCESS">SUCCESS</cyber-button>
    </div>
    <div>
        <cyber-button type="warning" size="large" content="WARNING">WARNING</cyber-button>
        <cyber-button type="warning" size="default" content="WARNING">WARNING</cyber-button>
        <cyber-button type="warning" size="small" content="WARNING">WARNING</cyber-button>
    </div>
    <div>
        <cyber-button type="danger" size="large" content="DANGER">DANGER</cyber-button>
        <cyber-button type="danger" size="default" content="DANGER">DANGER</cyber-button>
        <cyber-button type="danger" size="small" content="DANGER">DANGER</cyber-button>
    </div>
</template>
```


## 霓虹按钮
这是一个霓虹效果且具有反光的按钮
### 按钮大小
从左到右依次是：``large`` 大、``default`` 中（默认）、``small`` 小
<div>
    <cyber-nenobutton type="primary" size="large">PRIMARY</cyber-nenobutton>
    <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
    <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
</div>
<br>

```vue
<template>
    <cyber-nenobutton type="primary" size="large">PRIMARY</cyber-nenobutton>
    <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
    <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
</template>

```

### 按钮类型
从左到右依次是：``primary`` 、``success`` 、``warning``、``danger``
<div>
    <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
    <cyber-nenobutton type="success" size="default">SUCCESS</cyber-nenobutton>
    <cyber-nenobutton type="warning" size="default">WARNING</cyber-nenobutton>
    <cyber-nenobutton type="danger" size="default">DANGER</cyber-nenobutton>
</div>
<br>

```vue
<template>
    <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
    <cyber-nenobutton type="success" size="default">SUCCESS</cyber-nenobutton>
    <cyber-nenobutton type="warning" size="default">WARNING</cyber-nenobutton>
    <cyber-nenobutton type="danger" size="default">DANGER</cyber-nenobutton>
</template>

```

### 背景色

写法说明，直接 ``bg`` 或 ``:bg=“true”`` 都可以
<div>
    <div>
        <cyber-nenobutton type="primary">PRIMARY</cyber-nenobutton>
        <cyber-nenobutton type="primary" :bg="true">PRIMARY</cyber-nenobutton>
    </div>
    <div>
        <cyber-nenobutton type="success">SUCCESS</cyber-nenobutton>
        <cyber-nenobutton type="success" :bg="true">SUCCESS</cyber-nenobutton>
    </div>
    <div>
        <cyber-nenobutton type="warning">WARNING</cyber-nenobutton>
        <cyber-nenobutton type="warning" bg>WARNING</cyber-nenobutton>
    </div>
    <div>
        <cyber-nenobutton type="danger">DANGER</cyber-nenobutton>
        <cyber-nenobutton type="danger" bg>DANGER</cyber-nenobutton>
    </div>
</div>

```vue
<template>
    <div>
        <cyber-nenobutton type="primary">PRIMARY</cyber-nenobutton>
        <cyber-nenobutton type="primary" :bg="true">PRIMARY</cyber-nenobutton>
    </div>
    <div>
        <cyber-nenobutton type="success">SUCCESS</cyber-nenobutton>
        <cyber-nenobutton type="success" :bg="true">SUCCESS</cyber-nenobutton>
    </div>
    <div>
        <cyber-nenobutton type="warning">WARNING</cyber-nenobutton>
        <cyber-nenobutton type="warning" bg>WARNING</cyber-nenobutton>
    </div>
    <div>
        <cyber-nenobutton type="danger">DANGER</cyber-nenobutton>
        <cyber-nenobutton type="danger" bg>DANGER</cyber-nenobutton>
    </div>
</template>

```

## 反光按钮
这是一个镜面反射效果且具有描边动画效果的按钮
``注意`` 由于这个按钮有反光镜面效果，所以按钮下方最好空出来
### 按钮大小
从左到右依次是：``large`` 大、``default`` 中（默认）、``small`` 小
<div>
    <cyber-reflectbutton type="primary" size="large">PRIMARY</cyber-reflectbutton>
    <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
    <cyber-reflectbutton type="primary" size="small">PRIMARY</cyber-reflectbutton>
</div>
<br><br><br><br>

```vue
<template>
    <cyber-reflectbutton type="primary" size="large">PRIMARY</cyber-reflectbutton>
    <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
    <cyber-reflectbutton type="primary" size="small">PRIMARY</cyber-reflectbutton>
</template>

```
### 按钮类型
从左到右依次是：``primary`` 、``success`` 、``warning``、``danger``
<div>
    <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
    <cyber-reflectbutton type="success" size="default">SUCCESS</cyber-reflectbutton>
    <cyber-reflectbutton type="warning" size="default">WARNING</cyber-reflectbutton>
    <cyber-reflectbutton type="danger" size="default">DANGER</cyber-reflectbutton>
    <br><br><br>
</div>
<br>

```vue
<template>
    <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
    <cyber-reflectbutton type="success" size="default">SUCCESS</cyber-reflectbutton>
    <cyber-reflectbutton type="warning" size="default">WARNING</cyber-reflectbutton>
    <cyber-reflectbutton type="danger" size="default">DANGER</cyber-reflectbutton>
</template>

```

### 背景色

写法说明，直接 ``bg`` 或 ``:bg=“true”`` 都可以
<div>
    <div>PRIMARY
        <cyber-reflectbutton type="primary">PRIMARY</cyber-reflectbutton>
        <cyber-reflectbutton type="primary" :bg="true">PRIMARY</cyber-reflectbutton>
    </div>
    <br><br><br>
    <div>SUCCESS
        <cyber-reflectbutton type="success">SUCCESS</cyber-reflectbutton>
        <cyber-reflectbutton type="success" :bg="true">SUCCESS</cyber-reflectbutton>
    </div>
    <br><br><br>
    <div>WARNING
        <cyber-reflectbutton type="warning">WARNING</cyber-reflectbutton>
        <cyber-reflectbutton type="warning" bg>WARNING</cyber-reflectbutton>
    </div>
    <br><br><br>
    <div>DANGER
        <cyber-reflectbutton type="danger">DANGER</cyber-reflectbutton>
        <cyber-reflectbutton type="danger" bg>DANGER</cyber-reflectbutton>
    </div>
    <br><br><br>
</div>

```vue
<template>
    <div>
        <cyber-reflectbutton type="primary">PRIMARY</cyber-reflectbutton>
        <cyber-reflectbutton type="primary" :bg="true">PRIMARY</cyber-reflectbutton>
    </div>
    <div>
        <cyber-reflectbutton type="success">SUCCESS</cyber-reflectbutton>
        <cyber-reflectbutton type="success" :bg="true">SUCCESS</cyber-reflectbutton>
    </div>
    <div>
        <cyber-reflectbutton type="warning">WARNING</cyber-reflectbutton>
        <cyber-reflectbutton type="warning" bg>WARNING</cyber-reflectbutton>
    </div>
    <div>
        <cyber-reflectbutton type="danger">DANGER</cyber-reflectbutton>
        <cyber-reflectbutton type="danger" bg>DANGER</cyber-reflectbutton>
    </div>
</template>

```



## 参数说明

| 名称        | 说明             | 类型                                                  | 默认值     |
| ----------- |:-----------------| -----------------------------------------------------|-----------|
| size        | 控制按钮大小     | `'large'\| 'default'\| 'small'`                       | ``default``|
| type        | 控制按钮类型样式 | `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'`| ``primary``|
| bg          | 是否有背景色(反光按钮，描边按钮生效) | boolean                             | ``false``  |