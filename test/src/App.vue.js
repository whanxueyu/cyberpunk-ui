import { ref } from 'vue';
import layout from './layout/layout.vue';
import buttonPanel from './conponents/button.vue';
import textPanel from './conponents/text.vue';
import switchPanel from './conponents/switch.vue';
import tooltipPanel from './conponents/tooltip.vue';
import imagesPanel from './conponents/images.vue';
import cardPanel from './conponents/card.vue';
import loadingPanel from './conponents/loading.vue';
console.log('%c %s', 'border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)', 'CyberPunk-UI');
const toNext = (index) => {
    console.log(index);
};
const toLast = (index) => {
    console.log(index);
};
const changePage = (scroll) => {
    console.log(scroll);
};
const dotPosition = ref('right');
const changePosition = (position) => {
    dotPosition.value = position;
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
const __VLS_0 = __VLS_asFunctionalComponent(layout, new layout(Object.assign({ 'onChangePosition': {} })));
const __VLS_1 = __VLS_0(Object.assign({ 'onChangePosition': {} }), ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onChangePosition: (__VLS_ctx.changePosition)
};
var __VLS_7 = {};
__VLS_2.slots.default;
const __VLS_8 = {}.CyberFullPage;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign(Object.assign(Object.assign({ 'onToNext': {} }, { 'onToLast': {} }), { 'onChange': {} }), { pageNum: (7), position: (__VLS_ctx.dotPosition), offset: (60) })));
const __VLS_10 = __VLS_9(Object.assign(Object.assign(Object.assign({ 'onToNext': {} }, { 'onToLast': {} }), { 'onChange': {} }), { pageNum: (7), position: (__VLS_ctx.dotPosition), offset: (60) }), ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onToNext: (__VLS_ctx.toNext)
};
const __VLS_16 = {
    onToLast: (__VLS_ctx.toLast)
};
const __VLS_17 = {
    onChange: (__VLS_ctx.changePage)
};
__VLS_11.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
;
const __VLS_18 = __VLS_asFunctionalComponent(imagesPanel, new imagesPanel({}));
const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_21 = __VLS_asFunctionalComponent(textPanel, new textPanel({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_24 = __VLS_asFunctionalComponent(buttonPanel, new buttonPanel({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
;
const __VLS_27 = __VLS_asFunctionalComponent(switchPanel, new switchPanel({}));
const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_30 = __VLS_asFunctionalComponent(tooltipPanel, new tooltipPanel({}));
const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content-box" }));
;
const __VLS_33 = __VLS_asFunctionalComponent(loadingPanel, new loadingPanel({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title_text" }));
;
const __VLS_36 = __VLS_asFunctionalComponent(cardPanel, new cardPanel({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
var __VLS_11;
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
            switchPanel: switchPanel,
            tooltipPanel: tooltipPanel,
            imagesPanel: imagesPanel,
            cardPanel: cardPanel,
            loadingPanel: loadingPanel,
            toNext: toNext,
            toLast: toLast,
            changePage: changePage,
            dotPosition: dotPosition,
            changePosition: changePosition,
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