type __VLS_Props = {
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading?: "eager" | "lazy";
    crossorigin?: "" | "anonymous" | "use-credentials";
    placeholder?: string;
    errorSrc?: string;
    errorContent?: string;
    disableGlitch?: boolean;
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    placeholder?: (props: typeof __VLS_1) => any;
} & {
    error?: (props: typeof __VLS_3) => any;
} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    width: string | number;
    height: string | number;
    src: string;
    alt: string;
    fit: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading: "eager" | "lazy";
    crossorigin: "" | "anonymous" | "use-credentials";
    errorSrc: string;
    errorContent: string;
    disableGlitch: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
