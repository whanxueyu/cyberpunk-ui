var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ref } from 'vue';
import { defineComponent } from 'vue';
export default await (() => __awaiter(void 0, void 0, void 0, function* () {
    const props = defineProps();
    const emit = defineEmits();
    const expandedKeys = ref(new Set());
    const getOptionLabel = (option) => {
        var _a, _b, _c, _d;
        return String((_d = (_c = (_b = (_a = option[props.labelKey]) !== null && _a !== void 0 ? _a : option.label) !== null && _b !== void 0 ? _b : option[props.valueKey]) !== null && _c !== void 0 ? _c : option.value) !== null && _d !== void 0 ? _d : '');
    };
    const getOptionValue = (option) => {
        var _a, _b;
        return (_b = (_a = option[props.valueKey]) !== null && _a !== void 0 ? _a : option.value) !== null && _b !== void 0 ? _b : '';
    };
    const hasChildren = (option) => {
        var _a;
        const children = (_a = option[props.childrenKey]) !== null && _a !== void 0 ? _a : option.children;
        return Array.isArray(children) && children.length > 0;
    };
    const getChildren = (option) => {
        var _a, _b;
        return (_b = (_a = option[props.childrenKey]) !== null && _a !== void 0 ? _a : option.children) !== null && _b !== void 0 ? _b : [];
    };
    const isSelected = (option) => {
        const value = getOptionValue(option);
        return props.selectedValues.includes(value);
    };
    const isExpanded = (option) => {
        const value = getOptionValue(option);
        return expandedKeys.value.has(value);
    };
    const handleOptionClick = (option) => {
        if (option.disabled)
            return;
        const value = getOptionValue(option);
        if (hasChildren(option)) {
            const newSet = new Set(expandedKeys.value);
            if (newSet.has(value)) {
                newSet.delete(value);
            }
            else {
                newSet.add(value);
            }
            expandedKeys.value = newSet;
        }
        else {
            emit('select', { option, value });
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
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cascader-tree" }));
    for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cascader-menu-item" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign(Object.assign({ onClick: (...[$event]) => {
                __VLS_ctx.handleOptionClick(option);
            } }, { class: "cascader-option" }), { class: ({
                selected: __VLS_ctx.isSelected(option),
                disabled: option.disabled,
                'has-children': __VLS_ctx.hasChildren(option),
                'is-expanded': __VLS_ctx.isExpanded(option),
            }) }), { type: "button", disabled: (option.disabled) }));
        if (__VLS_ctx.multiple) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "option-check" }));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "option-label" }));
        (__VLS_ctx.getOptionLabel(option));
        if (__VLS_ctx.hasChildren(option)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "option-arrow" }));
        }
        if (__VLS_ctx.hasChildren(option) && __VLS_ctx.isExpanded(option)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cascader-submenu" }));
            const __VLS_0 = {}.CascaderOptionTree;
            ;
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onSelect': {} }, { options: (__VLS_ctx.getChildren(option)), selectedValues: (__VLS_ctx.selectedValues), multiple: (__VLS_ctx.multiple), labelKey: (__VLS_ctx.labelKey), valueKey: (__VLS_ctx.valueKey), childrenKey: (__VLS_ctx.childrenKey) })));
            const __VLS_2 = __VLS_1(Object.assign({ 'onSelect': {} }, { options: (__VLS_ctx.getChildren(option)), selectedValues: (__VLS_ctx.selectedValues), multiple: (__VLS_ctx.multiple), labelKey: (__VLS_ctx.labelKey), valueKey: (__VLS_ctx.valueKey), childrenKey: (__VLS_ctx.childrenKey) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
            let __VLS_4;
            let __VLS_5;
            let __VLS_6;
            const __VLS_7 = {
                onSelect: (...[$event]) => {
                    if (!(__VLS_ctx.hasChildren(option) && __VLS_ctx.isExpanded(option)))
                        return;
                    __VLS_ctx.$emit('select', $event);
                }
            };
            var __VLS_3;
        }
    }
    if (!__VLS_ctx.options || __VLS_ctx.options.length === 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cascader-empty" }));
    }
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    var __VLS_dollars;
    const __VLS_self = (yield import('vue')).defineComponent({
        setup() {
            return {
                getOptionLabel: getOptionLabel,
                hasChildren: hasChildren,
                getChildren: getChildren,
                isSelected: isSelected,
                isExpanded: isExpanded,
                handleOptionClick: handleOptionClick,
            };
        },
        __typeEmits: {},
        __typeProps: {},
        name: 'CascaderOptionTree',
    });
    return defineComponent({
        setup() {
            return {};
        },
        __typeEmits: {},
        __typeProps: {},
        name: 'CascaderOptionTree',
    });
}))();
;
//# sourceMappingURL=option-tree.vue.js.map