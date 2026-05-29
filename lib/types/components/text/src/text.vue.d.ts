import type { CyberTextEffect, AnimationSpeed } from './instance';
type __VLS_Props = {
    text?: string;
    shadowColor?: string;
    glitchColor?: string;
    lineColor?: string;
    effect?: CyberTextEffect;
    glowing?: boolean;
    animationSpeed?: AnimationSpeed;
    lineVisible?: boolean;
    tag?: string;
    disabled?: boolean;
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    text: string;
    effect: CyberTextEffect;
    disabled: boolean;
    tag: string;
    glowing: boolean;
    animationSpeed: AnimationSpeed;
    shadowColor: string;
    glitchColor: string;
    lineColor: string;
    lineVisible: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
