<template>
  <div 
    :class="['cp-holo-card', `depth-${depth}`, cardType]" 
    :style="cardStyle"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave">
    <div class="holo-card-content">
      <slot></slot>
    </div>
    <div class="holo-card-hologram-effect" :style="hologramStyle"></div>
    <div class="holo-card-glow" :style="glowStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';

defineOptions({
  name: 'CyberHoloCard',
})

const slots = useSlots();

const props = defineProps({
  type: {
    type: String,
    default: 'basic',
    validator: (value: string) => {
      return ['basic', 'media', 'action'].indexOf(value) !== -1
    }
  },
  glowIntensity: {
    type: Number,
    default: 50,
    validator: (value: number) => {
      return value >= 0 && value <= 100
    }
  },
  hologramColor: {
    type: String,
    default: '#00e6f6'
  },
  depth: {
    type: Number,
    default: 3,
    validator: (value: number) => {
      return value >= 1 && value <= 5
    }
  }
});

const mousePosition = ref({ x: 0, y: 0 });
const isHovering = ref(false);

const handleMouseMove = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  mousePosition.value = {
    x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
    y: ((event.clientY - rect.top) / rect.height) * 2 - 1
  };
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
  // 重置鼠标位置，使卡片回到原始状态
  mousePosition.value = { x: 0, y: 0 };
};

const cardType = computed(() => {
  switch (props.type) {
    case 'basic':
      return 'basic-type';
    case 'media':
      return 'media-type';
    case 'action':
      return 'action-type';
    default:
      return 'basic-type';
  }
});

const cardStyle = computed(() => {
  if (!isHovering.value) return {};
  
  // 根据鼠标位置计算卡片的旋转角度
  const tiltX = mousePosition.value.y * 10; // 垂直方向的倾斜
  const tiltY = -mousePosition.value.x * 10; // 水平方向的倾斜
  
  return {
    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
    transition: 'transform 0.1s ease'
  };
});

const hologramStyle = computed(() => {
  if (!isHovering.value) return {};
  
  // 根据鼠标位置计算全息效果的位置
  const moveX = mousePosition.value.x * 10;
  const moveY = mousePosition.value.y * 10;
  
  return {
    background: `radial-gradient(circle at ${50 + moveX}% ${50 + moveY}%, ${props.hologramColor}33, transparent 70%)`,
    opacity: 0.8,
    transition: 'background 0.1s ease'
  };
});

const glowStyle = computed(() => {
  const intensity = props.glowIntensity / 100;
  
  return {
    boxShadow: `0 0 ${10 + props.glowIntensity / 5}px ${props.hologramColor}${Math.floor(intensity * 99).toString(16).padStart(2, '0')}`,
    opacity: isHovering.value ? intensity : intensity * 0.5
  };
});
</script>

<style lang="scss" scoped>
.cp-holo-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(20, 20, 30, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  
  // 玻璃态效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%);
    z-index: 1;
    pointer-events: none;
  }
  
  .holo-card-content {
    position: relative;
    z-index: 3;
  }
  
  .holo-card-hologram-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .holo-card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    pointer-events: none;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    .holo-card-hologram-effect {
      opacity: 1;
    }
    
    .holo-card-glow {
      opacity: 1;
    }
  }
}

// 深度效果
.depth-1 {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.depth-2 {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.depth-3 {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.depth-4 {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.depth-5 {
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.6);
}

// 卡片类型样式
.basic-type {
  min-height: 100px;
}

.media-type {
  min-height: 200px;
  
  img, video {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
  }
}

.action-type {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  
  .action-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}

// 全息边缘动画
@keyframes hologramEdge {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.cp-holo-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(90deg, #00e6f6, #9400d3, #ff00ff, #00e6f6) border-box;
  background-size: 300% 100%;
  animation: hologramEdge 6s linear infinite;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.7;
  z-index: 2;
}
</style>
