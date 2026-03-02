import { ref, computed, onMounted, watch } from 'vue';
defineOptions({
    name: 'CyberImage',
});
const props = withDefaults(defineProps(), {
    src: '',
    alt: '',
    width: '100%',
    height: '100%',
    fit: 'cover',
    loading: 'lazy',
    errorSrc: '',
    crossorigin: 'anonymous',
    errorContent: 'Image failed to load',
    disableGlitch: false
});
const isLoaded = ref(false);
const hasError = ref(false);
const actualSrc = ref(props.src);
const normalizedWidth = computed(() => typeof props.width === 'number' ? `${props.width}px` : props.width);
const normalizedHeight = computed(() => typeof props.height === 'number' ? `${props.height}px` : props.height);
const backgroundImage = computed(() => {
    if (hasError.value && props.errorSrc)
        return `url(${props.errorSrc}) no-repeat`;
    return `url(${actualSrc.value}) no-repeat`;
});
const loadImage = () => {
    if (!props.src)
        return;
    isLoaded.value = false;
    hasError.value = false;
    const img = new Image();
    if (props.crossorigin)
        img.crossOrigin = props.crossorigin;
    img.src = props.src;
    img.onload = () => {
        actualSrc.value = props.src;
        isLoaded.value = true;
    };
    img.onerror = () => {
        hasError.value = true;
        if (props.errorSrc && props.errorSrc !== props.src) {
            actualSrc.value = props.errorSrc;
            const errorImg = new Image();
            errorImg.src = props.errorSrc;
            errorImg.onload = () => isLoaded.value = true;
        }
        else {
            isLoaded.value = true;
        }
    };
};
const backgroundSize = computed(() => {
    switch (props.fit) {
        case 'fill':
            return '100% 100%';
        case 'scale-down':
            return 'contain';
        default:
            return props.fit;
    }
});
watch(() => props.src, loadImage);
onMounted(loadImage);
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    src: '',
    alt: '',
    width: '100%',
    height: '100%',
    fit: 'cover',
    loading: 'lazy',
    errorSrc: '',
    crossorigin: 'anonymous',
    errorContent: 'Image failed to load',
    disableGlitch: false
});
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "imgbox" }, { style: ({ width: __VLS_ctx.normalizedWidth, height: __VLS_ctx.normalizedHeight }) }), { role: "img", 'aria-label': (__VLS_ctx.alt || undefined), 'aria-busy': (!__VLS_ctx.isLoaded && !__VLS_ctx.hasError) }));
if (__VLS_ctx.src) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(Object.assign({ src: (__VLS_ctx.src), alt: (__VLS_ctx.alt), loading: (__VLS_ctx.loading), crossorigin: (__VLS_ctx.crossorigin) }, { class: "hidden-image" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "cyberimg" }, { class: ({
        'loaded': __VLS_ctx.isLoaded && !__VLS_ctx.hasError,
        'loading': !__VLS_ctx.isLoaded && !__VLS_ctx.hasError,
        'error': __VLS_ctx.hasError,
        'no-glitch': __VLS_ctx.disableGlitch
    }) }), { style: ({
        background: __VLS_ctx.backgroundImage,
        backgroundSize: __VLS_ctx.backgroundSize
    }) }));
if (__VLS_ctx.isLoaded && !__VLS_ctx.hasError) {
    var __VLS_0 = {};
}
else if (!__VLS_ctx.isLoaded && __VLS_ctx.placeholder) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "placeholder" }));
    var __VLS_2 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: (__VLS_ctx.placeholder),
        alt: "Loading...",
    });
}
else if (__VLS_ctx.hasError) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "error" }));
    var __VLS_4 = {};
    (__VLS_ctx.errorContent);
}
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
            isLoaded: isLoaded,
            hasError: hasError,
            normalizedWidth: normalizedWidth,
            normalizedHeight: normalizedHeight,
            backgroundImage: backgroundImage,
            backgroundSize: backgroundSize,
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