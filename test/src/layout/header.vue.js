import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
const value = ref(false);
const isDark = useDark({
    storageKey: 'useDarkKEY',
    valueDark: 'dark',
    valueLight: 'light',
});
const toggleDark = useToggle(isDark);
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "header-content" }));
const __VLS_0 = {}.CyberText;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ class: "logo" })));
const __VLS_2 = __VLS_1(Object.assign({ class: "logo" }), ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
const __VLS_4 = {}.CyberMagicText;
;
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(Object.assign({ class: "logo" })));
const __VLS_6 = __VLS_5(Object.assign({ class: "logo" }), ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "controls" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.value ? '亮色模式' : '暗黑模式');
const __VLS_8 = {}.CyberNeonToggle;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.value), activeColor: "#ffff00", inActiveColor: "#669999" })));
const __VLS_10 = __VLS_9(Object.assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.value), activeColor: "#ffff00", inActiveColor: "#669999" }), ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onChange: (...[$event]) => {
        __VLS_ctx.toggleDark();
    }
};
var __VLS_11;
;
;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            value: value,
            toggleDark: toggleDark,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=header.vue.js.map