import { ref, useSlots } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpText',
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
        default: '#fff'
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        lineColor: {
            type: String,
            default: '#fff'
        },
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cp-text") }, { "data-word": ((__VLS_ctx.content)) }));
    var __VLS_0 = {};
    [content,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cp-text-line") }, { style: (('background: ' + props.lineColor)) }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cp-text'];
        __VLS_styleScopedClasses['cp-text-line'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                content: content,
            };
        },
        props: {
            lineColor: {
                type: String,
                default: '#fff'
            },
        },
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        lineColor: {
            type: String,
            default: '#fff'
        },
    },
});
export default {};
;
//# sourceMappingURL=text.vue.js.map