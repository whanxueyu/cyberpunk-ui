import type { TableColumn, TableRow } from './instance';
type __VLS_Props = {
    data?: TableRow[];
    columns?: TableColumn[];
    theme?: 'neon' | 'hologram' | 'terminal' | 'matrix';
    rowHeight?: number;
    bufferSize?: number;
    scrollType?: 'single' | 'page';
    showScanline?: boolean;
    loadMore?: () => Promise<void>;
    remoteMethod?: (params: {
        page: number;
        size: number;
    }) => Promise<{
        data: TableRow[];
        total: number;
        hasMore: boolean;
    }>;
    autoScroll?: boolean;
    rowNum?: number;
    waitTime?: number;
    hoverPause?: boolean;
};
declare var __VLS_6: string, __VLS_7: {
    row: any;
    column: TableColumn;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_6>]?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    data: TableRow[];
    theme: "neon" | "hologram" | "terminal" | "matrix";
    columns: TableColumn[];
    rowHeight: number;
    bufferSize: number;
    scrollType: "single" | "page";
    showScanline: boolean;
    autoScroll: boolean;
    rowNum: number;
    waitTime: number;
    hoverPause: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
