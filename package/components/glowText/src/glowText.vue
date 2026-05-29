<template>
  <component
    :is="tag"
    :class="[
      'cp-glow-text',
      `cp-glow-text--${effect}`,
      `cp-glow-text--${animationSpeed}`,
      {
        'cp-glow-text--glowing': glowing,
        'cp-glow-text--disabled': disabled,
      },
    ]"
    :style="glowStyle"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { GlowEffect, AnimationSpeed } from './instance'

defineOptions({
  name: 'CyberGlowText',
})

const props = withDefaults(
  defineProps<{
    /** 霓虹主光色 */
    color?: string
    /** 是否常驻霓虹发光效果（false 则仅 hover 时展示） */
    glowing?: boolean
    /** 霓虹光效类型 */
    effect?: GlowEffect
    /** 动画播放速度（turnon 效果不适用） */
    animationSpeed?: AnimationSpeed
    /** 渲染的 HTML 标签 */
    tag?: string
    /** 是否禁用 */
    disabled?: boolean
  }>(),
  {
    color: '#e91e84',
    glowing: false,
    effect: 'neon',
    animationSpeed: 'normal',
    tag: 'span',
    disabled: false,
  },
)

const glowStyle = computed(() => {
  return {
    '--glow-color': props.color,
  } as Record<string, string>
})
</script>

<style lang="scss" scoped>
.cp-glow-text {
  display: inline-block;
  font-family: 'Lobster';
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;

  // ===================== 动画速度 =====================
  &--slow {
    --glow-duration: 3s;
  }

  &--normal {
    --glow-duration: 1.5s;
  }

  &--fast {
    --glow-duration: 0.75s;
  }

  // ===================== 基础色 =====================
  color: var(--glow-color);

  // ===================== 禁用态 =====================
  &--disabled {
    opacity: 0.45;
    cursor: not-allowed;
    filter: grayscale(60%);
    pointer-events: none;
  }

  // ===================== 常驻发光态公共逻辑 =====================
  // 当 glowing 开启时，所有效果默认展示亮部状态
  &--glowing {
    color: #fff;
  }

  // ==========================================================================
  // 效果1：neon — 霓虹灯管交替（参考案例1 .neon）
  // 1s ease infinite alternate，亮部→暗部→亮部循环
  // ==========================================================================
  &--neon {
    &.cp-glow-text--glowing {
      animation: neon var(--glow-duration, 1.5s) ease-in-out infinite alternate;
    }

    &:hover:not(.cp-glow-text--disabled) {
      color: #fff;
      animation: neon var(--glow-duration, 1.5s) ease-in-out infinite alternate;
    }
  }

  // ==========================================================================
  // 效果2：flux — 线性呼吸光晕（参考案例1 .flux）
  // 2s linear infinite alternate，平滑过渡
  // ==========================================================================
  &--flux {
    &.cp-glow-text--glowing {
      animation: flux var(--glow-duration, 2s) linear infinite alternate;
    }

    &:hover:not(.cp-glow-text--disabled) {
      color: #fff;
      animation: flux var(--glow-duration, 2s) linear infinite alternate;
    }
  }

  // ==========================================================================
  // 效果3：turnon — 灯管启动闪烁（参考案例2 turnonlights）
  // 模拟霓虹灯启动时反复闪烁后稳定，steps(2, start) 制造跳变感
  // ==========================================================================
  &--turnon {
    &.cp-glow-text--glowing {
      animation: turnon 3s steps(2, start) infinite;
      color: #fff;
    }

    &:hover:not(.cp-glow-text--disabled) {
      color: #fff;
      animation: turnon 3s steps(2, start) infinite;
    }
  }

  // ==========================================================================
  // 效果4：blink — 急速闪烁（参考案例2 blink / fade）
  // 0.1s 极速交替，透明度随机跳变
  // ==========================================================================
  &--blink {
    &.cp-glow-text--glowing {
      animation: blink 0.1s ease infinite alternate;
    }

    &:hover:not(.cp-glow-text--disabled) {
      color: #fff;
      animation: blink 0.1s ease infinite alternate;
    }
  }
}

