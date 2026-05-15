import { computed, ref, watch } from 'vue';
defineOptions({
    name: 'CyberTree',
});
const props = withDefaults(defineProps(), {
    data: () => [],
    theme: 'neon',
    effect: 'scan',
    showConnectors: true,
    showStatus: true,
    showScanline: true,
    indent: 30,
    defaultExpandAll: false,
    expandOnClick: true,
    multiple: false,
});
const emit = defineEmits();
const internalData = ref([]);
const selectedNodes = ref([]);
const refreshKey = ref(0);
const connectorOffset = 14;
const flatNodes = computed(() => {
    const result = [];
    const flatten = (nodes, level = 0, parent) => {
        nodes.forEach((node, index) => {
            var _a, _b;
            node._level = level;
            node._parent = parent;
            node._expanded = (_a = node.expanded) !== null && _a !== void 0 ? _a : (props.defaultExpandAll || level === 0);
            node._selected = (_b = node.selected) !== null && _b !== void 0 ? _b : false;
            node._isLastChild = index === nodes.length - 1;
            result.push(node);
            if (node._expanded && node.children && node.children.length > 0) {
                flatten(node.children, level + 1, node);
            }
        });
    };
    flatten(internalData.value);
    return result;
});
const initializeData = () => {
    const convertNode = (node, level = 0) => {
        var _a, _b;
        const internalNode = Object.assign(Object.assign({}, node), { _expanded: (_a = node.expanded) !== null && _a !== void 0 ? _a : (props.defaultExpandAll || level === 0), _selected: (_b = node.selected) !== null && _b !== void 0 ? _b : false, _level: level, _parent: undefined, _isLastChild: false });
        if (node.children && node.children.length > 0) {
            internalNode.children = node.children.map(child => convertNode(child, level + 1));
        }
        return internalNode;
    };
    internalData.value = props.data.map(node => convertNode(node));
    selectedNodes.value = flatNodes.value.filter(node => node._selected);
};
const isLeaf = (node) => {
    return !node.children || node.children.length === 0;
};
const getNodeLevel = (node) => {
    var _a;
    return (_a = node._level) !== null && _a !== void 0 ? _a : 0;
};
const getNodeIndent = (node) => {
    return getNodeLevel(node) * props.indent;
};
const getAncestorLevels = (node) => {
    const level = getNodeLevel(node);
    return Array.from({ length: Math.max(level - 1, 0) }, (_, index) => index);
};
const isAncestorLastChild = (node, level) => {
    var _a;
    let current = node;
    let currentLevel = getNodeLevel(node);
    while (current && currentLevel > level) {
        current = current._parent;
        currentLevel--;
    }
    return (_a = current === null || current === void 0 ? void 0 : current._isLastChild) !== null && _a !== void 0 ? _a : false;
};
const toggleNode = (node) => {
    node._expanded = !node._expanded;
    node.expanded = node._expanded;
    if (node._expanded) {
        emit('node-expand', node);
    }
    else {
        emit('node-collapse', node);
    }
    forceUpdate();
};
const handleContentClick = (node) => {
    if (props.multiple) {
        node._selected = !node._selected;
        node.selected = node._selected;
    }
    else if (node._selected) {
        node._selected = false;
        node.selected = false;
    }
    else {
        selectedNodes.value.forEach(selectedNode => {
            selectedNode._selected = false;
            selectedNode.selected = false;
        });
        node._selected = true;
        node.selected = true;
    }
    updateSelectedNodes();
    emit('select-change', selectedNodes.value);
    emit('node-click', node);
    if (props.expandOnClick && !isLeaf(node)) {
        toggleNode(node);
    }
};
const updateSelectedNodes = () => {
    selectedNodes.value = flatNodes.value.filter(node => node._selected);
};
const getNodeIconClass = (node) => {
    if (node.icon)
        return node.icon;
    if (isLeaf(node))
        return 'icon-file';
    return node._expanded ? 'icon-folder-open' : 'icon-folder';
};
const statusText = (status) => {
    const map = {
        online: 'Online',
        offline: 'Offline',
        warning: 'Warning',
        error: 'Error',
    };
    return status ? map[status] : '';
};
const forceUpdate = () => {
    refreshKey.value++;
};
watch(() => props.data, () => {
    initializeData();
}, { deep: true, immediate: true });
const __VLS_exposed = {
    getSelectedNodes: () => selectedNodes.value,
    clearSelection: () => {
        selectedNodes.value.forEach(node => {
            node._selected = false;
            node.selected = false;
        });
        selectedNodes.value = [];
        forceUpdate();
    },
};
defineExpose(__VLS_exposed);
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    data: () => [],
    theme: 'neon',
    effect: 'scan',
    showConnectors: true,
    showStatus: true,
    showScanline: true,
    indent: 30,
    defaultExpandAll: false,
    expandOnClick: true,
    multiple: false,
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
;
;
;
;
;
;
;
;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-cyber-tree cyber-tree" }, { class: ([`theme-${__VLS_ctx.theme}`, `effect-${__VLS_ctx.effect}`]) }));
for (const [node] of __VLS_getVForSourceType((__VLS_ctx.flatNodes))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ key: (`${node.id}-${node._expanded}-${node._selected}-${__VLS_ctx.refreshKey}`) }, { class: "tree-node" }), { class: ({
            expanded: node._expanded,
            leaf: __VLS_ctx.isLeaf(node),
            'last-child': node._isLastChild,
        }) }), { style: ({ paddingLeft: `${__VLS_ctx.getNodeIndent(node)}px` }) }));
    if (__VLS_ctx.showConnectors && __VLS_ctx.getNodeLevel(node) > 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tree-connectors" }, { 'aria-hidden': "true" }));
        for (const [level] of __VLS_getVForSourceType((__VLS_ctx.getAncestorLevels(node)))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign(Object.assign(Object.assign({ key: (level) }, { class: "ancestor-line" }), { class: ({ hidden: __VLS_ctx.isAncestorLastChild(node, level) }) }), { style: ({ left: `${level * __VLS_ctx.indent + __VLS_ctx.connectorOffset}px` }) }));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign(Object.assign({ class: "parent-line" }, { class: ({ 'is-last': node._isLastChild }) }), { style: ({ left: `${(__VLS_ctx.getNodeLevel(node) - 1) * __VLS_ctx.indent + __VLS_ctx.connectorOffset}px` }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "horizontal-line" }, { style: ({
                left: `${(__VLS_ctx.getNodeLevel(node) - 1) * __VLS_ctx.indent + __VLS_ctx.connectorOffset}px`,
                width: `${__VLS_ctx.indent - __VLS_ctx.connectorOffset + 20}px`,
            }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "connector-joint" }, { style: ({ left: `${(__VLS_ctx.getNodeLevel(node) - 1) * __VLS_ctx.indent + __VLS_ctx.connectorOffset}px` }) }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.handleContentClick(node);
        } }, { class: "node-content-wrapper" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "node-content" }, { class: ({ selected: node._selected }) }));
    if (!__VLS_ctx.isLeaf(node)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                if (!(!__VLS_ctx.isLeaf(node)))
                    return;
                __VLS_ctx.toggleNode(node);
            } }, { class: "node-expand-icon" }), { type: "button", 'aria-expanded': (node._expanded), 'aria-label': (node._expanded ? 'Collapse node' : 'Expand node') }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "expand-arrow" }, { class: ({ rotated: node._expanded }) }));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "node-expand-placeholder" }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "node-icon" }, { class: (__VLS_ctx.getNodeIconClass(node)) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "icon-core" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "node-label" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "label-text" }));
    (node.label);
    if (__VLS_ctx.showStatus && node.status) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "node-status" }, { title: (__VLS_ctx.statusText(node.status)) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "status-indicator" }, { class: (`status-${node.status}`) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "status-text" }));
        (node.status);
    }
}
if (__VLS_ctx.flatNodes.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tree-empty" }));
}
if (__VLS_ctx.showScanline && __VLS_ctx.effect !== 'static') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tree-scanline" }));
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            refreshKey: refreshKey,
            connectorOffset: connectorOffset,
            flatNodes: flatNodes,
            isLeaf: isLeaf,
            getNodeLevel: getNodeLevel,
            getNodeIndent: getNodeIndent,
            getAncestorLevels: getAncestorLevels,
            isAncestorLastChild: isAncestorLastChild,
            toggleNode: toggleNode,
            handleContentClick: handleContentClick,
            getNodeIconClass: getNodeIconClass,
            statusText: statusText,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return Object.assign({}, __VLS_exposed);
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
;
//# sourceMappingURL=tree.vue.js.map