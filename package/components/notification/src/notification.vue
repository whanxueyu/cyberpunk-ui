<template>
  <Teleport to="body">
    <div 
      v-if="visible"
      :class="['cp-cyber-notification-container', `position-${position}`]">
      <transition-group 
        name="notification" 
        tag="div" 
        @after-leave="handleAfterLeave">
        <div 
          v-for="notification in notifications" 
          :key="notification.id"
          :class="['cp-cyber-notification', `type-${notification.type}`, `effect-${notification.effect}`]">
          <div class="notification-content">
            <div class="notification-icon" v-if="notification.showIcon">
              <div class="icon-circle"></div>
              <div class="icon-symbol"></div>
            </div>
            <div class="notification-body">
              <div class="notification-title" v-if="notification.title">{{ notification.title }}</div>
              <div class="notification-message">{{ notification.message }}</div>
              <div class="notification-actions" v-if="notification.actions && notification.actions.length">
                <button 
                  v-for="(action, index) in notification.actions" 
                  :key="index"
                  class="action-button"
                  @click="handleActionClick(notification, action)">
                  {{ action.text }}
                </button>
              </div>
            </div>
            <div 
              class="notification-close" 
              v-if="notification.showClose"
              @click="close(notification.id)">
              <span class="close-icon">×</span>
            </div>
          </div>
          <div 
            class="notification-progress" 
            v-if="notification.duration > 0"
            :style="{ animationDuration: `${notification.duration}ms` }">
          </div>
          <div class="notification-glitch-effect"></div>
          <div class="notification-hologram-effect"></div>
        </div>
      </transition-group>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

defineOptions({
  name: 'CyberNotification',
})

// 通知类型
type NotificationType = 'info' | 'success' | 'warning' | 'error';

// 通知位置
type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';

// 通知效果
type NotificationEffect = 'glitch' | 'hologram' | 'circuit';

// 通知操作按钮
interface NotificationAction {
  text: string;
  callback: () => void;
}

// 通知配置
interface NotificationOptions {
  title?: string;
  message: string;
  type?: NotificationType;
  duration?: number;
  showClose?: boolean;
  showIcon?: boolean;
  actions?: NotificationAction[];
  effect?: NotificationEffect;
  onClose?: () => void;
}

// 通知实例
interface Notification extends Required<NotificationOptions> {
  id: number;
}

const props = defineProps({
  position: {
    type: String as () => NotificationPosition,
    default: 'top-right',
    validator: (value: string) => {
      return ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'center'].indexOf(value) !== -1;
    }
  },
  maxCount: {
    type: Number,
    default: 10
  },
  duration: {
    type: Number,
    default: 4500
  },
  effect: {
    type: String as () => NotificationEffect,
    default: 'glitch',
    validator: (value: string) => {
      return ['glitch', 'hologram', 'circuit'].indexOf(value) !== -1;
    }
  }
});

const emit = defineEmits(['close']);

// 通知列表
const notifications = ref<Notification[]>([]);
// 是否可见
const visible = ref(false);
// 通知ID计数器
let notificationIdCounter = 0;

// 创建通知
const createNotification = (options: NotificationOptions): number => {
  const id = ++notificationIdCounter;
  
  // 如果有操作按钮，默认居中且不自动关闭
  const hasActions = options.actions && options.actions.length > 0;
  
  const notification: Notification = {
    id,
    title: options.title || '',
    message: options.message,
    type: options.type || 'info',
    duration: options.duration !== undefined ? options.duration : (hasActions ? 0 : props.duration),
    showClose: options.showClose !== undefined ? options.showClose : true,
    showIcon: options.showIcon !== undefined ? options.showIcon : true,
    actions: options.actions || [],
    effect: options.effect || props.effect,
    onClose: options.onClose || (() => {})
  };
  
  // 添加通知
  notifications.value.push(notification);
  
  // 确保容器可见
  visible.value = true;
  
  // 如果设置了持续时间，则自动关闭
  if (notification.duration > 0) {
    setTimeout(() => {
      close(id);
    }, notification.duration);
  }
  
  // 限制最大数量
  if (notifications.value.length > props.maxCount) {
    const firstNotification = notifications.value[0];
    close(firstNotification.id);
  }
  
  return id;
};

