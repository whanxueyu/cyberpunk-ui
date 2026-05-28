declare var __VLS_1: {}, __VLS_7: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    content?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    trigger: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    trigger: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
}>, {
    content: string;
    position: string;
    effect: string;
    trigger: string;
    delay: number;
    width: string | number;
    theme: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
