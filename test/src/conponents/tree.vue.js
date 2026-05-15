import { ref } from 'vue';
const eventLog = ref('等待操作树节点...');
const treeData = ref([
    {
        id: 1,
        label: 'System Root',
        status: 'online',
        expanded: true,
        children: [
            {
                id: 2,
                label: 'Security Protocols',
                status: 'warning',
                expanded: true,
                children: [
                    { id: 3, label: 'Firewall.v2', status: 'online' },
                    { id: 4, label: 'Intrusion Detection', status: 'error' },
                ],
            },
            {
                id: 5,
                label: 'Data Core',
                status: 'online',
                children: [
                    { id: 6, label: 'User Database', status: 'online' },
                    { id: 7, label: 'System Logs', status: 'offline' },
                ],
            },
        ],
    },
]);
const deepTreeData = ref([
    {
        id: 'root',
        label: 'Command Network',
        status: 'online',
        expanded: true,
        children: [
            {
                id: 'ops',
                label: 'Operations Layer',
                status: 'online',
                expanded: true,
                children: [
                    {
                        id: 'ops-alpha',
                        label: 'Alpha District',
                        status: 'warning',
                        expanded: true,
                        children: [
                            { id: 'ops-alpha-sensor', label: 'Sensor Relay', status: 'online' },
                            { id: 'ops-alpha-camera', label: 'Camera Grid', status: 'offline' },
                        ],
                    },
                    {
                        id: 'ops-beta',
                        label: 'Beta District',
                        status: 'online',
                        expanded: true,
                        children: [
                            { id: 'ops-beta-drone', label: 'Drone Port', status: 'online' },
                            { id: 'ops-beta-gate', label: 'Access Gate', status: 'error' },
                        ],
                    },
                ],
            },
            {
                id: 'data',
                label: 'Data Spine',
                status: 'online',
                expanded: true,
                children: [
                    { id: 'data-cache', label: 'Edge Cache', status: 'online' },
                    {
                        id: 'data-core',
                        label: 'Core Archive',
                        status: 'warning',
                        expanded: true,
                        children: [
                            {
                                id: 'data-core-hot',
                                label: 'Hot Storage',
                                status: 'online',
                                expanded: true,
                                children: [
                                    { id: 'data-core-hot-01', label: 'Shard 01', status: 'online' },
                                    { id: 'data-core-hot-02', label: 'Shard 02', status: 'offline' },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 'ai',
                label: 'AI Review Queue',
                status: 'error',
                children: [
                    { id: 'ai-audit', label: 'Audit Stream', status: 'warning' },
                    { id: 'ai-policy', label: 'Policy Rules', status: 'online' },
                ],
            },
        ],
    },
]);
const statusTreeData = ref([
    {
        id: 'status-root',
        label: 'Infrastructure',
        status: 'online',
        expanded: true,
        children: [
            { id: 'status-online', label: 'Online Node', status: 'online' },
            { id: 'status-warning', label: 'Warning Node', status: 'warning' },
            { id: 'status-error', label: 'Error Node', status: 'error' },
            { id: 'status-offline', label: 'Offline Node', status: 'offline' },
        ],
    },
]);
const handleNodeClick = (node) => {
    eventLog.value = `node-click: ${node.label}`;
    console.log('Node clicked:', node);
};
const handleSelectChange = (selectedNodes) => {
    const labels = selectedNodes.map(node => node.label).join(', ') || '无';
    eventLog.value = `select-change: ${labels}`;
    console.log('Selected nodes:', selectedNodes);
};
const handleNodeExpand = (node) => {
    eventLog.value = `node-expand: ${node.label}`;
};
const handleNodeCollapse = (node) => {
    eventLog.value = `node-collapse: ${node.label}`;
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
const __VLS_0 = {}.CyberTree;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign(Object.assign({ 'onNodeClick': {} }, { 'onSelectChange': {} }), { data: (__VLS_ctx.treeData) })));
const __VLS_2 = __VLS_1(Object.assign(Object.assign({ 'onNodeClick': {} }, { 'onSelectChange': {} }), { data: (__VLS_ctx.treeData) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onNodeClick: (__VLS_ctx.handleNodeClick)
};
const __VLS_8 = {
    onSelectChange: (__VLS_ctx.handleSelectChange)
};
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel wide" }));
const __VLS_9 = {}.CyberTree;
;
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(Object.assign(Object.assign({ 'onNodeExpand': {} }, { 'onNodeCollapse': {} }), { data: (__VLS_ctx.deepTreeData), theme: "hologram", effect: "scan", defaultExpandAll: (true) })));
const __VLS_11 = __VLS_10(Object.assign(Object.assign({ 'onNodeExpand': {} }, { 'onNodeCollapse': {} }), { data: (__VLS_ctx.deepTreeData), theme: "hologram", effect: "scan", defaultExpandAll: (true) }), ...__VLS_functionalComponentArgsRest(__VLS_10));
let __VLS_13;
let __VLS_14;
let __VLS_15;
const __VLS_16 = {
    onNodeExpand: (__VLS_ctx.handleNodeExpand)
};
const __VLS_17 = {
    onNodeCollapse: (__VLS_ctx.handleNodeCollapse)
};
var __VLS_12;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-grid" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_18 = {}.CyberTree;
;
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    data: (__VLS_ctx.treeData),
    theme: "neon",
    effect: "scan",
}));
const __VLS_20 = __VLS_19({
    data: (__VLS_ctx.treeData),
    theme: "neon",
    effect: "scan",
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_22 = {}.CyberTree;
;
const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({
    data: (__VLS_ctx.treeData),
    theme: "terminal",
    effect: "pulse",
}));
const __VLS_24 = __VLS_23({
    data: (__VLS_ctx.treeData),
    theme: "terminal",
    effect: "pulse",
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_26 = {}.CyberTree;
;
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
    data: (__VLS_ctx.treeData),
    theme: "matrix",
    effect: "glitch",
}));
const __VLS_28 = __VLS_27({
    data: (__VLS_ctx.treeData),
    theme: "matrix",
    effect: "glitch",
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_30 = {}.CyberTree;
;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    data: (__VLS_ctx.treeData),
    theme: "hologram",
    effect: "static",
}));
const __VLS_32 = __VLS_31({
    data: (__VLS_ctx.treeData),
    theme: "hologram",
    effect: "static",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
const __VLS_34 = {}.CyberTree;
;
const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
    data: (__VLS_ctx.statusTreeData),
    theme: "neon",
    effect: "pulse",
    showStatus: (true),
    defaultExpandAll: (true),
}));
const __VLS_36 = __VLS_35({
    data: (__VLS_ctx.statusTreeData),
    theme: "neon",
    effect: "pulse",
    showStatus: (true),
    defaultExpandAll: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
const __VLS_38 = {}.CyberTree;
;
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38(Object.assign({ 'onSelectChange': {} }, { data: (__VLS_ctx.treeData), theme: "terminal", multiple: (true), expandOnClick: (false) })));
const __VLS_40 = __VLS_39(Object.assign({ 'onSelectChange': {} }, { data: (__VLS_ctx.treeData), theme: "terminal", multiple: (true), expandOnClick: (false) }), ...__VLS_functionalComponentArgsRest(__VLS_39));
let __VLS_42;
let __VLS_43;
let __VLS_44;
const __VLS_45 = {
    onSelectChange: (__VLS_ctx.handleSelectChange)
};
var __VLS_41;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-grid two" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_46 = {}.CyberTree;
;
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
    data: (__VLS_ctx.deepTreeData),
    indent: (42),
    theme: "matrix",
    effect: "scan",
    defaultExpandAll: (true),
}));
const __VLS_48 = __VLS_47({
    data: (__VLS_ctx.deepTreeData),
    indent: (42),
    theme: "matrix",
    effect: "scan",
    defaultExpandAll: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_47));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_50 = {}.CyberTree;
;
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
    data: (__VLS_ctx.deepTreeData),
    indent: (22),
    theme: "neon",
    effect: "static",
    defaultExpandAll: (true),
}));
const __VLS_52 = __VLS_51({
    data: (__VLS_ctx.deepTreeData),
    indent: (22),
    theme: "neon",
    effect: "static",
    defaultExpandAll: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
const __VLS_54 = {}.CyberTree;
;
const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
    data: (__VLS_ctx.treeData),
    theme: "hologram",
    showConnectors: (false),
    showStatus: (false),
    showScanline: (false),
}));
const __VLS_56 = __VLS_55({
    data: (__VLS_ctx.treeData),
    theme: "hologram",
    showConnectors: (false),
    showStatus: (false),
    showScanline: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "event-log" }));
(__VLS_ctx.eventLog);
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
            eventLog: eventLog,
            treeData: treeData,
            deepTreeData: deepTreeData,
            statusTreeData: statusTreeData,
            handleNodeClick: handleNodeClick,
            handleSelectChange: handleSelectChange,
            handleNodeExpand: handleNodeExpand,
            handleNodeCollapse: handleNodeCollapse,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=tree.vue.js.map