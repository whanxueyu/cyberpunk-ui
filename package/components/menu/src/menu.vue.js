import { ref, watch, computed } from 'vue';
import CyberMenuItem from './menu-item.vue';
defineOptions({ name: 'CyberMenu' });
const props = withDefaults(defineProps(), {
    modelValue: '',
    items: () => [],
    direction: 'vertical',
    theme: 'neon',
    expandedValues: () => [],
});
const emit = defineEmits();
const activeValue = ref(props.modelValue);
const expandedValues = ref([...props.expandedValues]);
const menuItems = ref([...props.items]);
const handleSelect = (item) => {
    activeValue.value = item.value;
    emit('update:modelValue', item.value);
    emit('change', item.value);
    emit('select', item);
};
const handleToggleExpand = (value) => {
    const arr = [...expandedValues.value];
    const i = arr.indexOf(value);
    if (i > -1)
        arr.splice(i, 1);
    else {
        if (props.direction === 'horizontal')
            arr.length = 0;
        arr.push(value);
    }
    expandedValues.value = arr;
    emit('update:expandedValues', arr);
};
watch(() => props.modelValue, v => activeValue.value = v, { immediate: true });
watch(() => props.items, v => menuItems.value = [...v], { deep: true, immediate: true });
watch(() => props.expandedValues, v => expandedValues.value = [...v], { deep: true, immediate: true });
const themeStyles = computed(() => {
    const t = {
        neon: { primary: '#00e6f6', bg: 'rgba(8,16,28,0.95)', hover: 'rgba(0,230,246,0.15)', active: 'rgba(0,230,246,0.25)', text: '#fff', muted: '#aaa' },
        terminal: { primary: '#47f26b', bg: '#0a140a', hover: 'rgba(71,242,107,0.15)', active: 'rgba(71,242,107,0.25)', text: '#fff', muted: '#aaa' },
        matrix: { primary: '#00ff41', bg: '#000000', hover: 'rgba(0,255,65,0.15)', active: 'rgba(0,255,65,0.25)', text: '#00ff41', muted: '#00aa2a' },
        hologram: { primary: '#ff00ff', bg: 'rgba(10,0,20,0.9)', hover: 'rgba(255,0,255,0.15)', active: 'rgba(255,0,255,0.25)', text: '#ffffff', muted: '#cccccc' }
    };
    return t[props.theme];
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    modelValue: '',
    items: () => [],
    direction: 'vertical',
    theme: 'neon',
    expandedValues: () => [],
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
__VLS_ctx.themeStyles.primary;
__VLS_ctx.themeStyles.bg;
__VLS_ctx.themeStyles.hover;
__VLS_ctx.themeStyles.active;
__VLS_ctx.themeStyles.text;
__VLS_ctx.themeStyles.muted;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ([
        'cp-cyber-menu',
        `direction-${__VLS_ctx.direction}`,
        `theme-${__VLS_ctx.theme}`
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
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CyberMenuItem: CyberMenuItem,
            activeValue: activeValue,
            expandedValues: expandedValues,
            menuItems: menuItems,
            handleSelect: handleSelect,
            handleToggleExpand: handleToggleExpand,
            themeStyles: themeStyles,
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