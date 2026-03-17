import { ref } from 'vue';
import layout from './layout/layout.vue';
import buttonPanel from './conponents/button.vue';
import textPanel from './conponents/text.vue';
import tooltipPanel from './conponents/tooltip.vue';
import progressPanel from './conponents/progress.vue';
import cardPanel from './conponents/card.vue';
import loadingPanel from './conponents/loading.vue';
import tablePanel from './conponents/table.vue';
console.log('%c %s', 'border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)', 'CyberPunk-UI');
const toNext = (index) => {
    console.log("toNext", index);
};
const toLast = (index) => {
    console.log("toLast", index);
};
const changePage = (content) => {
    console.log("changePage", content);
};
const dotPosition = ref('right');
const changePosition = (position) => {
    dotPosition.value = position;
};
const changeShow = (show) => {
    console.log(show);
    showTitle.value = show;
};
const sectionItems = [
    {
        title: '滚动表格',
        content: 'tablePanel'
    },
    {
        title: '文字样式',
        content: 'textPanel'
    },
    {
        title: '故障按钮',
        content: 'buttonPanel'
    },
    {
        title: '进度条',
        content: 'switchPanel'
    },
    {
        title: '数字翻牌',
        content: 'tooltipPanel'
    },
    {
        title: '加载器',
        content: 'loadingPanel'
    },
    {
        title: '卡片',
        content: 'cardPanel'
    }
];
const showTitle = ref(true);
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
const __VLS_0 = __VLS_asFunctionalComponent(layout, new layout(Object.assign({ 'onChangePosition': {} }, { 'onChangeShow': {} })));
const __VLS_1 = __VLS_0(Object.assign({ 'onChangePosition': {} }, { 'onChangeShow': {} }), ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onChangePosition: (__VLS_ctx.changePosition)
};
const __VLS_7 = {
    onChangeShow: (__VLS_ctx.changeShow)
};
var __VLS_8 = {};
__VLS_2.slots.default;
const __VLS_9 = {}.CyberFullPage;
;
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(Object.assign(Object.assign(Object.assign({ 'onToNext': {} }, { 'onToLast': {} }), { 'onChange': {} }), { items: (__VLS_ctx.sectionItems), position: (__VLS_ctx.dotPosition), offset: (60), showTitle: (__VLS_ctx.showTitle) })));
const __VLS_11 = __VLS_10(Object.assign(Object.assign(Object.assign({ 'onToNext': {} }, { 'onToLast': {} }), { 'onChange': {} }), { items: (__VLS_ctx.sectionItems), position: (__VLS_ctx.dotPosition), offset: (60), showTitle: (__VLS_ctx.showTitle) }), ...__VLS_functionalComponentArgsRest(__VLS_10));
let __VLS_13;
let __VLS_14;
let __VLS_15;
const __VLS_16 = {
    onToNext: (__VLS_ctx.toNext)
};
const __VLS_17 = {
    onToLast: (__VLS_ctx.toLast)
};
const __VLS_18 = {
    onChange: (__VLS_ctx.changePage)
};
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_19 = __VLS_asFunctionalComponent(tablePanel, new tablePanel({}));
const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_22 = __VLS_asFunctionalComponent(textPanel, new textPanel({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_25 = __VLS_asFunctionalComponent(buttonPanel, new buttonPanel({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
;
const __VLS_28 = __VLS_asFunctionalComponent(progressPanel, new progressPanel({}));
const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_31 = __VLS_asFunctionalComponent(tooltipPanel, new tooltipPanel({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_34 = __VLS_asFunctionalComponent(loadingPanel, new loadingPanel({}));
const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
;
const __VLS_37 = __VLS_asFunctionalComponent(cardPanel, new cardPanel({}));
const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
var __VLS_12;
var __VLS_2;
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
            layout: layout,
            buttonPanel: buttonPanel,
            textPanel: textPanel,
            tooltipPanel: tooltipPanel,
            progressPanel: progressPanel,
            cardPanel: cardPanel,
            loadingPanel: loadingPanel,
            tablePanel: tablePanel,
            toNext: toNext,
            toLast: toLast,
            changePage: changePage,
            dotPosition: dotPosition,
            changePosition: changePosition,
            changeShow: changeShow,
            sectionItems: sectionItems,
            showTitle: showTitle,
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