/*
 * CyberPunk-UI 全局组件类型声明
 *
 * 使用方在 tsconfig.json 中添加以下配置后，
 * Volar 即可在模板中识别所有全局注册的 <cyber-xxx> 组件：
 *
 * {
 *   "compilerOptions": {
 *     "types": ["cyberpunk-ui/global"]
 *   }
 * }
 *
 * 或者在使用方的 env.d.ts 中添加：
 * /// <reference types="cyberpunk-ui/global" />
 */

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /* 基础组件 */
    'cyber-banner': (typeof import('cyberpunk-ui'))['CyberBanner']
    'cyber-divider': (typeof import('cyberpunk-ui'))['CyberDivider']
    'cyber-input': (typeof import('cyberpunk-ui'))['CyberInput']
    'cyber-neon-toggle': (typeof import('cyberpunk-ui'))['CyberNeonToggle']

    /* 按钮组件 */
    'cyber-button': (typeof import('cyberpunk-ui'))['CyberButton']
    'cyber-nenobutton': (typeof import('cyberpunk-ui'))['CyberNenobutton']
    'cyber-reflectbutton': (typeof import('cyberpunk-ui'))['CyberReflectbutton']

    /* 文字组件 */
    'cyber-text': (typeof import('cyberpunk-ui'))['CyberText']
    'cyber-glow-text': (typeof import('cyberpunk-ui'))['CyberGlowText']
    'cyber-shadow-text': (typeof import('cyberpunk-ui'))['CyberShadowText']
    'cyber-typing': (typeof import('cyberpunk-ui'))['CyberTyping']
    'cyber-magic-text': (typeof import('cyberpunk-ui'))['CyberMagicText']

    /* 选择器组件 */
    'cyber-select': (typeof import('cyberpunk-ui'))['CyberSelect']
    'cyber-cascader': (typeof import('cyberpunk-ui'))['CyberCascader']
    'cyber-tree': (typeof import('cyberpunk-ui'))['CyberTree']
    'cyber-menu': (typeof import('cyberpunk-ui'))['CyberMenu']

    /* 进度条组件 */
    'cyber-glitch-progress': (typeof import('cyberpunk-ui'))['CyberGlitchProgress']
    'cyber-progress': (typeof import('cyberpunk-ui'))['CyberProgress']

    /* 数据展示 */
    'cyber-digital-counter': (typeof import('cyberpunk-ui'))['CyberDigitalCounter']
    'cyber-infinite-table': (typeof import('cyberpunk-ui'))['CyberInfiniteTable']

    /* 反馈组件 */
    'cyber-notification': (typeof import('cyberpunk-ui'))['CyberNotification']
    'cyber-tooltip': (typeof import('cyberpunk-ui'))['CyberTooltip']

    /* 特效组件 */
    'cyber-glitch-image': (typeof import('cyberpunk-ui'))['CyberGlitchImage']
    'cyber-image': (typeof import('cyberpunk-ui'))['CyberImage']
    'cyber-holo-card': (typeof import('cyberpunk-ui'))['CyberHoloCard']
    'cyber-holo-loader': (typeof import('cyberpunk-ui'))['CyberHoloLoader']
    'cyber-full-page': (typeof import('cyberpunk-ui'))['CyberFullPage']
    'cyber-scrollbar': (typeof import('cyberpunk-ui'))['CyberScrollbar']
  }
}
