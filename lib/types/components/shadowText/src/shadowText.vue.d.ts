declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    shadowColor: {
        type: StringConstructor;
        default: string;
    };
    long: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    shadowColor: {
        type: StringConstructor;
        default: string;
    };
    long: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    direction: string;
    shadowColor: string;
    long: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
