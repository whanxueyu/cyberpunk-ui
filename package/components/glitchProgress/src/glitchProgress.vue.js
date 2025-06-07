import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
defineOptions({
    name: 'CyberGlitchProgress',
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-glitch-progress', __VLS_ctx.directionClass, { 'indeterminate': __VLS_ctx.indeterminate }]) }, { 'data-progress': (__VLS_ctx.progress) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "progress-container" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "progress-bar" }, { style: (__VLS_ctx.progressStyle) }), { ref: "progressBarRef" }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "glitch-effect" }));
if (__VLS_ctx.showText && !__VLS_ctx.indeterminate) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "progress-text" }));
    (__VLS_ctx.progress);
}
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