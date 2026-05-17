<template>
  <div class="cp-divider" :class="[`cp-divider--${direction}`, `cp-divider--${type}`]" :style="dividerStyle">
    <div v-if="showLeftLine" class="cp-divider__line cp-divider__line--left"></div>
    <div v-if="$slots.default || content" class="cp-divider__content">
      <slot>{{ content }}</slot>
    </div>
    <div v-if="showRightLine" class="cp-divider__line cp-divider__line--right"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'CyberDivider',
})

const props = withDefaults(defineProps<{
  /** 分割线方向 */
  direction?: 'horizontal' | 'vertical'
  /** 分割线类型/主题色 */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /** 分割线内容文本 */
  content?: string
  /** 是否显示左侧线条（水平方向）或上侧线条（垂直方向） */
  showLeftLine?: boolean
  /** 是否显示右侧线条（水平方向）或下侧线条（垂直方向） */
  showRightLine?: boolean
  /** 自定义宽度（水平方向）或高度（垂直方向） */
  size?: string
}>(), {
  direction: 'horizontal',
  type: 'primary',
  content: '',
  showLeftLine: true,
  showRightLine: true,
  size: '',
})

const dividerStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.size) {
    if (props.direction === 'horizontal') {
      style.width = props.size
    } else {
      style.height = props.size
    }
  }
  
  return style
})
</script>

<style lang="scss" scoped>
.cp-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 0;

  &.cp-divider--horizontal {
    flex-direction: row;
    width: 100%;
    height: 2px;

    .cp-divider__line {
      height: 2px;
      min-width: 20px;

      &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    }
  }

  &.cp-divider--vertical {
    flex-direction: column;
    height: 100%;
    width: 2px;

    .cp-divider__line {
      width: 2px;
      min-height: 20px;

      &::before {
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
      }
    }
  }

  .cp-divider__line {
    flex: 1;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--cp-primary-color) 50%, 
        transparent 100%);
      box-shadow: 0 0 8px var(--cp-primary-color),
                  0 0 16px var(--cp-primary-color);
      animation: cp-divider-glow 2s ease-in-out infinite;
    }
  }

  .cp-divider__content {
    padding: 0 16px;
    font-size: 14px;
    white-space: nowrap;
  }

  // 不同类型主题色
  &.cp-divider--primary {
    .cp-divider__line::before {
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--cp-primary-color) 50%, 
        transparent 100%);
      box-shadow: 0 0 8px var(--cp-primary-color),
                  0 0 16px var(--cp-primary-color);
    }

    .cp-divider__content {
      color: var(--cp-primary-color);
      text-shadow: 0 0 8px var(--cp-primary-color);
    }
  }

  &.cp-divider--success {
    .cp-divider__line::before {
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--cp-success-color) 50%, 
        transparent 100%);
      box-shadow: 0 0 8px var(--cp-success-color),
                  0 0 16px var(--cp-success-color);
    }

    .cp-divider__content {
      color: var(--cp-success-color);
      text-shadow: 0 0 8px var(--cp-success-color);
    }
  }

  &.cp-divider--warning {
    .cp-divider__line::before {
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--cp-warning-color) 50%, 
        transparent 100%);
      box-shadow: 0 0 8px var(--cp-warning-color),
                  0 0 16px var(--cp-warning-color);
    }

    .cp-divider__content {
      color: var(--cp-warning-color);
      text-shadow: 0 0 8px var(--cp-warning-color);
    }
  }

  &.cp-divider--danger {
    .cp-divider__line::before {
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--cp-danger-color) 50%, 
        transparent 100%);
      box-shadow: 0 0 8px var(--cp-danger-color),
                  0 0 16px var(--cp-danger-color);
    }

    .cp-divider__content {
      color: var(--cp-danger-color);
      text-shadow: 0 0 8px var(--cp-danger-color);
    }
  }

  &.cp-divider--info {
    .cp-divider__line::before {
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--cp-info-color) 50%, 
        transparent 100%);
      box-shadow: 0 0 8px var(--cp-info-color),
                  0 0 16px var(--cp-info-color);
    }

    .cp-divider__content {
      color: var(--cp-info-color);
      text-shadow: 0 0 8px var(--cp-info-color);
    }
  }
}

@keyframes cp-divider-glow {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
</style>
