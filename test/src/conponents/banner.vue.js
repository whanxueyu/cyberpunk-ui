import { ref } from 'vue';
const imgList = [
    'https://axydemo.netlify.app/images/img/Cyber.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber2.jpg',
    'https://axydemo.netlify.app/images/img/Cyber3.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber4.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber5.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber6.jpg',
    'https://axydemo.netlify.app/images/img/Cyber7.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber8.jpeg',
];
const imgList1 = [
    'https://axydemo.netlify.app/images/img/Cyber.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber2.jpg',
    'https://axydemo.netlify.app/images/img/Cyber3.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber4.jpeg',
];
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_0 = {}.CyberBanner;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    imgWidth: (200),
    imgHeight: (120),
    imgList: (__VLS_ctx.imgList),
}));
const __VLS_2 = __VLS_1({
    imgWidth: (200),
    imgHeight: (120),
    imgList: (__VLS_ctx.imgList),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_4 = {}.CyberBanner;
;
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    animationDuration: (20),
    imgList: (__VLS_ctx.imgList1),
    shadow: (false),
}));
const __VLS_6 = __VLS_5({
    animationDuration: (20),
    imgList: (__VLS_ctx.imgList1),
    shadow: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.CyberTree;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign(Object.assign({ 'onNodeClick': {} }, { 'onSelectChange': {} }), { data: (__VLS_ctx.treeData), theme: "neon", effect: "scan", showStatus: (true), showConnectors: (true) })));
const __VLS_10 = __VLS_9(Object.assign(Object.assign({ 'onNodeClick': {} }, { 'onSelectChange': {} }), { data: (__VLS_ctx.treeData), theme: "neon", effect: "scan", showStatus: (true), showConnectors: (true) }), ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onNodeClick: (__VLS_ctx.handleNodeClick)
};
const __VLS_16 = {
    onSelectChange: (__VLS_ctx.handleSelectChange)
};
var __VLS_11;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            imgList: imgList,
            imgList1: imgList1,
            treeData: treeData,
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
//# sourceMappingURL=banner.vue.js.map