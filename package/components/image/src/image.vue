<template>
  <div 
    class="cyber-image-wrapper" 
    :style="wrapperStyle"
  >
    <!-- 预加载隐藏图片 -->
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :loading="loading"
      :crossorigin="crossorigin"
      class="hidden-image"
      @load="handleLoad"
      @error="handleError"
    />

    <!-- 主显示区域 -->
    <div
      class="glitch"
      :class="{
        'is-loaded': isLoaded && !hasError,
        'is-loading': !isLoaded && !hasError,
        'is-error': hasError,
        'no-glitch': disableGlitch,
      }"
      :style="{
        backgroundImage: displayImage,
        backgroundSize: computedBackgroundSize,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <!-- 故障效果层 -->
      <div 
        v-if="isLoaded && !hasError && !disableGlitch" 
        class="glitch-layer"
        :style="{ backgroundImage: displayImage }"
      ></div>
      
      <!-- 占位符 -->
      <div v-if="!isLoaded && placeholder" class="placeholder">
        <slot name="placeholder">
          <img :src="placeholder" alt="Loading..." />
        </slot>
      </div>
      
      <!-- 错误内容 -->
      <div v-else-if="hasError" class="error-content">
        <slot name="error">{{ errorContent }}</slot>
      </div>
      
      <!-- 自定义内容插槽 -->
      <slot v-if="isLoaded && !hasError"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
/// <reference types="vite/client" />
import { ref, computed, onMounted, watch } from "vue";

// 导入所有可能的图片资源（用于相对路径解析）
const imageModules = import.meta.glob('../assets/img/*.{png,jpg,jpeg,gif,webp,svg}', { eager: true, query: '?url', import: 'default' });

defineOptions({
  name: "CyberImage",
});
// 定义并设置默认值的属性
const props = withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading?: "eager" | "lazy";
    crossorigin?: "" | "anonymous" | "use-credentials";
    placeholder?: string;
    errorSrc?: string;
    errorContent?: string;
    disableGlitch?: boolean;
  }>(),
  {
    src: "",
    alt: "",
    width: "auto",
    height: "auto",
    fit: "cover",
    loading: "lazy",
    errorSrc: "",
    crossorigin: "anonymous",
    errorContent: "Image failed to load",
    disableGlitch: false,
  }
);

// 解析图片路径
const resolveImagePath = (path: string): string => {
  // 如果是绝对路径或 URL，直接返回
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
    return path;
  }
  
  // 尝试从已导入的模块中查找
  for (const [modulePath, moduleUrl] of Object.entries(imageModules)) {
    if (modulePath.includes(path) || path.includes(modulePath.split('/').pop() || '')) {
      return moduleUrl as string;
    }
  }
  
  // 如果找不到，返回原始路径（让浏览器尝试加载）
  return path;
};

// 状态管理
const isLoaded = ref(false);
const hasError = ref(false);
const actualSrc = ref('');

// 尺寸处理 - 只有设置了才返回
const wrapperStyle = computed(() => {
  const style: any = {};
  
  // 只有当用户明确设置了宽度时才应用
  if (props.width !== 'auto' && props.width !== undefined) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  
  // 只有当用户明确设置了高度时才应用
  if (props.height !== 'auto' && props.height !== undefined) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  
  // 如果没有设置任何尺寸，让容器自适应图片内容
  if (!style.width && !style.height) {
    style.display = 'inline-block';
  }
  
  return style;
});

// 背景图像计算
const displayImage = computed(() => {
  if (hasError.value && props.errorSrc) {
    return `url(${props.errorSrc})`;
  }
  if (actualSrc.value) {
    return `url(${actualSrc.value})`;
  }
  return 'none';
});

// 计算背景大小
const computedBackgroundSize = computed(() => {
  // 如果没有设置 fit，使用 cover 作为默认值
  if (!props.fit) return 'cover';
  
  switch (props.fit) {
    case 'fill':
      return '100% 100%'; // 完全填充（可能变形）
    case 'scale-down':
      return 'contain'; // 保持比例
    default:
      return props.fit; // contain, cover, none 等
  }
});

