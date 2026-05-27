import { ref, watch } from 'vue';
import CyberMenuItem from './menu-item.vue';
defineOptions({ name: 'CyberMenu' });
const props = withDefaults(defineProps(), {
    modelValue: '',
    items: () => [],
    direction: 'vertical',
    theme: 'neon',
    effect: 'none',
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
const handleExpand = (value) => {
    if (props.direction === 'horizontal') {
        expandedValues.value = [value];
    }
    else {
        if (!expandedValues.value.includes(value)) {
            expandedValues.value = [...expandedValues.value, value];
        }
    }
    emit('update:expandedValues', [...expandedValues.value]);
};
const handleCollapse = (value) => {
    expandedValues.value = expandedValues.value.filter(v => v !== value);
    emit('update:expandedValues', [...expandedValues.value]);
};
const handleToggleExpand = (value) => {
    const arr = [...expandedValues.value];
    const i = arr.indexOf(value);
    if (i > -1) {
        arr.splice(i, 1);
    }
    else {
        if (props.direction === 'horizontal')
            arr.length = 0;
        arr.push(value);
    }
    expandedValues.value = arr;
    emit('update:expandedValues', [...arr]);
};
watch(() => props.modelValue, v => { activeValue.value = v; });
watch(() => props.items, v => { menuItems.value = [...v]; }, { deep: true, immediate: true });
watch(() => props.expandedValues, v => { expandedValues.value = [...v]; }, { deep: true, immediate: true });
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    modelValue: '',
    items: () => [],
    direction: 'vertical',
    theme: 'neon',
    effect: 'none',
    expandedValues: () => [],
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ([
        'cp-cyber-menu',
        `cp-cyber-menu--${__VLS_ctx.direction}`,
        `cp-cyber-menu--${__VLS_ctx.theme}`,
        {
            [`cp-cyber-menu--${__VLS_ctx.effect}`]: __VLS_ctx.effect !== 'none',
        }
    ]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: "cp-cyber-menu-list" }));
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    ;
    const __VLS_0 = __VLS_asFunctionalComponent(CyberMenuItem, new CyberMenuItem(Object.assign(Object.assign(Object.assign(Object.assign({ 'onSelect': {} }, { 'onToggleExpand': {} }), { 'onExpand': {} }), { 'onCollapse': {} }), { key: (item.value), item: (item), depth: (0), direction: (__VLS_ctx.direction), activeValue: (__VLS_ctx.activeValue), expandedValues: (__VLS_ctx.expandedValues) })));
    const __VLS_1 = __VLS_0(Object.assign(Object.assign(Object.assign(Object.assign({ 'onSelect': {} }, { 'onToggleExpand': {} }), { 'onExpand': {} }), { 'onCollapse': {} }), { key: (item.value), item: (item), depth: (0), direction: (__VLS_ctx.direction), activeValue: (__VLS_ctx.activeValue), expandedValues: (__VLS_ctx.expandedValues) }), ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        onSelect: (__VLS_ctx.handleSelect)
    };
    const __VLS_7 = {
        onToggleExpand: (__VLS_ctx.handleToggleExpand)
    };
    const __VLS_8 = {
        onExpand: (__VLS_ctx.handleExpand)
    };
    const __VLS_9 = {
        onCollapse: (__VLS_ctx.handleCollapse)
    };
    var __VLS_2;
}
if (__VLS_ctx.effect === 'scanline') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-cyber-menu-scanline" }));
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
            menuItems: menuItems,
            handleSelect: handleSelect,
            handleExpand: handleExpand,
            handleCollapse: handleCollapse,
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