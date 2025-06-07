import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpGlitchImage',
});
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'Glitch image'
    },
    glitchType: {
        type: String,
        default: 'rgb-shift',
        validator: (value) => {
            return ['rgb-shift', 'scanline', 'pixelate', 'noise', 'combined'].indexOf(value) !== -1;
        }
    },
    intensity: {
        type: Number,
        default: 5,
        validator: (value) => {
            return value >= 1 && value <= 10;
        }
    },
    animated: {
        type: Boolean,
        default: false
    },
    triggerMode: {
        type: String,
        default: 'hover',
        validator: (value) => {
            return ['hover', 'click', 'auto', 'random'].indexOf(value) !== -1;
        }
    },
    interval: {
        type: Number,
        default: 1000
    }
});
const emit = defineEmits(['glitch-start', 'glitch-end']);
const imageContainerRef = ref(null);
const glitchCanvasRef = ref(null);
const isLoaded = ref(false);
const isGlitching = ref(false);
const glitchInterval = ref(null);
const originalImageData = ref(null);
const actualIntensity = computed(() => {
    return props.intensity / 10;
});
const handleImageLoaded = () => {
    isLoaded.value = true;
    setTimeout(() => {
        initCanvas();
        if (props.triggerMode === 'auto') {
            startGlitchEffect();
        }
        else if (props.triggerMode === 'random') {
            startRandomGlitchEffect();
        }
    }, 0);
};
const initCanvas = () => {
    if (!glitchCanvasRef.value || !imageContainerRef.value)
        return;
    const img = imageContainerRef.value.querySelector('img');
    if (!img)
        return;
    const canvas = glitchCanvasRef.value;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    originalImageData.value = ctx.getImageData(0, 0, canvas.width, canvas.height);
};
const applyRGBShiftEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const originalData = originalImageData.value.data;
    const shiftX = Math.floor(Math.random() * 10 * intensity);
    const shiftY = Math.floor(Math.random() * 10 * intensity);
    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const i = (y * canvas.width + x) * 4;
            const rX = Math.min(Math.max(x + shiftX, 0), canvas.width - 1);
            const rY = y;
            const rI = (rY * canvas.width + rX) * 4;
            data[i] = originalData[rI];
            data[i + 1] = originalData[i + 1];
            const bX = Math.min(Math.max(x - shiftX, 0), canvas.width - 1);
            const bY = Math.min(Math.max(y + shiftY, 0), canvas.height - 1);
            const bI = (bY * canvas.width + bX) * 4;
            data[i + 2] = originalData[bI + 2];
            data[i + 3] = originalData[i + 3];
        }
    }
    ctx.putImageData(imgData, 0, 0);
};
const applyScanlineEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const lineSpacing = Math.max(2, Math.floor(10 / intensity));
    const lineIntensity = 0.3 + (intensity * 0.07);
    for (let y = 0; y < canvas.height; y++) {
        const isScanline = y % lineSpacing === 0;
        if (isScanline) {
            for (let x = 0; x < canvas.width; x++) {
                const i = (y * canvas.width + x) * 4;
                data[i] = Math.min(255, data[i] * (1 + lineIntensity));
                data[i + 1] = Math.min(255, data[i + 1] * (1 + lineIntensity));
                data[i + 2] = Math.min(255, data[i + 2] * (1 + lineIntensity));
            }
        }
    }
    ctx.putImageData(imgData, 0, 0);
};
const applyPixelateEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    ctx.putImageData(originalImageData.value, 0, 0);
    const pixelSize = Math.max(2, Math.floor(intensity * 3));
    const numRegions = Math.floor(intensity * 2);
    for (let i = 0; i < numRegions; i++) {
        const regionX = Math.floor(Math.random() * canvas.width);
        const regionY = Math.floor(Math.random() * canvas.height);
        const regionWidth = Math.floor(Math.random() * 50 * intensity) + 20;
        const regionHeight = Math.floor(Math.random() * 30 * intensity) + 10;
        for (let y = regionY; y < regionY + regionHeight; y += pixelSize) {
            for (let x = regionX; x < regionX + regionWidth; x += pixelSize) {
                if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
                    const pixelData = ctx.getImageData(x, y, 1, 1).data;
                    ctx.fillStyle = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`;
                    ctx.fillRect(x, y, pixelSize, pixelSize);
                }
            }
        }
    }
};
const applyNoiseEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const noiseIntensity = intensity * 30;
    for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < 0.1 * intensity) {
            const noise = (Math.random() - 0.5) * noiseIntensity;
            data[i] = Math.min(255, Math.max(0, data[i] + noise));
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
        }
    }
    ctx.putImageData(imgData, 0, 0);
};
const applyCombinedEffect = (ctx, intensity) => {
    const effects = ['rgb-shift', 'scanline', 'pixelate', 'noise'];
    const shuffled = [...effects].sort(() => 0.5 - Math.random());
    const selectedEffects = shuffled.slice(0, 2 + Math.floor(Math.random() * 2));
    selectedEffects.forEach(effect => {
        switch (effect) {
            case 'rgb-shift':
                applyRGBShiftEffect(ctx, intensity * 0.8);
                break;
            case 'scanline':
                applyScanlineEffect(ctx, intensity);
                break;
            case 'pixelate':
                applyPixelateEffect(ctx, intensity * 0.7);
                break;
            case 'noise':
                applyNoiseEffect(ctx, intensity * 0.9);
                break;
        }
    });
};
const applyGlitchEffect = () => {
    if (!glitchCanvasRef.value || !originalImageData.value)
        return;
    const canvas = glitchCanvasRef.value;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return;
    ctx.putImageData(originalImageData.value, 0, 0);
    switch (props.glitchType) {
        case 'rgb-shift':
            applyRGBShiftEffect(ctx, actualIntensity.value);
            break;
        case 'scanline':
            applyScanlineEffect(ctx, actualIntensity.value);
            break;
        case 'pixelate':
            applyPixelateEffect(ctx, actualIntensity.value);
            break;
        case 'noise':
            applyNoiseEffect(ctx, actualIntensity.value);
            break;
        case 'combined':
            applyCombinedEffect(ctx, actualIntensity.value);
            break;
    }
    isGlitching.value = true;
    emit('glitch-start');
};
const restoreOriginalImage = () => {
    if (!glitchCanvasRef.value || !originalImageData.value)
        return;
    const canvas = glitchCanvasRef.value;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return;
    ctx.putImageData(originalImageData.value, 0, 0);
    isGlitching.value = false;
    emit('glitch-end');
};
const startGlitchEffect = () => {
    if (glitchInterval.value) {
        clearInterval(glitchInterval.value);
    }
    applyGlitchEffect();
    if (props.animated) {
        glitchInterval.value = window.setInterval(() => {
            applyGlitchEffect();
        }, props.interval);
    }
};
const startRandomGlitchEffect = () => {
    if (glitchInterval.value) {
        clearInterval(glitchInterval.value);
    }
    glitchInterval.value = window.setInterval(() => {
        if (Math.random() < 0.3) {
            applyGlitchEffect();
            setTimeout(() => {
                restoreOriginalImage();
            }, 300 + Math.random() * 700);
        }
    }, props.interval);
};
const stopGlitchEffect = () => {
    if (glitchInterval.value) {
        clearInterval(glitchInterval.value);
        glitchInterval.value = null;
    }
    restoreOriginalImage();
};
const handleMouseEnter = () => {
    if (props.triggerMode === 'hover') {
        startGlitchEffect();
    }
};
const handleMouseLeave = () => {
    if (props.triggerMode === 'hover' && !props.animated) {
        stopGlitchEffect();
    }
};
const handleClick = () => {
    if (props.triggerMode === 'click') {
        if (isGlitching.value && !props.animated) {
            stopGlitchEffect();
        }
        else {
            startGlitchEffect();
        }
    }
};
watch(() => [props.src, props.glitchType, props.intensity], () => {
    if (props.src) {
        isLoaded.value = false;
    }
    if (isGlitching.value) {
        applyGlitchEffect();
    }
});
onMounted(() => {
    var _a;
    const img = (_a = imageContainerRef.value) === null || _a === void 0 ? void 0 : _a.querySelector('img');
    if (img && img.complete) {
        handleImageLoaded();
    }
});
onUnmounted(() => {
    if (glitchInterval.value) {
        clearInterval(glitchInterval.value);
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'Glitch image'
        },
        glitchType: {
            type: String,
            default: 'rgb-shift',
            validator: (value) => {
                return ['rgb-shift', 'scanline', 'pixelate', 'noise', 'combined'].indexOf(value) !== -1;
            }
        },
        intensity: {
            type: Number,
            default: 5,
            validator: (value) => {
                return value >= 1 && value <= 10;
            }
        },
        animated: {
            type: Boolean,
            default: false
        },
        triggerMode: {
            type: String,
            default: 'hover',
            validator: (value) => {
                return ['hover', 'click', 'auto', 'random'].indexOf(value) !== -1;
            }
        },
        interval: {
            type: Number,
            default: 1000
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ onMouseenter: (__VLS_ctx.handleMouseEnter) }, { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { onClick: (__VLS_ctx.handleClick) }), { class: ((['cp-glitch-image', { 'animated': __VLS_ctx.animated }])) }));
    __VLS_styleScopedClasses = (['cp-glitch-image', { 'animated': animated }]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("image-container") }, { ref: ("imageContainerRef") }));
    (__VLS_ctx.imageContainerRef);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign(Object.assign({ onLoad: (__VLS_ctx.handleImageLoaded) }, { src: ((__VLS_ctx.src)), alt: ((__VLS_ctx.alt)) }), { class: ("original-image") }));
    [handleMouseEnter, handleMouseLeave, handleClick, animated, imageContainerRef, handleImageLoaded, src, alt,];
    if (__VLS_ctx.isLoaded) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)(Object.assign({ ref: ("glitchCanvasRef") }, { class: ("glitch-canvas") }));
        (__VLS_ctx.glitchCanvasRef);
        [isLoaded, glitchCanvasRef,];
    }
    if (!__VLS_ctx.isLoaded) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("loading-placeholder") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("loading-text") }));
        [isLoaded,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['image-container'];
        __VLS_styleScopedClasses['original-image'];
        __VLS_styleScopedClasses['glitch-canvas'];
        __VLS_styleScopedClasses['loading-placeholder'];
        __VLS_styleScopedClasses['loading-text'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                imageContainerRef: imageContainerRef,
                glitchCanvasRef: glitchCanvasRef,
                isLoaded: isLoaded,
                handleImageLoaded: handleImageLoaded,
                handleMouseEnter: handleMouseEnter,
                handleMouseLeave: handleMouseLeave,
                handleClick: handleClick,
            };
        },
        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                default: 'Glitch image'
            },
            glitchType: {
                type: String,
                default: 'rgb-shift',
                validator: (value) => {
                    return ['rgb-shift', 'scanline', 'pixelate', 'noise', 'combined'].indexOf(value) !== -1;
                }
            },
            intensity: {
                type: Number,
                default: 5,
                validator: (value) => {
                    return value >= 1 && value <= 10;
                }
            },
            animated: {
                type: Boolean,
                default: false
            },
            triggerMode: {
                type: String,
                default: 'hover',
                validator: (value) => {
                    return ['hover', 'click', 'auto', 'random'].indexOf(value) !== -1;
                }
            },
            interval: {
                type: Number,
                default: 1000
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
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'Glitch image'
        },
        glitchType: {
            type: String,
            default: 'rgb-shift',
            validator: (value) => {
                return ['rgb-shift', 'scanline', 'pixelate', 'noise', 'combined'].indexOf(value) !== -1;
            }
        },
        intensity: {
            type: Number,
            default: 5,
            validator: (value) => {
                return value >= 1 && value <= 10;
            }
        },
        animated: {
            type: Boolean,
            default: false
        },
        triggerMode: {
            type: String,
            default: 'hover',
            validator: (value) => {
                return ['hover', 'click', 'auto', 'random'].indexOf(value) !== -1;
            }
        },
        interval: {
            type: Number,
            default: 1000
        }
    },
    emits: {},
});
;
//# sourceMappingURL=glitchImage.vue.js.map