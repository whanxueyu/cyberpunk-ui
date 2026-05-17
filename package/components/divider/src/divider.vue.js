import { computed } from 'vue';
defineOptions({
    name: 'CyberDivider',
});
const props = withDefaults(defineProps(), {
    direction: 'horizontal',
    type: 'primary',
    content: '',
    showLeftLine: true,
    showRightLine: true,
    size: '',
});
const dividerStyle = computed(() => {
    const style = {};
    if (props.size) {
        if (props.direction === 'horizontal') {
            style.width = props.size;
        }
        else {
            style.height = props.size;
        }
    }
    return style;
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    direction: 'horizontal',
    type: 'primary',
    content: '',
    showLeftLine: true,
    showRightLine: true,
    size: '',
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "cp-divider" }, { class: ([`cp-divider--${__VLS_ctx.direction}`, `cp-divider--${__VLS_ctx.type}`]) }), { style: (__VLS_ctx.dividerStyle) }));
if (__VLS_ctx.showLeftLine) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-divider__line cp-divider__line--left" }));
}
if (__VLS_ctx.$slots.default || __VLS_ctx.content) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-divider__content" }));
    var __VLS_0 = {};
    (__VLS_ctx.content);
}
if (__VLS_ctx.showRightLine) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-divider__line cp-divider__line--right" }));
}
;
;
;
;
;
;
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            dividerStyle: dividerStyle,
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
//# sourceMappingURL=divider.vue.js.map