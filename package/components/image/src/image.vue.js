import { ref, computed, onMounted, watch } from "vue";
const imageModules = import.meta.glob('../assets/img/*.{png,jpg,jpeg,gif,webp,svg}', { eager: true, query: '?url', import: 'default' });
defineOptions({
    name: "CyberImage",
});
const seed = Math.random();
const glitchDelay1 = (seed * 20).toFixed(2);
const glitchDelay2 = ((seed * 17 + 3) % 20).toFixed(2);
const glitchDelay3 = ((seed * 13 + 7) % 20).toFixed(2);
const props = withDefaults(defineProps(), {
    src: "",
    alt: "",
    width: "auto",
    height: "auto",
    fit: "cover",
    loading: "lazy",
    errorSrc: "",
    crossorigin: "anonymous",
    errorContent: "Image failed to load",
    disableGlitch: false,
});
const resolveImagePath = (path) => {
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
        return path;
    }
    for (const [modulePath, moduleUrl] of Object.entries(imageModules)) {
        if (modulePath.includes(path) || path.includes(modulePath.split('/').pop() || '')) {
            return moduleUrl;
        }
    }
    return path;
};
const isLoaded = ref(false);
const hasError = ref(false);
const actualSrc = ref('');
const wrapperStyle = computed(() => {
    const style = {};
    if (props.width !== 'auto' && props.width !== undefined) {
        style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
    }
    if (props.height !== 'auto' && props.height !== undefined) {
        style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
    }
    if (!style.width && !style.height) {
        style.display = 'inline-block';
    }
    return style;
});
const displayImage = computed(() => {
    if (hasError.value && props.errorSrc) {
        return `url(${props.errorSrc})`;
    }
    if (actualSrc.value) {
        return `url(${actualSrc.value})`;
    }
    return 'none';
});
const computedBackgroundSize = computed(() => {
    if (!props.fit)
        return 'cover';
    switch (props.fit) {
        case 'fill':
            return '100% 100%';
        case 'scale-down':
            return 'contain';
        default:
            return props.fit;
    }
});
const handleLoad = () => {
    actualSrc.value = resolveImagePath(props.src);
    isLoaded.value = true;
    hasError.value = false;
};
const handleError = () => {
    hasError.value = true;
    if (props.errorSrc && props.errorSrc !== props.src) {
        const errorImg = new Image();
        errorImg.crossOrigin = props.crossorigin || '';
        errorImg.src = resolveImagePath(props.errorSrc);
        errorImg.onload = () => {
            actualSrc.value = resolveImagePath(props.errorSrc);
            isLoaded.value = true;
        };
        errorImg.onerror = () => {
            isLoaded.value = true;
        };
    }
    else {
        isLoaded.value = true;
    }
};
watch(() => props.src, () => {
    isLoaded.value = false;
    hasError.value = false;
    actualSrc.value = resolveImagePath(props.src);
}, { immediate: true });
onMounted(() => {
    if (props.src) {
        actualSrc.value = resolveImagePath(props.src);
    }
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    src: "",
    alt: "",
    width: "auto",
    height: "auto",
    fit: "cover",
    loading: "lazy",
    errorSrc: "",
    crossorigin: "anonymous",
    errorContent: "Image failed to load",
    disableGlitch: false,
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cyber-image-wrapper" }, { style: (__VLS_ctx.wrapperStyle) }));
if (__VLS_ctx.src) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign(Object.assign(Object.assign({ onLoad: (__VLS_ctx.handleLoad) }, { onError: (__VLS_ctx.handleError) }), { src: (__VLS_ctx.src), alt: (__VLS_ctx.alt), loading: (__VLS_ctx.loading), crossorigin: (__VLS_ctx.crossorigin) }), { class: "hidden-image" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "glitch" }, { class: ({
        'is-loaded': __VLS_ctx.isLoaded && !__VLS_ctx.hasError,
        'is-loading': !__VLS_ctx.isLoaded && !__VLS_ctx.hasError,
        'is-error': __VLS_ctx.hasError,
        'no-glitch': __VLS_ctx.disableGlitch,
    }) }), { style: ({
        backgroundImage: __VLS_ctx.displayImage,
        backgroundSize: __VLS_ctx.computedBackgroundSize,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        animationDelay: `-${__VLS_ctx.glitchDelay1}s`,
    }) }));
if (__VLS_ctx.isLoaded && !__VLS_ctx.hasError && !__VLS_ctx.disableGlitch) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "glitch-layer" }, { style: ({
            backgroundImage: __VLS_ctx.displayImage,
            animationDelay: `-${__VLS_ctx.glitchDelay2}s`,
            '--glitch-delay': `-${__VLS_ctx.glitchDelay3}s`,
        }) }));
}
if (!__VLS_ctx.isLoaded && __VLS_ctx.placeholder) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "placeholder" }));
    var __VLS_0 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.placeholder),
        alt: "Loading...",
    });
}
else if (__VLS_ctx.hasError) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "error-content" }));
    var __VLS_2 = {};
    (__VLS_ctx.errorContent);
}
if (__VLS_ctx.isLoaded && !__VLS_ctx.hasError) {
    var __VLS_4 = {};
}
;
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
            glitchDelay1: glitchDelay1,
            glitchDelay2: glitchDelay2,
            glitchDelay3: glitchDelay3,
            isLoaded: isLoaded,
            hasError: hasError,
            wrapperStyle: wrapperStyle,
            displayImage: displayImage,
            computedBackgroundSize: computedBackgroundSize,
            handleLoad: handleLoad,
            handleError: handleError,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
export default {};
;
//# sourceMappingURL=image.vue.js.map