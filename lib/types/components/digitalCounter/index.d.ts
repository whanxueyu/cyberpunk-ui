export declare const CyberDigitalCounter: import("package/utils/typescript").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    from: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    to: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    format: {
        type: ObjectConstructor;
        default: () => {};
    };
    prefix: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    decimal: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    from: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    to: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    format: {
        type: ObjectConstructor;
        default: () => {};
    };
    prefix: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    decimal: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    duration: number;
    effect: string;
    error: boolean;
    to: string | number;
    theme: string;
    value: string | number;
    from: string | number;
    format: Record<string, any>;
    prefix: string;
    suffix: string;
    separator: string;
    decimal: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default CyberDigitalCounter;
export type { DigitalCounterInstance } from './src/instance.ts';
