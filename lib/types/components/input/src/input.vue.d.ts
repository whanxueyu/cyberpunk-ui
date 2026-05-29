type __VLS_Props = {
    modelValue?: string | number;
    type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search';
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: string | number;
    autocomplete?: string;
    name?: string;
    size?: 'large' | 'default' | 'small';
    theme?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
    glitchEffect?: boolean;
    scanlineEffect?: boolean;
    clearable?: boolean;
    showPassword?: boolean;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_1) => any;
} & {
    suffix?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {
    focus: () => void;
    blur: () => void;
    select: () => void;
    clear: () => void;
    ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    input: (value: string) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: string | number) => any;
    keydown: (event: KeyboardEvent) => any;
    keyup: (event: KeyboardEvent) => any;
    clear: () => any;
    "update:modelValue": (value: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onInput?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    name: string;
    type: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "primary" | "success" | "warning" | "danger" | "info";
    modelValue: string | number;
    clearable: boolean;
    readonly: boolean;
    maxlength: string | number;
    autocomplete: string;
    glitchEffect: boolean;
    scanlineEffect: boolean;
    showPassword: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
