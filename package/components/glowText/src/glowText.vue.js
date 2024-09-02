import { onMounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpGlowText',
});
const props = defineProps({
    color: {
        type: String,
        default: '#e91e84',
    },
});
onMounted(() => {
    document.documentElement.style.setProperty('--child-color', props.color);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        color: {
            type: String,
            default: '#e91e84',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("glow-text") }));
    var __VLS_0 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['glow-text'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
        props: {
            color: {
                type: String,
                default: '#e91e84',
            },
        },
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        color: {
            type: String,
            default: '#e91e84',
        },
    },
});
export default {};
;
//# sourceMappingURL=glowText.vue.js.map