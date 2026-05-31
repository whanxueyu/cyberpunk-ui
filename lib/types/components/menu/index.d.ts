export declare const CyberMenu: import("package/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    modelValue?: string | number;
    items?: import(".").MenuItem[];
    direction?: import(".").MenuDirection;
    theme?: import(".").MenuTheme;
    effect?: import(".").MenuEffect;
    expandedValues?: (string | number)[];
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (item: import(".").MenuItem) => any;
    change: (v: string | number) => any;
    "update:modelValue": (v: string | number) => any;
    "update:expandedValues": (v: (string | number)[]) => any;
}, string, import("vue").PublicProps, Readonly<{
    modelValue?: string | number;
    items?: import(".").MenuItem[];
    direction?: import(".").MenuDirection;
    theme?: import(".").MenuTheme;
    effect?: import(".").MenuEffect;
    expandedValues?: (string | number)[];
}> & Readonly<{
    onSelect?: ((item: import(".").MenuItem) => any) | undefined;
    onChange?: ((v: string | number) => any) | undefined;
    "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
    "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
}>, {
    effect: import(".").MenuEffect;
    theme: import(".").MenuTheme;
    direction: import(".").MenuDirection;
    items: import(".").MenuItem[];
    modelValue: string | number;
    expandedValues: (string | number)[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>> & Record<string, any>;
export default CyberMenu;
export type { MenuInstance, MenuItem, MenuDirection, MenuTheme, MenuEffect } from './src/instance';
