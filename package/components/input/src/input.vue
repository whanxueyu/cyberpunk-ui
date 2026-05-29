<template>
  <div
    :class="[
      'cp-input',
      `cp-input--${size}`,
      `cp-input--${theme}`,
      {
        'cp-input--disabled': disabled,
        'cp-input--focused': isFocused,
        'cp-input--has-value': modelValue !== '' && modelValue != null,
      }
    ]"
  >
    <div class="cp-input-wrapper">
      <!-- 前缀插槽 -->
      <span v-if="$slots.prefix" class="cp-input-prefix">
        <slot name="prefix" />
      </span>

      <input
        ref="inputRef"
        :type="currentType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        :name="name"
        class="cp-input-inner"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup="handleKeyup"
        @keydown="handleKeydown"
      />

      <!-- 清除按钮 -->
      <span
        v-if="clearable && modelValue && !disabled"
        class="cp-input-clear"
        @mousedown.prevent="handleClear"
      >
        <svg viewBox="0 0 16 16" class="cp-input-icon">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </span>

      <!-- 密码可见切换 -->
      <span
        v-if="type === 'password' && showPassword"
        class="cp-input-password-toggle"
        @mousedown.prevent="togglePassword"
      >
        <svg v-if="passwordVisible" viewBox="0 0 24 24" class="cp-input-icon">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="cp-input-icon">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" />
          <line x1="1.5" y1="1.5" x2="22.5" y2="22.5" stroke="currentColor" stroke-width="2" />
        </svg>
      </span>

      <!-- 后缀插槽 -->
      <span v-if="$slots.suffix" class="cp-input-suffix">
        <slot name="suffix" />
      </span>

      <!-- 底部扫描线 -->
      <div v-if="scanlineEffect" class="cp-input-scanline"></div>
    </div>

    <!-- 故障特效叠加层 -->
    <div v-if="glitchEffect" class="cp-input-glitch"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({
  name: 'CyberInput',
})

const props = withDefaults(defineProps<{
  modelValue?: string | number
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  maxlength?: string | number
  autocomplete?: string
  name?: string
  size?: 'large' | 'default' | 'small'
  theme?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  glitchEffect?: boolean
  scanlineEffect?: boolean
  clearable?: boolean
  showPassword?: boolean
}>(), {
  modelValue: '',
  type: 'text',
  placeholder: '请输入...',
  disabled: false,
  readonly: false,
  maxlength: undefined,
  autocomplete: 'off',
  name: undefined,
  size: 'default',
  theme: 'primary',
  glitchEffect: true,
  scanlineEffect: true,
  clearable: false,
  showPassword: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'input', value: string): void
  (e: 'change', value: string | number): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'keyup', event: KeyboardEvent): void
  (e: 'keydown', event: KeyboardEvent): void
  (e: 'clear'): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)
const passwordVisible = ref(false)
const prevValue = ref<string | number>('')

const currentType = computed(() => {
  if (props.type === 'password' && passwordVisible.value) {
    return 'text'
  }
  return props.type
})

const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', target.value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  prevValue.value = props.modelValue ?? ''
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  if (props.modelValue !== prevValue.value) {
    emit('change', props.modelValue ?? '')
  }
  emit('blur', event)
}

