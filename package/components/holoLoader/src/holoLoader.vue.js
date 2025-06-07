import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpHoloLoader',
});
const props = defineProps({
    type: {
        type: String,
        default: 'cube',
        validator: (value) => {
            return ['cube', 'sphere', 'datastream', 'circuit'].indexOf(value) !== -1;
        }
    },
    size: {
        type: String,
        default: 'default',
        validator: (value) => {
            return ['small', 'default', 'large'].indexOf(value) !== -1;
        }
    },
    text: {
        type: String,
        default: 'Loading...'
    },
    speed: {
        type: Number,
        default: 1,
        validator: (value) => {
            return value > 0 && value <= 3;
        }
    },
    transparent: {
        type: Boolean,
        default: false
    }
});
const sizeClass = computed(() => {
    switch (props.size) {
        case 'small':
            return 'small-size';
        case 'default':
            return 'default-size';
        case 'large':
            return 'large-size';
        default:
            return 'default-size';
    }
});
const displayText = ref('');
const currentIndex = ref(0);
const typingInterval = ref(null);
const startTypingEffect = () => {
    if (!props.text)
        return;
    currentIndex.value = 0;
    displayText.value = '';
    const typeNextChar = () => {
        if (currentIndex.value < props.text.length) {
            displayText.value += props.text[currentIndex.value];
            currentIndex.value++;
        }
        else {
            setTimeout(() => {
                currentIndex.value = 0;
                displayText.value = '';
            }, 1000);
        }
    };
    const interval = 100 / props.speed;
    typingInterval.value = window.setInterval(typeNextChar, interval);
};
watch(() => props.text, () => {
    if (typingInterval.value) {
        clearInterval(typingInterval.value);
    }
    startTypingEffect();
});
onMounted(() => {
    startTypingEffect();
});
onUnmounted(() => {
    if (typingInterval.value) {
        clearInterval(typingInterval.value);
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        type: {
            type: String,
            default: 'cube',
            validator: (value) => {
                return ['cube', 'sphere', 'datastream', 'circuit'].indexOf(value) !== -1;
            }
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['small', 'default', 'large'].indexOf(value) !== -1;
            }
        },
        text: {
            type: String,
            default: 'Loading...'
        },
        speed: {
            type: Number,
            default: 1,
            validator: (value) => {
                return value > 0 && value <= 3;
            }
        },
        transparent: {
            type: Boolean,
            default: false
        }
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['cp-holo-loader', __VLS_ctx.sizeClass, { 'transparent-bg': __VLS_ctx.transparent }])) }));
    __VLS_styleScopedClasses = (['cp-holo-loader', sizeClass, { 'transparent-bg': transparent }]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("loader-container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['holo-projection', `type-${__VLS_ctx.type}`])) }));
    __VLS_styleScopedClasses = (['holo-projection', `type-${type}`]);
    if (__VLS_ctx.type === 'cube') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube-loader") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube-face front") }));
        [sizeClass, transparent, type, type,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube-face back") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube-face right") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube-face left") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube-face top") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cube-face bottom") }));
    }
    else if (__VLS_ctx.type === 'sphere') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("sphere-loader") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("sphere") }));
        for (const [i] of __VLS_getVForSourceType((3))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("sphere-ring") }, { key: ((i)) }));
            [type,];
        }
    }
    else if (__VLS_ctx.type === 'datastream') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("datastream-loader") }));
        for (const [i] of __VLS_getVForSourceType((10))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("data-line") }, { key: ((i)) }));
            [type,];
        }
    }
    else if (__VLS_ctx.type === 'circuit') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("circuit-loader") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("circuit-board") }));
        for (const [i] of __VLS_getVForSourceType((5))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("circuit-path") }, { key: ((i)) }));
            [type,];
        }
        for (const [i] of __VLS_getVForSourceType((6))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("circuit-node") }, { key: ((i + 10)) }));
        }
    }
    if (__VLS_ctx.text) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("loader-text") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("typing-text") }));
        (__VLS_ctx.displayText);
        [text, displayText,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("cursor") }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("holo-base") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("base-glow") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['loader-container'];
        __VLS_styleScopedClasses['cube-loader'];
        __VLS_styleScopedClasses['cube'];
        __VLS_styleScopedClasses['cube-face'];
        __VLS_styleScopedClasses['front'];
        __VLS_styleScopedClasses['cube-face'];
        __VLS_styleScopedClasses['back'];
        __VLS_styleScopedClasses['cube-face'];
        __VLS_styleScopedClasses['right'];
        __VLS_styleScopedClasses['cube-face'];
        __VLS_styleScopedClasses['left'];
        __VLS_styleScopedClasses['cube-face'];
        __VLS_styleScopedClasses['top'];
        __VLS_styleScopedClasses['cube-face'];
        __VLS_styleScopedClasses['bottom'];
        __VLS_styleScopedClasses['sphere-loader'];
        __VLS_styleScopedClasses['sphere'];
        __VLS_styleScopedClasses['sphere-ring'];
        __VLS_styleScopedClasses['datastream-loader'];
        __VLS_styleScopedClasses['data-line'];
        __VLS_styleScopedClasses['circuit-loader'];
        __VLS_styleScopedClasses['circuit-board'];
        __VLS_styleScopedClasses['circuit-path'];
        __VLS_styleScopedClasses['circuit-node'];
        __VLS_styleScopedClasses['loader-text'];
        __VLS_styleScopedClasses['typing-text'];
        __VLS_styleScopedClasses['cursor'];
        __VLS_styleScopedClasses['holo-base'];
        __VLS_styleScopedClasses['base-glow'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                sizeClass: sizeClass,
                displayText: displayText,
            };
        },
        props: {
            type: {
                type: String,
                default: 'cube',
                validator: (value) => {
                    return ['cube', 'sphere', 'datastream', 'circuit'].indexOf(value) !== -1;
                }
            },
            size: {
                type: String,
                default: 'default',
                validator: (value) => {
                    return ['small', 'default', 'large'].indexOf(value) !== -1;
                }
            },
            text: {
                type: String,
                default: 'Loading...'
            },
            speed: {
                type: Number,
                default: 1,
                validator: (value) => {
                    return value > 0 && value <= 3;
                }
            },
            transparent: {
                type: Boolean,
                default: false
            }
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        type: {
            type: String,
            default: 'cube',
            validator: (value) => {
                return ['cube', 'sphere', 'datastream', 'circuit'].indexOf(value) !== -1;
            }
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['small', 'default', 'large'].indexOf(value) !== -1;
            }
        },
        text: {
            type: String,
            default: 'Loading...'
        },
        speed: {
            type: Number,
            default: 1,
            validator: (value) => {
                return value > 0 && value <= 3;
            }
        },
        transparent: {
            type: Boolean,
            default: false
        }
    },
});
;
//# sourceMappingURL=holoLoader.vue.js.map