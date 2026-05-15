import { ref } from "vue";
import layout from "./layout/layout.vue";
import bannerPanel from './conponents/banner.vue';
import treePanel from './conponents/tree.vue';
import cyberImagePanel from './conponents/cyberimage.vue';
import imagesPanel from './conponents/images.vue';
import buttonPanel from "./conponents/button.vue";
import textPanel from "./conponents/text.vue";
import switchPanel from "./conponents/switch.vue";
import glitchProgressPanel from './conponents/glitch-progress.vue';
import tooltipPanel from "./conponents/tooltip.vue";
import digitalCounterPanel from './conponents/digital-counter.vue';
import progressPanel from "./conponents/progress.vue";
import tablePanel from "./conponents/table.vue";
import loadingPanel from "./conponents/loading.vue";
import cardPanel from "./conponents/card.vue";
import notificationPanel from './conponents/notification.vue';
console.log("%c %s", "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)", "CyberPunk-UI - Component Showcase");
const componentsMenu = ref([
    { title: '轮播图片', component: bannerPanel },
    { title: '树形控件', component: treePanel },
    { title: '赛博图片', component: cyberImagePanel },
    { title: '故障图片', component: imagesPanel },
    { title: '按钮组', component: buttonPanel },
    { title: '文字样式', component: textPanel },
    { title: '霓虹开关', component: switchPanel },
    { title: '故障进度条', component: glitchProgressPanel },
    { title: '鼠标提示', component: tooltipPanel },
    { title: '数字翻牌器', component: digitalCounterPanel },
    { title: '赛博进度条', component: progressPanel },
    { title: '滚动表格', component: tablePanel },
    { title: 'Loading', component: loadingPanel },
    { title: '卡片', component: cardPanel },
    { title: '通知提示', component: notificationPanel },
]);
const activeMenu = ref(bannerPanel);
const handleMenuClick = (component) => {
    activeMenu.value = component;
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
const __VLS_0 = __VLS_asFunctionalComponent(layout, new layout({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
{
    const { aside: __VLS_thisSlot } = __VLS_2.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "menu-list" }));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.componentsMenu))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ onClick: (...[$event]) => {
                __VLS_ctx.handleMenuClick(item.component);
            } }, { key: (index) }), { class: "menu-item" }), { class: ({ active: __VLS_ctx.activeMenu === item.component }) }));
        (item.title);
    }
}
{
    const { content: __VLS_thisSlot } = __VLS_2.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "main-content" }));
    const __VLS_4 = ((__VLS_ctx.activeMenu));
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
var __VLS_2;
;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            layout: layout,
            componentsMenu: componentsMenu,
            activeMenu: activeMenu,
            handleMenuClick: handleMenuClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=App.vue.js.map