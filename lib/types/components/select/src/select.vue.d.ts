import type { SelectOption, ModelValue } from './instance';
type __VLS_Props = {
    modelValue?: ModelValue;
    options?: SelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    noDataText?: string;
    disabled?: boolean;
    clearable?: boolean;
    filterable?: boolean;
    multiple?: boolean;
    showCheck?: boolean;
    size?: 'large' | 'default' | 'small';
    theme?: 'neon' | 'terminal' | 'matrix' | 'hologram';
    labelKey?: string;
    valueKey?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: ModelValue, option?: SelectOption | SelectOption[] | undefined) => any;
    clear: () => any;
    "update:modelValue": (value: ModelValue) => any;
    "visible-change": (visible: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: ModelValue, option?: SelectOption | SelectOption[] | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: ModelValue) => any) | undefined;
    "onVisible-change"?: ((visible: boolean) => any) | undefined;
}>, {
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "neon" | "terminal" | "matrix" | "hologram";
    modelValue: ModelValue;
    options: SelectOption[];
    searchPlaceholder: string;
    noDataText: string;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
    showCheck: boolean;
    labelKey: string;
    valueKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
