import { ref, useSlots } from 'vue';
defineOptions({
    name: 'CyberText',
});
const content = ref('');
const slots = useSlots();
if (slots && slots.default) {
    let tep = slots.default();
    content.value = tep[0].children;
}
const props = defineProps({
    lineColor: {
        type: String,
        default: '#0000'
    },
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-text" }, { 'data-word': (__VLS_ctx.content) }));
var __VLS_0 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-text-line" }, { style: ('background: ' + props.lineColor) }));
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
    props: {
        lineColor: {
            type: String,
            default: '#0000'
        },
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        lineColor: {
            type: String,
            default: '#0000'
        },
    },
});
export default {};
;
//# sourceMappingURL=text.vue.js.map