const handleKeyup = (event: KeyboardEvent) => {
  emit('keyup', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('input', '')
  emit('change', '')
  emit('clear')
  inputRef.value?.focus()
}

defineExpose({
  focus: () => {
    inputRef.value?.focus()
  },
  blur: () => {
    inputRef.value?.blur()
  },
  select: () => {
    inputRef.value?.select()
  },
  clear: () => {
    handleClear()
  },
  ref: inputRef,
})
</script>

<style lang="scss" scoped>
/* ========== 根容器 ========== */
.cp-input {
  --input-theme: var(--cp-primary-color);
  --input-theme2: var(--cp-primary-color2);
  --input-theme3: var(--cp-primary-color3);
  --input-theme-bg: var(--cp-primary-bg);
  --input-text: #e0f7ff;
  --input-placeholder: rgba(180, 220, 255, 0.4);
  --input-bg: rgba(0, 10, 20, 0.85);

  position: relative;
  display: inline-block;
  width: 100%;
  font-family: 'Courier New', 'Consolas', monospace;
}

/* ========== 主题色变量 ========== */
.cp-input--primary {
  --input-theme: var(--cp-primary-color);
  --input-theme2: var(--cp-primary-color2);
  --input-theme3: var(--cp-primary-color3);
  --input-theme-bg: var(--cp-primary-bg);
  --input-text: #e0f7ff;
  --input-placeholder: rgba(180, 220, 255, 0.4);
}

.cp-input--success {
  --input-theme: var(--cp-success-color);
  --input-theme2: var(--cp-success-color2);
  --input-theme3: var(--cp-success-color3);
  --input-theme-bg: var(--cp-success-bg);
  --input-text: #e0ffe8;
  --input-placeholder: rgba(180, 255, 200, 0.4);
}

.cp-input--warning {
  --input-theme: var(--cp-warning-color);
  --input-theme2: var(--cp-warning-color2);
  --input-theme3: var(--cp-warning-color3);
  --input-theme-bg: var(--cp-warning-bg);
  --input-text: #fff0e0;
  --input-placeholder: rgba(255, 220, 180, 0.4);
}

.cp-input--danger {
  --input-theme: var(--cp-danger-color);
  --input-theme2: var(--cp-danger-color2);
  --input-theme3: var(--cp-danger-color3);
  --input-theme-bg: var(--cp-danger-bg);
  --input-text: #ffe0e8;
  --input-placeholder: rgba(255, 180, 200, 0.4);
}

.cp-input--info {
  --input-theme: var(--cp-info-color);
  --input-theme2: var(--cp-info-color2);
  --input-theme3: var(--cp-info-color3);
  --input-theme-bg: var(--cp-info-bg);
  --input-text: #e0e8ff;
  --input-placeholder: rgba(180, 200, 255, 0.4);
}

/* ========== 包裹层 ========== */
.cp-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 238, 255, 0.35);
  background: var(--input-bg);
  transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cp-input--focused .cp-input-wrapper {
  border-color: var(--input-theme);
  box-shadow:
    0 0 12px var(--input-theme),
    0 0 40px var(--input-theme2);
}

/* ========== 输入框本体 ========== */
.cp-input-inner {
  position: relative;
  z-index: 1;
  flex: 1;
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  background: var(--input-bg);
  color: var(--input-text);
  font-family: inherit;
  line-height: 1.5;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: var(--input-placeholder);
    font-style: italic;
    transition: color 0.3s ease;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--input-text);
    box-shadow: 0 0 0 1000px var(--input-theme-bg) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
}

/* ========== 聚焦内发光 ========== */
.cp-input--focused .cp-input-inner {
  box-shadow: inset 0 0 30px var(--input-theme3);
}

/* ========== 禁用状态 ========== */
.cp-input--disabled {
  opacity: 0.5;
  cursor: not-allowed;

  .cp-input-inner {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.35);
  }

  .cp-input-wrapper {
    border-color: rgba(255, 255, 255, 0.06);
  }
}

/* ========== 尺寸变体 ========== */
.cp-input--large .cp-input-inner {
  padding: 14px 16px;
  font-size: 17px;
  height: 52px;
}

.cp-input--default .cp-input-inner {
  padding: 10px 14px;
  font-size: 14px;
  height: 42px;
}

.cp-input--small .cp-input-inner {
  padding: 6px 10px;
  font-size: 12px;
  height: 30px;
}

/* ========== 前缀 / 后缀插槽 ========== */
.cp-input-prefix,
.cp-input-suffix {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--input-theme);
  padding: 0 10px;
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.cp-input--focused .cp-input-prefix,
.cp-input--focused .cp-input-suffix {
  opacity: 1;
}

