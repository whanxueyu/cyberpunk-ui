import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpDigitalCounter',
});
const props = defineProps({
    value: {
        type: [Number, String],
        default: 0
    },
    from: {
        type: [Number, String],
        default: 0
    },
    to: {
        type: [Number, String],
        default: null
    },
    duration: {
        type: Number,
        default: 1000
    },
    format: {
        type: Object,
        default: () => ({})
    },
    prefix: {
        type: String,
        default: ''
    },
    suffix: {
        type: String,
        default: ''
    },
    separator: {
        type: String,
        default: ','
    },
    decimal: {
        type: Number,
        default: 0
    },
    effect: {
        type: String,
        default: 'flip',
        validator: (value) => {
            return ['flip', 'roll', 'fade', 'glitch'].indexOf(value) !== -1;
        }
    },
    theme: {
        type: String,
        default: 'neon',
        validator: (value) => {
            return ['neon', 'digital', 'hologram'].indexOf(value) !== -1;
        }
    }
});
const currentValue = ref(Number(props.from));
const targetValue = ref(Number(props.value));
const animationStartTime = ref(null);
const animationFrameId = ref(null);
const previousFormattedValue = ref('');
const formatNumber = (num) => {
    const multiplier = Math.pow(10, props.decimal);
    const fixedNum = Math.round(num * multiplier) / multiplier;
    let numStr = fixedNum.toFixed(props.decimal);
    if (props.separator) {
        const parts = numStr.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, props.separator);
        numStr = parts.join('.');
    }
    return numStr;
};
const formattedValue = computed(() => {
    return formatNumber(currentValue.value);
});
const formattedDigits = computed(() => {
    return formattedValue.value.split('');
});
const isDigitSeparator = (digit) => {
    return digit === props.separator || digit === '.';
};
const getPreviousDigit = (index) => {
    if (!previousFormattedValue.value || index >= previousFormattedValue.value.length) {
        return formattedDigits.value[index];
    }
    return previousFormattedValue.value[index];
};
const shouldAnimate = (index) => {
    if (!previousFormattedValue.value || index >= previousFormattedValue.value.length) {
        return false;
    }
    return previousFormattedValue.value[index] !== formattedDigits.value[index] && !isDigitSeparator(formattedDigits.value[index]);
};
const animate = (timestamp) => {
    if (animationStartTime.value === null) {
        animationStartTime.value = timestamp;
    }
    const elapsed = timestamp - animationStartTime.value;
    const progress = Math.min(elapsed / props.duration, 1);
    const startValue = Number(props.from);
    const endValue = Number(props.to !== null ? props.to : targetValue.value);
    const newValue = startValue + (endValue - startValue) * easeOutQuart(progress);
    currentValue.value = newValue;
    if (progress < 1) {
        animationFrameId.value = requestAnimationFrame(animate);
    }
    else {
        currentValue.value = endValue;
        animationStartTime.value = null;
    }
};
const easeOutQuart = (x) => {
    return 1 - Math.pow(1 - x, 4);
};
const startAnimation = () => {
    previousFormattedValue.value = formattedValue.value;
    if (animationFrameId.value !== null) {
        cancelAnimationFrame(animationFrameId.value);
    }
    animationStartTime.value = null;
    animationFrameId.value = requestAnimationFrame(animate);
};
watch(() => props.value, (newVal) => {
    targetValue.value = Number(newVal);
    startAnimation();
});
watch(() => props.to, (newVal) => {
    if (newVal !== null) {
        targetValue.value = Number(newVal);
        startAnimation();
    }
});
onMounted(() => {
    if (Number(props.from) !== Number(props.value)) {
        startAnimation();
    }
});
onUnmounted(() => {
    if (animationFrameId.value !== null) {
        cancelAnimationFrame(animationFrameId.value);
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        value: {
            type: [Number, String],
            default: 0
        },
        from: {
            type: [Number, String],
            default: 0
        },
        to: {
            type: [Number, String],
            default: null
        },
        duration: {
            type: Number,
            default: 1000
        },
        format: {
            type: Object,
            default: () => ({})
        },
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        },
        separator: {
            type: String,
            default: ','
        },
        decimal: {
            type: Number,
            default: 0
        },
        effect: {
            type: String,
            default: 'flip',
            validator: (value) => {
                return ['flip', 'roll', 'fade', 'glitch'].indexOf(value) !== -1;
            }
        },
        theme: {
            type: String,
            default: 'neon',
            validator: (value) => {
                return ['neon', 'digital', 'hologram'].indexOf(value) !== -1;
            }
        }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['cp-digital-counter', `theme-${__VLS_ctx.theme}`])) }));
    __VLS_styleScopedClasses = (['cp-digital-counter', `theme-${theme}`]);
    if (__VLS_ctx.prefix) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("prefix") }));
        (__VLS_ctx.prefix);
        [theme, prefix, prefix,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("counter-container") }));
    for (const [digit, index] of __VLS_getVForSourceType((__VLS_ctx.formattedDigits))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ key: ((index)) }, { class: ("digit-container") }));
        if (__VLS_ctx.isDigitSeparator(digit)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("separator") }));
            (digit);
            [formattedDigits, isDigitSeparator,];
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("digit-flipper") }, { class: (({ 'animate': __VLS_ctx.shouldAnimate(index) })) }));
            __VLS_styleScopedClasses = ({ 'animate': shouldAnimate(index) });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("digit-top") }));
            (digit);
            [shouldAnimate,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("digit-bottom") }));
            (digit);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("digit-top flip-top") }));
            (__VLS_ctx.getPreviousDigit(index));
            [getPreviousDigit,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("digit-bottom flip-bottom") }));
            (digit);
        }
    }
    if (__VLS_ctx.suffix) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("suffix") }));
        (__VLS_ctx.suffix);
        [suffix, suffix,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['prefix'];
        __VLS_styleScopedClasses['counter-container'];
        __VLS_styleScopedClasses['digit-container'];
        __VLS_styleScopedClasses['separator'];
        __VLS_styleScopedClasses['digit-flipper'];
        __VLS_styleScopedClasses['digit-top'];
        __VLS_styleScopedClasses['digit-bottom'];
        __VLS_styleScopedClasses['digit-top'];
        __VLS_styleScopedClasses['flip-top'];
        __VLS_styleScopedClasses['digit-bottom'];
        __VLS_styleScopedClasses['flip-bottom'];
        __VLS_styleScopedClasses['suffix'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                formattedDigits: formattedDigits,
                isDigitSeparator: isDigitSeparator,
                getPreviousDigit: getPreviousDigit,
                shouldAnimate: shouldAnimate,
            };
        },
        props: {
            value: {
                type: [Number, String],
                default: 0
            },
            from: {
                type: [Number, String],
                default: 0
            },
            to: {
                type: [Number, String],
                default: null
            },
            duration: {
                type: Number,
                default: 1000
            },
            format: {
                type: Object,
                default: () => ({})
            },
            prefix: {
                type: String,
                default: ''
            },
            suffix: {
                type: String,
                default: ''
            },
            separator: {
                type: String,
                default: ','
            },
            decimal: {
                type: Number,
                default: 0
            },
            effect: {
                type: String,
                default: 'flip',
                validator: (value) => {
                    return ['flip', 'roll', 'fade', 'glitch'].indexOf(value) !== -1;
                }
            },
            theme: {
                type: String,
                default: 'neon',
                validator: (value) => {
                    return ['neon', 'digital', 'hologram'].indexOf(value) !== -1;
                }
            }
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        value: {
            type: [Number, String],
            default: 0
        },
        from: {
            type: [Number, String],
            default: 0
        },
        to: {
            type: [Number, String],
            default: null
        },
        duration: {
            type: Number,
            default: 1000
        },
        format: {
            type: Object,
            default: () => ({})
        },
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        },
        separator: {
            type: String,
            default: ','
        },
        decimal: {
            type: Number,
            default: 0
        },
        effect: {
            type: String,
            default: 'flip',
            validator: (value) => {
                return ['flip', 'roll', 'fade', 'glitch'].indexOf(value) !== -1;
            }
        },
        theme: {
            type: String,
            default: 'neon',
            validator: (value) => {
                return ['neon', 'digital', 'hologram'].indexOf(value) !== -1;
            }
        }
    },
});
;
//# sourceMappingURL=digitalCounter.vue.js.map