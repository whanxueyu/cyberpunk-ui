<template>
  <div :class="['cp-neon-toggle', shapeClass, shapeSize, { 'active': modelValue, 'disabled': disabled }]"
    @click="toggleSwitch" :aria-checked="modelValue" role="switch" :aria-disabled="disabled">
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
  name: 'CyberNeonToggle',
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
    default: '#00e6f6cc'
  },
  inActiveColor: {
    type: String,
    default: '#ffffff99'
  },
  pulseEffect: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['large', 'default', 'small'].indexOf(value) !== -1
    }
  },
});

const emit = defineEmits(['update:modelValue', 'change']);
const shapeSize = computed(() => {
  switch (props.size) {
    case 'large':
      return 'large-size';
    case 'default':
      return 'default-size';
    case 'small':
      return 'small-size';
    default:
      return 'default-size'; // 默认大小
  }
})
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
  margin: auto 3px;

  // 大尺寸样式
  &.large-size {
    width: 80px;
    height: 40px;

    .toggle-track {
      border-radius: 20px;
    }

    &.circle-shape {
      .toggle-track {
        border-radius: 30px;
      }
    }

    .toggle-thumb {
      top: 4px;
      left: 4px;
      width: 32px;
      height: 32px;

      .pulse-effect {
        width: 100%;
        height: 100%;
      }
    }

    &.active .toggle-thumb {
      left: calc(100% - 36px);
    }
  }

  // 小尺寸样式
  &.small-size {
    width: 45px;
    height: 22.5px;

    .toggle-track {
      border-radius: 11.25px;
    }

    .toggle-thumb {
      top: 2.25px;
      left: 2.25px;
      width: 17px;
      height: 17px;

      .pulse-effect {
        width: 100%;
        height: 100%;
      }
    }

    &.active .toggle-thumb {
      left: calc(100% - 20.75px);
    }
  }

  // 默认尺寸样式（保持现有，但明确标注）
  &.default-size {
    width: 60px;
    height: 30px;

    .toggle-track {
      border-radius: 15px;
    }

    .toggle-thumb {
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;

      .pulse-effect {
        width: 100%;
        height: 100%;
      }
    }

    &.active .toggle-thumb {
      left: calc(100% - 27px);
    }
  }

  .toggle-track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(50, 80, 80, 0.6);
    border: 1px solid #666;
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

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 10%;
        right: 10%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-50%);
      }

      &::after {
        content: '';
        position: absolute;
        top: 30%;
        bottom: 30%;
        left: 50%;
        width: 1px;
        background-color: rgba(255, 255, 255, 0.1);
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
    background-color: v-bind('props.inActiveColor');
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
      background-color: rgba(0, 0, 0, 0.3);
      border: 1px solid v-bind('props.activeColor');
      box-shadow: 0 0 10px v-bind('props.activeColor'), inset 0 0 5px v-bind('props.activeColor');
    }

    .toggle-thumb {
      left: calc(100% - 27px);
      background-color: v-bind('props.activeColor');
      box-shadow: 0 0 10px v-bind('props.activeColor');
    }

    .circuit-lines {

      &::before,
      &::after {
        background-color: v-bind('props.activeColor');
        opacity: 0.3;
        animation: circuit-flow 2s linear infinite;
      }
    }
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;

    .toggle-track,
    .toggle-thumb {
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
      border: none;
      clip-path: polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%);
      // drop-shadow 天然跟随 clip-path 形状，不会被裁切
      filter: drop-shadow(0 0 0 1px #666);
      transition: all 0.3s ease, filter 0.3s ease;
    }

    .toggle-thumb {
      width: 28px;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }

    &.active .toggle-track {
      border: none;
      box-shadow: inset 0 0 5px v-bind('props.activeColor');
      filter: drop-shadow(0 0 0 1px v-bind('props.activeColor'))
              drop-shadow(0 0 10px v-bind('props.activeColor'));
    }

    // 各尺寸仅需调整 thumb 宽度，clip-path 使用百分比自动适配
    &.large-size .toggle-thumb {
      width: 36px;
    }

    &.small-size .toggle-thumb {
      width: 20.25px;
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
    opacity: 0.6;
  }

  100% {
    opacity: 0.1;
  }
}
</style>
