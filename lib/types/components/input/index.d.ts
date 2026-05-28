export declare const CyberInput: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string | number;
        type?: "text" | "password" | "number" | "email" | "tel" | "url";
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        maxlength?: string | number;
        autocomplete?: string;
        size?: "large" | "default" | "small";
        theme?: "primary" | "success" | "warning" | "danger" | "info";
        glitchEffect?: boolean;
        scanlineEffect?: boolean;
        clearable?: boolean;
        showPassword?: boolean;
    }> & Readonly<{
        onInput?: ((value: string) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {
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
    }, import("vue").PublicProps, {
        type: "text" | "password" | "number" | "email" | "tel" | "url";
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
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string | number;
        type?: "text" | "password" | "number" | "email" | "tel" | "url";
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        maxlength?: string | number;
        autocomplete?: string;
        size?: "large" | "default" | "small";
        theme?: "primary" | "success" | "warning" | "danger" | "info";
        glitchEffect?: boolean;
        scanlineEffect?: boolean;
        clearable?: boolean;
        showPassword?: boolean;
    }> & Readonly<{
        onInput?: ((value: string) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
        select: () => void;
        clear: () => void;
        ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }, {}, {}, {}, {
        type: "text" | "password" | "number" | "email" | "tel" | "url";
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: string | number;
    type?: "text" | "password" | "number" | "email" | "tel" | "url";
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: string | number;
    autocomplete?: string;
    size?: "large" | "default" | "small";
    theme?: "primary" | "success" | "warning" | "danger" | "info";
    glitchEffect?: boolean;
    scanlineEffect?: boolean;
    clearable?: boolean;
    showPassword?: boolean;
}> & Readonly<{
    onInput?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
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
}, string, {
    type: "text" | "password" | "number" | "email" | "tel" | "url";
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        suffix?: (props: {}) => any;
    };
})> & Record<string, any>;
export default CyberInput;
export type { InputInstance } from './src/instance';
