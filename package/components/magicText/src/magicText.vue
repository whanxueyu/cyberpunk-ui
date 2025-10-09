<template>
  <div class="text-container">
    <span class="gradient-text" :data-text="content">
        <slot></slot>
    </span>
  </div>
</template>
<script setup lang="ts">
import { ref, useSlots } from 'vue';
defineOptions({
    name: 'CyberMagicText',
})
const content = ref('')

const slots = useSlots();
if (slots && slots.default) {
    let tep = slots.default();
    content.value = tep[0].children as string
}
</script>
<style>
.text-container {
  margin: auto;
  display: inline-block;
}

.gradient-text {
  /* 主文字样式 */
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(45deg, #ff269b, #2ab5f5, #ffbf00);
  font-weight: bold;
  font-family: Arial, sans-serif; /* 明确字体，避免默认字体差异 */
  position: relative;
  display: inline-block; /* 确保元素有明确尺寸 */
  -webkit-text-stroke: 1px #2b2b50;
}

.gradient-text::after {
  /* 1. 生成与主文字完全一致的内容（核心！） */
  content: attr(data-text);
  /* 2. 强制继承主元素的字体样式（避免形状差异） */
  font: inherit; /* 继承所有字体相关样式（大小、粗细、字体族） */
  /* 3. 确保文字透明，仅显示裁剪后的背景 */
  color: transparent !important; /* 加 !important 防止被其他样式覆盖 */
  /* 4. 背景裁剪生效的核心属性 */
  background-clip: text  !important;
  -webkit-background-clip: text  !important;
  /* 5. 高光渐变（仅作用于文字区域） */
  background: radial-gradient(circle, #fff, #000 50%);
  background-size: 25% 25%;
  /* 6. 定位与尺寸：完全覆盖主文字 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 宽度与主文字一致 */
  height: 100%; /* 高度与主文字一致 */
  /* 7. 混合模式与交互设置 */
  mix-blend-mode: color-dodge;
  pointer-events: none;
  /* 8. 动画 */
  animation: shine 20s linear infinite;
}

@keyframes shine {
  0% { background-position: -100% -100%; }
  100% { background-position: 100% 100%; }
}
</style>