import type Menu from './menu.vue';
export type MenuInstance = InstanceType<typeof Menu>;
export type MenuDirection = 'horizontal' | 'vertical';
export type MenuTheme = 'neon' | 'terminal' | 'matrix' | 'hologram';
export type MenuEffect = 'none' | 'glitch' | 'scanline' | 'pulse';
export interface MenuItem {
    label: string;
    value: string | number;
    icon?: string;
    disabled?: boolean;
    children?: MenuItem[];
}
