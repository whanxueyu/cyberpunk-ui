import { ref, computed } from 'vue';
defineOptions({
    name: 'CyberInput',
});
const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    type: {
        type: String,
        default: 'text',
        validator: (value) => {
            return ['text', 'password', 'number', 'email', 'tel', 'url'].indexOf(value) !== -1;
        }
    },
    placeholder: {
        type: String,
        default: '请输入...'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    maxlength: {
        type: [String, Number],
        default: undefined
    },
    autocomplete: {
        type: String,
        default: 'off'
    },
    size: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['large', 'default', 'small'].indexOf(value) !== -1;
        }
    },
    theme: {
        type: String,
        default: 'primary',
        validator: (value) => {
            return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !== -1;
        }
    },
    glitchEffect: {
        type: Boolean,
        default: true
    },
    scanlineEffect: {
        type: Boolean,
        default: true
    }
});
const emit = defineEmits([
    'update:modelValue',
    'input',
    'change',
    'focus',
    'blur',
    'keyup',
    'keydown'
]);
const inputRef = ref(null);
const inputSize = computed(() => {
    switch (props.size) {
        case 'large':
            return 'large-size';
        case 'default':
            return 'default-size';
        case 'small':
            return 'small-size';
        default:
            return 'default-size';
    }
});
const inputType = computed(() => {
    switch (props.theme) {
        case 'primary':
            return 'primary-theme';
        case 'success':
            return 'success-theme';
        case 'warning':
            return 'warning-theme';
        case 'danger':
            return 'danger-theme';
        case 'info':
            return 'info-theme';
        default:
            return 'primary-theme';
    }
});
const handleInput = (event) => {
    const target = event.target;
    emit('update:modelValue', target.value);
    emit('input', target.value);
};
const handleFocus = (event) => {
    emit('focus', event);
};
const handleBlur = (event) => {
    emit('blur', event);
};
const handleKeyup = (event) => {
    emit('keyup', event);
};
const handleKeydown = (event) => {
    emit('keydown', event);
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
    }
};
defineExpose(__VLS_exposed);
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-input', __VLS_ctx.inputSize, __VLS_ctx.inputType]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "input-wrapper" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onInput: (__VLS_ctx.handleInput) }, { onFocus: (__VLS_ctx.handleFocus) }), { onBlur: (__VLS_ctx.handleBlur) }), { onKeyup: (__VLS_ctx.handleKeyup) }), { onKeydown: (__VLS_ctx.handleKeydown) }), { ref: "inputRef", type: (__VLS_ctx.type), value: (__VLS_ctx.modelValue), placeholder: (__VLS_ctx.placeholder), disabled: (__VLS_ctx.disabled), readonly: (__VLS_ctx.readonly), maxlength: (__VLS_ctx.maxlength), autocomplete: (__VLS_ctx.autocomplete) }), { class: "cyber-input" }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "input-border" }));
if (__VLS_ctx.glitchEffect) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "input-glitch" }));
}
if (__VLS_ctx.scanlineEffect) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "input-scanline" }));
}
;
;
;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            inputRef: inputRef,
            inputSize: inputSize,
            inputType: inputType,
            handleInput: handleInput,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
            handleKeyup: handleKeyup,
            handleKeydown: handleKeydown,
        };
    },
    emits: {},
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text',
            validator: (value) => {
                return ['text', 'password', 'number', 'email', 'tel', 'url'].indexOf(value) !== -1;
            }
        },
        placeholder: {
            type: String,
            default: '请输入...'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: [String, Number],
            default: undefined
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['large', 'default', 'small'].indexOf(value) !== -1;
            }
        },
        theme: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !== -1;
            }
        },
        glitchEffect: {
            type: Boolean,
            default: true
        },
        scanlineEffect: {
            type: Boolean,
            default: true
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return Object.assign({}, __VLS_exposed);
    },
    emits: {},
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text',
            validator: (value) => {
                return ['text', 'password', 'number', 'email', 'tel', 'url'].indexOf(value) !== -1;
            }
        },
        placeholder: {
            type: String,
            default: '请输入...'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: [String, Number],
            default: undefined
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['large', 'default', 'small'].indexOf(value) !== -1;
            }
        },
        theme: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !== -1;
            }
        },
        glitchEffect: {
            type: Boolean,
            default: true
        },
        scanlineEffect: {
            type: Boolean,
            default: true
        }
    },
});
;
//# sourceMappingURL=input.vue.js.map