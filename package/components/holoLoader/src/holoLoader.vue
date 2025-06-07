<template>
  <div 
    :class="['cp-holo-loader', sizeClass, { 'transparent-bg': transparent }]">
    <div class="loader-container">
      <div :class="['holo-projection', `type-${type}`]">
        <!-- 立方体加载器 -->
        <div v-if="type === 'cube'" class="cube-loader">
          <div class="cube">
            <div class="cube-face front"></div>
            <div class="cube-face back"></div>
            <div class="cube-face right"></div>
            <div class="cube-face left"></div>
            <div class="cube-face top"></div>
            <div class="cube-face bottom"></div>
          </div>
        </div>
        
        <!-- 球体加载器 -->
        <div v-else-if="type === 'sphere'" class="sphere-loader">
          <div class="sphere">
            <div class="sphere-ring" v-for="i in 3" :key="i"></div>
          </div>
        </div>
        
        <!-- 数据流加载器 -->
        <div v-else-if="type === 'datastream'" class="datastream-loader">
          <div class="data-line" v-for="i in 10" :key="i"></div>
        </div>
        
        <!-- 电路加载器 -->
        <div v-else-if="type === 'circuit'" class="circuit-loader">
          <div class="circuit-board">
            <div class="circuit-path" v-for="i in 5" :key="i"></div>
            <div class="circuit-node" v-for="i in 6" :key="i + 10"></div>
          </div>
        </div>
      </div>
      
      <!-- 加载文本 -->
      <div v-if="text" class="loader-text">
        <span class="typing-text">{{ displayText }}</span>
        <span class="cursor">_</span>
      </div>
      
      <!-- 全息投影基座 -->
      <div class="holo-base">
        <div class="base-glow"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';

defineOptions({
  name: 'CyberHoloLoader',
})

const props = defineProps({
  type: {
    type: String,
    default: 'cube',
    validator: (value: string) => {
      return ['cube', 'sphere', 'datastream', 'circuit'].indexOf(value) !== -1
    }
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['small', 'default', 'large'].indexOf(value) !== -1
    }
  },
  text: {
    type: String,
    default: 'Loading...'
  },
  speed: {
    type: Number,
    default: 1,
    validator: (value: number) => {
      return value > 0 && value <= 3
    }
  },
  transparent: {
    type: Boolean,
    default: false
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'small-size';
    case 'default':
      return 'default-size';
    case 'large':
      return 'large-size';
    default:
      return 'default-size';
  }
});

// 打字机效果
const displayText = ref('');
const currentIndex = ref(0);
const typingInterval = ref<number | null>(null);

const startTypingEffect = () => {
  if (!props.text) return;
  
  currentIndex.value = 0;
  displayText.value = '';
  
  const typeNextChar = () => {
    if (currentIndex.value < props.text.length) {
      displayText.value += props.text[currentIndex.value];
      currentIndex.value++;
    } else {
      // 重置打字效果
      setTimeout(() => {
        currentIndex.value = 0;
        displayText.value = '';
      }, 1000);
    }
  };
  
  // 根据速度调整打字间隔
  const interval = 100 / props.speed;
  typingInterval.value = window.setInterval(typeNextChar, interval) as unknown as number;
};

// 监听文本变化，重新开始打字效果
watch(() => props.text, () => {
  if (typingInterval.value) {
    clearInterval(typingInterval.value);
  }
  startTypingEffect();
});

onMounted(() => {
  startTypingEffect();
});

onUnmounted(() => {
  if (typingInterval.value) {
    clearInterval(typingInterval.value);
  }
});
</script>

