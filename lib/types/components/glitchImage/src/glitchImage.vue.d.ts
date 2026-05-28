declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    glitchType: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    intensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerMode: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "glitch-start": (...args: any[]) => void;
    "glitch-end": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    glitchType: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    intensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerMode: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onGlitch-start"?: ((...args: any[]) => any) | undefined;
    "onGlitch-end"?: ((...args: any[]) => any) | undefined;
}>, {
    animated: boolean;
    alt: string;
    glitchType: string;
    intensity: number;
    triggerMode: string;
    interval: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
