import type cubicProgress from './cubicProgress.vue';
export type CubicProgressInstance = InstanceType<typeof cubicProgress>;
export type ColorPreset = 'pink' | 'cyan' | 'green' | 'gold' | 'purple';
export interface ColorSet {
    primary: string;
    secondary: string;
    empty: string;
}
