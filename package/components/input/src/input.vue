<template>
  <div :class="['cp-input', inputSize, inputType]">
    <div class="input-wrapper">
      <input
        ref="inputRef"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup="handleKeyup"
        @keydown="handleKeydown"
        class="cyber-input"
      />
      <div class="input-border"></div>
      <div class="input-glitch" v-if="glitchEffect"></div>
      <div class="input-scanline" v-if="scanlineEffect"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

defineOptions({
  name: 'CyberInput',
});

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => {
      return ['text', 'password', 'number', 'email', 'tel', 'url'].indexOf(value) !== -1;
    }
  },
  placeholder: {
    type: String,
    default: '请输入...'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: [String, Number],
    default: undefined
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  size: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['large', 'default', 'small'].indexOf(value) !== -1;
    }
  },
  theme: {
    type: String,
    default: 'primary',
    validator: (value: string) => {
      return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !== -1;
    }
  },
  glitchEffect: {
    type: Boolean,
    default: true
  },
  scanlineEffect: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits([
  'update:modelValue',
  'input',
  'change',
  'focus',
  'blur',
  'keyup',
  'keydown'
]);

const inputRef = ref<HTMLInputElement | null>(null);

const inputSize = computed(() => {
  switch (props.size) {
    case 'large':
      return 'large-size';
    case 'default':
      return 'default-size';
    case 'small':
      return 'small-size';
    default:
      return 'default-size';
  }
});

const inputType = computed(() => {
  switch (props.theme) {
    case 'primary':
      return 'primary-theme';
    case 'success':
      return 'success-theme';
    case 'warning':
      return 'warning-theme';
    case 'danger':
      return 'danger-theme';
    case 'info':
      return 'info-theme';
    default:
      return 'primary-theme';
  }
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', target.value);
};

const handleFocus = (event: FocusEvent) => {
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  emit('blur', event);
};

const handleKeyup = (event: KeyboardEvent) => {
  emit('keyup', event);
};

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event);
};

// 暴露方法给父组件
defineExpose({
  focus: () => {
    inputRef.value?.focus();
  },
  blur: () => {
    inputRef.value?.blur();
  },
  select: () => {
    inputRef.value?.select();
  }
});
</script>

<style lang="scss" scoped>
.cp-input {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 300px;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.cyber-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--cp-primary-color);
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
  }
  
  &:focus {
    border-color: var(--cp-primary-color2);
    box-shadow: 0 0 15px var(--cp-primary-color), inset 0 0 10px rgba(0, 166, 220, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    border-color: #666;
  }
}

.input-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  pointer-events: none;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      var(--cp-primary-color), 
      var(--cp-primary-color2), 
      var(--cp-primary-color3), 
      var(--cp-primary-color));
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .cp-input:focus-within &::before {
    opacity: 1;
  }
}

.input-glitch {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    mix-blend-mode: screen;
  }
  
  &::before {
    animation: glitchTop 2s infinite linear alternate-reverse;
  }
  
  &::after {
    animation: glitchBottom 3s infinite linear alternate-reverse;
  }
}

.input-scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, 
    transparent, 
    var(--cp-primary-color2), 
    transparent);
  animation: scanline 2s linear infinite;
  pointer-events: none;
  z-index: 4;
  opacity: 0.7;
}

/* 尺寸样式 */
.large-size .cyber-input {
  padding: 16px 20px;
  font-size: 18px;
}

.default-size .cyber-input {
  padding: 12px 16px;
  font-size: 14px;
}

.small-size .cyber-input {
  padding: 8px 12px;
  font-size: 12px;
}

/* 主题样式 */
.primary-theme .cyber-input {
  border-color: var(--cp-primary-color);
  
  &:focus {
    border-color: var(--cp-primary-color2);
    box-shadow: 0 0 15px var(--cp-primary-color), inset 0 0 10px rgba(0, 166, 220, 0.3);
  }
}

.success-theme .cyber-input {
  border-color: var(--cp-success-color);
  
  &:focus {
    border-color: var(--cp-success-color2);
    box-shadow: 0 0 15px var(--cp-success-color), inset 0 0 10px rgba(2, 197, 77, 0.3);
  }
}

.warning-theme .cyber-input {
  border-color: var(--cp-warning-color);
  
  &:focus {
    border-color: var(--cp-warning-color2);
    box-shadow: 0 0 15px var(--cp-warning-color), inset 0 0 10px rgba(255, 153, 0, 0.3);
  }
}

.danger-theme .cyber-input {
  border-color: var(--cp-danger-color);
  
  &:focus {
    border-color: var(--cp-danger-color2);
    box-shadow: 0 0 15px var(--cp-danger-color), inset 0 0 10px rgba(255, 1, 60, 0.3);
  }
}

.info-theme .cyber-input {
  border-color: var(--cp-info-color);
  
  &:focus {
    border-color: var(--cp-info-color2);
    box-shadow: 0 0 15px var(--cp-info-color), inset 0 0 10px rgba(74, 65, 175, 0.3);
  }
}

/* 动画定义 */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes glitchTop {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
    transform: translateX(-2px);
  }
  20% {
    clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%);
    transform: translateX(2px);
  }
  40% {
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translateX(-1px);
  }
  60% {
    clip-path: polygon(0 0, 100% 0, 100% 20%, 0 20%);
    transform: translateX(1px);
  }
  80% {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
    transform: translateX(-2px);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
    transform: translateX(0);
  }
}

@keyframes glitchBottom {
  0% {
    clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
    transform: translateX(2px);
  }
  20% {
    clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
    transform: translateX(-2px);
  }
  40% {
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translateX(1px);
  }
  60% {
    clip-path: polygon(0 80%, 100% 80%, 100% 100%, 0 100%);
    transform: translateX(-1px);
  }
  80% {
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translateX(2px);
  }
  100% {
    clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
    transform: translateX(0);
  }
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>