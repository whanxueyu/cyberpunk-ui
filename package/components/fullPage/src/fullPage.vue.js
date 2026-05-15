import { computed, ref, watchEffect } from 'vue';
defineOptions({
    name: 'CyberFullPage',
});
const props = defineProps({
    items: {
        type: Array,
        default: [{ title: '标题1' }]
    },
    position: {
        type: String,
        default: 'right'
    },
    showTitle: {
        type: Boolean,
        default: true
    }
});
const emits = defineEmits(['toNext', 'toLast', 'change']);
const element = ref();
watchEffect(() => {
    var _a;
    if ((_a = element.value) === null || _a === void 0 ? void 0 : _a.style) {
        element.value.style.transform = transformScroll.value;
    }
});
const windowHeight = computed(() => {
    var _a, _b, _c;
    isCloseTranstion.value = true;
    let sheight = 0;
    if ((_a = document.getElementById('page-scroll')) === null || _a === void 0 ? void 0 : _a.clientHeight) {
        sheight = (_c = (_b = document.getElementById('page-scroll')) === null || _b === void 0 ? void 0 : _b.clientHeight) !== null && _c !== void 0 ? _c : 0;
    }
    else {
        sheight = window.innerHeight;
    }
    return sheight;
});
const transformScroll = computed(() => {
    return `translateY(-${$index.value * windowHeight.value}px)`;
});
const isCloseTranstion = ref(false);
const canRun = ref(true);
function mousewheel(e) {
    e.preventDefault();
    e.stopPropagation();
    isCloseTranstion.value = false;
    if (canRun.value) {
        canRun.value = false;
        goScroll(e);
        setTimeout(() => {
            canRun.value = true;
        }, 500);
    }
}
const startY = ref(0);
const endY = ref(0);
const moveDistance = ref(0);
function handleTouchStart(e) {
    startY.value = e.touches[0].pageY || e.changedTouches[0].pageY;
}
function handleTouchEnd(e) {
    e.preventDefault();
    isCloseTranstion.value = false;
    endY.value = e.changedTouches[0].pageY || e.touches[0].pageY;
    moveDistance.value = endY.value - startY.value;
    if (Math.abs(moveDistance.value) >= 60) {
        if ($index.value < props.items.length - 1 && moveDistance.value < 0) {
            $index.value++;
        }
        if ($index.value > 0 && moveDistance.value > 0) {
            $index.value--;
        }
    }
    else {
        console.log("else", -$index.value * windowHeight.value);
        element.value.style.transform = `translateY(-${$index.value * windowHeight.value}px)`;
    }
}
function handleTouchMove(e) {
    isCloseTranstion.value = true;
    e.preventDefault();
    moveDistance.value = (e.changedTouches[0].pageY || e.touches[0].pageY) - startY.value;
    const isCriticalPoint = ($index.value === props.items.length - 1 && moveDistance.value < 0) ||
        ($index.value === 0 && moveDistance.value > 0);
    if (isCriticalPoint) {
        return;
    }
    console.log("else", -$index.value * windowHeight.value + moveDistance.value * -1);
    element.value.style.transform = `translateY(-${$index.value * windowHeight.value + moveDistance.value * -1}px)`;
}
function goScroll(e) {
    if (e.wheelDelta < 0) {
        next();
        emits('change', { from: props.items[$index.value - 1], to: props.items[$index.value], type: 'next' });
    }
    else {
        last();
        emits('change', { from: props.items[$index.value + 1], to: props.items[$index.value], type: 'last' });
    }
}
const $index = ref(0);
function next() {
    if ($index.value < props.items.length - 1) {
        $index.value++;
        emits('toNext', $index.value);
    }
}
function last() {
    if ($index.value > 1 || $index.value === 1) {
        $index.value--;
        emits('toLast', $index.value);
    }
}
function changeBac(index) {
    isCloseTranstion.value = false;
    $index.value = index;
}
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-full-page" }, { id: "page-scroll" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onMousewheel: (__VLS_ctx.mousewheel) }, { onTouchstart: (__VLS_ctx.handleTouchStart) }), { onTouchend: (__VLS_ctx.handleTouchEnd) }), { onTouchmove: (__VLS_ctx.handleTouchMove) }), { ref: "element" }), { class: ({ activeTranstion: __VLS_ctx.isCloseTranstion }) }), { class: "inner-box" }));
;
var __VLS_0 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-full-dot', props.position]) }));
for (const [item, index] of __VLS_getVForSourceType((props.items))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.changeBac(index);
        } }, { class: "cp-full-dot-item" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-full-dot-item-bg" }, { class: ({ active: index === __VLS_ctx.$index }) }));
    if (props.showTitle) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "show-dec" }));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (index === __VLS_ctx.$index) }), null, null);
        (item.title);
    }
}
;
;
;
;
;
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            element: element,
            isCloseTranstion: isCloseTranstion,
            mousewheel: mousewheel,
            handleTouchStart: handleTouchStart,
            handleTouchEnd: handleTouchEnd,
            handleTouchMove: handleTouchMove,
            $index: $index,
            changeBac: changeBac,
        };
    },
    emits: {},
    props: {
        items: {
            type: Array,
            default: [{ title: '标题1' }]
        },
        position: {
            type: String,
            default: 'right'
        },
        showTitle: {
            type: Boolean,
            default: true
        }
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        items: {
            type: Array,
            default: [{ title: '标题1' }]
        },
        position: {
            type: String,
            default: 'right'
        },
        showTitle: {
            type: Boolean,
            default: true
        }
    },
});
export default {};
;
//# sourceMappingURL=fullPage.vue.js.map