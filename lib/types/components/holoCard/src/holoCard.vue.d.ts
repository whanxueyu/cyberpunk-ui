declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    title?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    footer?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glowIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    hologramColor: {
        type: StringConstructor;
        default: string;
    };
    depth: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glowIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    hologramColor: {
        type: StringConstructor;
        default: string;
    };
    depth: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{}>, {
    type: string;
    title: string;
    effect: string;
    disabled: boolean;
    theme: string;
    glowIntensity: number;
    hologramColor: string;
    depth: number;
    rounded: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
