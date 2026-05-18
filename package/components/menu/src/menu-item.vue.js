import { computed, ref } from 'vue';
defineOptions({ name: 'CyberMenuItem' });
const props = defineProps();
const emit = defineEmits();
const isHovered = ref(false);
const hasChildren = computed(() => {
    return props.item.children && props.item.children.length > 0;
});
const isActive = computed(() => props.activeValue === props.item.value);
const isExpanded = computed(() => props.expandedValues.includes(props.item.value));
const handleClick = (e) => {
    if (props.item.disabled)
        return;
    e.stopPropagation();
    if (hasChildren.value) {
        emit('toggle-expand', props.item.value);
    }
    else {
        emit('select', props.item);
    }
};
const handleMouseEnter = () => {
    if (props.item.disabled)
        return;
    isHovered.value = true;
    if (props.direction === 'horizontal' && hasChildren.value) {
        emit('toggle-expand', props.item.value);
    }
};
const handleMouseLeave = () => {
    isHovered.value = false;
    if (props.direction === 'horizontal' && hasChildren.value) {
        setTimeout(() => {
            if (!isHovered.value)
                emit('toggle-expand', props.item.value);
        }, 200);
    }
};
debugger;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ([
        'menu-item',
        `depth-${__VLS_ctx.depth}`,
        {
            'is-active': __VLS_ctx.isActive,
            'is-disabled': __VLS_ctx.item.disabled,
            'has-children': __VLS_ctx.hasChildren,
            'is-expanded': __VLS_ctx.isExpanded,
            'is-horizontal': __VLS_ctx.direction === 'horizontal',
            'is-vertical': __VLS_ctx.direction === 'vertical'
        }
    ]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign({ onClick: (__VLS_ctx.handleClick) }, { onMouseenter: (__VLS_ctx.handleMouseEnter) }), { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { class: "menu-item-content" }), { tabindex: (__VLS_ctx.item.disabled ? -1 : 0), 'aria-disabled': (__VLS_ctx.item.disabled), 'aria-expanded': (__VLS_ctx.hasChildren ? __VLS_ctx.isExpanded : undefined) }));
if (__VLS_ctx.item.icon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "menu-icon" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)(Object.assign({ class: (__VLS_ctx.item.icon) }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "menu-label" }));
(__VLS_ctx.item.label);
if (__VLS_ctx.hasChildren) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "menu-arrow" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)(Object.assign({ class: "arrow-icon" }));
}
const __VLS_0 = {}.transition;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "submenu-fade",
}));
const __VLS_2 = __VLS_1({
    name: "submenu-fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.hasChildren && __VLS_ctx.isExpanded) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: "submenu-list" }, { class: (`submenu-depth-${__VLS_ctx.depth + 1}`) }));
    for (const [child] of __VLS_getVForSourceType((__VLS_ctx.item.children))) {
        const __VLS_4 = {}.CyberMenuItem;
        ;
        const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(Object.assign(Object.assign({ 'onSelect': {} }, { 'onToggleExpand': {} }), { key: (child.value), item: (child), depth: (__VLS_ctx.depth + 1), direction: (__VLS_ctx.direction), activeValue: (__VLS_ctx.activeValue), expandedValues: (__VLS_ctx.expandedValues) })));
        const __VLS_6 = __VLS_5(Object.assign(Object.assign({ 'onSelect': {} }, { 'onToggleExpand': {} }), { key: (child.value), item: (child), depth: (__VLS_ctx.depth + 1), direction: (__VLS_ctx.direction), activeValue: (__VLS_ctx.activeValue), expandedValues: (__VLS_ctx.expandedValues) }), ...__VLS_functionalComponentArgsRest(__VLS_5));
        let __VLS_8;
        let __VLS_9;
        let __VLS_10;
        const __VLS_11 = {
            onSelect: (...[$event]) => {
                if (!(__VLS_ctx.hasChildren && __VLS_ctx.isExpanded))
                    return;
                __VLS_ctx.$emit('select', $event);
            }
        };
        const __VLS_12 = {
            onToggleExpand: (...[$event]) => {
                if (!(__VLS_ctx.hasChildren && __VLS_ctx.isExpanded))
                    return;
                __VLS_ctx.$emit('toggle-expand', $event);
            }
        };
        var __VLS_7;
    }
}
var __VLS_3;
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
            hasChildren: hasChildren,
            isActive: isActive,
            isExpanded: isExpanded,
            handleClick: handleClick,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
;
//# sourceMappingURL=menu-item.vue.js.map