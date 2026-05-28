export declare const CyberNeonToggle: import("package/utils/typescript").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inActiveColor: {
        type: StringConstructor;
        default: string;
    };
    pulseEffect: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inActiveColor: {
        type: StringConstructor;
        default: string;
    };
    pulseEffect: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    size: string;
    disabled: boolean;
    modelValue: boolean;
    shape: string;
    activeColor: string;
    inActiveColor: string;
    pulseEffect: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default CyberNeonToggle;
export type { NeonToggleInstance } from './src/instance.ts';
