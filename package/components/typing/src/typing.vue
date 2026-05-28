<template>
  <div class="cp-typing">
    <span v-if="text" class="typing-text">{{ displayText }}</span>
    <span
      v-if="cursor"
      class="typing-cursor"
      :style="{ backgroundColor: cursorColor }"
    ></span>
    <span v-if="!text" class="typing-text"><slot></slot></span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

defineOptions({
  name: 'CyberTyping',
})

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  speed: {
    type: Number,
    default: 80,
  },
  delay: {
    type: Number,
    default: 500,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  loopDelay: {
    type: Number,
    default: 2000,
  },
  cursor: {
    type: Boolean,
    default: true,
  },
  cursorColor: {
    type: String,
    default: '#00e6f6',
  },
})

const emit = defineEmits<{
  finish: []
}>()

const displayText = ref('')

let timer: ReturnType<typeof setInterval> | null = null
let delayTimer: ReturnType<typeof setTimeout> | null = null
let charIndex = 0
let isErasing = false

const clearAll = () => {
  if (timer) { clearInterval(timer); timer = null }
  if (delayTimer) { clearTimeout(delayTimer); delayTimer = null }
}

const typeNext = (fullText: string) => {
  charIndex++
  displayText.value = fullText.slice(0, charIndex)
  if (charIndex >= fullText.length) {
    clearInterval(timer!)
    timer = null
    emit('finish')
    if (props.loop) {
      delayTimer = setTimeout(() => {
        isErasing = true
        startErase(fullText)
      }, props.loopDelay)
    }
  }
}

const eraseNext = (fullText: string) => {
  charIndex--
  displayText.value = fullText.slice(0, charIndex)
  if (charIndex <= 0) {
    clearInterval(timer!)
    timer = null
    displayText.value = ''
    isErasing = false
    delayTimer = setTimeout(() => startType(fullText), 500)
  }
}

const startType = (fullText: string) => {
  if (!fullText) return
  charIndex = 0
  displayText.value = ''
  isErasing = false
  timer = setInterval(() => typeNext(fullText), props.speed)
}

const startErase = (fullText: string) => {
  timer = setInterval(() => eraseNext(fullText), Math.max(props.speed / 2, 30))
}

watch(() => props.text, (val) => {
  clearAll()
  displayText.value = ''
  if (val) {
    delayTimer = setTimeout(() => startType(val), props.delay)
  }
})

onMounted(() => {
  if (props.text) {
    delayTimer = setTimeout(() => startType(props.text), props.delay)
  }
})

onUnmounted(() => {
  clearAll()
})
</script>

<style lang="scss" scoped>
.cp-typing {
  display: inline-flex;
  align-items: center;
}

.typing-text {
  font-weight: bold;
  font-family: Consolas, Monaco, monospace;
  white-space: pre-wrap;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: cursor-blink 0.6s step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
