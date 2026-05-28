export declare const CyberTyping: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        loopDelay: {
            type: NumberConstructor;
            default: number;
        };
        cursor: {
            type: BooleanConstructor;
            default: boolean;
        };
        cursorColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: () => any;
    }, import("vue").PublicProps, {
        text: string;
        delay: number;
        cursor: boolean;
        speed: number;
        loop: boolean;
        loopDelay: number;
        cursorColor: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        loopDelay: {
            type: NumberConstructor;
            default: number;
        };
        cursor: {
            type: BooleanConstructor;
            default: boolean;
        };
        cursorColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        text: string;
        delay: number;
        cursor: boolean;
        speed: number;
        loop: boolean;
        loopDelay: number;
        cursorColor: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    loopDelay: {
        type: NumberConstructor;
        default: number;
    };
    cursor: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursorColor: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: () => any;
}, string, {
    text: string;
    delay: number;
    cursor: boolean;
    speed: number;
    loop: boolean;
    loopDelay: number;
    cursorColor: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})> & Record<string, any>;
export default CyberTyping;
export type { TypingInstance } from './src/instance.ts';
