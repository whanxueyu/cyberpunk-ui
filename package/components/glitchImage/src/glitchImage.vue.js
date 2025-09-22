import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
defineOptions({
    name: 'CyberGlitchImage',
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
const imageRef = ref(null);
const glitchCanvasRef = ref(null);
const isLoaded = ref(false);
const loadError = ref(false);
const isGlitching = ref(false);
const glitchInterval = ref(null);
const originalImageData = ref(null);
const actualIntensity = computed(() => {
    return props.intensity / 10;
});
const handleImageLoaded = () => {
    isLoaded.value = true;
    loadError.value = false;
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
const handleImageError = () => {
    loadError.value = true;
    isLoaded.value = false;
    console.error('Failed to load image:', props.src);
};
const initCanvas = () => {
    if (!glitchCanvasRef.value || !imageRef.value)
        return;
    const img = imageRef.value;
    const canvas = glitchCanvasRef.value;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    try {
        ctx.drawImage(img, 0, 0);
        originalImageData.value = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    catch (e) {
        console.error('Failed to get image data (possibly CORS issue):', e);
        loadError.value = true;
    }
};
const applyRGBShiftEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const originalData = originalImageData.value.data;
    const maxShift = Math.floor(20 * intensity);
    const shiftX = Math.floor(Math.random() * maxShift);
    const shiftY = Math.floor(Math.random() * maxShift);
    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const i = (y * canvas.width + x) * 4;
            const rX = Math.min(Math.max(x + shiftX, 0), canvas.width - 1);
            const rY = Math.min(Math.max(y + shiftY, 0), canvas.height - 1);
            const rI = (rY * canvas.width + rX) * 4;
            data[i] = originalData[rI];
            const bX = Math.min(Math.max(x - shiftX, 0), canvas.width - 1);
            const bY = Math.min(Math.max(y - shiftY, 0), canvas.height - 1);
            const bI = (bY * canvas.width + bX) * 4;
            data[i + 2] = originalData[bI + 2];
            data[i + 1] = originalData[i + 1];
        }
    }
    ctx.putImageData(imgData, 0, 0);
};
const applyScanlineEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    ctx.putImageData(originalImageData.value, 0, 0);
    const lineSpacing = Math.max(1, Math.floor(5 / intensity));
    const lineIntensity = 0.5 + (intensity * 0.1);
    for (let y = 0; y < canvas.height; y += lineSpacing * 2) {
        ctx.fillStyle = `rgba(255, 255, 255, ${lineIntensity})`;
        ctx.fillRect(0, y, canvas.width, lineSpacing);
    }
};
const applyPixelateEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    ctx.putImageData(originalImageData.value, 0, 0);
    const pixelSize = Math.max(4, Math.floor(intensity * 8));
    const doFullImage = Math.random() > 0.5;
    if (doFullImage) {
        for (let y = 0; y < canvas.height; y += pixelSize) {
            for (let x = 0; x < canvas.width; x += pixelSize) {
                const pixelData = ctx.getImageData(x, y, 1, 1).data;
                ctx.fillStyle = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
                ctx.fillRect(x, y, pixelSize, pixelSize);
            }
        }
    }
    else {
        const numRegions = Math.floor(intensity * 3);
        for (let i = 0; i < numRegions; i++) {
            const regionX = Math.floor(Math.random() * (canvas.width - 50));
            const regionY = Math.floor(Math.random() * (canvas.height - 50));
            const regionWidth = Math.floor(Math.random() * 100 * intensity) + 30;
            const regionHeight = Math.floor(Math.random() * 80 * intensity) + 20;
            for (let y = regionY; y < regionY + regionHeight; y += pixelSize) {
                for (let x = regionX; x < regionX + regionWidth; x += pixelSize) {
                    if (x < canvas.width && y < canvas.height) {
                        const pixelData = ctx.getImageData(x, y, 1, 1).data;
                        ctx.fillStyle = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
                        ctx.fillRect(x, y, pixelSize, pixelSize);
                    }
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
    const noiseIntensity = intensity * 50;
    const noiseDensity = 0.2 + (intensity * 0.05);
    for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < noiseDensity) {
            const isWhiteNoise = Math.random() > 0.5;
            if (isWhiteNoise) {
                data[i] = 255;
                data[i + 1] = 255;
                data[i + 2] = 255;
            }
            else {
                data[i] = Math.floor(Math.random() * 256);
                data[i + 1] = Math.floor(Math.random() * 256);
                data[i + 2] = Math.floor(Math.random() * 256);
            }
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
                applyRGBShiftEffect(ctx, intensity);
                break;
            case 'scanline':
                applyScanlineEffect(ctx, intensity);
                break;
            case 'pixelate':
                applyPixelateEffect(ctx, intensity);
                break;
            case 'noise':
                applyNoiseEffect(ctx, intensity);
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
        if (Math.random() < 0.5) {
            applyGlitchEffect();
            setTimeout(() => {
                restoreOriginalImage();
            }, 200 + Math.random() * 300);
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
        if (isGlitching.value) {
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
        loadError.value = false;
    }
    if (isGlitching.value) {
        applyGlitchEffect();
    }
});
onMounted(() => {
    if (imageRef.value && imageRef.value.complete && imageRef.value.naturalHeight !== 0) {
        handleImageLoaded();
    }
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ onMouseenter: (__VLS_ctx.handleMouseEnter) }, { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { onClick: (__VLS_ctx.handleClick) }), { class: (['cp-glitch-image', { 'animated': __VLS_ctx.animated }]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "image-container" }, { ref: "imageContainerRef" }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign(Object.assign(Object.assign(Object.assign({ onLoad: (__VLS_ctx.handleImageLoaded) }, { onError: (__VLS_ctx.handleImageError) }), { src: (__VLS_ctx.src), alt: (__VLS_ctx.alt), ref: "imageRef" }), { class: "original-image" }), { crossOrigin: "anonymous" }));
;
if (__VLS_ctx.isLoaded && !__VLS_ctx.loadError) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)(Object.assign({ ref: "glitchCanvasRef" }, { class: "glitch-canvas" }));
    ;
}
if (!__VLS_ctx.isLoaded && !__VLS_ctx.loadError) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "loading-placeholder" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "loading-text" }));
}
if (__VLS_ctx.loadError) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "error-placeholder" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "error-text" }));
}
;
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
            imageContainerRef: imageContainerRef,
            imageRef: imageRef,
            glitchCanvasRef: glitchCanvasRef,
            isLoaded: isLoaded,
            loadError: loadError,
            handleImageLoaded: handleImageLoaded,
            handleImageError: handleImageError,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
            handleClick: handleClick,
        };
    },
    emits: {},
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
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
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
});
;
//# sourceMappingURL=glitchImage.vue.js.map