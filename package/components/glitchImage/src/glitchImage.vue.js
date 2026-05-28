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
    const origData = originalImageData.value.data;
    const maxShift = Math.floor(8 + 25 * intensity);
    const sliceCount = Math.floor(8 + intensity * 20);
    const sliceHeight = Math.max(2, Math.floor(canvas.height / sliceCount));
    for (let slice = 0; slice < sliceCount; slice++) {
        const yStart = slice * sliceHeight;
        const yEnd = Math.min(yStart + sliceHeight, canvas.height);
        const rShift = Math.floor((Math.random() - 0.5) * 2 * maxShift);
        const bShift = Math.floor((Math.random() - 0.5) * 2 * maxShift);
        for (let y = yStart; y < yEnd; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const i = (y * canvas.width + x) * 4;
                const rx = Math.min(Math.max(x + rShift, 0), canvas.width - 1);
                data[i] = origData[(y * canvas.width + rx) * 4];
                const bx = Math.min(Math.max(x + bShift, 0), canvas.width - 1);
                data[i + 2] = origData[(y * canvas.width + bx) * 4 + 2];
                data[i + 1] = origData[i + 1];
            }
        }
    }
    ctx.putImageData(imgData, 0, 0);
};
const applyScanlineEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    ctx.putImageData(originalImageData.value, 0, 0);
    const spacing = Math.max(2, Math.floor(6 - intensity * 0.4));
    for (let y = 0; y < canvas.height; y += spacing) {
        ctx.fillStyle = `rgba(0, 0, 0, ${0.15 + intensity * 0.05})`;
        ctx.fillRect(0, y, canvas.width, Math.max(1, Math.floor(spacing / 3)));
    }
    const brightLines = Math.floor(intensity * 3);
    for (let i = 0; i < brightLines; i++) {
        const ly = Math.floor(Math.random() * canvas.height);
        const lh = 1 + Math.floor(Math.random() * 3);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`;
        ctx.fillRect(0, ly, canvas.width, lh);
    }
};
const applyPixelateEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    ctx.putImageData(originalImageData.value, 0, 0);
    const blockSize = Math.max(2, Math.floor(4 + intensity * 6));
    const bandCount = Math.floor(2 + intensity * 3);
    for (let b = 0; b < bandCount; b++) {
        const bandY = Math.floor(Math.random() * (canvas.height - 20));
        const bandH = Math.floor(10 + Math.random() * 50 * intensity);
        const off = document.createElement('canvas');
        off.width = Math.max(2, Math.ceil(canvas.width / blockSize));
        off.height = Math.max(2, Math.ceil(bandH / blockSize));
        const offCtx = off.getContext('2d');
        offCtx.imageSmoothingEnabled = false;
        offCtx.drawImage(canvas, 0, bandY, canvas.width, bandH, 0, 0, off.width, off.height);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(off, 0, 0, off.width, off.height, 0, bandY, canvas.width, bandH);
        ctx.imageSmoothingEnabled = true;
    }
};
const applyNoiseEffect = (ctx, intensity) => {
    if (!originalImageData.value)
        return;
    const canvas = ctx.canvas;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const density = 0.03 + intensity * 0.03;
    for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < density) {
            if (Math.random() < 0.7) {
                const v = Math.floor(Math.random() * 160 + 95);
                data[i] = v;
                data[i + 1] = v;
                data[i + 2] = v;
            }
            else {
                data[i] = Math.floor(Math.random() * 256);
                data[i + 1] = Math.floor(Math.random() * 256);
                data[i + 2] = Math.floor(Math.random() * 256);
            }
        }
    }
    ctx.putImageData(imgData, 0, 0);
    const streaks = Math.floor(intensity * 4);
    for (let i = 0; i < streaks; i++) {
        const sy = Math.floor(Math.random() * canvas.height);
        const sh = 1 + Math.floor(Math.random() * 3);
        const alpha = 0.1 + Math.random() * 0.2;
        const isDark = Math.random() > 0.5;
        ctx.fillStyle = isDark
            ? `rgba(0, 0, 0, ${alpha})`
            : `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(0, sy, canvas.width, sh);
    }
};
const applyCombinedEffect = (ctx, intensity) => {
    applyRGBShiftEffect(ctx, intensity);
    const secondary = ['scanline', 'pixelate', 'noise'];
    const count = 1 + Math.floor(Math.random() * 2);
    for (let i = secondary.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [secondary[i], secondary[j]] = [secondary[j], secondary[i]];
    }
    secondary.slice(0, count).forEach(effect => {
        const reducedIntensity = intensity * 0.6;
        switch (effect) {
            case 'scanline':
                applyScanlineEffect(ctx, reducedIntensity);
                break;
            case 'pixelate':
                applyPixelateEffect(ctx, reducedIntensity);
                break;
            case 'noise':
                applyNoiseEffect(ctx, reducedIntensity);
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