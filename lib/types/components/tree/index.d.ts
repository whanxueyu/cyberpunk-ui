export declare const CyberTree: import("package/utils/typescript").SFCWithInstall<import("vue").DefineComponent<{
    data?: import(".").TreeNode[];
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    effect?: "glitch" | "scan" | "pulse" | "static";
    showConnectors?: boolean;
    showStatus?: boolean;
    showScanline?: boolean;
    indent?: number;
    defaultExpandAll?: boolean;
    expandOnClick?: boolean;
    multiple?: boolean;
}, {
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
    "node-click": (node: import(".").TreeNode) => any;
    "node-expand": (node: import(".").TreeNode) => any;
    "node-collapse": (node: import(".").TreeNode) => any;
    "select-change": (selectedNodes: import(".").TreeNode[]) => any;
}, string, import("vue").PublicProps, Readonly<{
    data?: import(".").TreeNode[];
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    effect?: "glitch" | "scan" | "pulse" | "static";
    showConnectors?: boolean;
    showStatus?: boolean;
    showScanline?: boolean;
    indent?: number;
    defaultExpandAll?: boolean;
    expandOnClick?: boolean;
    multiple?: boolean;
}> & Readonly<{
    "onNode-click"?: ((node: import(".").TreeNode) => any) | undefined;
    "onNode-expand"?: ((node: import(".").TreeNode) => any) | undefined;
    "onNode-collapse"?: ((node: import(".").TreeNode) => any) | undefined;
    "onSelect-change"?: ((selectedNodes: import(".").TreeNode[]) => any) | undefined;
}>, {
    data: import(".").TreeNode[];
    effect: "glitch" | "scan" | "pulse" | "static";
    theme: "neon" | "hologram" | "terminal" | "matrix";
    showStatus: boolean;
    showScanline: boolean;
    multiple: boolean;
    showConnectors: boolean;
    indent: number;
    defaultExpandAll: boolean;
    expandOnClick: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>> & Record<string, any>;
export default CyberTree;
export type { TreeInstance, TreeNode, InternalTreeNode } from './src/instance.ts';
