<template>
  <div 
    :class="['cp-glitch-progress', directionClass, { 'indeterminate': indeterminate }]"
    :data-progress="progress">
    <div class="progress-container">
      <div 
        class="progress-bar" 
        :style="progressStyle"
        ref="progressBarRef">
        <div class="glitch-effect"></div>
      </div>
      <div class="progress-text" v-if="showText && !indeterminate">
        {{ progress }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';

defineOptions({
  name: 'CpGlitchProgress',
})

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
    validator: (value: number) => {
      return value >= 0 && value <= 100
    }
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: (value: string) => {
      return ['horizontal', 'vertical'].indexOf(value) !== -1
    }
  },
  glitchIntensity: {
    type: Number,
    default: 5,
    validator: (value: number) => {
      return value >= 1 && value <= 10
    }
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#00e6f6'
  },
  showText: {
    type: Boolean,
    default: true
  }
});

const progressBarRef = ref<HTMLElement | null>(null);
const glitchInterval = ref<number | null>(null);

const directionClass = computed(() => {
  return props.direction === 'vertical' ? 'vertical' : 'horizontal';
});

const progressStyle = computed(() => {
  const dimension = props.direction === 'vertical' ? 'height' : 'width';
  const value = props.indeterminate ? '100%' : `${props.progress}%`;
  
  return {
    [dimension]: value,
    backgroundColor: props.color,
    boxShadow: `0 0 ${props.glitchIntensity * 2}px ${props.color}`
  };
});

// 创建故障效果
const createGlitchEffect = () => {
  if (!progressBarRef.value) return;
  
  const glitchEffect = progressBarRef.value.querySelector('.glitch-effect') as HTMLElement;
  if (!glitchEffect) return;
  
  // 随机生成故障效果
  const applyGlitchEffect = () => {
    if (!glitchEffect) return;
    
    // 随机决定是否应用故障效果
    const shouldGlitch = Math.random() < props.glitchIntensity / 20;
    
    if (shouldGlitch) {
      // 随机RGB偏移
      const rgbShiftX = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
      const rgbShiftY = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
      
      // 随机扭曲和模糊
      const skew = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
      const blur = Math.random() * props.glitchIntensity / 2;
      
      glitchEffect.style.transform = `translate(${rgbShiftX}px, ${rgbShiftY}px) skew(${skew}deg)`;
      glitchEffect.style.filter = `blur(${blur}px)`;
      glitchEffect.style.opacity = '1';
      
      // 短暂显示故障效果后恢复
      setTimeout(() => {
        if (glitchEffect) {
          glitchEffect.style.transform = 'translate(0, 0) skew(0)';
          glitchEffect.style.filter = 'blur(0)';
          glitchEffect.style.opacity = '0';
        }
      }, 150);
    }
  };
  
  // 设置定时器，随机应用故障效果
  glitchInterval.value = window.setInterval(() => {
    applyGlitchEffect();
  }, 500) as unknown as number;
};

// 监听进度变化，触发故障效果
let prevProgress = props.progress;
watch(() => props.progress, (newVal) => {
  if (newVal !== prevProgress) {
    if (progressBarRef.value) {
      const glitchEffect = progressBarRef.value.querySelector('.glitch-effect') as HTMLElement;
      if (glitchEffect) {
        // 进度变化时立即触发一次故障效果
        const rgbShiftX = Math.random() * props.glitchIntensity * 2 - props.glitchIntensity;
        const rgbShiftY = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
        
        glitchEffect.style.transform = `translate(${rgbShiftX}px, ${rgbShiftY}px)`;
        glitchEffect.style.opacity = '1';
        
        setTimeout(() => {
          if (glitchEffect) {
            glitchEffect.style.transform = 'translate(0, 0)';
            glitchEffect.style.opacity = '0';
          }
        }, 300);
      }
    }
    prevProgress = newVal;
  }
});

onMounted(() => {
  createGlitchEffect();
});

onUnmounted(() => {
  if (glitchInterval.value) {
    clearInterval(glitchInterval.value);
  }
});
</script>

<style lang="scss" scoped>
.cp-glitch-progress {
  position: relative;
  width: 100%;
  height: 20px;
  background-color: rgba(20, 20, 30, 0.7);
  border-radius: 4px;
  overflow: hidden;
  
  &::before {
    content: attr(data-progress) '%';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-family: monospace;
    font-size: 12px;
    z-index: 3;
  }
  
  .progress-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #00e6f6;
    transition: width 0.3s ease, height 0.3s ease;
    z-index: 1;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      animation: scanline 2s linear infinite;
    }
  }
  
  .glitch-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    opacity: 0;
    z-index: 2;
    transition: transform 0.1s ease, filter 0.1s ease, opacity 0.1s ease;
    mix-blend-mode: screen;
  }
  
  .progress-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: monospace;
    font-size: 12px;
    z-index: 3;
    text-shadow: 0 0 5px rgba(0, 230, 246, 0.8);
  }
  
  &.vertical {
    width: 20px;
    height: 100%;
    min-height: 100px;
    
    .progress-bar {
      width: 100%;
      height: 0;
      bottom: 0;
      top: auto;
      
      &::after {
        background: linear-gradient(0deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      }
    }
    
    .progress-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
  }
  
  &.indeterminate {
    .progress-bar {
      animation: indeterminate-horizontal 2s linear infinite;
      width: 50% !important;
    }
    
    &.vertical .progress-bar {
      animation: indeterminate-vertical 2s linear infinite;
      height: 50% !important;
      width: 100% !important;
    }
  }
}

@keyframes scanline {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes indeterminate-horizontal {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}

@keyframes indeterminate-vertical {
  0% {
    top: -50%;
  }
  100% {
    top: 100%;
  }
}

// 完成时的特效动画
.cp-glitch-progress[data-progress="100"] {
  .progress-bar {
    animation: progress-complete 0.5s ease forwards;
  }
}

@keyframes progress-complete {
  0%, 50% {
    filter: brightness(1.5) hue-rotate(0deg);
  }
  25%, 75% {
    filter: brightness(2) hue-rotate(45deg);
  }
  100% {
    filter: brightness(1.2) hue-rotate(0deg);
  }
}
</style>
