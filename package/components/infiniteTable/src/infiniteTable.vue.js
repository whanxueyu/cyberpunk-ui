var _a, _b;
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
defineOptions({
    name: 'CyberInfiniteTable',
});
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    columns: {
        type: Array,
        required: true
    },
    rowKey: {
        type: [String, Function],
        default: 'id'
    },
    rowHeight: {
        type: Number,
        default: 40
    },
    loading: {
        type: Boolean,
        default: false
    },
    selectedRows: {
        type: Array,
        default: () => []
    },
    defaultSort: {
        type: Object,
        default: () => ({ key: '', order: 'asc' })
    },
    autoScroll: {
        type: Boolean,
        default: true
    },
    speed: {
        type: Number,
        default: 1.5,
        validator: (value) => value >= 0.1 && value <= 5
    },
    loop: {
        type: Boolean,
        default: true
    },
    pauseOnHover: {
        type: Boolean,
        default: true
    },
    showControls: {
        type: Boolean,
        default: true
    },
    bufferSize: {
        type: Number,
        default: 5
    }
});
const emit = defineEmits(['row-click', 'sort-change', 'load-more', 'scroll-pause', 'scroll-resume']);
const headerRef = ref(null);
const bodyRef = ref(null);
const startIndex = ref(0);
const endIndex = ref(0);
const offsetY = ref(0);
const visibleCount = ref(0);
const isScrolling = ref(false);
const isPaused = ref(false);
const currentSpeed = ref(props.speed);
const autoScrollFrame = ref(null);
const lastScrollTime = ref(0);
const isTouching = ref(false);
const sortState = ref({
    key: ((_a = props.defaultSort) === null || _a === void 0 ? void 0 : _a.key) || '',
    order: ((_b = props.defaultSort) === null || _b === void 0 ? void 0 : _b.order) || ''
});
const totalHeight = computed(() => {
    var _a;
    return (((_a = props.data) === null || _a === void 0 ? void 0 : _a.length) || 0) * props.rowHeight;
});
const visibleData = computed(() => {
    if (!props.data || props.data.length === 0)
        return [];
    let sortedData = [...props.data];
    if (sortState.value.key && sortState.value.order) {
        sortedData.sort((a, b) => {
            const aValue = a[sortState.value.key];
            const bValue = b[sortState.value.key];
            if (sortState.value.order === 'asc') {
                return aValue > bValue ? 1 : -1;
            }
            else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }
    return sortedData.slice(startIndex.value, endIndex.value);
});
const getRowKey = (row, index) => {
    if (typeof props.rowKey === 'function') {
        return props.rowKey(row);
    }
    else if (typeof props.rowKey === 'string') {
        return row[props.rowKey];
    }
    return `row-${index}`;
};
const getCellValue = (row, column) => {
    if (column.formatter) {
        return column.formatter(row, column, props.data.indexOf(row));
    }
    return row[column.key];
};
const getColumnStyle = (column) => {
    if (column.width) {
        return { width: typeof column.width === 'number' ? `${column.width}px` : column.width };
    }
    return {};
};
const isRowSelected = (row) => {
    if (!props.selectedRows || props.selectedRows.length === 0)
        return false;
    const rowKey = getRowKey(row, props.data.indexOf(row));
    return props.selectedRows.some((selectedRow) => {
        const selectedRowKey = getRowKey(selectedRow, props.data.indexOf(selectedRow));
        return rowKey === selectedRowKey;
    });
};
const handleRowClick = (row) => {
    emit('row-click', row);
};
const handleSort = (column) => {
    if (!column.sortable)
        return;
    let order = 'asc';
    if (sortState.value.key === column.key) {
        if (sortState.value.order === 'asc') {
            order = 'desc';
        }
        else if (sortState.value.order === 'desc') {
            order = '';
        }
        else {
            order = 'asc';
        }
    }
    sortState.value = {
        key: column.key,
        order
    };
    emit('sort-change', Object.assign({}, sortState.value));
};
const handleScroll = () => {
    if (!bodyRef.value)
        return;
    const scrollTop = bodyRef.value.scrollTop;
    const clientHeight = bodyRef.value.clientHeight;
    const newStartIndex = Math.max(0, Math.floor(scrollTop / props.rowHeight) - props.bufferSize);
    const newEndIndex = Math.min(props.data.length, Math.ceil((scrollTop + clientHeight) / props.rowHeight) + props.bufferSize);
    const newOffsetY = newStartIndex * props.rowHeight;
    startIndex.value = newStartIndex;
    endIndex.value = newEndIndex;
    offsetY.value = newOffsetY;
    if (newEndIndex >= props.data.length - 10 && !props.loading) {
        emit('load-more');
    }
};
const updateVisibleCount = () => {
    if (!bodyRef.value)
        return;
    const clientHeight = bodyRef.value.clientHeight;
    visibleCount.value = Math.ceil(clientHeight / props.rowHeight) + 2 * props.bufferSize;
    endIndex.value = Math.min(props.data.length, visibleCount.value);
};
const syncHeaderScroll = () => {
    if (!headerRef.value || !bodyRef.value)
        return;
    headerRef.value.scrollLeft = bodyRef.value.scrollLeft;
};
const autoScroll = () => {
    if (!bodyRef.value || isPaused.value || isTouching.value) {
        return;
    }
    const now = Date.now();
    const deltaTime = now - lastScrollTime.value;
    lastScrollTime.value = now;
    const scrollAmount = (currentSpeed.value * deltaTime) / 16;
    bodyRef.value.scrollTop += scrollAmount;
    if (bodyRef.value.scrollTop + bodyRef.value.clientHeight >= bodyRef.value.scrollHeight) {
        if (props.loop) {
            smoothScrollTo(0, 300);
        }
        else {
            isScrolling.value = false;
            return;
        }
    }
    autoScrollFrame.value = requestAnimationFrame(autoScroll);
};
const smoothScrollTo = (target, duration = 300) => {
    if (!bodyRef.value)
        return;
    const start = bodyRef.value.scrollTop;
    const startTime = performance.now();
    const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = progress * (2 - progress);
        if (bodyRef.value)
            bodyRef.value.scrollTop = start + (target - start) * easeProgress;
        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
        else {
            if (bodyRef.value)
                bodyRef.value.scrollTop = target;
            lastScrollTime.value = Date.now();
            if (props.autoScroll && !isPaused.value) {
                autoScrollFrame.value = requestAnimationFrame(autoScroll);
            }
        }
    };
    if (autoScrollFrame.value) {
        cancelAnimationFrame(autoScrollFrame.value);
        autoScrollFrame.value = null;
    }
    requestAnimationFrame(animateScroll);
};
const togglePause = () => {
    isPaused.value = !isPaused.value;
    if (isPaused.value) {
        if (autoScrollFrame.value) {
            cancelAnimationFrame(autoScrollFrame.value);
            autoScrollFrame.value = null;
        }
        emit('scroll-pause');
    }
    else {
        lastScrollTime.value = Date.now();
        autoScrollFrame.value = requestAnimationFrame(autoScroll);
        emit('scroll-resume');
    }
};
const handleSpeedChange = (event) => {
    const target = event.target;
    currentSpeed.value = parseFloat(target.value);
};
const handleMouseEnter = () => {
    if (props.pauseOnHover && !isTouching.value) {
        isPaused.value = true;
    }
};
const handleMouseLeave = () => {
    if (props.pauseOnHover && !isTouching.value && !isPaused.value) {
        lastScrollTime.value = Date.now();
        autoScrollFrame.value = requestAnimationFrame(autoScroll);
    }
};
const handleTouchStart = () => {
    isTouching.value = true;
    if (!isPaused.value) {
        isPaused.value = true;
        if (autoScrollFrame.value) {
            cancelAnimationFrame(autoScrollFrame.value);
            autoScrollFrame.value = null;
        }
    }
};
const handleTouchEnd = () => {
    isTouching.value = false;
    if (!isPaused.value && props.autoScroll) {
        lastScrollTime.value = Date.now();
        autoScrollFrame.value = requestAnimationFrame(autoScroll);
    }
};
watch(() => props.data, () => {
    nextTick(() => {
        handleScroll();
        if (props.autoScroll && !isPaused.value && !isTouching.value) {
            lastScrollTime.value = Date.now();
            autoScrollFrame.value = requestAnimationFrame(autoScroll);
        }
    });
}, { deep: true });
watch(() => props.defaultSort, (newVal) => {
    if (newVal && newVal.key) {
        sortState.value = Object.assign({}, newVal);
    }
}, { deep: true });
watch(() => props.autoScroll, (newVal) => {
    if (newVal && !isPaused.value && !isTouching.value) {
        lastScrollTime.value = Date.now();
        autoScrollFrame.value = requestAnimationFrame(autoScroll);
    }
    else {
        if (autoScrollFrame.value) {
            cancelAnimationFrame(autoScrollFrame.value);
            autoScrollFrame.value = null;
        }
    }
});
onMounted(() => {
    updateVisibleCount();
    if (bodyRef.value) {
        bodyRef.value.addEventListener('scroll', handleScroll);
        bodyRef.value.addEventListener('scroll', syncHeaderScroll);
    }
    window.addEventListener('resize', updateVisibleCount);
    if (props.autoScroll) {
        isScrolling.value = true;
        lastScrollTime.value = Date.now();
        autoScrollFrame.value = requestAnimationFrame(autoScroll);
    }
});
onUnmounted(() => {
    if (autoScrollFrame.value) {
        cancelAnimationFrame(autoScrollFrame.value);
        autoScrollFrame.value = null;
    }
    if (bodyRef.value) {
        bodyRef.value.removeEventListener('scroll', handleScroll);
        bodyRef.value.removeEventListener('scroll', syncHeaderScroll);
    }
    window.removeEventListener('resize', updateVisibleCount);
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-auto-scroll-table', { 'scrolling': __VLS_ctx.isScrolling, 'paused': __VLS_ctx.isPaused, 'loading': __VLS_ctx.loading }]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "table-header" }, { ref: "headerRef" }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.colgroup, __VLS_intrinsicElements.colgroup)({});
for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.col, __VLS_intrinsicElements.col)(Object.assign({ key: (`col-${index}`) }, { style: (__VLS_ctx.getColumnStyle(column)) }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)(Object.assign(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.handleSort(column);
        } }, { key: (`header-${index}`) }), { class: ({ 'sortable': column.sortable }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "th-content" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (column.title);
    if (column.sortable) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "sort-icon" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "sort-up" }, { class: ({ 'active': __VLS_ctx.sortState.key === column.key && __VLS_ctx.sortState.order === 'asc' }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "sort-down" }, { class: ({ 'active': __VLS_ctx.sortState.key === column.key && __VLS_ctx.sortState.order === 'desc' }) }));
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onMouseenter: (__VLS_ctx.handleMouseEnter) }, { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { onTouchstart: (__VLS_ctx.handleTouchStart) }), { onTouchend: (__VLS_ctx.handleTouchEnd) }), { class: "table-body" }), { ref: "bodyRef" }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "scroll-container" }, { style: ({ height: `${__VLS_ctx.totalHeight}px` }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)(Object.assign({ style: ({ transform: `translateY(${__VLS_ctx.offsetY}px)` }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.colgroup, __VLS_intrinsicElements.colgroup)({});
for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.col, __VLS_intrinsicElements.col)(Object.assign({ key: (`col-${index}`) }, { style: (__VLS_ctx.getColumnStyle(column)) }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
for (const [row, rowIndex] of __VLS_getVForSourceType((__VLS_ctx.visibleData))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)(Object.assign(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.handleRowClick(row);
        } }, { key: (__VLS_ctx.getRowKey(row, rowIndex)) }), { class: ({ 'selected': __VLS_ctx.isRowSelected(row) }) }));
    for (const [column, colIndex] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            key: (`cell-${rowIndex}-${colIndex}`),
        });
        var __VLS_0 = {
            row: (row),
            column: (column),
            index: (__VLS_ctx.startIndex + rowIndex),
        };
        var __VLS_1 = __VLS_tryAsConstant(`cell-${column.key}`);
        (__VLS_ctx.getCellValue(row, column));
    }
}
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "loading-overlay" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "loading-spinner" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "spinner-circle" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "spinner-text" }));
}
if (!__VLS_ctx.loading && (!__VLS_ctx.data || __VLS_ctx.data.length === 0)) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "empty-data" }));
    var __VLS_4 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "empty-content" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "empty-icon" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "empty-text" }));
}
if (__VLS_ctx.showControls) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "table-controls" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.togglePause) }, { class: "control-button" }));
    if (__VLS_ctx.isPaused) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "control-speed" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(Object.assign({ onInput: (__VLS_ctx.handleSpeedChange) }, { type: "range", min: "0.1", max: "5", step: "0.1" }));
    (__VLS_ctx.currentSpeed);
}
if (__VLS_ctx.$slots.footer) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "table-footer" }));
    var __VLS_6 = {};
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "table-scanline" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "table-glitch-effect" }));
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
var __VLS_2 = __VLS_1, __VLS_3 = __VLS_0, __VLS_5 = __VLS_4, __VLS_7 = __VLS_6;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            headerRef: headerRef,
            bodyRef: bodyRef,
            startIndex: startIndex,
            offsetY: offsetY,
            isScrolling: isScrolling,
            isPaused: isPaused,
            currentSpeed: currentSpeed,
            sortState: sortState,
            totalHeight: totalHeight,
            visibleData: visibleData,
            getRowKey: getRowKey,
            getCellValue: getCellValue,
            getColumnStyle: getColumnStyle,
            isRowSelected: isRowSelected,
            handleRowClick: handleRowClick,
            handleSort: handleSort,
            togglePause: togglePause,
            handleSpeedChange: handleSpeedChange,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
            handleTouchStart: handleTouchStart,
            handleTouchEnd: handleTouchEnd,
        };
    },
    emits: {},
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            required: true
        },
        rowKey: {
            type: [String, Function],
            default: 'id'
        },
        rowHeight: {
            type: Number,
            default: 40
        },
        loading: {
            type: Boolean,
            default: false
        },
        selectedRows: {
            type: Array,
            default: () => []
        },
        defaultSort: {
            type: Object,
            default: () => ({ key: '', order: 'asc' })
        },
        autoScroll: {
            type: Boolean,
            default: true
        },
        speed: {
            type: Number,
            default: 1.5,
            validator: (value) => value >= 0.1 && value <= 5
        },
        loop: {
            type: Boolean,
            default: true
        },
        pauseOnHover: {
            type: Boolean,
            default: true
        },
        showControls: {
            type: Boolean,
            default: true
        },
        bufferSize: {
            type: Number,
            default: 5
        }
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            required: true
        },
        rowKey: {
            type: [String, Function],
            default: 'id'
        },
        rowHeight: {
            type: Number,
            default: 40
        },
        loading: {
            type: Boolean,
            default: false
        },
        selectedRows: {
            type: Array,
            default: () => []
        },
        defaultSort: {
            type: Object,
            default: () => ({ key: '', order: 'asc' })
        },
        autoScroll: {
            type: Boolean,
            default: true
        },
        speed: {
            type: Number,
            default: 1.5,
            validator: (value) => value >= 0.1 && value <= 5
        },
        loop: {
            type: Boolean,
            default: true
        },
        pauseOnHover: {
            type: Boolean,
            default: true
        },
        showControls: {
            type: Boolean,
            default: true
        },
        bufferSize: {
            type: Number,
            default: 5
        }
    },
});
export default {};
;
//# sourceMappingURL=infiniteTable.vue.js.map