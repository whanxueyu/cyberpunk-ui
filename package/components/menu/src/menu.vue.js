import { ref, watch } from 'vue';
import CyberMenuItem from './menu-item.vue';
defineOptions({
    name: 'CyberMenu',
});
const props = withDefaults(defineProps(), {
    modelValue: '',
    items: () => [],
    direction: 'vertical',
    theme: 'neon',
    effect: 'none',
});
const emit = defineEmits();
const activeValue = ref(props.modelValue);
const expandedValues = ref([]);
const isGlitching = ref(false);
const menuItems = ref(props.items);
const handleSelect = (item) => {
    if (item.disabled)
        return;
    activeValue.value = item.value;
    emit('update:modelValue', item.value);
    emit('change', item.value);
    emit('select', item);
    if (props.effect === 'glitch') {
        triggerGlitchEffect();
    }
};
const handleToggleExpand = (value) => {
    const index = expandedValues.value.indexOf(value);
    if (index > -1) {
        expandedValues.value.splice(index, 1);
    }
    else {
        expandedValues.value.push(value);
    }
};
const triggerGlitchEffect = () => {
    isGlitching.value = true;
    setTimeout(() => {
        isGlitching.value = false;
    }, 300);
};
watch(() => props.modelValue, (newVal) => {
    activeValue.value = newVal;
});
watch(() => props.items, (newItems) => {
    menuItems.value = newItems;
}, { deep: true });
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    modelValue: '',
    items: () => [],
    direction: 'vertical',
    theme: 'neon',
    effect: 'none',
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ([
        'cp-cyber-menu',
        `direction-${__VLS_ctx.direction}`,
        `theme-${__VLS_ctx.theme}`,
        `effect-${__VLS_ctx.effect}`,
        {
            'is-horizontal': __VLS_ctx.direction === 'horizontal',
            'is-vertical': __VLS_ctx.direction === 'vertical',
            'is-glitching': __VLS_ctx.isGlitching,
        },
    ]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: "menu-list" }));
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    ;
    const __VLS_0 = __VLS_asFunctionalComponent(CyberMenuItem, new CyberMenuItem(Object.assign(Object.assign({ 'onSelect': {} }, { 'onToggleExpand': {} }), { key: (item.value), item: (item), depth: (0), direction: (__VLS_ctx.direction), activeValue: (__VLS_ctx.activeValue), expandedValues: (__VLS_ctx.expandedValues) })));
    const __VLS_1 = __VLS_0(Object.assign(Object.assign({ 'onSelect': {} }, { 'onToggleExpand': {} }), { key: (item.value), item: (item), depth: (0), direction: (__VLS_ctx.direction), activeValue: (__VLS_ctx.activeValue), expandedValues: (__VLS_ctx.expandedValues) }), ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        onSelect: (__VLS_ctx.handleSelect)
    };
    const __VLS_7 = {
        onToggleExpand: (__VLS_ctx.handleToggleExpand)
    };
    var __VLS_2;
}
if (__VLS_ctx.effect === 'glitch') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "menu-glitch-overlay" }));
}
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CyberMenuItem: CyberMenuItem,
            activeValue: activeValue,
            expandedValues: expandedValues,
            isGlitching: isGlitching,
            menuItems: menuItems,
            handleSelect: handleSelect,
            handleToggleExpand: handleToggleExpand,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
;
//# sourceMappingURL=menu.vue.js.map