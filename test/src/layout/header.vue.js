import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark({
    storageKey: 'useDarkKEY',
    valueDark: 'dark',
    valueLight: 'light',
});
const value = ref(false);
const emits = defineEmits(["changePosition", "changeShow"]);
const toggleDark = useToggle(isDark);
const dotPosition = ref('right');
const changePosition = (position) => {
    dotPosition.value = position;
    emits("changePosition", position);
};
const showTitle = ref(true);
const changeShowTitile = (value) => {
    showTitle.value = value;
    emits("changeShow", value);
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_0 = {}.CyberButton;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onClick': {} }, { type: "primary", content: "top ↑", size: "small" })));
const __VLS_2 = __VLS_1(Object.assign({ 'onClick': {} }, { type: "primary", content: "top ↑", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('top');
    }
};
__VLS_3.slots.default;
var __VLS_3;
const __VLS_8 = {}.CyberButton;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign({ 'onClick': {} }, { type: "success", content: "bottom ↓", size: "small" })));
const __VLS_10 = __VLS_9(Object.assign({ 'onClick': {} }, { type: "success", content: "bottom ↓", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('bottom');
    }
};
__VLS_11.slots.default;
var __VLS_11;
const __VLS_16 = {}.CyberButton;
;
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(Object.assign({ 'onClick': {} }, { type: "danger", content: "left ←", size: "small" })));
const __VLS_18 = __VLS_17(Object.assign({ 'onClick': {} }, { type: "danger", content: "left ←", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
let __VLS_22;
const __VLS_23 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('left');
    }
};
__VLS_19.slots.default;
var __VLS_19;
const __VLS_24 = {}.CyberButton;
;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(Object.assign({ 'onClick': {} }, { type: "warning", content: "right →", size: "small" })));
const __VLS_26 = __VLS_25(Object.assign({ 'onClick': {} }, { type: "warning", content: "right →", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_25));
let __VLS_28;
let __VLS_29;
let __VLS_30;
const __VLS_31 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('right');
    }
};
__VLS_27.slots.default;
var __VLS_27;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: {} }));
const __VLS_32 = {}.CyberNeonToggle;
;
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(Object.assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.showTitle), shape: "square" })));
const __VLS_34 = __VLS_33(Object.assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.showTitle), shape: "square" }), ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onChange: (__VLS_ctx.changeShowTitile)
};
var __VLS_35;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: {} }));
const __VLS_40 = {}.CyberNeonToggle;
;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(Object.assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.value), activeColor: "#ffff00", inActiveColor: "#669999" })));
const __VLS_42 = __VLS_41(Object.assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.value), activeColor: "#ffff00", inActiveColor: "#669999" }), ...__VLS_functionalComponentArgsRest(__VLS_41));
let __VLS_44;
let __VLS_45;
let __VLS_46;
const __VLS_47 = {
    onChange: (...[$event]) => {
        __VLS_ctx.toggleDark();
    }
};
var __VLS_43;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            value: value,
            toggleDark: toggleDark,
            changePosition: changePosition,
            showTitle: showTitle,
            changeShowTitile: changeShowTitile,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
;
//# sourceMappingURL=header.vue.js.map