// 事件处理
const handleLoad = () => {
  actualSrc.value = resolveImagePath(props.src);
  isLoaded.value = true;
  hasError.value = false;
};

const handleError = () => {
  hasError.value = true;
  if (props.errorSrc && props.errorSrc !== props.src) {
    // 尝试加载错误备用图
    const errorImg = new Image();
    errorImg.crossOrigin = props.crossorigin || '';
    errorImg.src = resolveImagePath(props.errorSrc);
    errorImg.onload = () => {
      actualSrc.value = resolveImagePath(props.errorSrc);
      isLoaded.value = true;
    };
    errorImg.onerror = () => {
      isLoaded.value = true;
    };
  } else {
    isLoaded.value = true;
  }
};

// 监听 src 变化
watch(() => props.src, () => {
  isLoaded.value = false;
  hasError.value = false;
  actualSrc.value = resolveImagePath(props.src);
}, { immediate: true });

// 初始加载
onMounted(() => {
  if (props.src) {
    actualSrc.value = resolveImagePath(props.src);
  }
});
</script>
<style lang="scss" scoped>
.cyber-image-wrapper {
  position: relative;
  overflow: hidden;
}

.hidden-image {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
}

// 故障效果容器
.glitch {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  &.is-loaded:not(.no-glitch) {
    // 主图动画
    animation: main-img-hide 20s infinite step-end;
    
    // 故障层
    .glitch-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: inherit;
      background-position: inherit;
      background-repeat: inherit;
      
      // 第一个故障层
      &:nth-child(1) {
        animation: glitch-anim-1 20s infinite 1s step-end;
      }
      
      // 第二个故障层（需要额外添加）
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        background-size: inherit;
        background-position: inherit;
        background-repeat: inherit;
        animation: glitch-anim-1 20s infinite step-end;
      }
    }
  }
  
  &.is-loading {
    filter: blur(2px);
    opacity: 0.7;
  }
  
  &.is-error {
    background-color: #ffd3da26;
    animation: none;
    
    .glitch-layer {
      display: none;
    }
  }
  
  &.no-glitch {
    animation: none;
    
    .glitch-layer {
      display: none;
    }
  }
}

// 占位符和错误状态
.placeholder,
.error-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #93939333;
}

// 主图隐藏动画
@keyframes main-img-hide {
  5% {
    filter: invert(1);
  }
  5.2% {
    filter: none;
  }
  10% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  11% {
    filter: none;
    opacity: 1;
  }
  40% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  42% {
    opacity: 0.5;
    filter: none;
  }
  48% {
    filter: none;
    opacity: 1;
  }
  54.5% {
    opacity: 0.5;
    filter: hue-rotate(30deg);
  }
  55% {
    filter: none;
  }
  58% {
    opacity: 1;
  }
}

// 故障动画 1
@keyframes glitch-anim-1 {
  0% {
    opacity: 1;
    transform: translate3d(10px, 0, 0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  2% {
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }
  4% {
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }
  6% {
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }
  8% {
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  10% {
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  12% {
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  14% {
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  16% {
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  18% {
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  20% {
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
  21.9% {
    opacity: 1;
    transform: translate3d(10px, 0, 0);
  }
  22%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
}

// 故障动画 2（用于第二个图层）
@keyframes glitch-anim-2 {
  0% {
    opacity: 1;
    transform: translate3d(-10px, 0, 0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  2% {
    clip-path: polygon(0 10%, 100% 10%, 100% 18%, 0 18%);
  }
  4% {
    clip-path: polygon(0 25%, 100% 25%, 100% 25%, 0 25%);
  }
  6% {
    clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
  }
  8% {
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  10% {
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
  }
  12% {
    clip-path: polygon(0 85%, 100% 85%, 100% 95%, 0 95%);
  }
  14% {
    clip-path: polygon(0 5%, 100% 5%, 100% 15%, 0 15%);
  }
  16% {
    clip-path: polygon(0 35%, 100% 35%, 100% 45%, 0 45%);
  }
  18% {
    clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
  }
  20% {
    clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0 100%);
  }
  21.9% {
    opacity: 1;
    transform: translate3d(-10px, 0, 0);
  }
  22%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
}
</style>
