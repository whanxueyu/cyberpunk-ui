import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import CascaderOptionTree from './option-tree.vue';
defineOptions({
    name: 'CyberCascader',
});
const props = withDefaults(defineProps(), {
    modelValue: '',
    options: () => [],
    placeholder: '请选择',
    noDataText: '暂无数据',
    disabled: false,
    clearable: true,
    multiple: false,
    showAllLevels: true,
    filterable: false,
    size: 'default',
    theme: 'neon',
    labelKey: 'label',
    valueKey: 'value',
    childrenKey: 'children',
});
const emit = defineEmits();
const cascaderRef = ref();
const isOpen = ref(false);
const currentValue = ref('');
const selectedValues = ref([]);
const hasValue = computed(() => {
    if (props.multiple) {
        return Array.isArray(props.modelValue) && props.modelValue.length > 0;
    }
    return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined;
});
const getDisplayValue = (value) => {
    if (!props.showAllLevels) {
        const option = findOptionByValue(props.options, value);
        return option ? getOptionLabel(option) : String(value);
    }
    const path = findOptionPath(props.options, value);
    return path.map(opt => getOptionLabel(opt)).join(' / ');
};
const findOptionByValue = (options, value) => {
    for (const option of options) {
        if (getOptionValue(option) === value) {
            return option;
        }
        const children = getChildren(option);
        if (children.length) {
            const found = findOptionByValue(children, value);
            if (found)
                return found;
        }
    }
    return null;
};
const findOptionPath = (options, value) => {
    for (const option of options) {
        if (getOptionValue(option) === value) {
            return [option];
        }
        const children = getChildren(option);
        if (children.length) {
            const path = findOptionPath(children, value);
            if (path.length) {
                return [option, ...path];
            }
        }
    }
    return [];
};
const getOptionLabel = (option) => {
    var _a, _b, _c, _d;
    return String((_d = (_c = (_b = (_a = option[props.labelKey]) !== null && _a !== void 0 ? _a : option.label) !== null && _b !== void 0 ? _b : option[props.valueKey]) !== null && _c !== void 0 ? _c : option.value) !== null && _d !== void 0 ? _d : '');
};
const getOptionValue = (option) => {
    var _a, _b;
    return (_b = (_a = option[props.valueKey]) !== null && _a !== void 0 ? _a : option.value) !== null && _b !== void 0 ? _b : '';
};
const getChildren = (option) => {
    var _a, _b;
    return (_b = (_a = option[props.childrenKey]) !== null && _a !== void 0 ? _a : option.children) !== null && _b !== void 0 ? _b : [];
};
const setOpen = (visible) => {
    if (props.disabled || isOpen.value === visible)
        return;
    isOpen.value = visible;
    emit('visible-change', visible);
};
const toggleDropdown = () => {
    setOpen(!isOpen.value);
};
const handleOptionSelect = ({ value }) => {
    if (props.disabled)
        return;
    if (props.multiple) {
        const index = selectedValues.value.indexOf(value);
        if (index > -1) {
            selectedValues.value.splice(index, 1);
        }
        else {
            selectedValues.value.push(value);
        }
        emit('update:modelValue', [...selectedValues.value]);
        emit('change', [...selectedValues.value]);
    }
    else {
        currentValue.value = value;
        emit('update:modelValue', value);
        emit('change', value);
        setOpen(false);
    }
};
const removeValue = (value) => {
    if (!props.multiple)
        return;
    selectedValues.value = selectedValues.value.filter(v => v !== value);
    emit('update:modelValue', [...selectedValues.value]);
    emit('change', [...selectedValues.value]);
};
const clearSelection = () => {
    if (props.multiple) {
        selectedValues.value = [];
        emit('update:modelValue', []);
    }
    else {
        currentValue.value = '';
        emit('update:modelValue', '');
    }
    emit('change', props.multiple ? [] : '');
    emit('clear');
};
const handleFocus = (event) => {
    if (props.disabled)
        return;
    emit('focus', event);
};
const handleBlur = (event) => {
    emit('blur', event);
};
const handleKeydown = (event) => {
    if (props.disabled)
        return;
    if (event.key === 'Enter' || event.key === ' ') {
        if (!isOpen.value) {
            event.preventDefault();
            setOpen(true);
        }
    }
    if (event.key === 'Escape') {
        setOpen(false);
    }
};
const handleClickOutside = (event) => {
    var _a;
    if (!((_a = cascaderRef.value) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
        setOpen(false);
    }
};
const dropdownStyle = computed(() => {
    var _a;
    return {
        width: `${((_a = cascaderRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 260}px`,
    };
});
watch(() => props.modelValue, (newVal) => {
    if (props.multiple) {
        selectedValues.value = Array.isArray(newVal) ? [...newVal] : [];
    }
    else {
        currentValue.value = newVal;
    }
}, { immediate: true });
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    modelValue: '',
    options: () => [],
    placeholder: '请选择',
    noDataText: '暂无数据',
    disabled: false,
    clearable: true,
    multiple: false,
    showAllLevels: true,
    filterable: false,
    size: 'default',
    theme: 'neon',
    labelKey: 'label',
    valueKey: 'value',
    childrenKey: 'children',
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ ref: "cascaderRef" }, { class: "cp-cyber-cascader" }), { class: ([
        `theme-${__VLS_ctx.theme}`,
        `size-${__VLS_ctx.size}`,
        {
            'is-open': __VLS_ctx.isOpen,
            'is-disabled': __VLS_ctx.disabled,
            'is-multiple': __VLS_ctx.multiple,
        },
    ]) }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onClick: (__VLS_ctx.toggleDropdown) }, { onFocus: (__VLS_ctx.handleFocus) }), { onBlur: (__VLS_ctx.handleBlur) }), { onKeydown: (__VLS_ctx.handleKeydown) }), { class: "cascader-control" }), { tabindex: "0", role: "combobox", 'aria-expanded': (__VLS_ctx.isOpen), 'aria-disabled': (__VLS_ctx.disabled) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cascader-value" }));
if (__VLS_ctx.multiple && __VLS_ctx.selectedValues.length) {
    for (const [value, index] of __VLS_getVForSourceType((__VLS_ctx.selectedValues))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ key: (index) }, { class: "cascader-tag" }));
        (__VLS_ctx.getDisplayValue(value));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                if (!(__VLS_ctx.multiple && __VLS_ctx.selectedValues.length))
                    return;
                __VLS_ctx.removeValue(value);
            } }, { class: "tag-close" }), { type: "button", 'aria-label': (`移除 ${__VLS_ctx.getDisplayValue(value)}`) }));
    }
}
else if (!__VLS_ctx.multiple && __VLS_ctx.currentValue) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "cascader-single" }));
    (__VLS_ctx.getDisplayValue(__VLS_ctx.currentValue));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "cascader-placeholder" }));
    (__VLS_ctx.placeholder);
}
if (__VLS_ctx.clearable && __VLS_ctx.hasValue && !__VLS_ctx.disabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (__VLS_ctx.clearSelection) }, { class: "clear-button" }), { type: "button", 'aria-label': "清空" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "cascader-arrow" }));
const __VLS_0 = {}.transition;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "cascader-dropdown",
}));
const __VLS_2 = __VLS_1({
    name: "cascader-dropdown",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.isOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cascader-dropdown" }, { style: (__VLS_ctx.dropdownStyle) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cascader-options" }));
    ;
    const __VLS_4 = __VLS_asFunctionalComponent(CascaderOptionTree, new CascaderOptionTree(Object.assign({ 'onSelect': {} }, { options: (props.options), selectedValues: (__VLS_ctx.multiple ? __VLS_ctx.selectedValues : [__VLS_ctx.currentValue]), multiple: (__VLS_ctx.multiple), labelKey: (__VLS_ctx.labelKey), valueKey: (__VLS_ctx.valueKey), childrenKey: (__VLS_ctx.childrenKey) })));
    const __VLS_5 = __VLS_4(Object.assign({ 'onSelect': {} }, { options: (props.options), selectedValues: (__VLS_ctx.multiple ? __VLS_ctx.selectedValues : [__VLS_ctx.currentValue]), multiple: (__VLS_ctx.multiple), labelKey: (__VLS_ctx.labelKey), valueKey: (__VLS_ctx.valueKey), childrenKey: (__VLS_ctx.childrenKey) }), ...__VLS_functionalComponentArgsRest(__VLS_4));
    let __VLS_7;
    let __VLS_8;
    let __VLS_9;
    const __VLS_10 = {
        onSelect: (__VLS_ctx.handleOptionSelect)
    };
    var __VLS_6;
}
var __VLS_3;
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
            CascaderOptionTree: CascaderOptionTree,
            cascaderRef: cascaderRef,
            isOpen: isOpen,
            currentValue: currentValue,
            selectedValues: selectedValues,
            hasValue: hasValue,
            getDisplayValue: getDisplayValue,
            toggleDropdown: toggleDropdown,
            handleOptionSelect: handleOptionSelect,
            removeValue: removeValue,
            clearSelection: clearSelection,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
            handleKeydown: handleKeydown,
            dropdownStyle: dropdownStyle,
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
//# sourceMappingURL=cascader.vue.js.map