// ====================================================================
// keyframes：neon（参考案例1 .neon）
// 亮部（多层级强光 + 白色内芯）→ 暗部（弱光）交替
// ====================================================================
@keyframes neon {
  from {
    text-shadow:
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 8px #fff,
      0 0 10px var(--glow-color),
      0 0 17px var(--glow-color),
      0 0 20px var(--glow-color),
      0 0 25px var(--glow-color),
      0 0 40px var(--glow-color);
  }
  to {
    filter: brightness(110%);
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px var(--glow-color),
      0 0 35px var(--glow-color),
      0 0 40px var(--glow-color),
      0 0 50px var(--glow-color),
      0 0 75px var(--glow-color);
  }
}

// ====================================================================
// keyframes：flux（参考案例1 .flux）
// 暗部（仅少量内层光）→ 亮部（多层强光 + 中距离色晕）线性呼吸
// ====================================================================
@keyframes flux {
  from {
    text-shadow:
      0 0 1px #fff,
      0 0 2px #fff,
      0 0 4px var(--glow-color),
      0 0 6px var(--glow-color),
      0 0 10px var(--glow-color);
  }
  to {
    filter: brightness(115%);
    text-shadow:
      0 0 3px #fff,
      0 0 6px #fff,
      0 0 10px #fff,
      0 0 15px var(--glow-color),
      0 0 25px var(--glow-color),
      0 0 35px var(--glow-color),
      0 0 50px var(--glow-color),
      0 0 70px var(--glow-color);
  }
}

// ====================================================================
// keyframes：turnon（参考案例2 turnonlights）
// 模拟灯管通电后的多次闪烁 → 最终稳定常亮
// 前 35% 为闪烁阶段，后 65% 保持常亮
// ====================================================================
@keyframes turnon {
  0% {
    text-shadow:
      0 0 3px var(--glow-color),
      0 0 5px var(--glow-color);
  }
  5% {
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 18px var(--glow-color),
      0 0 35px var(--glow-color),
      0 0 50px var(--glow-color);
  }
  9% {
    text-shadow:
      0 0 3px var(--glow-color),
      0 0 5px var(--glow-color);
  }
  12% {
    text-shadow:
      0 0 5px #fff,
      0 0 12px var(--glow-color),
      0 0 25px var(--glow-color);
  }
  18% {
    text-shadow:
      0 0 2px var(--glow-color);
  }
  22% {
    text-shadow:
      0 0 4px #fff,
      0 0 8px #fff,
      0 0 16px var(--glow-color),
      0 0 30px var(--glow-color),
      0 0 45px var(--glow-color);
  }
  26% {
    text-shadow:
      0 0 3px var(--glow-color),
      0 0 6px var(--glow-color);
  }
  30% {
    text-shadow:
      0 0 6px #fff,
      0 0 12px #fff,
      0 0 22px var(--glow-color),
      0 0 40px var(--glow-color),
      0 0 60px var(--glow-color);
  }
  35% {
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px var(--glow-color),
      0 0 40px var(--glow-color),
      0 0 55px var(--glow-color),
      0 0 70px var(--glow-color);
  }
  100% {
    filter: brightness(110%);
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px var(--glow-color),
      0 0 35px var(--glow-color),
      0 0 40px var(--glow-color),
      0 0 50px var(--glow-color),
      0 0 75px var(--glow-color);
  }
}

// ====================================================================
// keyframes：blink（参考案例2 blink / fade）
// 0.1s 极速透明度交替，模拟灯管接触不良的急速闪烁
// ====================================================================
@keyframes blink {
  0% {
    opacity: 0.9;
    text-shadow:
      0 0 2px #fff,
      0 0 4px var(--glow-color),
      0 0 8px var(--glow-color);
  }
  45% {
    opacity: 0.5;
    text-shadow:
      0 0 1px var(--glow-color),
      0 0 3px var(--glow-color);
  }
  70% {
    opacity: 0.7;
    text-shadow:
      0 0 1px #fff,
      0 0 3px var(--glow-color),
      0 0 6px var(--glow-color);
  }
  100% {
    opacity: 0.95;
    text-shadow:
      0 0 3px #fff,
      0 0 6px var(--glow-color),
      0 0 12px var(--glow-color);
  }
}
</style>
