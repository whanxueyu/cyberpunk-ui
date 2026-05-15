import { ref, useSlots } from 'vue';
defineOptions({
    name: 'CyberMagicText',
});
const content = ref('');
const slots = useSlots();
if (slots && slots.default) {
    let tep = slots.default();
    content.value = tep[0].children;
}
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cyber-magic-text" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "gradient-text" }, { 'data-text': (__VLS_ctx.content) }));
var __VLS_0 = {};
;
;
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            content: content,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
;
//# sourceMappingURL=magicText.vue.js.map