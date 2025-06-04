<template>
  <div :class="['cp-digital-counter', `theme-${theme}`]">
    <span class="prefix" v-if="prefix">{{ prefix }}</span>
    <div class="counter-container">
      <div 
        v-for="(digit, index) in formattedDigits" 
        :key="index"
        class="digit-container">
        <div 
          v-if="isDigitSeparator(digit)" 
          class="separator">{{ digit }}</div>
        <div 
          v-else 
          class="digit-flipper"
          :class="{ 'animate': shouldAnimate(index) }">
          <div class="digit-top">{{ digit }}</div>
          <div class="digit-bottom">{{ digit }}</div>
          <div class="digit-top flip-top">{{ getPreviousDigit(index) }}</div>
          <div class="digit-bottom flip-bottom">{{ digit }}</div>
        </div>
      </div>
    </div>
    <span class="suffix" v-if="suffix">{{ suffix }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

defineOptions({
  name: 'CpDigitalCounter',
})

const props = defineProps({
  value: {
    type: [Number, String],
    default: 0
  },
  from: {
    type: [Number, String],
    default: 0
  },
  to: {
    type: [Number, String],
    default: null
  },
  duration: {
    type: Number,
    default: 1000
  },
  format: {
    type: Object,
    default: () => ({})
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  separator: {
    type: String,
    default: ','
  },
  decimal: {
    type: Number,
    default: 0
  },
  effect: {
    type: String,
    default: 'flip',
    validator: (value: string) => {
      return ['flip', 'roll', 'fade', 'glitch'].indexOf(value) !== -1
    }
  },
  theme: {
    type: String,
    default: 'neon',
    validator: (value: string) => {
      return ['neon', 'digital', 'hologram'].indexOf(value) !== -1
    }
  }
});

const currentValue = ref(Number(props.from));
const targetValue = ref(Number(props.value));
const animationStartTime = ref<number | null>(null);
const animationFrameId = ref<number | null>(null);
const previousFormattedValue = ref('');

// 格式化数字
const formatNumber = (num: number): string => {
  // 处理小数位数
  const multiplier = Math.pow(10, props.decimal);
  const fixedNum = Math.round(num * multiplier) / multiplier;
  
  // 转换为字符串
  let numStr = fixedNum.toFixed(props.decimal);
  
  // 添加千位分隔符
  if (props.separator) {
    const parts = numStr.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, props.separator);
    numStr = parts.join('.');
  }
  
  return numStr;
};

// 格式化后的数字字符串
const formattedValue = computed(() => {
  return formatNumber(currentValue.value);
});

// 将格式化后的数字拆分为单个字符
const formattedDigits = computed(() => {
  return formattedValue.value.split('');
});

// 判断字符是否为分隔符
const isDigitSeparator = (digit: string): boolean => {
  return digit === props.separator || digit === '.';
};

// 获取前一个数字
const getPreviousDigit = (index: number): string => {
  if (!previousFormattedValue.value || index >= previousFormattedValue.value.length) {
    return formattedDigits.value[index];
  }
  return previousFormattedValue.value[index];
};

// 判断是否应该动画
const shouldAnimate = (index: number): boolean => {
  if (!previousFormattedValue.value || index >= previousFormattedValue.value.length) {
    return false;
  }
  return previousFormattedValue.value[index] !== formattedDigits.value[index] && !isDigitSeparator(formattedDigits.value[index]);
};

// 动画函数
const animate = (timestamp: number) => {
  if (animationStartTime.value === null) {
    animationStartTime.value = timestamp;
  }
  
  const elapsed = timestamp - animationStartTime.value;
  const progress = Math.min(elapsed / props.duration, 1);
  
  // 计算当前值
  const startValue = Number(props.from);
  const endValue = Number(props.to !== null ? props.to : targetValue.value);
  const newValue = startValue + (endValue - startValue) * easeOutQuart(progress);
  
  // 更新当前值
  currentValue.value = newValue;
  
  // 如果动画未完成，继续请求动画帧
  if (progress < 1) {
    animationFrameId.value = requestAnimationFrame(animate);
  } else {
    // 动画完成，设置为目标值
    currentValue.value = endValue;
    animationStartTime.value = null;
  }
};

// 缓动函数
const easeOutQuart = (x: number): number => {
  return 1 - Math.pow(1 - x, 4);
};

// 开始动画
const startAnimation = () => {
  // 保存前一个格式化值，用于确定哪些数字需要动画
  previousFormattedValue.value = formattedValue.value;
  
  // 取消之前的动画
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value);
  }
  
  // 重置动画开始时间
  animationStartTime.value = null;
  
  // 开始新的动画
  animationFrameId.value = requestAnimationFrame(animate);
};

