import { computed, useSlots } from 'vue';
defineOptions({
    name: 'CyberReflectbutton',
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
    size: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['large', 'default', 'small'].indexOf(value) !== -1;
        }
    },
    bg: {
        type: Boolean,
        default: false
    }
});
const emits = defineEmits(["onMouseEnter", "onMouseLeave"]);
const buttonType = computed(() => {
    switch (props.type) {
        case 'primary':
            return 'primary-style';
        case 'success':
            return 'success-style';
        case 'warning':
            return 'warning-style';
        case 'danger':
            return 'danger-style';
        default:
            return 'primary-style';
    }
});
const buttonSize = computed(() => {
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-button-neno', __VLS_ctx.buttonSize]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['button', __VLS_ctx.buttonType, props.bg ? 'show-bg' : '']) }));
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            buttonType: buttonType,
            buttonSize: buttonSize,
        };
    },
    emits: {},
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
            }
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['large', 'default', 'small'].indexOf(value) !== -1;
            }
        },
        bg: {
            type: Boolean,
            default: false
        }
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
            }
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['large', 'default', 'small'].indexOf(value) !== -1;
            }
        },
        bg: {
            type: Boolean,
            default: false
        }
    },
});
export default {};
;
//# sourceMappingURL=reflectButton.vue.js.map