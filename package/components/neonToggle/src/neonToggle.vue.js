import { computed } from 'vue';
defineOptions({
    name: 'CyberNeonToggle',
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
        default: '#00e6f6cc'
    },
    inActiveColor: {
        type: String,
        default: '#ffffff99'
    },
    pulseEffect: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['large', 'default', 'small'].indexOf(value) !== -1;
        }
    },
});
const emit = defineEmits(['update:modelValue', 'change']);
const shapeSize = computed(() => {
    switch (props.size) {
        case 'large':
            return 'large-size';
        case 'default':
            return 'default-size';
        case 'small':
            return 'small-size';
        default:
            return 'default-size';
    }
});
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
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__VLS_ctx.props.inActiveColor;
__VLS_ctx.props.activeColor;
__VLS_ctx.props.activeColor;
__VLS_ctx.props.activeColor;
__VLS_ctx.props.activeColor;
__VLS_ctx.props.activeColor;
__VLS_ctx.props.activeColor;
__VLS_ctx.props.activeColor;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onClick: (__VLS_ctx.toggleSwitch) }, { class: (['cp-neon-toggle', __VLS_ctx.shapeClass, __VLS_ctx.shapeSize, { 'active': __VLS_ctx.modelValue, 'disabled': __VLS_ctx.disabled }]) }), { 'aria-checked': (__VLS_ctx.modelValue), role: "switch", 'aria-disabled': (__VLS_ctx.disabled) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "toggle-track" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "toggle-track-inner" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "circuit-lines" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "toggle-thumb" }));
if (__VLS_ctx.pulseEffect && __VLS_ctx.modelValue) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pulse-effect" }));
}
;
;
;
;
;
;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            props: props,
            shapeSize: shapeSize,
            shapeClass: shapeClass,
            toggleSwitch: toggleSwitch,
        };
    },
    emits: {},
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
            default: '#00e6f6cc'
        },
        inActiveColor: {
            type: String,
            default: '#ffffff99'
        },
        pulseEffect: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['large', 'default', 'small'].indexOf(value) !== -1;
            }
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
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
            default: '#00e6f6cc'
        },
        inActiveColor: {
            type: String,
            default: '#ffffff99'
        },
        pulseEffect: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['large', 'default', 'small'].indexOf(value) !== -1;
            }
        },
    },
});
;
//# sourceMappingURL=neonToggle.vue.js.map