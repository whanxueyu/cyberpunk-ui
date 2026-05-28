declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    loopDelay: {
        type: NumberConstructor;
        default: number;
    };
    cursor: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursorColor: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: () => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    loopDelay: {
        type: NumberConstructor;
        default: number;
    };
    cursor: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursorColor: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {
    text: string;
    delay: number;
    cursor: boolean;
    speed: number;
    loop: boolean;
    loopDelay: number;
    cursorColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
