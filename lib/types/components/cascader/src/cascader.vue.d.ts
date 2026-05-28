import type { CascaderOption, OptionValue } from './instance';
type ModelValue = OptionValue | OptionValue[];
type __VLS_Props = {
    modelValue?: ModelValue;
    options?: CascaderOption[];
    placeholder?: string;
    noDataText?: string;
    disabled?: boolean;
    clearable?: boolean;
    multiple?: boolean;
    showAllLevels?: boolean;
    filterable?: boolean;
    size?: 'large' | 'default' | 'small';
    theme?: 'neon' | 'terminal' | 'matrix' | 'hologram';
    labelKey?: string;
    valueKey?: string;
    childrenKey?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: ModelValue) => any;
    clear: () => any;
    "update:modelValue": (value: ModelValue) => any;
    "visible-change": (visible: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: ModelValue) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: ModelValue) => any) | undefined;
    "onVisible-change"?: ((visible: boolean) => any) | undefined;
}>, {
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "neon" | "terminal" | "matrix" | "hologram";
    modelValue: ModelValue;
    options: CascaderOption[];
    noDataText: string;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
    labelKey: string;
    valueKey: string;
    childrenKey: string;
    showAllLevels: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
