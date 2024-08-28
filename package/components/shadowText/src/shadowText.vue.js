const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpShadowText',
});
const props = defineProps({
    type: {
        type: String,
        default: 'left',
        validator: (value) => {
            return ['left', 'right'].indexOf(value) !== -1;
        }
    },
    shadowColor: {
        type: String,
        default: '#ae0ed68c',
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        type: {
            type: String,
            default: 'left',
            validator: (value) => {
                return ['left', 'right'].indexOf(value) !== -1;
            }
        },
        shadowColor: {
            type: String,
            default: '#ae0ed68c',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['shadow-text', props.type])) }, { "data-color": ((props.shadowColor)) }));
    __VLS_styleScopedClasses = (['shadow-text', props.type]);
    var __VLS_0 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
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
                default: 'left',
                validator: (value) => {
                    return ['left', 'right'].indexOf(value) !== -1;
                }
            },
            shadowColor: {
                type: String,
                default: '#ae0ed68c',
            },
        },
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        type: {
            type: String,
            default: 'left',
            validator: (value) => {
                return ['left', 'right'].indexOf(value) !== -1;
            }
        },
        shadowColor: {
            type: String,
            default: '#ae0ed68c',
        },
    },
});
export default {};
;
//# sourceMappingURL=shadowText.vue.js.map