import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
defineOptions({
    name: 'CyberHoloLoader',
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-holo-loader', __VLS_ctx.sizeClass, { 'transparent-bg': __VLS_ctx.transparent }]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "loader-container" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['holo-projection', `type-${__VLS_ctx.type}`]) }));
if (__VLS_ctx.type === 'cube') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube-loader" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube-face front" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube-face back" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube-face right" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube-face left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube-face top" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cube-face bottom" }));
}
else if (__VLS_ctx.type === 'sphere') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "sphere-loader" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "sphere" }));
    for (const [i] of __VLS_getVForSourceType((3))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "sphere-ring" }, { key: (i) }));
    }
}
else if (__VLS_ctx.type === 'datastream') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "datastream-loader" }));
    for (const [i] of __VLS_getVForSourceType((10))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "data-line" }, { key: (i) }));
    }
}
else if (__VLS_ctx.type === 'circuit') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "circuit-loader" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "circuit-board" }));
    for (const [i] of __VLS_getVForSourceType((5))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "circuit-path" }, { key: (i) }));
    }
    for (const [i] of __VLS_getVForSourceType((6))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "circuit-node" }, { key: (i + 10) }));
    }
}
if (__VLS_ctx.text) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "loader-text" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "typing-text" }));
    (__VLS_ctx.displayText);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "cursor" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "holo-base" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "base-glow" }));
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
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
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