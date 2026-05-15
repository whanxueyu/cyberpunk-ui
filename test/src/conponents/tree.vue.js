import { ref } from 'vue';
const treeData = ref([
    {
        id: 1,
        label: 'System Root',
        status: 'online',
        children: [
            {
                id: 2,
                label: 'Security Protocols',
                status: 'warning',
                children: [
                    { id: 3, label: 'Firewall.v2', status: 'online' },
                    { id: 4, label: 'Intrusion Detection', status: 'error' }
                ]
            },
            {
                id: 5,
                label: 'Data Core',
                status: 'online',
                children: [
                    { id: 6, label: 'User Database', status: 'online' },
                    { id: 7, label: 'System Logs', status: 'offline' }
                ]
            }
        ]
    }
]);
const deepTreeData = ref([
    {
        id: 1,
        label: 'Root',
        status: 'online',
        children: [
            {
                id: 2,
                label: 'Level 1-A',
                status: 'online',
                children: [
                    {
                        id: 3,
                        label: 'Level 2-A',
                        status: 'warning',
                        children: [
                            { id: 4, label: 'Level 3-A', status: 'online' },
                            { id: 5, label: 'Level 3-B', status: 'offline' }
                        ]
                    },
                    {
                        id: 6,
                        label: 'Level 2-B',
                        status: 'online',
                        children: [
                            { id: 7, label: 'Level 3-C', status: 'error' }
                        ]
                    }
                ]
            },
            {
                id: 8,
                label: 'Level 1-B',
                status: 'offline',
                children: [
                    { id: 9, label: 'Level 2-C', status: 'online' },
                    { id: 10, label: 'Level 2-D', status: 'warning' }
                ]
            },
            {
                id: 11,
                label: 'Level 1-C',
                status: 'online',
                children: [
                    {
                        id: 12,
                        label: 'Level 2-E',
                        status: 'online',
                        children: [
                            {
                                id: 13,
                                label: 'Level 3-D',
                                status: 'online',
                                children: [
                                    { id: 14, label: 'Level 4-A', status: 'online' },
                                    { id: 15, label: 'Level 4-B', status: 'offline' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);
const handleNodeClick = (node) => {
    console.log('Node clicked:', node);
};
const handleSelectChange = (selectedNodes) => {
    console.log('Selected nodes:', selectedNodes);
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
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
const __VLS_9 = {}.CyberTree;
;
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.deepTreeData), theme: "hologram" })));
const __VLS_11 = __VLS_10(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.deepTreeData), theme: "hologram" }), ...__VLS_functionalComponentArgsRest(__VLS_10));
let __VLS_13;
let __VLS_14;
let __VLS_15;
const __VLS_16 = {
    onNodeClick: (__VLS_ctx.handleNodeClick)
};
var __VLS_12;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
const __VLS_17 = {}.CyberTree;
;
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "terminal" })));
const __VLS_19 = __VLS_18(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "terminal" }), ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_21;
let __VLS_22;
let __VLS_23;
const __VLS_24 = {
    onNodeClick: (__VLS_ctx.handleNodeClick)
};
var __VLS_20;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
const __VLS_25 = {}.CyberTree;
;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "hologram" })));
const __VLS_27 = __VLS_26(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "hologram" }), ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_29;
let __VLS_30;
let __VLS_31;
const __VLS_32 = {
    onNodeClick: (__VLS_ctx.handleNodeClick)
};
var __VLS_28;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
const __VLS_33 = {}.CyberTree;
;
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "neon", showStatus: (true), showConnectors: (true) })));
const __VLS_35 = __VLS_34(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "neon", showStatus: (true), showConnectors: (true) }), ...__VLS_functionalComponentArgsRest(__VLS_34));
let __VLS_37;
let __VLS_38;
let __VLS_39;
const __VLS_40 = {
    onNodeClick: (__VLS_ctx.handleNodeClick)
};
var __VLS_36;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
const __VLS_41 = {}.CyberTree;
;
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "matrix", showConnectors: (false), showStatus: (false) })));
const __VLS_43 = __VLS_42(Object.assign({ 'onNodeClick': {} }, { data: (__VLS_ctx.treeData), theme: "matrix", showConnectors: (false), showStatus: (false) }), ...__VLS_functionalComponentArgsRest(__VLS_42));
let __VLS_45;
let __VLS_46;
let __VLS_47;
const __VLS_48 = {
    onNodeClick: (__VLS_ctx.handleNodeClick)
};
var __VLS_44;
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
            treeData: treeData,
            deepTreeData: deepTreeData,
            handleNodeClick: handleNodeClick,
            handleSelectChange: handleSelectChange,
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