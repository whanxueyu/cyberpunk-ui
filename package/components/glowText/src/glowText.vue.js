import { onMounted } from 'vue';
defineOptions({
    name: 'CyberGlowText',
});
const props = defineProps({
    color: {
        type: String,
        default: '#e91e84',
    },
});
onMounted(() => {
    document.documentElement.style.setProperty('--child-color', props.color);
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "glow-text" }));
var __VLS_0 = {};
;
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        color: {
            type: String,
            default: '#e91e84',
        },
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        color: {
            type: String,
            default: '#e91e84',
        },
    },
});
export default {};
;
//# sourceMappingURL=glowText.vue.js.map