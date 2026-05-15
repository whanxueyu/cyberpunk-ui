import { computed } from 'vue';
defineOptions({
    name: 'CyberProgress',
});
const props = withDefaults(defineProps(), {
    percentage: 0,
    theme: 'neon',
    animated: true,
    showPercentage: true,
    percentagePosition: 'outside'
});
const displayPercentage = computed(() => {
    return Math.min(100, Math.max(0, props.percentage)).toFixed(0);
});
const statusText = computed(() => {
    const pct = Number(displayPercentage.value);
    if (pct < 30)
        return 'INITIALIZING';
    if (pct < 60)
        return 'PROCESSING';
    if (pct < 90)
        return 'LOADING';
    if (pct < 100)
        return 'ALMOST';
    return 'COMPLETE';
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    percentage: 0,
    theme: 'neon',
    animated: true,
    showPercentage: true,
    percentagePosition: 'outside'
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cyber-progress" }, { class: ([`theme-${__VLS_ctx.theme}`, { animated: __VLS_ctx.animated }]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "progress-track" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "track-grid" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "progress-bar" }, { style: ({ width: __VLS_ctx.percentage + '%' }) }));
if (__VLS_ctx.showPercentage && __VLS_ctx.percentagePosition === 'inside') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "percentage-inside" }));
    (__VLS_ctx.displayPercentage);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tick-marks" }));
for (const [i] of __VLS_getVForSourceType((10))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign(Object.assign({ key: (i) }, { class: "tick" }), { class: ({ active: i * 10 <= __VLS_ctx.percentage }) }));
}
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
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            displayPercentage: displayPercentage,
            statusText: statusText,
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