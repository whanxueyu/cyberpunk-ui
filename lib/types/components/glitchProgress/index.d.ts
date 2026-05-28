export declare const CyberGlitchProgress: import("package/utils/typescript").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glitchIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glitchIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    progress: number;
    direction: string;
    glitchIntensity: number;
    indeterminate: boolean;
    color: string;
    showText: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default CyberGlitchProgress;
export type { GlitchProgressInstance } from './src/instance.ts';
