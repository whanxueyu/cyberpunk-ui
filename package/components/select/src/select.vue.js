import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
defineOptions({
    name: 'CyberSelect',
});
const props = withDefaults(defineProps(), {
    modelValue: '',
    options: () => [],
    placeholder: '请选择',
    searchPlaceholder: '搜索选项',
    noDataText: '暂无数据',
    disabled: false,
    clearable: true,
    filterable: false,
    multiple: false,
    size: 'default',
    theme: 'neon',
    labelKey: 'label',
    valueKey: 'value',
});
const emit = defineEmits();
const selectRef = ref();
const searchInputRef = ref();
const isOpen = ref(false);
const searchQuery = ref('');
const normalizedGroups = computed(() => {
    const groups = [];
    const normalOptions = [];
    props.options.forEach((item, index) => {
        if (Array.isArray(item.options)) {
            groups.push({
                key: `group-${index}`,
                label: getOptionLabel(item),
                options: item.options,
            });
        }
        else {
            normalOptions.push(item);
        }
    });
    if (normalOptions.length) {
        groups.unshift({
            key: 'default',
            label: '',
            options: normalOptions,
        });
    }
    return groups;
});
const flatOptions = computed(() => {
    return normalizedGroups.value.flatMap(group => group.options);
});
const filteredGroups = computed(() => {
    const keyword = searchQuery.value.trim().toLowerCase();
    if (!keyword) {
        return normalizedGroups.value;
    }
    return normalizedGroups.value
        .map(group => (Object.assign(Object.assign({}, group), { options: group.options.filter(option => {
            return getOptionLabel(option).toLowerCase().includes(keyword);
        }) })))
        .filter(group => group.options.length);
});
const selectedOptions = computed(() => {
    var _a;
    const values = props.multiple
        ? Array.isArray(props.modelValue) ? props.modelValue : []
        : Array.isArray(props.modelValue) ? [] : [(_a = props.modelValue) !== null && _a !== void 0 ? _a : null];
    return flatOptions.value.filter(option => {
        return values.some(value => isSameValue(value, getOptionValue(option)));
    });
});
const hasValue = computed(() => {
    if (props.multiple) {
        return Array.isArray(props.modelValue) && props.modelValue.length > 0;
    }
    return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined;
});
const getOptionLabel = (option) => {
    var _a, _b, _c, _d;
    const label = (_d = (_c = (_b = (_a = option[props.labelKey]) !== null && _a !== void 0 ? _a : option.label) !== null && _b !== void 0 ? _b : option[props.valueKey]) !== null && _c !== void 0 ? _c : option.value) !== null && _d !== void 0 ? _d : '';
    return String(label);
};
const getOptionValue = (option) => {
    var _a;
    const value = (_a = option[props.valueKey]) !== null && _a !== void 0 ? _a : option.value;
    return value !== null && value !== void 0 ? value : null;
};
const isSameValue = (left, right) => {
    return left === right;
};
const isSelected = (option) => {
    const value = getOptionValue(option);
    if (props.multiple) {
        const values = Array.isArray(props.modelValue) ? props.modelValue : [];
        return values.some(item => isSameValue(item, value));
    }
    return isSameValue(props.modelValue, value);
};
const setOpen = (visible) => {
    if (props.disabled || isOpen.value === visible)
        return;
    isOpen.value = visible;
    emit('visible-change', visible);
    if (visible && props.filterable) {
        nextTick(() => { var _a; return (_a = searchInputRef.value) === null || _a === void 0 ? void 0 : _a.focus(); });
    }
};
const toggleDropdown = () => {
    setOpen(!isOpen.value);
};
const selectOption = (option) => {
    if (props.disabled || option.disabled)
        return;
    const value = getOptionValue(option);
    if (props.multiple) {
        const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
        const valueIndex = currentValue.findIndex(item => isSameValue(item, value));
        if (valueIndex > -1) {
            currentValue.splice(valueIndex, 1);
        }
        else {
            currentValue.push(value);
        }
        const currentOptions = flatOptions.value.filter(item => {
            return currentValue.some(selected => isSameValue(selected, getOptionValue(item)));
        });
        emit('update:modelValue', currentValue);
        emit('change', currentValue, currentOptions);
        return;
    }
    emit('update:modelValue', value);
    emit('change', value, option);
    setOpen(false);
};
const removeOption = (option) => {
    if (!props.multiple || props.disabled)
        return;
    const value = getOptionValue(option);
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const nextValue = currentValue.filter(item => !isSameValue(item, value));
    const nextOptions = flatOptions.value.filter(item => {
        return nextValue.some(selected => isSameValue(selected, getOptionValue(item)));
    });
    emit('update:modelValue', nextValue);
    emit('change', nextValue, nextOptions);
};
const clearSelection = () => {
    const value = props.multiple ? [] : '';
    emit('update:modelValue', value);
    emit('change', value, props.multiple ? [] : undefined);
    emit('clear');
    searchQuery.value = '';
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
    if (!((_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
        setOpen(false);
    }
};
watch(isOpen, visible => {
    if (!visible) {
        searchQuery.value = '';
    }
});
watch(() => props.multiple, multiple => {
    if (multiple && !Array.isArray(props.modelValue)) {
        emit('update:modelValue', []);
    }
});
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
    searchPlaceholder: '搜索选项',
    noDataText: '暂无数据',
    disabled: false,
    clearable: true,
    filterable: false,
    multiple: false,
    size: 'default',
    theme: 'neon',
    labelKey: 'label',
    valueKey: 'value',
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ ref: "selectRef" }, { class: "cp-cyber-select" }), { class: ([
        `theme-${__VLS_ctx.theme}`,
        `size-${__VLS_ctx.size}`,
        {
            'is-open': __VLS_ctx.isOpen,
            'is-disabled': __VLS_ctx.disabled,
            'is-multiple': __VLS_ctx.multiple,
        },
    ]) }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onClick: (__VLS_ctx.toggleDropdown) }, { onFocus: (__VLS_ctx.handleFocus) }), { onBlur: (__VLS_ctx.handleBlur) }), { onKeydown: (__VLS_ctx.handleKeydown) }), { class: "select-control" }), { tabindex: "0", role: "combobox", 'aria-expanded': (__VLS_ctx.isOpen), 'aria-disabled': (__VLS_ctx.disabled) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "select-value" }));
