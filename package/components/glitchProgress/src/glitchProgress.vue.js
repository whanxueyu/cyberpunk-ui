import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpGlitchProgress',
});
const props = defineProps({
    progress: {
        type: Number,
        default: 0,
        validator: (value) => {
            return value >= 0 && value <= 100;
        }
    },
    direction: {
        type: String,
        default: 'horizontal',
        validator: (value) => {
            return ['horizontal', 'vertical'].indexOf(value) !== -1;
        }
    },
    glitchIntensity: {
        type: Number,
        default: 5,
        validator: (value) => {
            return value >= 1 && value <= 10;
        }
    },
    indeterminate: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: '#00e6f6'
    },
    showText: {
        type: Boolean,
        default: true
    }
});
const progressBarRef = ref(null);
const glitchInterval = ref(null);
const directionClass = computed(() => {
    return props.direction === 'vertical' ? 'vertical' : 'horizontal';
});
const progressStyle = computed(() => {
    const dimension = props.direction === 'vertical' ? 'height' : 'width';
    const value = props.indeterminate ? '100%' : `${props.progress}%`;
    return {
        [dimension]: value,
        backgroundColor: props.color,
        boxShadow: `0 0 ${props.glitchIntensity * 2}px ${props.color}`
    };
});
const createGlitchEffect = () => {
    if (!progressBarRef.value)
        return;
    const glitchEffect = progressBarRef.value.querySelector('.glitch-effect');
    if (!glitchEffect)
        return;
    const applyGlitchEffect = () => {
        if (!glitchEffect)
            return;
        const shouldGlitch = Math.random() < props.glitchIntensity / 20;
        if (shouldGlitch) {
            const rgbShiftX = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
            const rgbShiftY = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
            const skew = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
            const blur = Math.random() * props.glitchIntensity / 2;
            glitchEffect.style.transform = `translate(${rgbShiftX}px, ${rgbShiftY}px) skew(${skew}deg)`;
            glitchEffect.style.filter = `blur(${blur}px)`;
            glitchEffect.style.opacity = '1';
            setTimeout(() => {
                if (glitchEffect) {
                    glitchEffect.style.transform = 'translate(0, 0) skew(0)';
                    glitchEffect.style.filter = 'blur(0)';
                    glitchEffect.style.opacity = '0';
                }
            }, 150);
        }
    };
    glitchInterval.value = window.setInterval(() => {
        applyGlitchEffect();
    }, 500);
};
let prevProgress = props.progress;
watch(() => props.progress, (newVal) => {
    if (newVal !== prevProgress) {
        if (progressBarRef.value) {
            const glitchEffect = progressBarRef.value.querySelector('.glitch-effect');
            if (glitchEffect) {
                const rgbShiftX = Math.random() * props.glitchIntensity * 2 - props.glitchIntensity;
                const rgbShiftY = Math.random() * props.glitchIntensity - props.glitchIntensity / 2;
                glitchEffect.style.transform = `translate(${rgbShiftX}px, ${rgbShiftY}px)`;
                glitchEffect.style.opacity = '1';
                setTimeout(() => {
                    if (glitchEffect) {
                        glitchEffect.style.transform = 'translate(0, 0)';
                        glitchEffect.style.opacity = '0';
                    }
                }, 300);
            }
        }
        prevProgress = newVal;
    }
});
onMounted(() => {
    createGlitchEffect();
});
onUnmounted(() => {
    if (glitchInterval.value) {
        clearInterval(glitchInterval.value);
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        progress: {
            type: Number,
            default: 0,
            validator: (value) => {
                return value >= 0 && value <= 100;
            }
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator: (value) => {
                return ['horizontal', 'vertical'].indexOf(value) !== -1;
            }
        },
        glitchIntensity: {
            type: Number,
            default: 5,
            validator: (value) => {
                return value >= 1 && value <= 10;
            }
        },
        indeterminate: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#00e6f6'
        },
        showText: {
            type: Boolean,
            default: true
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['cp-glitch-progress', __VLS_ctx.directionClass, { 'indeterminate': __VLS_ctx.indeterminate }])) }, { "data-progress": ((__VLS_ctx.progress)) }));
    __VLS_styleScopedClasses = (['cp-glitch-progress', directionClass, { 'indeterminate': indeterminate }]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("progress-container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: ("progress-bar") }, { style: ((__VLS_ctx.progressStyle)) }), { ref: ("progressBarRef") }));
    (__VLS_ctx.progressBarRef);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("glitch-effect") }));
    [directionClass, indeterminate, progress, progressStyle, progressBarRef,];
    if (__VLS_ctx.showText && !__VLS_ctx.indeterminate) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("progress-text") }));
        (__VLS_ctx.progress);
        [indeterminate, progress, showText,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['progress-container'];
        __VLS_styleScopedClasses['progress-bar'];
        __VLS_styleScopedClasses['glitch-effect'];
        __VLS_styleScopedClasses['progress-text'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                progressBarRef: progressBarRef,
                directionClass: directionClass,
                progressStyle: progressStyle,
            };
        },
        props: {
            progress: {
                type: Number,
                default: 0,
                validator: (value) => {
                    return value >= 0 && value <= 100;
                }
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator: (value) => {
                    return ['horizontal', 'vertical'].indexOf(value) !== -1;
                }
            },
            glitchIntensity: {
                type: Number,
                default: 5,
                validator: (value) => {
                    return value >= 1 && value <= 10;
                }
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: '#00e6f6'
            },
            showText: {
                type: Boolean,
                default: true
            }
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        progress: {
            type: Number,
            default: 0,
            validator: (value) => {
                return value >= 0 && value <= 100;
            }
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator: (value) => {
                return ['horizontal', 'vertical'].indexOf(value) !== -1;
            }
        },
        glitchIntensity: {
            type: Number,
            default: 5,
            validator: (value) => {
                return value >= 1 && value <= 10;
            }
        },
        indeterminate: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#00e6f6'
        },
        showText: {
            type: Boolean,
            default: true
        }
    },
});
;
//# sourceMappingURL=glitchProgress.vue.js.map