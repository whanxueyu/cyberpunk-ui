export declare const CyberScrollbar: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        maxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        always: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        update: () => void;
        scrollToY: (y: number) => void;
        scrollToX: (x: number) => void;
        wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: string;
        theme: string;
        height: string | number;
        maxHeight: string | number;
        always: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        maxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        always: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        update: () => void;
        scrollToY: (y: number) => void;
        scrollToX: (x: number) => void;
        wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, {
        size: string;
        theme: string;
        height: string | number;
        maxHeight: string | number;
        always: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    update: () => void;
    scrollToY: (y: number) => void;
    scrollToX: (x: number) => void;
    wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string;
    theme: string;
    height: string | number;
    maxHeight: string | number;
    always: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})> & Record<string, any>;
export default CyberScrollbar;
export type { ScrollbarInstance } from './src/instance';
