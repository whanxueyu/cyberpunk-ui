import type { MagicTextSpeed, MagicTextGradient, MagicTextBlendMode, MagicTextDirection } from './instance';
type __VLS_Props = {
    speed?: MagicTextSpeed;
    duration?: number;
    gradient?: MagicTextGradient;
    gradientColors?: string[];
    gradientAngle?: string;
    glowColor?: string;
    glowSize?: string;
    strokeColor?: string;
    strokeWidth?: string;
    blendMode?: MagicTextBlendMode;
    fontWeight?: string | number;
    fontFamily?: string;
    tag?: string;
    disabled?: boolean;
    direction?: MagicTextDirection;
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    disabled: boolean;
    tag: string;
    direction: MagicTextDirection;
    speed: MagicTextSpeed;
    gradient: MagicTextGradient;
    gradientAngle: string;
    glowColor: string;
    glowSize: string;
    strokeColor: string;
    strokeWidth: string;
    blendMode: MagicTextBlendMode;
    fontWeight: string | number;
    fontFamily: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
