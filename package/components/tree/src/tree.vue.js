import { ref, computed, onMounted, watch } from 'vue';
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
    indent: 24,
    defaultExpandAll: false,
    expandOnClick: true,
    multiple: false
});
const emit = defineEmits();
const internalData = ref([]);
const selectedNodes = ref([]);
const refreshKey = ref(0);
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
    selectedNodes.value = [];
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
const isLastChild = (node, index) => {
    return node._isLastChild;
};
const shouldHideVerticalLine = (node, level) => {
    var _a;
    if (!props.showConnectors)
        return true;
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
    else {
        if (node._selected) {
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
    if (node._expanded)
        return 'icon-folder-open';
    return 'icon-folder';
};
const forceUpdate = () => {
    refreshKey.value++;
};
onMounted(() => {
    initializeData();
});
watch(() => props.data, () => {
    initializeData();
}, { deep: true });
const __VLS_exposed = {
    getSelectedNodes: () => selectedNodes.value,
    clearSelection: () => {
        selectedNodes.value.forEach(node => {
            node._selected = false;
            node.selected = false;
        });
        selectedNodes.value = [];
        forceUpdate();
    }
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
    indent: 24,
    defaultExpandAll: false,
    expandOnClick: true,
    multiple: false
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cyber-tree" }, { class: ([`theme-${__VLS_ctx.theme}`, `effect-${__VLS_ctx.effect}`]) }));
for (const [node, index] of __VLS_getVForSourceType((__VLS_ctx.flatNodes))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ key: (`${node.id}-${node._expanded}-${__VLS_ctx.refreshKey}`) }, { class: (['tree-node', { 'expanded': node._expanded, 'leaf': __VLS_ctx.isLeaf(node), 'last-child': __VLS_ctx.isLastChild(node, index) }]) }), { style: ({ paddingLeft: `${__VLS_ctx.getNodeIndent(node)}px` }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "node-connectors" }));
    for (const [level] of __VLS_getVForSourceType((__VLS_ctx.getNodeLevel(node)))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "vertical-line" }, { class: ({ 'hidden': __VLS_ctx.shouldHideVerticalLine(node, level) }) }), { style: ({ left: `${(level - 1) * __VLS_ctx.indent + __VLS_ctx.getNodeIndent(node)}px` }) }));
    }
    if (!__VLS_ctx.isLeaf(node)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                if (!(!__VLS_ctx.isLeaf(node)))
                    return;
                __VLS_ctx.toggleNode(node);
            } }, { class: "node-toggle" }), { style: ({ left: `${__VLS_ctx.getNodeIndent(node) - 20}px` }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "toggle-icon" }, { class: ({ 'rotated': node._expanded }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-line vertical" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-line horizontal" }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.handleContentClick(node);
        } }, { class: "node-content-wrapper" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "node-content" }, { class: ({ 'selected': node._selected }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "node-icon" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-glow" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-core" }, { class: (__VLS_ctx.getNodeIconClass(node)) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "node-label" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "label-text" }));
    (node.label);
    if (node._selected) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "label-underline" }));
    }
    if (__VLS_ctx.showStatus && node.status) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "node-status" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "status-indicator" }, { class: (`status-${node.status}`) }));
    }
    if (__VLS_ctx.getNodeLevel(node) > 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "horizontal-connector" }, { style: ({ left: `${(__VLS_ctx.getNodeLevel(node) - 1) * __VLS_ctx.indent + __VLS_ctx.getNodeIndent(node) - 12}px` }) }));
    }
}
if (__VLS_ctx.showScanline) {
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
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            refreshKey: refreshKey,
            flatNodes: flatNodes,
            isLeaf: isLeaf,
            getNodeLevel: getNodeLevel,
            getNodeIndent: getNodeIndent,
            isLastChild: isLastChild,
            shouldHideVerticalLine: shouldHideVerticalLine,
            toggleNode: toggleNode,
            handleContentClick: handleContentClick,
            getNodeIconClass: getNodeIconClass,
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