if (__VLS_ctx.multiple && __VLS_ctx.selectedOptions.length) {
    for (const [option] of __VLS_getVForSourceType((__VLS_ctx.selectedOptions))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign(Object.assign({ onClick: () => { } }, { key: (String(__VLS_ctx.getOptionValue(option))) }), { class: "select-tag" }));
        (__VLS_ctx.getOptionLabel(option));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                if (!(__VLS_ctx.multiple && __VLS_ctx.selectedOptions.length))
                    return;
                __VLS_ctx.removeOption(option);
            } }, { class: "tag-close" }), { type: "button", 'aria-label': (`Remove ${__VLS_ctx.getOptionLabel(option)}`) }));
    }
}
else if (!__VLS_ctx.multiple && __VLS_ctx.selectedOptions.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "select-single" }));
    (__VLS_ctx.getOptionLabel(__VLS_ctx.selectedOptions[0]));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "select-placeholder" }));
    (__VLS_ctx.placeholder);
}
if (__VLS_ctx.clearable && __VLS_ctx.hasValue && !__VLS_ctx.disabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (__VLS_ctx.clearSelection) }, { class: "clear-button" }), { type: "button", 'aria-label': "Clear selected value" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "select-arrow" }));
const __VLS_0 = {}.transition;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "select-dropdown",
}));
const __VLS_2 = __VLS_1({
    name: "select-dropdown",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.isOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "select-dropdown" }));
    if (__VLS_ctx.filterable) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "select-search" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)(Object.assign(Object.assign({ onClick: () => { } }, { onKeydown: (__VLS_ctx.handleKeydown) }), { ref: "searchInputRef", value: (__VLS_ctx.searchQuery), type: "text", placeholder: (__VLS_ctx.searchPlaceholder) }));
        ;
    }
    if (__VLS_ctx.filteredGroups.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "select-options" }));
        for (const [group] of __VLS_getVForSourceType((__VLS_ctx.filteredGroups))) {
            (group.key);
            if (group.label) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "select-group-label" }));
                (group.label);
            }
            for (const [option] of __VLS_getVForSourceType((group.options))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign(Object.assign(Object.assign({ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.isOpen))
                            return;
                        if (!(__VLS_ctx.filteredGroups.length))
                            return;
                        __VLS_ctx.selectOption(option);
                    } }, { key: (`${group.key}-${String(__VLS_ctx.getOptionValue(option))}`) }), { class: "select-option" }), { class: ({
                        selected: __VLS_ctx.isSelected(option),
                        disabled: option.disabled,
                    }) }), { type: "button", disabled: (option.disabled) }));
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "option-check" }));
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "option-label" }));
                (__VLS_ctx.getOptionLabel(option));
            }
        }
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "select-empty" }));
        (__VLS_ctx.noDataText);
    }
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
            selectRef: selectRef,
            searchInputRef: searchInputRef,
            isOpen: isOpen,
            searchQuery: searchQuery,
            filteredGroups: filteredGroups,
            selectedOptions: selectedOptions,
            hasValue: hasValue,
            getOptionLabel: getOptionLabel,
            getOptionValue: getOptionValue,
            isSelected: isSelected,
            toggleDropdown: toggleDropdown,
            selectOption: selectOption,
            removeOption: removeOption,
            clearSelection: clearSelection,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
            handleKeydown: handleKeydown,
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
//# sourceMappingURL=select.vue.js.map