// 监听值变化
watch(() => props.value, (newVal) => {
  targetValue.value = Number(newVal);
  startAnimation();
});

// 监听目标值变化
watch(() => props.to, (newVal) => {
  if (newVal !== null) {
    targetValue.value = Number(newVal);
    startAnimation();
  }
});

// 组件挂载时
onMounted(() => {
  // 如果初始值不等于from，开始动画
  if (Number(props.from) !== Number(props.value)) {
    startAnimation();
  }
});

// 组件卸载时
onUnmounted(() => {
  // 取消动画
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value);
  }
});
</script>

<style lang="scss" scoped>
.cp-digital-counter {
  display: inline-flex;
  align-items: center;
  font-family: monospace;
  
  .prefix, .suffix {
    margin: 0 4px;
  }
  
  .counter-container {
    display: flex;
    align-items: center;
  }
  
  .digit-container {
    position: relative;
    margin: 0 1px;
  }
  
  .separator {
    padding: 0 2px;
  }
  
  .digit-flipper {
    position: relative;
    width: 1em;
    height: 1.5em;
    perspective: 200px;
    
    .digit-top, .digit-bottom {
      position: absolute;
      width: 100%;
      height: 50%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    
    .digit-top {
      top: 0;
      line-height: 1.5em;
      transform-origin: bottom;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    
    .digit-bottom {
      bottom: 0;
      line-height: 0;
      transform-origin: top;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    
    .flip-top, .flip-bottom {
      z-index: 1;
      backface-visibility: hidden;
    }
    
    &.animate {
      .flip-top {
        animation: flip-top 0.3s ease-in;
      }
      
      .flip-bottom {
        animation: flip-bottom 0.3s ease-out;
      }
    }
  }
  
  // 主题样式
  &.theme-neon {
    color: #00e6f6;
    text-shadow: 0 0 5px #00e6f6;
    
    .digit-flipper {
      .digit-top, .digit-bottom {
        background-color: rgba(0, 30, 40, 0.3);
        border: 1px solid rgba(0, 230, 246, 0.3);
        box-shadow: 0 0 5px rgba(0, 230, 246, 0.5);
      }
    }
  }
  
  &.theme-digital {
    color: #0f0;
    text-shadow: 0 0 5px #0f0;
    font-family: 'Courier New', monospace;
    
    .digit-flipper {
      .digit-top, .digit-bottom {
        background-color: rgba(0, 20, 0, 0.3);
        border: 1px solid rgba(0, 255, 0, 0.3);
        box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
      }
    }
  }
  
  &.theme-hologram {
    color: #a0c8ff;
    text-shadow: 0 0 5px #a0c8ff;
    
    .digit-flipper {
      .digit-top, .digit-bottom {
        background-color: rgba(30, 30, 60, 0.3);
        border: 1px solid rgba(160, 200, 255, 0.3);
        box-shadow: 0 0 5px rgba(160, 200, 255, 0.5);
        backdrop-filter: blur(2px);
      }
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
      pointer-events: none;
      z-index: 1;
    }
  }
}

// 动画定义
@keyframes flip-top {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes flip-bottom {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>
