export declare const CyberButton: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        onMouseEnter: (...args: any[]) => void;
        onMouseLeave: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        type: string;
        size: string;
        content: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: string;
        size: string;
        content: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    content: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onOnMouseEnter?: ((...args: any[]) => any) | undefined;
    onOnMouseLeave?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onMouseEnter: (...args: any[]) => void;
    onMouseLeave: (...args: any[]) => void;
}, string, {
    type: string;
    size: string;
    content: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})> & Record<string, any>;
export default CyberButton;
export type { ButtonInstance } from './src/instance';
