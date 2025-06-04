<template>
  <div 
    :class="['cp-neon-toggle', shapeClass, { 'active': modelValue, 'disabled': disabled }]"
    @click="toggleSwitch"
    :aria-checked="modelValue"
    role="switch"
    :aria-disabled="disabled">
    <div class="toggle-track">
      <div class="toggle-track-inner"></div>
      <div class="circuit-lines"></div>
    </div>
    <div class="toggle-thumb">
      <div class="pulse-effect" v-if="pulseEffect && modelValue"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'CpNeonToggle',
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  shape: {
    type: String,
    default: 'circle',
    validator: (value: string) => {
      return ['circle', 'square', 'hex'].indexOf(value) !== -1
    }
  },
  activeColor: {
    type: String,
    default: '#00e6f6'
  },
  pulseEffect: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const shapeClass = computed(() => {
  switch (props.shape) {
    case 'circle':
      return 'circle-shape';
    case 'square':
      return 'square-shape';
    case 'hex':
      return 'hex-shape';
    default:
      return 'circle-shape';
  }
});

const toggleSwitch = () => {
  if (props.disabled) return;
  
  const newValue = !props.modelValue;
  emit('update:modelValue', newValue);
  emit('change', newValue);
};
</script>

<style lang="scss" scoped>
.cp-neon-toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  
  .toggle-track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(20, 20, 30, 0.7);
    transition: all 0.3s ease;
    overflow: hidden;
    
    .toggle-track-inner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
      opacity: 0.3;
    }
    
    .circuit-lines {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      
      &::before, &::after {
        content: '';
        position: absolute;
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      &::before {
        top: 50%;
        left: 10%;
        right: 10%;
        height: 1px;
        transform: translateY(-50%);
      }
      
      &::after {
        top: 30%;
        bottom: 30%;
        left: 50%;
        width: 1px;
        transform: translateX(-50%);
      }
    }
  }
  
  .toggle-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background-color: #fff;
    transition: all 0.3s ease;
    z-index: 2;
    
    .pulse-effect {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: v-bind('props.activeColor');
      border-radius: inherit;
      opacity: 0;
      animation: pulse 1.5s ease-in-out infinite;
    }
  }
  
  &.active {
    .toggle-track {
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 10px v-bind('props.activeColor'), inset 0 0 5px v-bind('props.activeColor');
      
      &::before {
        opacity: 1;
      }
    }
    
    .toggle-thumb {
      left: calc(100% - 27px);
      background-color: v-bind('props.activeColor');
      box-shadow: 0 0 10px v-bind('props.activeColor');
    }
    
    .circuit-lines {
      &::before, &::after {
        background-color: v-bind('props.activeColor');
        opacity: 0.3;
        animation: circuit-flow 2s linear infinite;
      }
    }
  }
  
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    .toggle-track, .toggle-thumb {
      filter: grayscale(70%);
    }
  }
  
  // 形状样式
  &.circle-shape {
    .toggle-track {
      border-radius: 15px;
    }
    
    .toggle-thumb {
      border-radius: 50%;
    }
  }
  
  &.square-shape {
    .toggle-track {
      border-radius: 4px;
    }
    
    .toggle-thumb {
      border-radius: 2px;
    }
  }
  
  &.hex-shape {
    .toggle-track {
      clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
    }
    
    .toggle-thumb {
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(0.5);
  }
  50% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

@keyframes circuit-flow {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.1;
  }
}
</style>
