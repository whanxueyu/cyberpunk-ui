import { computed } from 'vue';
defineOptions({
    name: 'CyberText',
});
const props = withDefaults(defineProps(), {
    text: '',
    shadowColor: '#ff00b3',
    glitchColor: '#00c3ff',
    lineColor: 'transparent',
    effect: 'glitch',
    glowing: false,
    animationSpeed: 'normal',
    lineVisible: true,
    tag: 'div',
    disabled: false,
});
const displayText = computed(() => props.text || '');
const textStyle = computed(() => {
    return {
        '--shadow-color': props.shadowColor,
        '--glitch-color': props.glitchColor,
        '--line-color': props.lineColor,
    };
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    text: '',
    shadowColor: '#ff00b3',
    glitchColor: '#00c3ff',
    lineColor: 'transparent',
    effect: 'glitch',
    glowing: false,
    animationSpeed: 'normal',
    lineVisible: true,
    tag: 'div',
    disabled: false,
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
const __VLS_0 = ((__VLS_ctx.tag));
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign(Object.assign({ class: ([
        'cp-text',
        `cp-text--${__VLS_ctx.effect}`,
        `cp-text--${__VLS_ctx.animationSpeed}`,
        {
            'cp-text--glowing': __VLS_ctx.glowing,
            'cp-text--disabled': __VLS_ctx.disabled,
            'cp-text--line-hidden': !__VLS_ctx.lineVisible,
        },
    ]) }, { dataWord: (__VLS_ctx.displayText) }), { style: (__VLS_ctx.textStyle) })));
const __VLS_2 = __VLS_1(Object.assign(Object.assign({ class: ([
        'cp-text',
        `cp-text--${__VLS_ctx.effect}`,
        `cp-text--${__VLS_ctx.animationSpeed}`,
        {
            'cp-text--glowing': __VLS_ctx.glowing,
            'cp-text--disabled': __VLS_ctx.disabled,
            'cp-text--line-hidden': !__VLS_ctx.lineVisible,
        },
    ]) }, { dataWord: (__VLS_ctx.displayText) }), { style: (__VLS_ctx.textStyle) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {};
(__VLS_ctx.text);
if (__VLS_ctx.lineVisible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-text-line" }));
}
var __VLS_3;
;
var __VLS_6 = __VLS_5;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            displayText: displayText,
            textStyle: textStyle,
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
//# sourceMappingURL=text.vue.js.map