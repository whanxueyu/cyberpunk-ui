declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    update: () => void;
    scrollToY: (y: number) => void;
    scrollToX: (x: number) => void;
    wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: string;
    theme: string;
    height: string | number;
    maxHeight: string | number;
    always: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
