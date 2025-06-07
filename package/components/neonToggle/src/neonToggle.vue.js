import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpNeonToggle',
});
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    shape: {
        type: String,
        default: 'circle',
        validator: (value) => {
            return ['circle', 'square', 'hex'].indexOf(value) !== -1;
        }
    },
    activeColor: {
        type: String,
        default: '#00e6f6'
    },
    pulseEffect: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['update:modelValue', 'change']);
const shapeClass = computed(() => {
    switch (props.shape) {
        case 'circle':
            return 'circle-shape';
        case 'square':
            return 'square-shape';
        case 'hex':
            return 'hex-shape';
        default:
            return 'circle-shape';
    }
});
const toggleSwitch = () => {
    if (props.disabled)
        return;
    const newValue = !props.modelValue;
    emit('update:modelValue', newValue);
    emit('change', newValue);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        shape: {
            type: String,
            default: 'circle',
            validator: (value) => {
                return ['circle', 'square', 'hex'].indexOf(value) !== -1;
            }
        },
        activeColor: {
            type: String,
            default: '#00e6f6'
        },
        pulseEffect: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: {},
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
    __VLS_ctx.props.activeColor;
    __VLS_ctx.props.activeColor;
    __VLS_ctx.props.activeColor;
    __VLS_ctx.props.activeColor;
    __VLS_ctx.props.activeColor;
    __VLS_ctx.props.activeColor;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onClick: (__VLS_ctx.toggleSwitch) }, { class: ((['cp-neon-toggle', __VLS_ctx.shapeClass, { 'active': __VLS_ctx.modelValue, 'disabled': __VLS_ctx.disabled }])) }), { "aria-checked": ((__VLS_ctx.modelValue)), role: ("switch"), "aria-disabled": ((__VLS_ctx.disabled)) }));
    __VLS_styleScopedClasses = (['cp-neon-toggle', shapeClass, { 'active': modelValue, 'disabled': disabled }]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("toggle-track") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("toggle-track-inner") }));
    [toggleSwitch, shapeClass, modelValue, modelValue, disabled, disabled,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("circuit-lines") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("toggle-thumb") }));
    if (__VLS_ctx.pulseEffect && __VLS_ctx.modelValue) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("pulse-effect") }));
        [modelValue, pulseEffect,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['toggle-track'];
        __VLS_styleScopedClasses['toggle-track-inner'];
        __VLS_styleScopedClasses['circuit-lines'];
        __VLS_styleScopedClasses['toggle-thumb'];
        __VLS_styleScopedClasses['pulse-effect'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                props: props,
                shapeClass: shapeClass,
                toggleSwitch: toggleSwitch,
            };
        },
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            shape: {
                type: String,
                default: 'circle',
                validator: (value) => {
                    return ['circle', 'square', 'hex'].indexOf(value) !== -1;
                }
            },
            activeColor: {
                type: String,
                default: '#00e6f6'
            },
            pulseEffect: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        shape: {
            type: String,
            default: 'circle',
            validator: (value) => {
                return ['circle', 'square', 'hex'].indexOf(value) !== -1;
            }
        },
        activeColor: {
            type: String,
            default: '#00e6f6'
        },
        pulseEffect: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: {},
});
;
//# sourceMappingURL=neonToggle.vue.js.map