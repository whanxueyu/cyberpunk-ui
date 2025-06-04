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
        class="original-image"
        @load="handleImageLoaded" />
      
      <canvas 
        v-if="isLoaded" 
        ref="glitchCanvasRef" 
        class="glitch-canvas"></canvas>
      
      <div v-if="!isLoaded" class="loading-placeholder">
        <div class="loading-text">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

defineOptions({
  name: 'CpGlitchImage',
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
const glitchCanvasRef = ref<HTMLCanvasElement | null>(null);
const isLoaded = ref(false);
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

// 初始化画布
const initCanvas = () => {
  if (!glitchCanvasRef.value || !imageContainerRef.value) return;
  
  const img = imageContainerRef.value.querySelector('img');
  if (!img) return;
  
  const canvas = glitchCanvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // 设置画布尺寸与图片一致
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  
  // 绘制原始图片到画布
  ctx.drawImage(img, 0, 0);
  
  // 保存原始图像数据
  originalImageData.value = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

// 应用RGB偏移故障效果
const applyRGBShiftEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const originalData = originalImageData.value.data;
  
  // RGB通道偏移量
  const shiftX = Math.floor(Math.random() * 10 * intensity);
  const shiftY = Math.floor(Math.random() * 10 * intensity);
  
  // 应用RGB偏移
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const i = (y * canvas.width + x) * 4;
      
      // 红色通道偏移
      const rX = Math.min(Math.max(x + shiftX, 0), canvas.width - 1);
      const rY = y;
      const rI = (rY * canvas.width + rX) * 4;
      data[i] = originalData[rI];
      
      // 绿色通道保持原位
      data[i + 1] = originalData[i + 1];
      
      // 蓝色通道偏移
      const bX = Math.min(Math.max(x - shiftX, 0), canvas.width - 1);
      const bY = Math.min(Math.max(y + shiftY, 0), canvas.height - 1);
      const bI = (bY * canvas.width + bX) * 4;
      data[i + 2] = originalData[bI + 2];
      
      // Alpha通道保持不变
      data[i + 3] = originalData[i + 3];
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
};

// 应用扫描线故障效果
const applyScanlineEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  
  // 扫描线间距和强度
  const lineSpacing = Math.max(2, Math.floor(10 / intensity));
  const lineIntensity = 0.3 + (intensity * 0.07);
  
  // 应用扫描线
  for (let y = 0; y < canvas.height; y++) {
    // 每隔lineSpacing行应用一次扫描线效果
    const isScanline = y % lineSpacing === 0;
    
    if (isScanline) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        
        // 增加亮度
        data[i] = Math.min(255, data[i] * (1 + lineIntensity));
        data[i + 1] = Math.min(255, data[i + 1] * (1 + lineIntensity));
        data[i + 2] = Math.min(255, data[i + 2] * (1 + lineIntensity));
      }
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
};

// 应用像素化故障效果
const applyPixelateEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  
  // 重新绘制原始图像
  ctx.putImageData(originalImageData.value, 0, 0);
  
  // 像素块大小
  const pixelSize = Math.max(2, Math.floor(intensity * 3));
  
  // 随机选择区域应用像素化
  const numRegions = Math.floor(intensity * 2);
  
  for (let i = 0; i < numRegions; i++) {
    const regionX = Math.floor(Math.random() * canvas.width);
    const regionY = Math.floor(Math.random() * canvas.height);
    const regionWidth = Math.floor(Math.random() * 50 * intensity) + 20;
    const regionHeight = Math.floor(Math.random() * 30 * intensity) + 10;
    
    // 应用像素化效果到选定区域
    for (let y = regionY; y < regionY + regionHeight; y += pixelSize) {
      for (let x = regionX; x < regionX + regionWidth; x += pixelSize) {
        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
          // 获取像素块左上角的颜色
          const pixelData = ctx.getImageData(x, y, 1, 1).data;
          
          // 用这个颜色填充整个像素块
          ctx.fillStyle = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    }
  }
};

// 应用噪点故障效果
const applyNoiseEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;
  
  const canvas = ctx.canvas;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  
  // 噪点强度
  const noiseIntensity = intensity * 30;
  
  // 应用噪点
  for (let i = 0; i < data.length; i += 4) {
    // 随机决定是否应用噪点
    if (Math.random() < 0.1 * intensity) {
      // 随机噪点值
      const noise = (Math.random() - 0.5) * noiseIntensity;
      
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
};

// 应用组合故障效果
const applyCombinedEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  // 随机选择2-3种效果组合
  const effects = ['rgb-shift', 'scanline', 'pixelate', 'noise'];
  const shuffled = [...effects].sort(() => 0.5 - Math.random());
  const selectedEffects = shuffled.slice(0, 2 + Math.floor(Math.random() * 2));
  
  // 应用选中的效果
  selectedEffects.forEach(effect => {
    switch (effect) {
      case 'rgb-shift':
        applyRGBShiftEffect(ctx, intensity * 0.8);
        break;
      case 'scanline':
        applyScanlineEffect(ctx, intensity);
        break;
      case 'pixelate':
        applyPixelateEffect(ctx, intensity * 0.7);
        break;
      case 'noise':
        applyNoiseEffect(ctx, intensity * 0.9);
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
    if (Math.random() < 0.3) {
      applyGlitchEffect();
      
      // 短暂显示故障效果后恢复
      setTimeout(() => {
        restoreOriginalImage();
      }, 300 + Math.random() * 700);
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
    if (isGlitching.value && !props.animated) {
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
  }
  
  // 如果正在故障中，更新故障效果
  if (isGlitching.value) {
    applyGlitchEffect();
  }
});

// 组件挂载时
onMounted(() => {
  // 图片可能已经加载完成
  const img = imageContainerRef.value?.querySelector('img');
  if (img && img.complete) {
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
    
    .loading-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.2);
      
      .loading-text {
        color: #00e6f6;
        font-family: monospace;
        font-size: 14px;
        text-shadow: 0 0 5px #00e6f6;
      }
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