<style lang="scss" scoped>
.cp-holo-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-color: rgba(10, 10, 20, 0.8);
  position: relative;
  
  &.transparent-bg {
    background-color: transparent;
    backdrop-filter: blur(5px);
  }
  
  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .holo-projection {
    position: relative;
    margin-bottom: 20px;
    transform-style: preserve-3d;
    animation: float 3s ease-in-out infinite;
  }
  
  .loader-text {
    color: #00e6f6;
    font-family: monospace;
    margin-top: 20px;
    text-align: center;
    
    .typing-text {
      display: inline-block;
      min-width: 1ch;
    }
    
    .cursor {
      display: inline-block;
      animation: blink 1s step-end infinite;
    }
  }
  
  .holo-base {
    position: relative;
    width: 100px;
    height: 10px;
    background: linear-gradient(90deg, #111, #333, #111);
    border-radius: 50%;
    margin-top: 20px;
    
    .base-glow {
      position: absolute;
      top: -5px;
      left: 0;
      right: 0;
      height: 20px;
      background: radial-gradient(ellipse at center, #00e6f6 0%, transparent 70%);
      opacity: 0.5;
      animation: pulse 2s ease-in-out infinite;
    }
  }
  
  // 立方体加载器
  .cube-loader {
    width: 60px;
    height: 60px;
    perspective: 120px;
    
    .cube {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: rotate 3s linear infinite;
      
      .cube-face {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 230, 246, 0.2);
        border: 1px solid #00e6f6;
        box-shadow: 0 0 10px rgba(0, 230, 246, 0.5);
      }
      
      .front  { transform: rotateY(0deg) translateZ(30px); }
      .back   { transform: rotateY(180deg) translateZ(30px); }
      .right  { transform: rotateY(90deg) translateZ(30px); }
      .left   { transform: rotateY(-90deg) translateZ(30px); }
      .top    { transform: rotateX(90deg) translateZ(30px); }
      .bottom { transform: rotateX(-90deg) translateZ(30px); }
    }
  }
  
  // 球体加载器
  .sphere-loader {
    width: 60px;
    height: 60px;
    
    .sphere {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      
      .sphere-ring {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #00e6f6;
        box-shadow: 0 0 10px rgba(0, 230, 246, 0.5);
        
        &:nth-child(1) {
          animation: rotate-x 4s linear infinite;
        }
        
        &:nth-child(2) {
          animation: rotate-y 4s linear infinite;
        }
        
        &:nth-child(3) {
          animation: rotate-z 4s linear infinite;
        }
      }
    }
  }
  
  // 数据流加载器
  .datastream-loader {
    width: 60px;
    height: 60px;
    position: relative;
    
    .data-line {
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      background-color: #00e6f6;
      transform-origin: top;
      
      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          transform: translateX(#{($i - 5.5) * 5}px);
          opacity: 0.1 + ($i % 5) * 0.2;
          animation: data-flow 2s infinite;
          animation-delay: $i * 0.1s;
        }
      }
    }
  }
  
  // 电路加载器
  .circuit-loader {
    width: 60px;
    height: 60px;
    position: relative;
    
    .circuit-board {
      width: 100%;
      height: 100%;
      position: relative;
      
      .circuit-path {
        position: absolute;
        background-color: #00e6f6;
        
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            top: #{$i * 10}px;
            left: #{($i % 3) * 15}px;
            width: #{60 - ($i % 3) * 30}px;
            height: 2px;
            animation: circuit-glow 1.5s infinite;
            animation-delay: $i * 0.3s;
          }
        }
      }
      
      .circuit-node {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #00e6f6;
        box-shadow: 0 0 5px #00e6f6;
        
        @for $i from 1 through 6 {
          &:nth-child(#{$i + 10}) {
            top: #{($i % 3) * 20 + 10}px;
            left: #{($i % 2) * 50 + 5}px;
            animation: node-pulse 2s infinite;
            animation-delay: $i * 0.2s;
          }
        }
      }
    }
  }
  
  // 尺寸变体
  &.small-size {
    min-height: 150px;
    
    .cube-loader, .sphere-loader, .datastream-loader, .circuit-loader {
      width: 40px;
      height: 40px;
    }
    
    .cube .cube-face {
      &.front, &.back, &.right, &.left, &.top, &.bottom {
        transform: translateZ(20px) rotateY(0deg);
      }
    }
    
    .holo-base {
      width: 70px;
    }
    
    .loader-text {
      font-size: 12px;
    }
  }
  
  &.large-size {
    min-height: 300px;
    
    .cube-loader, .sphere-loader, .datastream-loader, .circuit-loader {
      width: 80px;
      height: 80px;
    }
    
    .cube .cube-face {
      &.front, &.back, &.right, &.left, &.top, &.bottom {
        transform: translateZ(40px) rotateY(0deg);
      }
    }
    
    .holo-base {
      width: 140px;
    }
    
    .loader-text {
      font-size: 18px;
    }
  }
}

// 动画定义
@keyframes rotate {
  0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
  100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg); }
}

@keyframes rotate-x {
  0% { transform: rotateX(0); }
  100% { transform: rotateX(360deg); }
}

@keyframes rotate-y {
  0% { transform: rotateY(0); }
  100% { transform: rotateY(360deg); }
}

@keyframes rotate-z {
  0% { transform: rotateZ(0); }
  100% { transform: rotateZ(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes data-flow {
  0% { 
    height: 0;
    top: 0;
    opacity: 1;
  }
  100% { 
    height: 100%;
    top: 0;
    opacity: 0.2;
  }
}

@keyframes circuit-glow {
  0%, 100% { 
    opacity: 0.3;
    box-shadow: 0 0 2px #00e6f6;
  }
  50% { 
    opacity: 1;
    box-shadow: 0 0 8px #00e6f6;
  }
}

@keyframes node-pulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.5;
  }
  50% { 
    transform: scale(1.5);
    opacity: 1;
  }
}
</style>
