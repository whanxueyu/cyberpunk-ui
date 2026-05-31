import { computed } from 'vue';
defineOptions({
    name: 'CyberCubicProgress',
});
const props = withDefaults(defineProps(), {
    percent: 0,
    color: 'pink',
    pipeWidth: 600,
    pipeHeight: 100,
    perspective: 520,
    rotateX: -33.5,
    indeterminate: false,
    showText: true,
    glowIntensity: 5,
});
const COLOR_PRESETS = {
    pink: {
        primary: '#ff226d',
        secondary: '#ffd922',
        empty: '#ff226d',
    },
    cyan: {
        primary: '#00e6f6',
        secondary: '#0055ff',
        empty: '#00e6f6',
    },
    green: {
        primary: '#00ff41',
        secondary: '#1a8a3a',
        empty: '#00ff41',
    },
    gold: {
        primary: '#ffb800',
        secondary: '#ff4500',
        empty: '#ffb800',
    },
    purple: {
        primary: '#b300ff',
        secondary: '#ff00e6',
        empty: '#b300ff',
    },
};
function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    if (clean.length !== 6)
        return null;
    return {
        r: parseInt(clean.slice(0, 2), 16),
        g: parseInt(clean.slice(2, 4), 16),
        b: parseInt(clean.slice(4, 6), 16),
    };
}
function resolveColorSet(input) {
    if (COLOR_PRESETS[input]) {
        return COLOR_PRESETS[input];
    }
    if (input.startsWith('#') && input.length === 7) {
        const rgb = hexToRgb(input);
        if (rgb) {
            const secondary = deriveSecondary(rgb);
            return {
                primary: input,
                secondary,
                empty: input,
            };
        }
    }
    return COLOR_PRESETS.pink;
}
function deriveSecondary(rgb) {
    const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const newH = (h + 40) % 360;
    const { r, g, b } = hslToRgb(newH, Math.min(s + 0.05, 1), Math.min(l + 0.08, 1));
    return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
}
function rgbToHsl(r, g, b) {
    const nr = r / 255, ng = g / 255, nb = b / 255;
    const max = Math.max(nr, ng, nb), min = Math.min(nr, ng, nb);
    const l = (max + min) / 2;
    if (max === min)
        return { h: 0, s: 0, l };
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h = 0;
    switch (max) {
        case nr:
            h = ((ng - nb) / d + (ng < nb ? 6 : 0)) / 6;
            break;
        case ng:
            h = ((nb - nr) / d + 2) / 6;
            break;
        case nb:
            h = ((nr - ng) / d + 4) / 6;
            break;
    }
    return { h: h * 360, s, l };
}
function hslToRgb(h, s, l) {
    const hueToRgb = (p, q, t) => {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };
    const hue = h / 360;
    if (s === 0) {
        const v = Math.round(l * 255);
        return { r: v, g: v, b: v };
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return {
        r: Math.round(hueToRgb(p, q, hue + 1 / 3) * 255),
        g: Math.round(hueToRgb(p, q, hue) * 255),
        b: Math.round(hueToRgb(p, q, hue - 1 / 3) * 255),
    };
}
const resolvedColors = computed(() => resolveColorSet(props.color));
const halfHeight = computed(() => props.pipeHeight / 2);
const rootStyle = computed(() => ({
    '--cp-primary': resolvedColors.value.primary,
    '--cp-secondary': resolvedColors.value.secondary,
    '--cp-glow': `${props.glowIntensity * 2}px`,
}));
const perspectiveStyle = computed(() => ({
    perspective: `${props.perspective}px`,
    height: `${props.pipeHeight * 2.5}px`,
}));
const pipeStyle = computed(() => ({
    width: `${props.pipeWidth}px`,
    height: `${props.pipeHeight}px`,
    transformOrigin: `${halfHeight.value}px ${halfHeight.value}px`,
    transform: `translate(-50%, -50%) rotateX(${props.rotateX}deg)`,
}));
const gradientStyle = computed(() => {
    const primary = resolvedColors.value.primary;
    const secondary = resolvedColors.value.secondary;
    const empty = resolvedColors.value.empty;
    if (props.indeterminate) {
        return {
            background: `linear-gradient(90deg,
        ${empty}1a 0%,
        ${empty}1a 35%,
        ${primary}cc 45%,
        ${secondary}99 50%,
        ${primary}cc 55%,
        ${empty}1a 65%,
        ${empty}1a 100%)`,
            backgroundSize: '250% 100%',
        };
    }
    const p = Math.max(0, Math.min(100, props.percent));
    return {
        background: `linear-gradient(90deg,
      ${secondary}99 0%,
      ${primary}cc ${p}%,
      ${empty}1a ${p}%,
      ${empty}1a 100%)`,
    };
});
const topFaceStyle = computed(() => (Object.assign(Object.assign({}, gradientStyle.value), { transform: `rotateX(90deg) translateZ(${halfHeight.value}px)` })));
const bottomFaceStyle = computed(() => (Object.assign(Object.assign({}, gradientStyle.value), { transform: `rotateX(-90deg) translateZ(${halfHeight.value}px)` })));
const frontFaceStyle = computed(() => (Object.assign(Object.assign({}, gradientStyle.value), { transform: `translateZ(${halfHeight.value}px)` })));
const backFaceStyle = computed(() => (Object.assign(Object.assign({}, gradientStyle.value), { transform: `rotateX(-180deg) translateZ(${halfHeight.value}px)` })));
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    percent: 0,
    color: 'pink',
    pipeWidth: 600,
    pipeHeight: 100,
    perspective: 520,
    rotateX: -33.5,
    indeterminate: false,
    showText: true,
    glowIntensity: 5,
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-cubic-progress', { 'indeterminate': __VLS_ctx.indeterminate }]) }, { style: (__VLS_ctx.rootStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "perspective-wrapper" }, { style: (__VLS_ctx.perspectiveStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: "pipe" }, { style: (__VLS_ctx.pipeStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: "face top" }, { style: (__VLS_ctx.topFaceStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: "face bottom" }, { style: (__VLS_ctx.bottomFaceStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: "face front" }, { style: (__VLS_ctx.frontFaceStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: "face back" }, { style: (__VLS_ctx.backFaceStyle) }));
if (__VLS_ctx.showText) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "progress-info" }));
    if (__VLS_ctx.indeterminate) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "progress-label loading-text" }));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "progress-label" }));
        (__VLS_ctx.percent);
    }
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
;
;
;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            rootStyle: rootStyle,
            perspectiveStyle: perspectiveStyle,
            pipeStyle: pipeStyle,
            topFaceStyle: topFaceStyle,
            bottomFaceStyle: bottomFaceStyle,
            frontFaceStyle: frontFaceStyle,
            backFaceStyle: backFaceStyle,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
;
//# sourceMappingURL=cubicProgress.vue.js.map