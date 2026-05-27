import type cyberNotification from './notification.vue'

export type NotificationInstance = InstanceType<typeof cyberNotification>

export type NotificationType = 'info' | 'success' | 'warning' | 'error'
export type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'
export type NotificationEffect = 'glitch' | 'hologram' | 'circuit'

export interface NotificationAction {
  text: string
  callback: () => void
}

export interface NotificationOptions {
  title?: string
  message: string
  type?: NotificationType
  duration?: number
  showClose?: boolean
  showIcon?: boolean
  actions?: NotificationAction[]
  effect?: NotificationEffect
  onClose?: () => void
}
