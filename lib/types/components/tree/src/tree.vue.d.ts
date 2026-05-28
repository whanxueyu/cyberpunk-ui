import type { TreeNode } from './instance';
type __VLS_Props = {
    data?: TreeNode[];
    theme?: 'neon' | 'hologram' | 'terminal' | 'matrix';
    effect?: 'glitch' | 'scan' | 'pulse' | 'static';
    showConnectors?: boolean;
    showStatus?: boolean;
    showScanline?: boolean;
    indent?: number;
    defaultExpandAll?: boolean;
    expandOnClick?: boolean;
    multiple?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    getSelectedNodes: () => {
        [x: string]: any;
        _expanded: boolean;
        _selected: boolean;
        _level: number;
        _parent?: any | undefined;
        _isLastChild: boolean;
        id: string | number;
        label: string;
        children?: {
            [x: string]: any;
            id: string | number;
            label: string;
            children?: any[] | undefined;
            expanded?: boolean | undefined;
            selected?: boolean | undefined;
            status?: "online" | "offline" | "warning" | "error" | undefined;
            icon?: string | undefined;
        }[] | undefined;
        expanded?: boolean | undefined;
        selected?: boolean | undefined;
        status?: "online" | "offline" | "warning" | "error" | undefined;
        icon?: string | undefined;
    }[];
    clearSelection: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "node-click": (node: TreeNode) => any;
    "node-expand": (node: TreeNode) => any;
    "node-collapse": (node: TreeNode) => any;
    "select-change": (selectedNodes: TreeNode[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onNode-click"?: ((node: TreeNode) => any) | undefined;
    "onNode-expand"?: ((node: TreeNode) => any) | undefined;
    "onNode-collapse"?: ((node: TreeNode) => any) | undefined;
    "onSelect-change"?: ((selectedNodes: TreeNode[]) => any) | undefined;
}>, {
    data: TreeNode[];
    effect: "glitch" | "scan" | "pulse" | "static";
    theme: "neon" | "hologram" | "terminal" | "matrix";
    showStatus: boolean;
    showScanline: boolean;
    multiple: boolean;
    showConnectors: boolean;
    indent: number;
    defaultExpandAll: boolean;
    expandOnClick: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
