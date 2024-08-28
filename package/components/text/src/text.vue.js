import { useSlots } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpText',
});
const slots = useSlots();
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
        validator: (value) => {
            return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
        }
    },
    content: {
        type: String,
        default: 'TEXT'
    },
    bgColor: {
        type: String,
        default: '#fff'
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
            }
        },
        content: {
            type: String,
            default: 'TEXT'
        },
        bgColor: {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cp-text") }, { "data-word": ((props.content)) }));
    (props.content);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cp-text-line") }, { style: (('background: ' + props.bgColor)) }));
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
            return {};
        },
        props: {
            type: {
                type: String,
                default: 'primary',
                validator: (value) => {
                    return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
                }
            },
            content: {
                type: String,
                default: 'TEXT'
            },
            bgColor: {
                type: String,
                default: '#fff'
            },
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
            }
        },
        content: {
            type: String,
            default: 'TEXT'
        },
        bgColor: {
            type: String,
            default: '#fff'
        },
    },
});
;
//# sourceMappingURL=text.vue.js.map