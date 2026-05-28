export declare const CyberFullPage: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: () => Array<import(".").FullPageItem>;
            default: {
                title: string;
            }[];
        };
        position: {
            type: StringConstructor;
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onToNext?: ((...args: any[]) => any) | undefined;
        onToLast?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        toNext: (...args: any[]) => void;
        toLast: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        position: string;
        items: import(".").FullPageItem[];
        showTitle: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: () => Array<import(".").FullPageItem>;
            default: {
                title: string;
            }[];
        };
        position: {
            type: StringConstructor;
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onToNext?: ((...args: any[]) => any) | undefined;
        onToLast?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        position: string;
        items: import(".").FullPageItem[];
        showTitle: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: () => Array<import(".").FullPageItem>;
        default: {
            title: string;
        }[];
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onToNext?: ((...args: any[]) => any) | undefined;
    onToLast?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    toNext: (...args: any[]) => void;
    toLast: (...args: any[]) => void;
}, string, {
    position: string;
    items: import(".").FullPageItem[];
    showTitle: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})> & Record<string, any>;
export default CyberFullPage;
export type { FullPageInstance, FullPageItem } from './src/instance.ts';
