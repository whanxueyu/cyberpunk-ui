import { computed } from 'vue';
defineOptions({
    name: 'CyberProgress',
});
const props = withDefaults(defineProps(), {
    percentage: 0,
    theme: 'neon',
    animated: true,
    showPercentage: true,
    percentagePosition: 'outside',
    showStatus: false,
    indeterminate: false,
    direction: 'horizontal',
    height: 24,
    glowIntensity: 5,
});
const displayPercentage = computed(() => {
    return Math.min(100, Math.max(0, props.percentage)).toFixed(0);
});
const statusText = computed(() => {
    if (props.indeterminate)
        return '处理中';
    const pct = Number(displayPercentage.value);
    if (pct < 30)
        return '初始化';
    if (pct < 60)
        return '处理中';
    if (pct < 90)
        return '加载中';
    if (pct < 100)
        return '即将完成';
    return '已完成';
});
const isCustomColor = computed(() => !!props.color);
const rootClasses = computed(() => ({
    [`theme-${props.theme}`]: !isCustomColor.value,
    'is-custom-color': isCustomColor.value,
    'is-animated': props.animated,
    'is-indeterminate': props.indeterminate,
    'is-vertical': props.direction === 'vertical',
    'is-complete': Number(displayPercentage.value) >= 100,
}));
const glowRadius = computed(() => `${props.glowIntensity * 4}px`);
const glowSpread = computed(() => `${props.glowIntensity * 2}px`);
function hexToRgb(hex) {
    const h = hex.replace('#', '');
    if (h.length === 3) {
        return [
            parseInt(h[0] + h[0], 16),
            parseInt(h[1] + h[1], 16),
            parseInt(h[2] + h[2], 16),
        ].join(', ');
    }
    return [
        parseInt(h.substring(0, 2), 16),
        parseInt(h.substring(2, 4), 16),
        parseInt(h.substring(4, 6), 16),
    ].join(', ');
}
const customColorVars = computed(() => {
    if (!props.color)
        return {};
    return {
        '--progress-primary': props.color,
        '--progress-primary-rgb': hexToRgb(props.color),
    };
});
const rootVars = computed(() => {
    return Object.assign(Object.assign({}, customColorVars.value), { '--pipe-height': `${props.height}px`, '--glow-radius': glowRadius.value, '--glow-spread': glowSpread.value });
});
const fillSize = computed(() => {
    if (props.indeterminate)
        return undefined;
    const pct = Number(displayPercentage.value);
    return props.direction === 'vertical'
        ? { height: `${pct}%` }
        : { width: `${pct}%` };
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    percentage: 0,
    theme: 'neon',
    animated: true,
    showPercentage: true,
    percentagePosition: 'outside',
    showStatus: false,
    indeterminate: false,
    direction: 'horizontal',
    height: 24,
    glowIntensity: 5,
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
;
;
;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ class: "cyber-progress" }, { class: (__VLS_ctx.rootClasses) }), { style: (__VLS_ctx.rootVars) }), { role: "progressbar", 'aria-valuenow': (__VLS_ctx.indeterminate ? undefined : Number(__VLS_ctx.displayPercentage)), 'aria-valuemin': (0), 'aria-valuemax': (100), 'aria-label': (__VLS_ctx.indeterminate ? '加载中' : `进度 ${__VLS_ctx.displayPercentage}%`) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pipe-container" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pipe-track" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pipe-wall" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pipe-lumen" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "track-grid" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "progress-fill" }, { style: (__VLS_ctx.fillSize) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "fill-highlight" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "fill-scanline" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "fill-particles" }));
for (const [i] of __VLS_getVForSourceType((3))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ key: (i) }, { class: "particle" }));
}
if (__VLS_ctx.showPercentage && __VLS_ctx.percentagePosition === 'inside') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "percentage-inside" }));
    (__VLS_ctx.displayPercentage);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tick-marks" }));
for (const [i] of __VLS_getVForSourceType((10))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign(Object.assign({ key: (i) }, { class: "tick" }), { class: ({ active: i * 10 <= __VLS_ctx.percentage }) }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pipe-port port-start" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pipe-port port-end" }));
if (__VLS_ctx.showPercentage && __VLS_ctx.percentagePosition === 'outside') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "percentage-outside" }));
    (__VLS_ctx.displayPercentage);
}
if (__VLS_ctx.showStatus) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "status-indicator" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "indicator-dot" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "status-text" }));
    (__VLS_ctx.statusText);
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
            displayPercentage: displayPercentage,
            statusText: statusText,
            rootClasses: rootClasses,
            rootVars: rootVars,
            fillSize: fillSize,
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
//# sourceMappingURL=progress.vue.js.map