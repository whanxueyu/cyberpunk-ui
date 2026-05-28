import { ref, onMounted, onUnmounted, watch } from 'vue';
defineOptions({
    name: 'CyberTyping',
});
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    speed: {
        type: Number,
        default: 80,
    },
    delay: {
        type: Number,
        default: 500,
    },
    loop: {
        type: Boolean,
        default: false,
    },
    loopDelay: {
        type: Number,
        default: 2000,
    },
    cursor: {
        type: Boolean,
        default: true,
    },
    cursorColor: {
        type: String,
        default: '#00e6f6',
    },
});
const emit = defineEmits();
const displayText = ref('');
let timer = null;
let delayTimer = null;
let charIndex = 0;
let isErasing = false;
const clearAll = () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
    }
};
const typeNext = (fullText) => {
    charIndex++;
    displayText.value = fullText.slice(0, charIndex);
    if (charIndex >= fullText.length) {
        clearInterval(timer);
        timer = null;
        emit('finish');
        if (props.loop) {
            delayTimer = setTimeout(() => {
                isErasing = true;
                startErase(fullText);
            }, props.loopDelay);
        }
    }
};
const eraseNext = (fullText) => {
    charIndex--;
    displayText.value = fullText.slice(0, charIndex);
    if (charIndex <= 0) {
        clearInterval(timer);
        timer = null;
        displayText.value = '';
        isErasing = false;
        delayTimer = setTimeout(() => startType(fullText), 500);
    }
};
const startType = (fullText) => {
    if (!fullText)
        return;
    charIndex = 0;
    displayText.value = '';
    isErasing = false;
    timer = setInterval(() => typeNext(fullText), props.speed);
};
const startErase = (fullText) => {
    timer = setInterval(() => eraseNext(fullText), Math.max(props.speed / 2, 30));
};
watch(() => props.text, (val) => {
    clearAll();
    displayText.value = '';
    if (val) {
        delayTimer = setTimeout(() => startType(val), props.delay);
    }
});
onMounted(() => {
    if (props.text) {
        delayTimer = setTimeout(() => startType(props.text), props.delay);
    }
});
onUnmounted(() => {
    clearAll();
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-typing" }));
if (__VLS_ctx.text) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "typing-text" }));
    (__VLS_ctx.displayText);
}
if (__VLS_ctx.cursor) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "typing-cursor" }, { style: ({ backgroundColor: __VLS_ctx.cursorColor }) }));
}
if (!__VLS_ctx.text) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "typing-text" }));
    var __VLS_0 = {};
}
;
;
;
;
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            displayText: displayText,
        };
    },
    __typeEmits: {},
    props: {
        text: {
            type: String,
            default: '',
        },
        speed: {
            type: Number,
            default: 80,
        },
        delay: {
            type: Number,
            default: 500,
        },
        loop: {
            type: Boolean,
            default: false,
        },
        loopDelay: {
            type: Number,
            default: 2000,
        },
        cursor: {
            type: Boolean,
            default: true,
        },
        cursorColor: {
            type: String,
            default: '#00e6f6',
        },
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    props: {
        text: {
            type: String,
            default: '',
        },
        speed: {
            type: Number,
            default: 80,
        },
        delay: {
            type: Number,
            default: 500,
        },
        loop: {
            type: Boolean,
            default: false,
        },
        loopDelay: {
            type: Number,
            default: 2000,
        },
        cursor: {
            type: Boolean,
            default: true,
        },
        cursorColor: {
            type: String,
            default: '#00e6f6',
        },
    },
});
export default {};
;
//# sourceMappingURL=typing.vue.js.map