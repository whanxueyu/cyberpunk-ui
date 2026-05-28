import type { CascaderOption, OptionValue } from './instance';
declare const _default: import("vue").DefineComponent<{
    options: CascaderOption[];
    selectedValues: OptionValue[];
    multiple: boolean;
    labelKey: string;
    valueKey: string;
    childrenKey: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (data: {
        option: CascaderOption;
        value: OptionValue;
    }) => any;
}, string, import("vue").PublicProps, Readonly<{
    options: CascaderOption[];
    selectedValues: OptionValue[];
    multiple: boolean;
    labelKey: string;
    valueKey: string;
    childrenKey: string;
}> & Readonly<{
    onSelect?: ((data: {
        option: CascaderOption;
        value: OptionValue;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
