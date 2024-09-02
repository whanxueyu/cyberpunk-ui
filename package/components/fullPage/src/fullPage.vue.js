import { computed, ref, watchEffect } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpFullPage',
});
const props = defineProps(['pageNum', "position"]);
const emits = defineEmits(['toNext', 'toLast', 'change']);
const element = ref();
watchEffect(() => {
    var _a;
    if ((_a = element.value) === null || _a === void 0 ? void 0 : _a.style) {
        element.value.style.top = transformScroll.value;
    }
});
const height = ref(window.innerHeight);
const windowHeight = computed(() => {
    isCloseTranstion.value = true;
    return height.value;
});
const transformScroll = computed(() => {
    return `-${$index.value * windowHeight.value}px`;
});
const isCloseTranstion = ref(false);
const canRun = ref(true);
function mousewheel(e) {
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
        if ($index.value < props.pageNum - 1 && moveDistance.value < 0) {
            $index.value++;
        }
        if ($index.value > 0 && moveDistance.value > 0) {
            $index.value--;
        }
    }
    else {
        element.value.style.top = `-${$index.value * windowHeight.value}px`;
    }
}
function handleTouchMove(e) {
    isCloseTranstion.value = true;
    e.preventDefault();
    moveDistance.value = (e.changedTouches[0].pageY || e.touches[0].pageY) - startY.value;
    const isCriticalPoint = ($index.value === props.pageNum - 1 && moveDistance.value < 0) ||
        ($index.value === 0 && moveDistance.value > 0);
    if (isCriticalPoint) {
        return;
    }
    element.value.style.top = `-${$index.value * windowHeight.value + moveDistance.value * -1}px`;
}
function goScroll(e) {
    emits('change', e.wheelDelta);
    if (e.wheelDelta < 0) {
        next();
    }
    else {
        last();
    }
}
const $index = ref(0);
function next() {
    if ($index.value < props.pageNum - 1) {
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
    console.log(index);
    isCloseTranstion.value = false;
    $index.value = index;
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['pageNum', "position"],
    emits: {},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cp-full-page") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onMousewheel: (__VLS_ctx.mousewheel) }, { onTouchstart: (__VLS_ctx.handleTouchStart) }), { onTouchend: (__VLS_ctx.handleTouchEnd) }), { onTouchmove: (__VLS_ctx.handleTouchMove) }), { ref: ("element") }), { class: (({ activeTranstion: __VLS_ctx.isCloseTranstion })) }), { class: ("inner-box") }));
    (__VLS_ctx.element);
    __VLS_styleScopedClasses = ({ activeTranstion: isCloseTranstion });
    var __VLS_0 = {};
    [mousewheel, handleTouchStart, handleTouchEnd, handleTouchMove, isCloseTranstion, element,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['cp-full-dot', props.position])) }));
    __VLS_styleScopedClasses = (['cp-full-dot', props.position]);
    for (const [i, index] of __VLS_getVForSourceType((props.pageNum))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
                __VLS_ctx.changeBac(index);
                [changeBac,];
            } }, { class: ("cp-full-dot-item") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("cp-full-dot-item-bg") }, { class: (({ active: index === __VLS_ctx.$index })) }));
        __VLS_styleScopedClasses = ({ active: index === $index });
        [$index,];
        var __VLS_1 = {};
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cp-full-page'];
        __VLS_styleScopedClasses['inner-box'];
        __VLS_styleScopedClasses['cp-full-dot-item'];
        __VLS_styleScopedClasses['cp-full-dot-item-bg'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
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
        props: ['pageNum', "position"],
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: ['pageNum', "position"],
    emits: {},
});
export default {};
;
//# sourceMappingURL=fullPage.vue.js.map