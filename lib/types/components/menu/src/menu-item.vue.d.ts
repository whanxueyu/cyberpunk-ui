import type { MenuItem } from './instance';
type __VLS_Props = {
    item: MenuItem;
    depth: number;
    direction: 'horizontal' | 'vertical';
    activeValue: string | number;
    expandedValues: (string | number)[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (item: MenuItem) => any;
    "toggle-expand": (value: string | number) => any;
    expand: (value: string | number) => any;
    collapse: (value: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((item: MenuItem) => any) | undefined;
    "onToggle-expand"?: ((value: string | number) => any) | undefined;
    onExpand?: ((value: string | number) => any) | undefined;
    onCollapse?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