// 关闭通知
const close = (id: number) => {
  const index = notifications.value.findIndex(item => item.id === id);
  if (index !== -1) {
    const notification = notifications.value[index];
    
    // 调用关闭回调
    if (notification.onClose) {
      notification.onClose();
    }
    
    // 移除通知
    notifications.value.splice(index, 1);
    
    // 触发关闭事件
    emit('close', id);
  }
};

// 处理操作按钮点击
const handleActionClick = (notification: Notification, action: NotificationAction) => {
  if (action.callback) {
    action.callback();
  }
  
  // 点击操作后关闭通知
  close(notification.id);
};

// 处理过渡结束
const handleAfterLeave = () => {
  if (notifications.value.length === 0) {
    visible.value = false;
  }
};

// 清除所有通知
const clearAll = () => {
  notifications.value.forEach(notification => {
    if (notification.onClose) {
      notification.onClose();
    }
  });
  notifications.value = [];
  visible.value = false;
};

// 暴露方法
defineExpose({
  // 创建不同类型的通知
  info: (options: Omit<NotificationOptions, 'type'>) => createNotification({ ...options, type: 'info' }),
  success: (options: Omit<NotificationOptions, 'type'>) => createNotification({ ...options, type: 'success' }),
  warning: (options: Omit<NotificationOptions, 'type'>) => createNotification({ ...options, type: 'warning' }),
  error: (options: Omit<NotificationOptions, 'type'>) => createNotification({ ...options, type: 'error' }),
  // 通用创建方法
  create: createNotification,
  // 关闭方法
  close,
  // 清除所有
  clearAll
});

// 组件卸载时清除所有通知
onUnmounted(() => {
  clearAll();
});
</script>

<style lang="scss" scoped>
.cp-cyber-notification-container {
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  max-height: 100vh;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  // 隐藏滚动条但保留滚动功能
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  &.position-top-right {
    top: 0;
    right: 0;
    align-items: flex-end;
  }
  
  &.position-top-left {
    top: 0;
    left: 0;
    align-items: flex-start;
  }
  
  &.position-bottom-right {
    bottom: 0;
    right: 0;
    align-items: flex-end;
    flex-direction: column-reverse;
  }
  
  &.position-bottom-left {
    bottom: 0;
    left: 0;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
  
  &.position-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: visible; // 居中时不需要滚动
  }
}

