type __VLS_Props = {
    direction?: 'horizontal' | 'vertical';
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
    content?: string;
    showLeftLine?: boolean;
    showRightLine?: boolean;
    size?: string;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    type: "primary" | "success" | "warning" | "danger" | "info";
    size: string;
    content: string;
    direction: "horizontal" | "vertical";
    showLeftLine: boolean;
    showRightLine: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
