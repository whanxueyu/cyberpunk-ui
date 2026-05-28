var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
defineOptions({
    name: 'CyberScrollbar',
});
const props = defineProps({
    height: {
        type: [String, Number],
        default: '',
    },
    maxHeight: {
        type: [String, Number],
        default: '',
    },
    theme: {
        type: String,
        default: 'primary',
        validator: (v) => ['primary', 'success', 'warning', 'danger', 'info'].includes(v),
    },
    size: {
        type: String,
        default: 'default',
        validator: (v) => ['small', 'default', 'large'].includes(v),
    },
    always: {
        type: Boolean,
        default: false,
    },
});
const wrapRef = ref(null);
const viewRef = ref(null);
const vTrackRef = ref(null);
const vThumbRef = ref(null);
const hTrackRef = ref(null);
const hThumbRef = ref(null);
const scrollTop = ref(0);
const scrollLeft = ref(0);
const vThumbTop = ref(0);
const hThumbLeft = ref(0);
const vThumbHeight = ref(20);
const hThumbWidth = ref(20);
const showVertical = ref(false);
const showHorizontal = ref(false);
let isDragging = false;
let dragAxis = 'v';
let dragStart = 0;
let dragStartScroll = 0;
let resizeObs = null;
const sizeMap = { small: 5, default: 7, large: 10 };
const containerStyle = computed(() => {
    const s = {};
    if (props.height)
        s.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
    if (props.maxHeight)
        s.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight;
    return s;
});
const vThumbStyle = computed(() => ({
    height: `${vThumbHeight.value}px`,
    transform: `translateY(${vThumbTop.value}px)`,
}));
const hThumbStyle = computed(() => ({
    width: `${hThumbWidth.value}px`,
    transform: `translateX(${hThumbLeft.value}px)`,
}));
const update = () => {
    if (!wrapRef.value || !viewRef.value)
        return;
    const wrap = wrapRef.value;
    const view = viewRef.value;
    const wrapH = wrap.clientHeight;
    const wrapW = wrap.clientWidth;
    const viewH = view.scrollHeight;
    const viewW = view.scrollWidth;
    const trackW = sizeMap[props.size] + 4;
    const trackH = sizeMap[props.size] + 4;
    const hasV = viewH > wrapH;
    const hasH = viewW > wrapW;
    showVertical.value = hasV || props.always;
    showHorizontal.value = hasH || props.always;
    if (hasV || props.always) {
        const availH = hasH ? wrapH - trackH : wrapH;
        const ratio = availH / viewH;
        vThumbHeight.value = Math.max(18, availH * ratio);
        const maxTop = availH - vThumbHeight.value;
        const scrollRatio = viewH - wrapH;
        vThumbTop.value = scrollRatio > 0 ? (scrollTop.value / scrollRatio) * maxTop : 0;
    }
    if (hasH || props.always) {
        const availW = hasV ? wrapW - trackW : wrapW;
        const ratio = availW / viewW;
        hThumbWidth.value = Math.max(18, availW * ratio);
        const maxLeft = availW - hThumbWidth.value;
        const scrollRatio = viewW - wrapW;
        hThumbLeft.value = scrollRatio > 0 ? (scrollLeft.value / scrollRatio) * maxLeft : 0;
    }
};
const scrollToY = (y) => {
    if (!wrapRef.value || !viewRef.value)
        return;
    const maxScroll = viewRef.value.scrollHeight - wrapRef.value.clientHeight;
    scrollTop.value = Math.max(0, Math.min(y, maxScroll));
    wrapRef.value.scrollTop = scrollTop.value;
};
const scrollToX = (x) => {
    if (!wrapRef.value || !viewRef.value)
        return;
    const maxScroll = viewRef.value.scrollWidth - wrapRef.value.clientWidth;
    scrollLeft.value = Math.max(0, Math.min(x, maxScroll));
    wrapRef.value.scrollLeft = scrollLeft.value;
};
const handleScroll = () => {
    if (!wrapRef.value || isDragging)
        return;
    scrollTop.value = wrapRef.value.scrollTop;
    scrollLeft.value = wrapRef.value.scrollLeft;
    update();
};
const handleWheel = (e) => {
    if (!wrapRef.value || !viewRef.value)
        return;
    const wrap = wrapRef.value;
    const view = viewRef.value;
    const maxSY = view.scrollHeight - wrap.clientHeight;
    const maxSX = view.scrollWidth - wrap.clientWidth;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && maxSX > 0) {
        scrollToX(scrollLeft.value + e.deltaX);
        return;
    }
    if (maxSY > 0) {
        scrollToY(scrollTop.value + e.deltaY);
    }
    else if (maxSX > 0) {
        scrollToX(scrollLeft.value + e.deltaY);
    }
};
const handleVDragStart = (e) => {
    isDragging = true;
    dragAxis = 'v';
    dragStart = e.clientY;
    dragStartScroll = scrollTop.value;
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
};
const handleHDragStart = (e) => {
    isDragging = true;
    dragAxis = 'h';
    dragStart = e.clientX;
    dragStartScroll = scrollLeft.value;
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
};
const handleDragMove = (e) => {
    var _a, _b;
    if (!isDragging || !wrapRef.value || !viewRef.value)
        return;
    const wrap = wrapRef.value;
    const view = viewRef.value;
    if (dragAxis === 'v') {
        const delta = e.clientY - dragStart;
        const trackH = (((_a = vTrackRef.value) === null || _a === void 0 ? void 0 : _a.clientHeight) || 0) - vThumbHeight.value;
        const scrollRange = view.scrollHeight - wrap.clientHeight;
        if (trackH > 0) {
            const ratio = scrollRange / trackH;
            scrollToY(dragStartScroll + delta * ratio);
        }
    }
    else {
        const delta = e.clientX - dragStart;
        const trackW = (((_b = hTrackRef.value) === null || _b === void 0 ? void 0 : _b.clientWidth) || 0) - hThumbWidth.value;
        const scrollRange = view.scrollWidth - wrap.clientWidth;
        if (trackW > 0) {
            const ratio = scrollRange / trackW;
            scrollToX(dragStartScroll + delta * ratio);
        }
    }
    update();
};
const handleDragEnd = () => {
    isDragging = false;
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
};
const handleVerticalTrackClick = (e) => {
    if (!vTrackRef.value || !wrapRef.value || !viewRef.value)
        return;
    if (e.target === vThumbRef.value)
        return;
    const track = vTrackRef.value;
    const wrap = wrapRef.value;
    const view = viewRef.value;
    const clickY = e.clientY - track.getBoundingClientRect().top - vThumbHeight.value / 2;
    const trackH = track.clientHeight - vThumbHeight.value;
    const ratio = clickY / trackH;
    scrollToY(ratio * (view.scrollHeight - wrap.clientHeight));
};
const handleHorizontalTrackClick = (e) => {
    if (!hTrackRef.value || !wrapRef.value || !viewRef.value)
        return;
    if (e.target === hThumbRef.value)
        return;
    const track = hTrackRef.value;
    const wrap = wrapRef.value;
    const view = viewRef.value;
    const clickX = e.clientX - track.getBoundingClientRect().left - hThumbWidth.value / 2;
    const trackW = track.clientWidth - hThumbWidth.value;
    const ratio = clickX / trackW;
    scrollToX(ratio * (view.scrollWidth - wrap.clientWidth));
};
onMounted(() => __awaiter(void 0, void 0, void 0, function* () {
    yield nextTick();
    if (!wrapRef.value)
        return;
    wrapRef.value.addEventListener('scroll', handleScroll);
    if (viewRef.value) {
        resizeObs = new ResizeObserver(() => update());
        resizeObs.observe(viewRef.value);
        resizeObs.observe(wrapRef.value);
    }
    update();
}));
onUnmounted(() => {
    var _a;
    (_a = wrapRef.value) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', handleScroll);
    resizeObs === null || resizeObs === void 0 ? void 0 : resizeObs.disconnect();
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
});
const __VLS_exposed = {
    update,
    scrollToY,
    scrollToX,
    wrapRef,
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "cp-scrollbar" }, { class: ([`theme-${__VLS_ctx.theme}`, `size-${__VLS_ctx.size}`, { 'is-always': __VLS_ctx.always }]) }), { style: (__VLS_ctx.containerStyle) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onWheel: (__VLS_ctx.handleWheel) }, { ref: "wrapRef" }), { class: "cp-scrollbar__wrap" }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ ref: "viewRef" }, { class: "cp-scrollbar__view" }));
;
var __VLS_0 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onMousedown: (__VLS_ctx.handleVerticalTrackClick) }, { ref: "vTrackRef" }), { class: "cp-scrollbar__track is-vertical" }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showVertical) }), null, null);
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ onMousedown: (__VLS_ctx.handleVDragStart) }, { ref: "vThumbRef" }), { class: "cp-scrollbar__thumb is-vertical" }), { style: (__VLS_ctx.vThumbStyle) }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onMousedown: (__VLS_ctx.handleHorizontalTrackClick) }, { ref: "hTrackRef" }), { class: "cp-scrollbar__track is-horizontal" }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showHorizontal) }), null, null);
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ onMousedown: (__VLS_ctx.handleHDragStart) }, { ref: "hThumbRef" }), { class: "cp-scrollbar__thumb is-horizontal" }), { style: (__VLS_ctx.hThumbStyle) }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-scrollbar__corner" }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showVertical && __VLS_ctx.showHorizontal) }), null, null);
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
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            wrapRef: wrapRef,
            viewRef: viewRef,
            vTrackRef: vTrackRef,
            vThumbRef: vThumbRef,
            hTrackRef: hTrackRef,
            hThumbRef: hThumbRef,
            showVertical: showVertical,
            showHorizontal: showHorizontal,
            containerStyle: containerStyle,
            vThumbStyle: vThumbStyle,
            hThumbStyle: hThumbStyle,
            handleWheel: handleWheel,
            handleVDragStart: handleVDragStart,
            handleHDragStart: handleHDragStart,
            handleVerticalTrackClick: handleVerticalTrackClick,
            handleHorizontalTrackClick: handleHorizontalTrackClick,
        };
    },
    props: {
        height: {
            type: [String, Number],
            default: '',
        },
        maxHeight: {
            type: [String, Number],
            default: '',
        },
        theme: {
            type: String,
            default: 'primary',
            validator: (v) => ['primary', 'success', 'warning', 'danger', 'info'].includes(v),
        },
        size: {
            type: String,
            default: 'default',
            validator: (v) => ['small', 'default', 'large'].includes(v),
        },
        always: {
            type: Boolean,
            default: false,
        },
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return Object.assign({}, __VLS_exposed);
    },
    props: {
        height: {
            type: [String, Number],
            default: '',
        },
        maxHeight: {
            type: [String, Number],
            default: '',
        },
        theme: {
            type: String,
            default: 'primary',
            validator: (v) => ['primary', 'success', 'warning', 'danger', 'info'].includes(v),
        },
        size: {
            type: String,
            default: 'default',
            validator: (v) => ['small', 'default', 'large'].includes(v),
        },
        always: {
            type: Boolean,
            default: false,
        },
    },
});
export default {};
;
//# sourceMappingURL=scrollbar.vue.js.map