export declare const CyberTooltip: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        trigger: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onShow?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        show: (...args: any[]) => void;
        hide: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        content: string;
        position: string;
        effect: string;
        trigger: string;
        delay: number;
        width: string | number;
        theme: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        trigger: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onShow?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        content: string;
        position: string;
        effect: string;
        trigger: string;
        delay: number;
        width: string | number;
        theme: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    trigger: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
}, string, {
    content: string;
    position: string;
    effect: string;
    trigger: string;
    delay: number;
    width: string | number;
    theme: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        content?: (props: {}) => any;
    };
})> & Record<string, any>;
export default CyberTooltip;
export type { TooltipInstance } from './src/instance.ts';
