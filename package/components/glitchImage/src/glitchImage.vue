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

// 应用RGB偏移故障效果 — 按水平切片逐行随机偏移
const applyRGBShiftEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;

  const canvas = ctx.canvas;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const origData = originalImageData.value.data;

  const maxShift = Math.floor(8 + 25 * intensity);

  // 按水平切片分组，每组有不同的偏移量
  const sliceCount = Math.floor(8 + intensity * 20);
  const sliceHeight = Math.max(2, Math.floor(canvas.height / sliceCount));

  for (let slice = 0; slice < sliceCount; slice++) {
    const yStart = slice * sliceHeight;
    const yEnd = Math.min(yStart + sliceHeight, canvas.height);
    // 每个切片独立的随机偏移
    const rShift = Math.floor((Math.random() - 0.5) * 2 * maxShift);
    const bShift = Math.floor((Math.random() - 0.5) * 2 * maxShift);

    for (let y = yStart; y < yEnd; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        // 红色通道偏移
        const rx = Math.min(Math.max(x + rShift, 0), canvas.width - 1);
        data[i] = origData[(y * canvas.width + rx) * 4];
        // 蓝色通道反向偏移
        const bx = Math.min(Math.max(x + bShift, 0), canvas.width - 1);
        data[i + 2] = origData[(y * canvas.width + bx) * 4 + 2];
        // 绿色保持原位
        data[i + 1] = origData[i + 1];
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
};

// 应用扫描线效果 — CRT 显示器风格，暗色细线 + 随机亮线干扰
const applyScanlineEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;

  const canvas = ctx.canvas;
  ctx.putImageData(originalImageData.value, 0, 0);

  const spacing = Math.max(2, Math.floor(6 - intensity * 0.4));

  // CRT 暗色扫描线
  for (let y = 0; y < canvas.height; y += spacing) {
    ctx.fillStyle = `rgba(0, 0, 0, ${0.15 + intensity * 0.05})`;
    ctx.fillRect(0, y, canvas.width, Math.max(1, Math.floor(spacing / 3)));
  }

  // 随机亮线（模拟损坏的 CRT）
  const brightLines = Math.floor(intensity * 3);
  for (let i = 0; i < brightLines; i++) {
    const ly = Math.floor(Math.random() * canvas.height);
    const lh = 1 + Math.floor(Math.random() * 3);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`;
    ctx.fillRect(0, ly, canvas.width, lh);
  }
};

// 应用像素化效果 — 用离屏 canvas 缩放实现干净的马赛克，仅作用于随机区域
const applyPixelateEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;

  const canvas = ctx.canvas;
  ctx.putImageData(originalImageData.value, 0, 0);

  const blockSize = Math.max(2, Math.floor(4 + intensity * 6));
  const bandCount = Math.floor(2 + intensity * 3);

  for (let b = 0; b < bandCount; b++) {
    const bandY = Math.floor(Math.random() * (canvas.height - 20));
    const bandH = Math.floor(10 + Math.random() * 50 * intensity);

    // 在离屏 canvas 上缩小再放大，自动产生像素化
    const off = document.createElement('canvas');
    off.width = Math.max(2, Math.ceil(canvas.width / blockSize));
    off.height = Math.max(2, Math.ceil(bandH / blockSize));
    const offCtx = off.getContext('2d')!;
    offCtx.imageSmoothingEnabled = false;
    offCtx.drawImage(canvas, 0, bandY, canvas.width, bandH, 0, 0, off.width, off.height);

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, off.width, off.height, 0, bandY, canvas.width, bandH);
    ctx.imageSmoothingEnabled = true;
  }
};

// 应用噪点效果 — 降低密度，加入水平条纹和色块，模拟模拟视频劣化
const applyNoiseEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  if (!originalImageData.value) return;

  const canvas = ctx.canvas;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  const density = 0.03 + intensity * 0.03;

  for (let i = 0; i < data.length; i += 4) {
    if (Math.random() < density) {
      if (Math.random() < 0.7) {
        // 灰度噪点（更常见于真实视频干扰）
        const v = Math.floor(Math.random() * 160 + 95);
        data[i] = v; data[i + 1] = v; data[i + 2] = v;
      } else {
        // 彩色噪点
        data[i] = Math.floor(Math.random() * 256);
        data[i + 1] = Math.floor(Math.random() * 256);
        data[i + 2] = Math.floor(Math.random() * 256);
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // 随机水平条纹
  const streaks = Math.floor(intensity * 4);
  for (let i = 0; i < streaks; i++) {
    const sy = Math.floor(Math.random() * canvas.height);
    const sh = 1 + Math.floor(Math.random() * 3);
    const alpha = 0.1 + Math.random() * 0.2;
    const isDark = Math.random() > 0.5;
    ctx.fillStyle = isDark
      ? `rgba(0, 0, 0, ${alpha})`
      : `rgba(255, 255, 255, ${alpha})`;
    ctx.fillRect(0, sy, canvas.width, sh);
  }
};

// 应用组合故障效果 — rgb-shift 作为基础，再叠加 1-2 种辅效果
const applyCombinedEffect = (ctx: CanvasRenderingContext2D, intensity: number) => {
  // 基础效果：rgb-shift 是核心
  applyRGBShiftEffect(ctx, intensity);

  // 随机叠加 1-2 种辅效果
  const secondary = ['scanline', 'pixelate', 'noise'];
  const count = 1 + Math.floor(Math.random() * 2);
  for (let i = secondary.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [secondary[i], secondary[j]] = [secondary[j], secondary[i]];
  }

  secondary.slice(0, count).forEach(effect => {
    const reducedIntensity = intensity * 0.6;
    switch (effect) {
      case 'scanline': applyScanlineEffect(ctx, reducedIntensity); break;
      case 'pixelate': applyPixelateEffect(ctx, reducedIntensity); break;
      case 'noise': applyNoiseEffect(ctx, reducedIntensity); break;
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
      animation: glitch-flicker 3s infinite steps(1);
    }
  }
}

@keyframes glitch-flicker {
  0%, 92% { opacity: 1; transform: none; }
  93% { opacity: 0.85; transform: translateX(-3px); }
  94% { opacity: 1; transform: none; }
  96% { opacity: 0.8; transform: translateX(2px); }
  97% { opacity: 1; transform: none; }
}
</style>