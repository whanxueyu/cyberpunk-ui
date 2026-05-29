import { computed } from 'vue';
defineOptions({
    name: 'CyberGlowText',
});
const props = withDefaults(defineProps(), {
    color: '#e91e84',
    glowing: false,
    effect: 'neon',
    size: 'default',
    animationSpeed: 'normal',
    tag: 'span',
    disabled: false,
});
const glowStyle = computed(() => {
    return {
        '--glow-color': props.color,
    };
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    color: '#e91e84',
    glowing: false,
    effect: 'neon',
    size: 'default',
    animationSpeed: 'normal',
    tag: 'span',
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
const __VLS_0 = ((__VLS_ctx.tag));
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ class: ([
        'cp-glow-text',
        `cp-glow-text--${__VLS_ctx.size}`,
        `cp-glow-text--${__VLS_ctx.effect}`,
        `cp-glow-text--${__VLS_ctx.animationSpeed}`,
        {
            'cp-glow-text--glowing': __VLS_ctx.glowing,
            'cp-glow-text--disabled': __VLS_ctx.disabled,
        },
    ]) }, { style: (__VLS_ctx.glowStyle) })));
const __VLS_2 = __VLS_1(Object.assign({ class: ([
        'cp-glow-text',
        `cp-glow-text--${__VLS_ctx.size}`,
        `cp-glow-text--${__VLS_ctx.effect}`,
        `cp-glow-text--${__VLS_ctx.animationSpeed}`,
        {
            'cp-glow-text--glowing': __VLS_ctx.glowing,
            'cp-glow-text--disabled': __VLS_ctx.disabled,
        },
    ]) }, { style: (__VLS_ctx.glowStyle) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {};
var __VLS_3;
var __VLS_6 = __VLS_5;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            glowStyle: glowStyle,
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
//# sourceMappingURL=glowText.vue.js.map