import { ref, computed } from 'vue';
defineOptions({
    name: 'CyberInput',
});
const props = withDefaults(defineProps(), {
    modelValue: '',
    type: 'text',
    placeholder: '请输入...',
    disabled: false,
    readonly: false,
    maxlength: undefined,
    autocomplete: 'off',
    name: undefined,
    size: 'default',
    theme: 'primary',
    glitchEffect: true,
    scanlineEffect: true,
    clearable: false,
    showPassword: false,
});
const emit = defineEmits();
const inputRef = ref(null);
const isFocused = ref(false);
const passwordVisible = ref(false);
const prevValue = ref('');
const currentType = computed(() => {
    if (props.type === 'password' && passwordVisible.value) {
        return 'text';
    }
    return props.type;
});
const togglePassword = () => {
    passwordVisible.value = !passwordVisible.value;
};
const handleInput = (event) => {
    const target = event.target;
    emit('update:modelValue', target.value);
    emit('input', target.value);
};
const handleFocus = (event) => {
    var _a;
    isFocused.value = true;
    prevValue.value = (_a = props.modelValue) !== null && _a !== void 0 ? _a : '';
    emit('focus', event);
};
const handleBlur = (event) => {
    var _a;
    isFocused.value = false;
    if (props.modelValue !== prevValue.value) {
        emit('change', (_a = props.modelValue) !== null && _a !== void 0 ? _a : '');
    }
    emit('blur', event);
};
const handleKeyup = (event) => {
    emit('keyup', event);
};
const handleKeydown = (event) => {
    emit('keydown', event);
};
const handleClear = () => {
    var _a;
    emit('update:modelValue', '');
    emit('input', '');
    emit('change', '');
    emit('clear');
    (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
};
const __VLS_exposed = {
    focus: () => {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    },
    select: () => {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    },
    clear: () => {
        handleClear();
    },
    ref: inputRef,
};
defineExpose(__VLS_exposed);
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    modelValue: '',
    type: 'text',
    placeholder: '请输入...',
    disabled: false,
    readonly: false,
    maxlength: undefined,
    autocomplete: 'off',
    name: undefined,
    size: 'default',
    theme: 'primary',
    glitchEffect: true,
    scanlineEffect: true,
    clearable: false,
    showPassword: false,
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
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ([
        'cp-input',
        `cp-input--${__VLS_ctx.size}`,
        `cp-input--${__VLS_ctx.theme}`,
        {
            'cp-input--disabled': __VLS_ctx.disabled,
            'cp-input--focused': __VLS_ctx.isFocused,
            'cp-input--has-value': __VLS_ctx.modelValue !== '' && __VLS_ctx.modelValue != null,
        }
    ]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-input-wrapper" }));
if (__VLS_ctx.$slots.prefix) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "cp-input-prefix" }));
    var __VLS_0 = {};
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onInput: (__VLS_ctx.handleInput) }, { onFocus: (__VLS_ctx.handleFocus) }), { onBlur: (__VLS_ctx.handleBlur) }), { onKeyup: (__VLS_ctx.handleKeyup) }), { onKeydown: (__VLS_ctx.handleKeydown) }), { ref: "inputRef", type: (__VLS_ctx.currentType), value: (__VLS_ctx.modelValue), placeholder: (__VLS_ctx.placeholder), disabled: (__VLS_ctx.disabled), readonly: (__VLS_ctx.readonly), maxlength: (__VLS_ctx.maxlength), autocomplete: (__VLS_ctx.autocomplete), name: (__VLS_ctx.name) }), { class: "cp-input-inner" }));
;
if (__VLS_ctx.clearable && __VLS_ctx.modelValue && !__VLS_ctx.disabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ onMousedown: (__VLS_ctx.handleClear) }, { class: "cp-input-clear" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(Object.assign({ viewBox: "0 0 16 16" }, { class: "cp-input-icon" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",
    });
}
if (__VLS_ctx.type === 'password' && __VLS_ctx.showPassword) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ onMousedown: (__VLS_ctx.togglePassword) }, { class: "cp-input-password-toggle" }));
    if (__VLS_ctx.passwordVisible) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(Object.assign({ viewBox: "0 0 24 24" }, { class: "cp-input-icon" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
            d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(Object.assign({ viewBox: "0 0 24 24" }, { class: "cp-input-icon" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
            d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z",
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.line)({
            x1: "1.5",
            y1: "1.5",
            x2: "22.5",
            y2: "22.5",
            stroke: "currentColor",
            'stroke-width': "2",
        });
    }
}
if (__VLS_ctx.$slots.suffix) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "cp-input-suffix" }));
    var __VLS_2 = {};
}
if (__VLS_ctx.scanlineEffect) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-input-scanline" }));
}
if (__VLS_ctx.glitchEffect) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-input-glitch" }));
}
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
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            inputRef: inputRef,
            isFocused: isFocused,
            passwordVisible: passwordVisible,
            currentType: currentType,
            togglePassword: togglePassword,
            handleInput: handleInput,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
            handleKeyup: handleKeyup,
            handleKeydown: handleKeydown,
            handleClear: handleClear,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return Object.assign({}, __VLS_exposed);
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
;
//# sourceMappingURL=input.vue.js.map