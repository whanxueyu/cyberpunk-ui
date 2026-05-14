<template>
  <div 
    :class="['cp-glitch-image', { 'animated': animated }]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick">
    <div class="image-container" ref="imageContainerRef">
      <img 
        :src="src" 
        :alt="alt" 
        ref="imageRef"
        class="original-image"
        crossOrigin="anonymous" 
        @load="handleImageLoaded"
        @error="handleImageError" />
      
      <canvas 
        v-if="isLoaded && !loadError" 
        ref="glitchCanvasRef" 
        class="glitch-canvas"></canvas>
      
      <div v-if="!isLoaded && !loadError" class="loading-placeholder">
        <div class="loading-text">Loading...</div>
      </div>
      
      <div v-if="loadError" class="error-placeholder">
        <div class="error-text">Image Load Failed</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

defineOptions({
  name: 'CyberGlitchImage',
})

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Glitch image'
  },
  glitchType: {
    type: String,
    default: 'rgb-shift',
    validator: (value: string) => {
      return ['rgb-shift', 'scanline', 'pixelate', 'noise', 'combined'].indexOf(value) !== -1
    }
  },
  intensity: {
    type: Number,
    default: 5,
    validator: (value: number) => {
      return value >= 1 && value <= 10
    }
  },
  animated: {
    type: Boolean,
    default: false
  },
  triggerMode: {
    type: String,
    default: 'hover',
    validator: (value: string) => {
      return ['hover', 'click', 'auto', 'random'].indexOf(value) !== -1
    }
  },
  interval: {
    type: Number,
    default: 1000
  }
});

const emit = defineEmits(['glitch-start', 'glitch-end']);

const imageContainerRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);
const glitchCanvasRef = ref<HTMLCanvasElement | null>(null);
const isLoaded = ref(false);
const loadError = ref(false);
const isGlitching = ref(false);
const glitchInterval = ref<number | null>(null);
const originalImageData = ref<ImageData | null>(null);

// 计算实际的故障强度
const actualIntensity = computed(() => {
  return props.intensity / 10;
});

// 处理图片加载完成
const handleImageLoaded = () => {
  isLoaded.value = true;
  loadError.value = false;
  
  // 在下一个渲染周期初始化画布
  setTimeout(() => {
    initCanvas();
    
    // 如果是自动模式或随机模式，启动故障效果
    if (props.triggerMode === 'auto') {
      startGlitchEffect();
    } else if (props.triggerMode === 'random') {
      startRandomGlitchEffect();
    }
  }, 0);
};

// 处理图片加载错误
const handleImageError = () => {
  loadError.value = true;
  isLoaded.value = false;
  console.error('Failed to load image:', props.src);
};

// 初始化画布
const initCanvas = () => {
  if (!glitchCanvasRef.value || !imageRef.value) return;
  
  const img = imageRef.value;
  const canvas = glitchCanvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // 设置画布尺寸与图片一致
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  
  try {
    // 绘制原始图片到画布
    ctx.drawImage(img, 0, 0);
    // 保存原始图像数据
    originalImageData.value = ctx.getImageData(0, 0, canvas.width, canvas.height);
  } catch (e) {
    console.error('Failed to get image data (possibly CORS issue):', e);
    loadError.value = true;
  }
};

// 应用RGB偏移故障效果 - 增强效果
const applyRGBShiftEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const originalData = originalImageData.value.data;
  
  // RGB通道偏移量 - 增加强度
  const maxShift = Math.floor(20 * intensity);
  const shiftX = Math.floor(Math.random() * maxShift);
  const shiftY = Math.floor(Math.random() * maxShift);
  
  // 应用RGB偏移
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const i = (y * canvas.width + x) * 4;
      
      // 红色通道偏移
      const rX = Math.min(Math.max(x + shiftX, 0), canvas.width - 1);
      const rY = Math.min(Math.max(y + shiftY, 0), canvas.height - 1);
      const rI = (rY * canvas.width + rX) * 4;
      data[i] = originalData[rI]; // Red
      
      // 蓝色通道反向偏移
      const bX = Math.min(Math.max(x - shiftX, 0), canvas.width - 1);
      const bY = Math.min(Math.max(y - shiftY, 0), canvas.height - 1);
      const bI = (bY * canvas.width + bX) * 4;
      data[i + 2] = originalData[bI + 2]; // Blue
      
      // 绿色通道保持原位或轻微偏移
      data[i + 1] = originalData[i + 1]; // Green
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
};

