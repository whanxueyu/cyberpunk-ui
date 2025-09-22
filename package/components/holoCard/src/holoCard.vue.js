import { computed, ref, useSlots } from 'vue';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
defineOptions({
    name: 'CyberHoloCard',
});
const slots = useSlots();
const props = defineProps({
    type: {
        type: String,
        default: 'basic',
        validator: (value) => {
            return ['basic', 'media', 'action'].indexOf(value) !== -1;
        }
    },
    glowIntensity: {
        type: Number,
        default: 50,
        validator: (value) => {
            return value >= 0 && value <= 100;
        }
    },
    hologramColor: {
        type: String,
        default: '#00e6f6'
    },
    depth: {
        type: Number,
        default: 3,
        validator: (value) => {
            return value >= 1 && value <= 5;
        }
    },
    title: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: Boolean,
        default: true
    },
    theme: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['default', 'neon', 'hologram', 'terminal'].indexOf(value) !== -1;
        }
    },
    effect: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['default', 'scan', 'glitch', 'pulse'].indexOf(value) !== -1;
        }
    }
});
const mousePosition = ref({ x: 0, y: 0 });
const isHovering = ref(false);
const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = instance;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};
const handleMouseMove = (event) => {
    if (props.disabled)
        return;
    const rect = event.currentTarget.getBoundingClientRect();
    mousePosition.value = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((event.clientY - rect.top) / rect.height) * 2 - 1
    };
    isHovering.value = true;
};
const throttledHandleMouseMove = throttle(handleMouseMove, 16);
const handleMouseLeave = () => {
    isHovering.value = false;
    mousePosition.value = { x: 0, y: 0 };
};
const handleFocus = () => {
    if (!props.disabled) {
        isHovering.value = true;
        mousePosition.value = { x: 0, y: 0 };
    }
};
const cardType = computed(() => {
    const baseType = (() => {
        switch (props.type) {
            case 'basic':
                return 'basic-type';
            case 'media':
                return 'media-type';
            case 'action':
                return 'action-type';
            default:
                return 'basic-type';
        }
    })();
    return [baseType];
});
const cardStyle = computed(() => {
    const baseStyle = {};
    if (!props.rounded) {
        baseStyle.borderRadius = '0';
    }
    if (props.disabled) {
        baseStyle.cursor = 'not-allowed';
        baseStyle.opacity = '0.6';
    }
    if (!isHovering.value || props.disabled)
        return baseStyle;
    const tiltX = mousePosition.value.y * 10;
    const tiltY = -mousePosition.value.x * 10;
    return Object.assign(Object.assign({}, baseStyle), { transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`, transition: 'transform 0.1s ease' });
});
const hologramStyle = computed(() => {
    if (!isHovering.value || props.disabled)
        return {};
    const moveX = Math.max(-50, Math.min(50, mousePosition.value.x * 10));
    const moveY = Math.max(-50, Math.min(50, mousePosition.value.y * 10));
    return {
        background: `radial-gradient(circle at ${50 + moveX}% ${50 + moveY}%, ${props.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: 'background 0.1s ease'
    };
});
const glowStyle = computed(() => {
    const intensity = props.glowIntensity / 100;
    return {
        boxShadow: `0 0 ${10 + props.glowIntensity / 5}px ${props.hologramColor}${Math.floor(intensity * 99).toString(16).padStart(2, '0')}`,
        opacity: (isHovering.value && !props.disabled) ? intensity : intensity * 0.5
    };
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
__VLS_ctx.props.hologramColor;
__VLS_ctx.props.hologramColor;
__VLS_ctx.props.hologramColor;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onMousemove: (__VLS_ctx.throttledHandleMouseMove) }, { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { onFocus: (__VLS_ctx.handleFocus) }), { onBlur: (__VLS_ctx.handleMouseLeave) }), { class: ([
        'cp-holo-card',
        `depth-${__VLS_ctx.depth}`,
        __VLS_ctx.cardType,
        `theme-${__VLS_ctx.theme}`,
        `effect-${__VLS_ctx.effect}`
    ]) }), { style: (__VLS_ctx.cardStyle) }), { tabindex: (__VLS_ctx.disabled ? -1 : 0), role: "button", 'aria-disabled': (__VLS_ctx.disabled), 'aria-label': (__VLS_ctx.title) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "holo-card-content" }));
if (__VLS_ctx.title && !__VLS_ctx.slots.title) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "card-title" }));
    (__VLS_ctx.title);
}
var __VLS_0 = {};
var __VLS_2 = {};
var __VLS_4 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "holo-card-hologram-effect" }, { style: (__VLS_ctx.hologramStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "holo-card-glow" }, { style: (__VLS_ctx.glowStyle) }));
;
;
;
;
;
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2, __VLS_5 = __VLS_4;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            slots: slots,
            props: props,
            throttledHandleMouseMove: throttledHandleMouseMove,
            handleMouseLeave: handleMouseLeave,
            handleFocus: handleFocus,
            cardType: cardType,
            cardStyle: cardStyle,
            hologramStyle: hologramStyle,
            glowStyle: glowStyle,
        };
    },
    props: {
        type: {
            type: String,
            default: 'basic',
            validator: (value) => {
                return ['basic', 'media', 'action'].indexOf(value) !== -1;
            }
        },
        glowIntensity: {
            type: Number,
            default: 50,
            validator: (value) => {
                return value >= 0 && value <= 100;
            }
        },
        hologramColor: {
            type: String,
            default: '#00e6f6'
        },
        depth: {
            type: Number,
            default: 3,
            validator: (value) => {
                return value >= 1 && value <= 5;
            }
        },
        title: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: true
        },
        theme: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['default', 'neon', 'hologram', 'terminal'].indexOf(value) !== -1;
            }
        },
        effect: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['default', 'scan', 'glitch', 'pulse'].indexOf(value) !== -1;
            }
        }
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        type: {
            type: String,
            default: 'basic',
            validator: (value) => {
                return ['basic', 'media', 'action'].indexOf(value) !== -1;
            }
        },
        glowIntensity: {
            type: Number,
            default: 50,
            validator: (value) => {
                return value >= 0 && value <= 100;
            }
        },
        hologramColor: {
            type: String,
            default: '#00e6f6'
        },
        depth: {
            type: Number,
            default: 3,
            validator: (value) => {
                return value >= 1 && value <= 5;
            }
        },
        title: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: true
        },
        theme: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['default', 'neon', 'hologram', 'terminal'].indexOf(value) !== -1;
            }
        },
        effect: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['default', 'scan', 'glitch', 'pulse'].indexOf(value) !== -1;
            }
        }
    },
});
export default {};
;
//# sourceMappingURL=holoCard.vue.js.map