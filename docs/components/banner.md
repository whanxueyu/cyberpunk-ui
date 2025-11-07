---
title: FullPage
lang: en-US
---
# Banner 3D轮播

一个3D轮播图组件，可以设置阴影反射效果 `shadow`，设置每个图片宽度`imgWidth`，设置每个图片高度 `imgHeight`，设置轮播间隔时间 `animationDuration`

## 使用示例

<div class="content-1">
  <cyber-banner :imgList="imgList"></cyber-banner>
</div>

## 图片大小

<div class="content-1">
  <cyber-banner imgWidth="200" :imgHeight="120" :imgList="imgList"></cyber-banner>
  <cyber-banner :imgList="imgList"></cyber-banner>
</div>

## 动画速度

<div class="content-2">
  <div class="flex">
    <cyber-banner imgWidth="200" :imgHeight="120" :imgList="imgList" :animationDuration="30"></cyber-banner>
    <cyber-banner imgWidth="200" :imgHeight="120" :imgList="imgList" :animationDuration="10"></cyber-banner>
  </div>
</div>

## 轮播阴影

<div class="content-2">
  <div class="flex">
    <cyber-banner imgWidth="200" :imgHeight="120" :imgList="imgList" :animationDuration="30"></cyber-banner>
    <cyber-banner imgWidth="200" :imgHeight="120" :imgList="imgList" :animationDuration="10" :shadow="false"></cyber-banner>
  </div>
</div>

<script setup>

const imgList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
]
</script>

<style scoped>
.content {
    border-left: 1px solid #ccc;
    padding: 20px;
    text-align: left;
}
.content-1 {
    height: 800px;
}
.content-2 {
    height: 400px;
}
.flex {
    display: flex;
    gap: 40px;
}
</style>


## 参数说明

| 名称        | 说明             | 类型              | 可选值     | 默认值     |
| ----------- |:-----------------| -----------------|-----------|-----------|
| imgList    | 轮播图片地址数组   | `Array`| - | - |
| imgWidth   | 图片宽度     | `number`| - | `500`|
| imgHeight  | 图片高度     | `number`| - | `400`|
| shadow     | 是否显示阴影效果 | `boolean`| - | `true`|
| animationDuration | 动画速度，转一圈的时间 | `number`| - | `30`|