// 应用扫描线故障效果 - 增强效果
const applyScanlineEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  ctx.putImageData(originalImageData.value, 0, 0);
  
  // 扫描线参数
  const lineSpacing = Math.max(1, Math.floor(5 / intensity));
  const lineIntensity = 0.5 + (intensity * 0.1); // 增加强度
  
  // 应用扫描线
  for (let y = 0; y < canvas.height; y += lineSpacing * 2) {
    ctx.fillStyle = `rgba(255, 255, 255, ${lineIntensity})`;
    ctx.fillRect(0, y, canvas.width, lineSpacing);
  }
};

// 应用像素化故障效果 - 优化实现
const applyPixelateEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  ctx.putImageData(originalImageData.value, 0, 0);
  
  // 像素块大小
  const pixelSize = Math.max(4, Math.floor(intensity * 8)); // 增大像素块
  
  // 像素化整个图像或部分区域
  const doFullImage = Math.random() > 0.5;
  
  if (doFullImage) {
    // 像素化整个图像
    for (let y = 0; y < canvas.height; y += pixelSize) {
      for (let x = 0; x < canvas.width; x += pixelSize) {
        // 获取像素块左上角的颜色
        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        ctx.fillStyle = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }
  } else {
    // 像素化随机区域
    const numRegions = Math.floor(intensity * 3);
    for (let i = 0; i < numRegions; i++) {
      const regionX = Math.floor(Math.random() * (canvas.width - 50));
      const regionY = Math.floor(Math.random() * (canvas.height - 50));
      const regionWidth = Math.floor(Math.random() * 100 * intensity) + 30;
      const regionHeight = Math.floor(Math.random() * 80 * intensity) + 20;
      
      for (let y = regionY; y < regionY + regionHeight; y += pixelSize) {
        for (let x = regionX; x < regionX + regionWidth; x += pixelSize) {
          if (x < canvas.width && y < canvas.height) {
            const pixelData = ctx.getImageData(x, y, 1, 1).data;
            ctx.fillStyle = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }
      }
    }
  }
};

// 应用噪点故障效果 - 增强效果
const applyNoiseEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  
  // 噪点参数
  const noiseIntensity = intensity * 50; // 增加强度
  const noiseDensity = 0.2 + (intensity * 0.05); // 增加密度
  
  // 应用噪点
  for (let i = 0; i < data.length; i += 4) {
    if (Math.random() < noiseDensity) {
      const isWhiteNoise = Math.random() > 0.5;
      if (isWhiteNoise) {
        // 白色噪点
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      } else {
        // 彩色噪点
        data[i] = Math.floor(Math.random() * 256);
        data[i + 1] = Math.floor(Math.random() * 256);
        data[i + 2] = Math.floor(Math.random() * 256);
      }
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
};

// 应用组合故障效果
const applyCombinedEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  // 固定选择2-3种效果组合，确保效果明显
  const effects = ['rgb-shift', 'scanline', 'pixelate', 'noise'];
  const shuffled = [...effects].sort(() => 0.5 - Math.random());
  const selectedEffects = shuffled.slice(0, 2 + Math.floor(Math.random() * 2));
  
  // 依次应用选中的效果
  selectedEffects.forEach(effect => {
    switch (effect) {
      case 'rgb-shift':
        applyRGBShiftEffect(ctx, intensity);
        break;
      case 'scanline':
        applyScanlineEffect(ctx, intensity);
        break;
      case 'pixelate':
        applyPixelateEffect(ctx, intensity);
        break;
      case 'noise':
        applyNoiseEffect(ctx, intensity);
        break;
    }
  });
};

// 应用故障效果
const applyGlitchEffect = () => {
  if (!glitchCanvasRef.value || !originalImageData.value) return;
  
  const canvas = glitchCanvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // 重新绘制原始图像
  ctx.putImageData(originalImageData.value, 0, 0);
  
  // 根据故障类型应用相应效果
  switch (props.glitchType) {
    case 'rgb-shift':
      applyRGBShiftEffect(ctx, actualIntensity.value);
      break;
    case 'scanline':
      applyScanlineEffect(ctx, actualIntensity.value);
      break;
    case 'pixelate':
      applyPixelateEffect(ctx, actualIntensity.value);
      break;
    case 'noise':
      applyNoiseEffect(ctx, actualIntensity.value);
      break;
    case 'combined':
      applyCombinedEffect(ctx, actualIntensity.value);
      break;
  }
  
  isGlitching.value = true;
  emit('glitch-start');
};

// 恢复原始图像
const restoreOriginalImage = () => {
  if (!glitchCanvasRef.value || !originalImageData.value) return;
  
  const canvas = glitchCanvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  ctx.putImageData(originalImageData.value, 0, 0);
  
  isGlitching.value = false;
  emit('glitch-end');
};

// 开始故障效果
const startGlitchEffect = () => {
  // 清除之前的定时器
  if (glitchInterval.value) {
    clearInterval(glitchInterval.value);
  }
  
  // 立即应用一次故障效果
  applyGlitchEffect();
  
  // 如果是动画模式，设置定时器定期更新故障效果
  if (props.animated) {
    glitchInterval.value = window.setInterval(() => {
      applyGlitchEffect();
    }, props.interval) as unknown as number;
  }
};

// 开始随机故障效果
const startRandomGlitchEffect = () => {
  // 清除之前的定时器
  if (glitchInterval.value) {
    clearInterval(glitchInterval.value);
  }
  
  // 设置定时器随机触发故障效果
  glitchInterval.value = window.setInterval(() => {
    if (Math.random() < 0.5) { // 提高触发概率
      applyGlitchEffect();
      
      // 短暂显示故障效果后恢复
      setTimeout(() => {
        restoreOriginalImage();
      }, 200 + Math.random() * 300); // 缩短恢复时间
    }
  }, props.interval) as unknown as number;
};

// 停止故障效果
const stopGlitchEffect = () => {
  if (glitchInterval.value) {
    clearInterval(glitchInterval.value);
    glitchInterval.value = null;
  }
  
  restoreOriginalImage();
};

// 鼠标进入事件
const handleMouseEnter = () => {
  if (props.triggerMode === 'hover') {
    startGlitchEffect();
  }
};

// 鼠标离开事件
const handleMouseLeave = () => {
  if (props.triggerMode === 'hover' && !props.animated) {
    stopGlitchEffect();
  }
};

// 点击事件
const handleClick = () => {
  if (props.triggerMode === 'click') {
    if (isGlitching.value) {
      stopGlitchEffect();
    } else {
      startGlitchEffect();
    }
  }
};

// 监听属性变化
watch(() => [props.src, props.glitchType, props.intensity], () => {
  // 图片源变化时，重置加载状态
  if (props.src) {
    isLoaded.value = false;
    loadError.value = false;
  }
  
  // 如果正在故障中，更新故障效果
  if (isGlitching.value) {
    applyGlitchEffect();
  }
});

// 组件挂载时
onMounted(() => {
  // 图片可能已经加载完成
  if (imageRef.value && imageRef.value.complete && imageRef.value.naturalHeight !== 0) {
    handleImageLoaded();
  }
});

// 组件卸载时清理
onUnmounted(() => {
  if (glitchInterval.value) {
    clearInterval(glitchInterval.value);
  }
});
</script>

<style lang="scss" scoped>
.cp-glitch-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    
    .original-image {
      display: block;
      width: 100%;
      height: auto;
      opacity: 0; // 隐藏原始图片，使用canvas显示
    }
    
    .glitch-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    .loading-placeholder,
    .error-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.2);
    }
    
    .loading-text,
    .error-text {
      color: #00e6f6;
      font-family: 'Courier New', monospace;
      text-shadow: 0 0 5px #00e6f6;
    }
    
    .error-text {
      color: #ff003c;
      text-shadow: 0 0 5px #ff003c;
    }
  }
  
  &:hover {
    cursor: pointer;
  }
  
  &.animated {
    .glitch-canvas {
      animation: subtle-shake 0.5s infinite;
    }
  }
}

@keyframes subtle-shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}
</style>