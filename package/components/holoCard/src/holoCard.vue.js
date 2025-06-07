import { computed, ref, useSlots } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpHoloCard',
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
    }
});
const mousePosition = ref({ x: 0, y: 0 });
const isHovering = ref(false);
const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mousePosition.value = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((event.clientY - rect.top) / rect.height) * 2 - 1
    };
    isHovering.value = true;
};
const handleMouseLeave = () => {
    isHovering.value = false;
    mousePosition.value = { x: 0, y: 0 };
};
const cardType = computed(() => {
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
});
const cardStyle = computed(() => {
    if (!isHovering.value)
        return {};
    const tiltX = mousePosition.value.y * 10;
    const tiltY = -mousePosition.value.x * 10;
    return {
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: 'transform 0.1s ease'
    };
});
const hologramStyle = computed(() => {
    if (!isHovering.value)
        return {};
    const moveX = mousePosition.value.x * 10;
    const moveY = mousePosition.value.y * 10;
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
        opacity: isHovering.value ? intensity : intensity * 0.5
    };
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ onMousemove: (__VLS_ctx.handleMouseMove) }, { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { class: ((['cp-holo-card', `depth-${__VLS_ctx.depth}`, __VLS_ctx.cardType])) }), { style: ((__VLS_ctx.cardStyle)) }));
    __VLS_styleScopedClasses = (['cp-holo-card', `depth-${depth}`, cardType]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("holo-card-content") }));
    var __VLS_0 = {};
    [handleMouseMove, handleMouseLeave, depth, cardType, cardStyle,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("holo-card-hologram-effect") }, { style: ((__VLS_ctx.hologramStyle)) }));
    [hologramStyle,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("holo-card-glow") }, { style: ((__VLS_ctx.glowStyle)) }));
    [glowStyle,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['holo-card-content'];
        __VLS_styleScopedClasses['holo-card-hologram-effect'];
        __VLS_styleScopedClasses['holo-card-glow'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                handleMouseMove: handleMouseMove,
                handleMouseLeave: handleMouseLeave,
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
            }
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
        }
    },
});
export default {};
;
//# sourceMappingURL=holoCard.vue.js.map