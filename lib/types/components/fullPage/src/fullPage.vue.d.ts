import type { FullPageItem } from './instance';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: () => Array<FullPageItem>;
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    toNext: (...args: any[]) => void;
    toLast: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: () => Array<FullPageItem>;
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
}>, {
    position: string;
    items: FullPageItem[];
    showTitle: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
