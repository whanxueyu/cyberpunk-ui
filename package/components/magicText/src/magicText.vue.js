import { computed, useSlots } from 'vue';
defineOptions({
    name: 'CyberMagicText',
});
const slots = useSlots();
const GRADIENT_PRESETS = {
    cyberpunk: 'linear-gradient(var(--mt-gradient-angle, 45deg), #ff269b, #2ab5f5, #ffbf00)',
    aurora: 'linear-gradient(var(--mt-gradient-angle, 45deg), #00ff87, #00d4ff, #7b2fbe)',
    fire: 'linear-gradient(var(--mt-gradient-angle, 45deg), #ff004c, #ff6b00, #ffe600)',
    ocean: 'linear-gradient(var(--mt-gradient-angle, 45deg), #001f5b, #00a8cc, #7efff5)',
    sunset: 'linear-gradient(var(--mt-gradient-angle, 45deg), #7b2fbe, #ff269b, #ffbf00)',
    neon: 'linear-gradient(var(--mt-gradient-angle, 45deg), #ff00ff, #00ffff, #ff00ff)',
};
const props = withDefaults(defineProps(), {
    speed: 'normal',
    gradient: 'cyberpunk',
    gradientAngle: '45deg',
    glowColor: '#fff',
    glowSize: '25%',
    strokeColor: '#2b2b50',
    strokeWidth: '1px',
    blendMode: 'color-dodge',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    tag: 'span',
    disabled: false,
    direction: 'normal',
});
const content = computed(() => {
    if (!slots.default)
        return '';
    const nodes = slots.default();
    if (!nodes || nodes.length === 0)
        return '';
    const extractText = (node) => {
        if (typeof node === 'string')
            return node;
        if (typeof node === 'number')
            return String(node);
        if (node.children) {
            if (typeof node.children === 'string')
                return node.children;
            if (Array.isArray(node.children))
                return node.children.map(extractText).join('');
        }
        return '';
    };
    return nodes.map(extractText).join('');
});
const gradientValue = computed(() => {
    if (props.gradientColors && props.gradientColors.length > 0) {
        const colors = props.gradientColors.join(', ');
        return `linear-gradient(${props.gradientAngle}, ${colors})`;
    }
    return GRADIENT_PRESETS[props.gradient];
});
const rootStyle = computed(() => {
    const style = {
        '--mt-gradient': gradientValue.value,
        '--mt-gradient-angle': props.gradientAngle,
        '--mt-glow-color': props.glowColor,
        '--mt-glow-size': props.glowSize,
        '--mt-stroke-color': props.strokeColor,
        '--mt-stroke-width': props.strokeWidth,
        '--mt-blend-mode': props.blendMode,
        '--mt-font-weight': String(props.fontWeight),
        '--mt-font-family': props.fontFamily,
    };
    if (props.duration !== undefined && props.duration > 0) {
        style['--mt-duration'] = `${props.duration}s`;
    }
    return style;
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    speed: 'normal',
    gradient: 'cyberpunk',
    gradientAngle: '45deg',
    glowColor: '#fff',
    glowSize: '25%',
    strokeColor: '#2b2b50',
    strokeWidth: '1px',
    blendMode: 'color-dodge',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    tag: 'span',
    disabled: false,
    direction: 'normal',
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = ((__VLS_ctx.tag));
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign(Object.assign({ class: ([
        'cp-magic-text',
        `cp-magic-text--${__VLS_ctx.speed}`,
        {
            'cp-magic-text--disabled': __VLS_ctx.disabled,
        },
    ]) }, { dataText: (__VLS_ctx.content) }), { style: (__VLS_ctx.rootStyle) })));
const __VLS_2 = __VLS_1(Object.assign(Object.assign({ class: ([
        'cp-magic-text',
        `cp-magic-text--${__VLS_ctx.speed}`,
        {
            'cp-magic-text--disabled': __VLS_ctx.disabled,
        },
    ]) }, { dataText: (__VLS_ctx.content) }), { style: (__VLS_ctx.rootStyle) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {};
var __VLS_3;
var __VLS_6 = __VLS_5;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            content: content,
            rootStyle: rootStyle,
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
//# sourceMappingURL=magicText.vue.js.map