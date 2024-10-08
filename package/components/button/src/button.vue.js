import { computed, useSlots } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpButton',
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
    content: {
        type: String,
        default: 'CyberPunk-UI'
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
const __VLS_fnComponent = (await import('vue')).defineComponent({
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
        content: {
            type: String,
            default: 'CyberPunk-UI'
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['cp-button', __VLS_ctx.buttonSize])) }));
    __VLS_styleScopedClasses = (['cp-button', buttonSize]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['button', __VLS_ctx.buttonType])) }, { "data-content": ((props.content)) }));
    __VLS_styleScopedClasses = (['button', buttonType]);
    if (__VLS_ctx.slots) {
        var __VLS_0 = {};
        [buttonSize, buttonType, slots,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (props.content);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                slots: slots,
                buttonType: buttonType,
                buttonSize: buttonSize,
            };
        },
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
            content: {
                type: String,
                default: 'CyberPunk-UI'
            }
        },
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
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
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['large', 'default', 'small'].indexOf(value) !== -1;
            }
        },
        content: {
            type: String,
            default: 'CyberPunk-UI'
        }
    },
    emits: {},
});
export default {};
;

//# sourceMappingURL=button.vue.js.map