import type Tree from './tree.vue';
export type TreeInstance = InstanceType<typeof Tree>;
export interface TreeNode {
    id: string | number;
    label: string;
    children?: TreeNode[];
    expanded?: boolean;
    selected?: boolean;
    status?: 'online' | 'offline' | 'warning' | 'error';
    icon?: string;
    [key: string]: any;
}
export interface InternalTreeNode extends TreeNode {
    _expanded: boolean;
    _selected: boolean;
    _level: number;
    _parent?: InternalTreeNode;
    _isLastChild: boolean;
}
