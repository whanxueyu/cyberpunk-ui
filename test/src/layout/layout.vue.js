import headVue from './header.vue';
const emits = defineEmits(["changePosition", "changeShow"]);
const changePosition = (position) => {
    emits("changePosition", position);
};
const changeShow = (value) => {
    emits("changeShow", value);
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "main" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "header" }));
;
const __VLS_0 = __VLS_asFunctionalComponent(headVue, new headVue(Object.assign({ 'onChangePosition': {} }, { 'onChangeShow': {} })));
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
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "page-content" }));
var __VLS_8 = {};
;
;
;
;
var __VLS_9 = __VLS_8;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            headVue: headVue,
            changePosition: changePosition,
            changeShow: changeShow,
        };
    },
    emits: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
export default {};
;
//# sourceMappingURL=layout.vue.js.map