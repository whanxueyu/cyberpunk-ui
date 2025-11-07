
# CyberImage 图片组件

图片组件提供了基础的图片展示功能，支持多种显示模式和错误处理机制，适合在赛博朋克风格界面中展示图片内容。

## 基本用法

<cyber-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

```vue
<template>
  <cyber-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
</template>
```

## 设置宽高

### width & height

#### 默认尺寸

<cyber-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### 设置宽度100px 高度70px

<cyber-image class="pic" width="100px" height="70px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### 设置宽度200px 高度50px

<cyber-image class="pic" fit="contain" width="200px" height="50px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

```vue
<template>
  <cyber-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-image class="pic" width="100px" height="70px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpe"/>
  <cyber-image class="pic" fit="contain" width="200px" height="50px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
</template>
```

## 加载失败处理

### errorContent

#### 默认错误提示

<cyber-image class="pic" src="555.png"/>

#### 自定义错误文字

<cyber-image class="pic" src="555.png" error-content="我尽力了，加载失败"/>

#### errorSrc

#### 自定义错误图片

<cyber-image class="pic" src="555.png" error-src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

```vue
<template>
  <cyber-image class="pic" src="555.png"/>
  <cyber-image class="pic" src="555.png" error-content="我尽力了，加载失败"/>
  <cyber-image class="pic" src="555.png" error-src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
</template>
```

## 图片适应模式

### fit

#### cover

<cyber-image fit="cover" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### contain

<cyber-image fit="contain" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### fill

<cyber-image fit="fill" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### none

<cyber-image fit="none" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### scale-down

<cyber-image fit="scale-down" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

```vue
<template>
  <cyber-image fit="cover" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-image fit="contain" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-image fit="fill" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-image fit="none" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-image fit="scale-down" class="picfit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
</template>
```

## 加载策略

### loading

#### lazy

<cyber-image loading="lazy" class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### eager

<cyber-image loading="eager" class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

#### 禁用故障效果

<cyber-image disable-glitch class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>

```vue
<template>
  <cyber-image loading="lazy" class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-image loading="eager" class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-image disable-glitch class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
</template>
```

## 插槽使用

#### placeholder 插槽

<cyber-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"> 
  <template #placeholder> 
    <div style="color: aqua;">
      具名插槽placeholder
    </div> 
  </template> 
</cyber-image>

### error 插槽

<cyber-image class="pic" src="555.png"> <template #error> <div style="color: aqua;">具名插槽error</div> </template> </cyber-image>

```vue
<template>
  <cyber-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
    <template #placeholder>
      <div style="color: aqua;">具名插槽placeholder</div>
    </template>
  </cyber-image>
  <cyber-image class="pic" src="555.png">
    <template #error>
      <div style="color: aqua;">具名插槽error</div>
    </template>
  </cyber-image>
</template>
```

## 属性
| 属性名 | 说明 | 类型 | 可选值	| 默认值 |
|--------|------|------|--------|--------|
| src	| 图片源	| string	| —	| — | 
| width	| 宽度	| string	| — | 	— | 
| height	| 高度	| string	| —	| — | 
| fit	| 图片适应模式	| string	| cover / contain / fill / none / scale-down	| cover | 
| loading	| 加载策略	| string	| lazy / eager | 	eager | 
| error-content	| 加载失败时显示的文字	| string	| —	| Image failed to load| 
| error-src	| 加载失败时显示的图片地址	| string	| —	| — | 
| disable-glitch | 	是否禁用故障效果	| boolean	| true / false	| false | 


## 插槽
| 插槽名 |	说明 |
|--------|------|
| placeholder	| 图片加载时显示的内容|
| error	| 图片加载失败时显示的内容|
<style scoped>
.content {
    border-left: 1px solid #ccc;
    padding: 20px;
    text-align: left;
}

.flex {
    display: flex;
    flex-wrap: wrap;
}

.pic {
    width: 200px;
    height: 150px;
    margin: 10px;
}
.picfit {
    width: 150px;
    height: 150px;
    margin: 10px;
}
</style>