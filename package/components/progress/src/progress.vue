<template>
  <div class="cyber-progress" :class="[`theme-${theme}`, { animated: animated }]">
    <!-- 进度条背景 -->
    <div class="progress-track">
      <!-- 装饰性网格线 -->
      <div class="track-grid"></div>
      
      <!-- 进度条主体 -->
      <div 
        class="progress-bar"
        :style="{ width: percentage + '%' }"
      >
        <!-- 内部百分比显示 -->
        <span v-if="showPercentage && percentagePosition === 'inside'" class="percentage-inside">
          {{ displayPercentage }}%
        </span>
      </div>
      
      <!-- 刻度标记 -->
      <div class="tick-marks">
        <span 
          v-for="i in 10" 
          :key="i"
          class="tick"
          :class="{ active: i * 10 <= percentage }"
        ></span>
      </div>
    </div>
    
    <!-- 外部百分比显示 -->
    <span v-if="showPercentage && percentagePosition === 'outside'" class="percentage-outside">
      {{ displayPercentage }}%
    </span>
    
    <!-- 状态指示器 -->
    <div class="status-indicator" v-if="showStatus">
      <div class="indicator-dot"></div>
      <span class="status-text">{{ statusText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'CyberProgress',
});

const props = withDefaults(defineProps<{
  percentage?: number;
  theme?: 'neon' | 'hologram' | 'terminal' | 'matrix';
  animated?: boolean;
  showPercentage?: boolean;
  percentagePosition?: 'inside' | 'outside';
  showStatus?: boolean;
}>(), {
  percentage: 0,
  theme: 'neon',
  animated: true,
  showPercentage: true,
  percentagePosition: 'outside'
});

// 限制百分比在 0-100 之间
const displayPercentage = computed(() => {
  return Math.min(100, Math.max(0, props.percentage)).toFixed(0);
});

// 状态文本
const statusText = computed(() => {
  const pct = Number(displayPercentage.value);
  if (pct < 30) return 'INITIALIZING';
  if (pct < 60) return 'PROCESSING';
  if (pct < 90) return 'LOADING';
  if (pct < 100) return 'ALMOST';
  return 'COMPLETE';
});
</script>

<style lang="scss" scoped>
.cyber-progress {
  position: relative;
  width: 100%;
  padding: 2px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &.theme-neon {
    --progress-primary: #00f0ff;     // 青色霓虹
    --progress-secondary: #ff003c;   // 红色点缀
    --progress-accent: #0080ff;      // 深蓝渐变
    --progress-bg: rgba(0, 240, 255, 0.1);
    --progress-glow: rgba(0, 240, 255, 0.6);
  }
  
  &.theme-hologram {
    --progress-primary: #a855f7;
    --progress-secondary: #f43f5e;
    --progress-accent: #06b6d433;
    --progress-bg: rgba(168, 85, 247, 0.1);
    --progress-glow: rgba(168, 85, 247, 0.6);
  }
  
  &.theme-terminal {
    --progress-primary: #22c55e;
    --progress-secondary: #f31212;
    --progress-accent: #fbbf2433;
    --progress-bg: rgba(34, 197, 94, 0.1);
    --progress-glow: rgba(34, 197, 94, 0.6);
  }
  
  &.theme-matrix {
    --progress-primary: #ef4444;
    --progress-secondary: #fbbf24;
    --progress-accent: #10b98133;
    --progress-bg: rgba(251, 191, 36, 0.13);
    --progress-glow: rgba(251, 133, 36, 0.6);
  }
}

.progress-track {
  position: relative;
  height: 24px;
  background: var(--progress-bg);
  border: 1px solid var(--progress-primary);
  border-radius: 2px;
  overflow: visible;
  box-shadow: 0 0 20px rgba(var(--progress-primary), 0.2);
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 1;
  width: 100%;
  
  // 网格背景
  .track-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(0deg, transparent 24%, var(--progress-primary) 25%, transparent 26%, transparent 74%, var(--progress-primary) 75%, transparent 76%),
      linear-gradient(90deg, transparent 24%, var(--progress-primary) 25%, transparent 26%, transparent 74%, var(--progress-primary) 75%, transparent 76%);
    background-size: 20px 20px;
    opacity: 0.1;
    pointer-events: none;
  }
  
  // 进度条主体
  .progress-bar {
    position: relative;
    height: 100%;
    background-image: linear-gradient(to right, var(--progress-accent), var(--progress-primary));
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px var(--progress-glow);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    
    // 内部百分比显示
    .percentage-inside {
      font-family: 'Courier New', monospace;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      margin-right: 10px;
      white-space: nowrap;
      letter-spacing: 1px;
    }
  }
  
  // 刻度标记
  .tick-marks {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px;
    pointer-events: none;
    
    .tick {
      width: 1px;
      height: 6px;
      background: var(--progress-primary);
      opacity: 0.3;
      
      &.active {
        opacity: 0.8;
        box-shadow: 0 0 5px var(--progress-primary);
      }
    }
  }
}

// 外部百分比显示
.percentage-outside {
  position: relative;
  top: auto;
  right: auto;
  display: inline-block;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: var(--progress-primary);
  text-shadow: 0 0 10px var(--progress-glow);
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 24px;
  vertical-align: middle;
}

// 状态指示器
.status-indicator {
  position: absolute;
  top: 30px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: var(--progress-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  
  .indicator-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--progress-primary);
    box-shadow: 0 0 10px var(--progress-glow);
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  .status-text {
    text-shadow: 0 0 5px var(--progress-glow);
  }
}

// 动画效果
@keyframes flow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

// 禁用动画
.cyber-progress:not(.animated) {
  .progress-bar {
    transition: none;
  }
  
  .indicator-dot {
    animation: none;
  }
}
</style>
