export declare const CyberHoloCard: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glowIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        hologramColor: {
            type: StringConstructor;
            default: string;
        };
        depth: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        title: string;
        effect: string;
        disabled: boolean;
        theme: string;
        glowIntensity: number;
        hologramColor: string;
        depth: number;
        rounded: boolean;
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
        glowIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        hologramColor: {
            type: StringConstructor;
            default: string;
        };
        depth: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: string;
        title: string;
        effect: string;
        disabled: boolean;
        theme: string;
        glowIntensity: number;
        hologramColor: string;
        depth: number;
        rounded: boolean;
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
    glowIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    hologramColor: {
        type: StringConstructor;
        default: string;
    };
    depth: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    title: string;
    effect: string;
    disabled: boolean;
    theme: string;
    glowIntensity: number;
    hologramColor: string;
    depth: number;
    rounded: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
})> & Record<string, any>;
export default CyberHoloCard;
export type { HoloCardInstance } from './src/instance.ts';
