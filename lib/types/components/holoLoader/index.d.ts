export declare const CyberHoloLoader: import("package/utils/typescript").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    type: string;
    size: string;
    text: string;
    color: string;
    transparent: boolean;
    speed: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default CyberHoloLoader;
export type { HoloLoaderInstance } from './src/instance.ts';
