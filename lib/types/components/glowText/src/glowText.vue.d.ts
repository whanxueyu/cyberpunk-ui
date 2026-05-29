import type { GlowEffect, GlowTextSize, AnimationSpeed } from './instance';
type __VLS_Props = {
    color?: string;
    glowing?: boolean;
    effect?: GlowEffect;
    size?: GlowTextSize;
    animationSpeed?: AnimationSpeed;
    tag?: string;
    disabled?: boolean;
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: GlowTextSize;
    effect: GlowEffect;
    disabled: boolean;
    tag: string;
    color: string;
    glowing: boolean;
    animationSpeed: AnimationSpeed;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
