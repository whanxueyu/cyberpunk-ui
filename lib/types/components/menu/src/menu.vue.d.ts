import type { MenuItem, MenuDirection, MenuTheme, MenuEffect } from './instance';
type __VLS_Props = {
    modelValue?: string | number;
    items?: MenuItem[];
    direction?: MenuDirection;
    theme?: MenuTheme;
    effect?: MenuEffect;
    expandedValues?: (string | number)[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (item: MenuItem) => any;
    change: (v: string | number) => any;
    "update:modelValue": (v: string | number) => any;
    "update:expandedValues": (v: (string | number)[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((item: MenuItem) => any) | undefined;
    onChange?: ((v: string | number) => any) | undefined;
    "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
    "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
}>, {
    effect: MenuEffect;
    theme: MenuTheme;
    direction: MenuDirection;
    items: MenuItem[];
    modelValue: string | number;
    expandedValues: (string | number)[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