/* ========== 清除按钮 ========== */
.cp-input-clear {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin-right: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 12px var(--input-theme);
  }
}

.cp-input-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* ========== 密码切换按钮 ========== */
.cp-input-password-toggle {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin-right: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 12px var(--input-theme);
  }
}

/* ========== 扫描线 ========== */
.cp-input-scanline {
  position: absolute;
  left: 10%;
  right: 10%;
  height: 1.5px;
  background: linear-gradient(
    to right,
    transparent,
    var(--input-theme2),
    var(--input-theme),
    transparent
  );
  z-index: 3;
  pointer-events: none;
  opacity: 0;
  animation: scanlineSweep 2.5s linear infinite;
}

.cp-input--focused .cp-input-scanline {
  opacity: 0.9;
}

@keyframes scanlineSweep {
  0% {
    top: 10%;
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    top: 88%;
    opacity: 0;
  }
}

/* ========== 故障特效 ========== */
.cp-input-glitch {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.cp-input--focused .cp-input-glitch {
  opacity: 1;
}

.cp-input-glitch::before,
.cp-input-glitch::after {
  content: '';
  position: absolute;
  left: -2px;
  right: -2px;
  height: 3px;
  mix-blend-mode: screen;
  border-radius: 1px;
}

.cp-input-glitch::before {
  background: var(--input-theme);
  opacity: 0.7;
  box-shadow: 0 0 8px var(--input-theme2);
  animation: glitchBarA 2.3s infinite steps(1);
}

.cp-input-glitch::after {
  background: var(--input-theme3);
  opacity: 0.7;
  box-shadow: 0 0 8px var(--input-theme3);
  animation: glitchBarB 3.1s infinite steps(1);
}

@keyframes glitchBarA {
  0%, 10% { top: 25%; opacity: 0; }
  11%, 13% { top: 25%; opacity: 0.9; }
  14%, 100% { top: 25%; opacity: 0; }
}

@keyframes glitchBarB {
  0%, 20% { top: 55%; opacity: 0; }
  21%, 24% { top: 55%; opacity: 0.75; }
  25%, 100% { top: 55%; opacity: 0; }
}

/* ========================================
   亮色模式
   ======================================== */

:root:not(.dark) .cp-input {
  --input-bg: rgba(255, 255, 255, 0.92);
  --input-placeholder: rgba(100, 100, 120, 0.5);
}

:root:not(.dark) .cp-input--primary {
  --input-text: #0a2a3a;
}

:root:not(.dark) .cp-input--success {
  --input-text: #0a2a1a;
}

:root:not(.dark) .cp-input--warning {
  --input-text: #3a2a0a;
}

:root:not(.dark) .cp-input--danger {
  --input-text: #3a0a1a;
}

:root:not(.dark) .cp-input--info {
  --input-text: #0a1a3a;
}

:root:not(.dark) .cp-input-wrapper {
  border-color: rgba(0, 0, 0, 0.15);
}

:root:not(.dark) .cp-input--focused .cp-input-wrapper {
  border-color: var(--input-theme);
  box-shadow:
    0 0 8px var(--input-theme),
    0 0 24px var(--input-theme2);
}

:root:not(.dark) .cp-input--disabled .cp-input-wrapper {
  border-color: rgba(0, 0, 0, 0.06);
}

:root:not(.dark) .cp-input--disabled .cp-input-inner {
  color: rgba(0, 0, 0, 0.3);
}

:root:not(.dark) .cp-input-clear,
:root:not(.dark) .cp-input-password-toggle {
  color: rgba(0, 0, 0, 0.3);

  &:hover {
    color: #222;
    background: rgba(0, 0, 0, 0.06);
  }
}

:root:not(.dark) .cp-input-glitch::before,
:root:not(.dark) .cp-input-glitch::after {
  mix-blend-mode: multiply;
}
</style>
