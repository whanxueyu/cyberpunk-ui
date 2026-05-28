export declare const CyberInfiniteTable: import("package/utils/typescript").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        data?: import("./src/instance.ts").TableRow[];
        columns?: import("./src/instance.ts").TableColumn[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        rowHeight?: number;
        bufferSize?: number;
        scrollType?: "single" | "page";
        showScanline?: boolean;
        loadMore?: () => Promise<void>;
        remoteMethod?: (params: {
            page: number;
            size: number;
        }) => Promise<{
            data: import("./src/instance.ts").TableRow[];
            total: number;
            hasMore: boolean;
        }>;
        autoScroll?: boolean;
        rowNum?: number;
        waitTime?: number;
        hoverPause?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        data: import("./src/instance.ts").TableRow[];
        theme: "neon" | "hologram" | "terminal" | "matrix";
        columns: import("./src/instance.ts").TableColumn[];
        rowHeight: number;
        bufferSize: number;
        scrollType: "single" | "page";
        showScanline: boolean;
        autoScroll: boolean;
        rowNum: number;
        waitTime: number;
        hoverPause: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        data?: import("./src/instance.ts").TableRow[];
        columns?: import("./src/instance.ts").TableColumn[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        rowHeight?: number;
        bufferSize?: number;
        scrollType?: "single" | "page";
        showScanline?: boolean;
        loadMore?: () => Promise<void>;
        remoteMethod?: (params: {
            page: number;
            size: number;
        }) => Promise<{
            data: import("./src/instance.ts").TableRow[];
            total: number;
            hasMore: boolean;
        }>;
        autoScroll?: boolean;
        rowNum?: number;
        waitTime?: number;
        hoverPause?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        data: import("./src/instance.ts").TableRow[];
        theme: "neon" | "hologram" | "terminal" | "matrix";
        columns: import("./src/instance.ts").TableColumn[];
        rowHeight: number;
        bufferSize: number;
        scrollType: "single" | "page";
        showScanline: boolean;
        autoScroll: boolean;
        rowNum: number;
        waitTime: number;
        hoverPause: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    data?: import("./src/instance.ts").TableRow[];
    columns?: import("./src/instance.ts").TableColumn[];
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    rowHeight?: number;
    bufferSize?: number;
    scrollType?: "single" | "page";
    showScanline?: boolean;
    loadMore?: () => Promise<void>;
    remoteMethod?: (params: {
        page: number;
        size: number;
    }) => Promise<{
        data: import("./src/instance.ts").TableRow[];
        total: number;
        hasMore: boolean;
    }>;
    autoScroll?: boolean;
    rowNum?: number;
    waitTime?: number;
    hoverPause?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: import("./src/instance.ts").TableRow[];
    theme: "neon" | "hologram" | "terminal" | "matrix";
    columns: import("./src/instance.ts").TableColumn[];
    rowHeight: number;
    bufferSize: number;
    scrollType: "single" | "page";
    showScanline: boolean;
    autoScroll: boolean;
    rowNum: number;
    waitTime: number;
    hoverPause: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        [x: string]: ((props: {
            row: any;
            column: import("./src/instance.ts").TableColumn;
        }) => any) | undefined;
    };
})> & Record<string, any>;
export default CyberInfiniteTable;
export type { InfiniteTableInstance } from './src/instance.ts';