.cp-cyber-notification {
  position: relative;
  width: 380px;
  margin-bottom: 16px;
  border-radius: 6px;
  overflow: hidden;
  pointer-events: auto;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  // 基础样式
  background-color: rgba(20, 20, 30, 0.9);
  border: 1px solid;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  
  // 居中时的特殊样式
  .position-center & {
    width: 420px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    border-width: 2px;
  }
  
  .notification-content {
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 2;
  }
  
  .notification-icon {
    position: relative;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    
    .icon-circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid;
      box-sizing: border-box;
    }
    
    .icon-symbol {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      &::before,
      &::after {
        content: '';
        position: absolute;
        background-color: currentColor;
      }
    }
  }
  
  .notification-body {
    flex: 1;
    min-width: 0;
  }
  
  .notification-title {
    font-weight: bold;
    margin-bottom: 4px;
    font-size: 16px;
  }
  
  .notification-message {
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
  }
  
  .notification-actions {
    margin-top: 12px;
    display: flex;
    gap: 10px;
    
    .action-button {
      flex: 1;
      padding: 8px 16px;
      background-color: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 4px;
      color: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-color: var(--notification-color);
        box-shadow: 0 0 10px var(--notification-color);
        transform: translateY(-1px);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
  }
  
  .notification-close {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 12px;
    opacity: 0.7;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 1;
    }
    
    .close-icon {
      font-size: 18px;
      line-height: 1;
    }
  }
  
  .notification-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    transform-origin: left;
    animation: progress-shrink linear forwards;
  }
  
  .notification-glitch-effect,
  .notification-hologram-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
  }
  
  // 类型样式
  &.type-info {
    --notification-color: #00e6f6;
    border-color: var(--notification-color);
    color: #fff;
    
    .notification-icon {
      color: var(--notification-color);
      
      .icon-symbol {
        &::before {
          width: 2px;
          height: 8px;
          bottom: 2px;
          border-radius: 1px;
        }
        
        &::after {
          width: 2px;
          height: 2px;
          bottom: 12px;
          border-radius: 50%;
        }
      }
    }
    
    .notification-progress {
      background-color: var(--notification-color);
    }
  }
  
  &.type-success {
    --notification-color: #0f0;
    border-color: var(--notification-color);
    color: #fff;
    
    .notification-icon {
      color: var(--notification-color);
      
      .icon-symbol {
        &::before {
          width: 6px;
          height: 2px;
          transform: rotate(45deg);
          left: 3px;
          top: 10px;
        }
        
        &::after {
          width: 10px;
          height: 2px;
          transform: rotate(-45deg);
          left: 5px;
          top: 8px;
        }
      }
    }
    
    .notification-progress {
      background-color: var(--notification-color);
    }
  }
  
  &.type-warning {
    --notification-color: #ff9900;
    border-color: var(--notification-color);
    color: #fff;
    
    .notification-icon {
      color: var(--notification-color);
      
      .icon-symbol {
        &::before {
          width: 2px;
          height: 8px;
          top: 2px;
        }
        
        &::after {
          width: 2px;
          height: 2px;
          bottom: 2px;
          border-radius: 50%;
        }
      }
    }
    
    .notification-progress {
      background-color: var(--notification-color);
    }
  }
  
  &.type-error {
    --notification-color: #ff013c;
    border-color: var(--notification-color);
    color: #fff;
    
    .notification-icon {
      color: var(--notification-color);
      
      .icon-symbol {
        &::before {
          width: 12px;
          height: 2px;
          transform: rotate(45deg);
        }
        
        &::after {
          width: 12px;
          height: 2px;
          transform: rotate(-45deg);
        }
      }
    }
    
    .notification-progress {
      background-color: var(--notification-color);
    }
  }
  
  // 效果样式
  &.effect-glitch {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
      z-index: 0;
      animation: glitch-scan 2s linear infinite;
    }
    
    .notification-glitch-effect {
      opacity: 0;
      animation: notification-glitch 5s infinite;
    }
  }
  
  &.effect-hologram {
    border-width: 2px;
    box-shadow: 0 0 20px var(--notification-color);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
      z-index: 0;
    }
    
    .notification-hologram-effect {
      background: radial-gradient(circle at center, var(--notification-color) 0%, transparent 70%);
      opacity: 0.1;
      mix-blend-mode: screen;
    }
  }
  
  &.effect-circuit {
    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: var(--notification-color);
      opacity: 0.2;
      z-index: 0;
    }
    
    &::before {
      top: 0;
      left: 20px;
      width: 1px;
      height: 100%;
    }
    
    &::after {
      top: 20px;
      left: 0;
      width: 100%;
      height: 1px;
    }
    
    .notification-content::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--notification-color);
      top: 20px;
      left: 20px;
      opacity: 0.5;
      z-index: 0;
      animation: circuit-pulse 2s infinite;
    }
  }
}

// 过渡动画 - 根据不同位置调整方向
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

// 右上角和右下角 - 从右侧滑入
.position-top-right .notification-enter-from,
.position-bottom-right .notification-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.position-top-right .notification-leave-to,
.position-bottom-right .notification-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

// 左上角和左下角 - 从左侧滑入
.position-top-left .notification-enter-from,
.position-bottom-left .notification-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.position-top-left .notification-leave-to,
.position-bottom-left .notification-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

// 居中 - 从下方滑入并缩放
.position-center .notification-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.position-center .notification-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

// 动画定义
@keyframes progress-shrink {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

@keyframes notification-glitch {
  0%, 100% {
    opacity: 0;
  }
  92% {
    opacity: 0;
  }
  92.5% {
    opacity: 1;
    left: -5px;
    background-color: rgba(255, 0, 255, 0.1);
  }
  93% {
    opacity: 0;
  }
  93.5% {
    opacity: 1;
    left: 5px;
    background-color: rgba(0, 255, 255, 0.1);
  }
  94% {
    opacity: 0;
  }
}

@keyframes glitch-scan {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes circuit-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}
</style>
