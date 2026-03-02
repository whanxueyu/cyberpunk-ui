var _a, _b;
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
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
        default: 1,
        validator: (value) => value >= 0.5 && value <= 5
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
const isScrolling = ref(false);
const isPaused = ref(false);
const pausedByTouch = ref(false);
const currentSpeed = ref(props.speed);
const scrollRequestId = ref(null);
const currentIndex = ref(0);
const isAdjusting = ref(false);
const sortState = ref({
    key: ((_a = props.defaultSort) === null || _a === void 0 ? void 0 : _a.key) || '',
    order: ((_b = props.defaultSort) === null || _b === void 0 ? void 0 : _b.order) || ''
});
const totalHeight = computed(() => {
    const rowCount = props.data.length + (props.loop ? 2 : 0);
    return rowCount * props.rowHeight;
});
const getRowKey = (row) => {
    var _a, _b;
    if (typeof props.rowKey === 'function') {
        return props.rowKey(row);
    }
    else if (typeof props.rowKey === 'string') {
        return row[props.rowKey];
    }
    return String((_b = (_a = row.id) !== null && _a !== void 0 ? _a : row._id) !== null && _b !== void 0 ? _b : Math.random().toString(36).substr(2, 9));
};
const getRowIndex = (index) => {
    return visibleStartIndex.value + index;
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
const visibleStartIndex = computed(() => {
    return Math.max(0, currentIndex.value - props.bufferSize);
});
const visibleEndIndex = computed(() => {
    return Math.min(props.data.length, currentIndex.value + props.bufferSize + 1);
});
const visibleRows = computed(() => {
    if (props.data.length === 0)
        return [];
    return props.data.slice(visibleStartIndex.value, visibleEndIndex.value);
});
const isRowSelected = (row) => {
    if (!props.selectedRows || props.selectedRows.length === 0)
        return false;
    const rowKey = getRowKey(row);
    return props.selectedRows.some(selectedRow => getRowKey(selectedRow) === rowKey);
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
const offsetY = computed(() => {
    const adjustedIndex = props.loop ? currentIndex.value + 1 : currentIndex.value;
    return -adjustedIndex * props.rowHeight;
});
const scrollFrame = () => {
    if (isPaused.value || isAdjusting.value || props.data.length === 0) {
        return;
    }
    isScrolling.value = true;
    let nextIndex = currentIndex.value + 1;
    if (props.loop) {
        if (nextIndex > props.data.length) {
            isAdjusting.value = true;
            currentIndex.value = 0;
            setTimeout(() => {
                isAdjusting.value = false;
            }, 50);
        }
        else {
            currentIndex.value = nextIndex;
        }
    }
    else {
        if (nextIndex < props.data.length) {
            currentIndex.value = nextIndex;
        }
        else {
            stopAutoScroll();
            return;
        }
    }
    const frameTime = 1000 / (60 * currentSpeed.value);
    scrollRequestId.value = window.setTimeout(() => {
        window.requestAnimationFrame(scrollFrame);
    }, frameTime);
};
const startAutoScroll = () => {
    if (scrollRequestId.value || props.data.length === 0)
        return;
    scrollFrame();
};
const stopAutoScroll = () => {
    if (scrollRequestId.value) {
        clearTimeout(scrollRequestId.value);
        scrollRequestId.value = null;
    }
    isScrolling.value = false;
};
const togglePause = () => {
    isPaused.value = !isPaused.value;
    if (isPaused.value) {
        stopAutoScroll();
        emit('scroll-pause');
    }
    else {
        startAutoScroll();
        emit('scroll-resume');
    }
};
const handleSpeedChange = (event) => {
    const target = event.target;
    currentSpeed.value = parseFloat(target.value);
    if (!isPaused.value) {
        stopAutoScroll();
        startAutoScroll();
    }
};
const handleMouseEnter = () => {
    if (props.pauseOnHover && !isPaused.value) {
        isPaused.value = true;
        stopAutoScroll();
    }
};
const handleMouseLeave = () => {
    if (props.pauseOnHover && isPaused.value && props.autoScroll) {
        isPaused.value = false;
        startAutoScroll();
    }
};
const handleTouchStart = () => {
    if (!isPaused.value) {
        isPaused.value = true;
        pausedByTouch.value = true;
        stopAutoScroll();
    }
};
const handleTouchEnd = () => {
    if (pausedByTouch.value) {
        isPaused.value = false;
        pausedByTouch.value = false;
        if (props.autoScroll)
            startAutoScroll();
    }
};
watch(() => props.data.length, (newLen, oldLen) => {
    if (newLen !== oldLen) {
        currentIndex.value = 0;
        if (props.autoScroll && !isPaused.value) {
            stopAutoScroll();
            startAutoScroll();
        }
    }
});
onMounted(() => {
    const resizeHandler = () => {
        currentIndex.value = Math.min(currentIndex.value, props.data.length - 1);
    };
    window.addEventListener('resize', resizeHandler);
    window.__cyberInfiniteTableResizeHandler = resizeHandler;
    if (props.autoScroll) {
        startAutoScroll();
    }
});
onUnmounted(() => {
    stopAutoScroll();
    const resizeHandler = window.__cyberInfiniteTableResizeHandler;
    if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
        delete window.__cyberInfiniteTableResizeHandler;
    }
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-infinite-table', { 'loading': __VLS_ctx.loading }]) }));
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)(Object.assign({ style: ({ transform: `translateY(${__VLS_ctx.offsetY}px)`, transition: __VLS_ctx.isScrolling ? 'transform 0.3s ease-out' : 'none' }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.colgroup, __VLS_intrinsicElements.colgroup)({});
for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.col, __VLS_intrinsicElements.col)(Object.assign({ key: (`col-${index}`) }, { style: (__VLS_ctx.getColumnStyle(column)) }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
if (__VLS_ctx.loop && __VLS_ctx.data.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)(Object.assign(Object.assign({ key: ('clone-first') }, { class: "clone-row" }), { style: ({ height: `${__VLS_ctx.rowHeight}px` }) }));
    for (const [column, colIndex] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            key: (colIndex),
        });
        (__VLS_ctx.getCellValue(__VLS_ctx.data[__VLS_ctx.data.length - 1], column));
    }
}
for (const [row, rowIndex] of __VLS_getVForSourceType((__VLS_ctx.visibleRows))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)(Object.assign(Object.assign(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.handleRowClick(row);
        } }, { key: (`row-${__VLS_ctx.getRowIndex(rowIndex)}`) }), { class: ({ 'selected': __VLS_ctx.isRowSelected(row) }) }), { style: ({ height: `${__VLS_ctx.rowHeight}px` }) }));
    __VLS_asFunctionalDirective(__VLS_directives.vMemo)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: ([row, __VLS_ctx.sortState]) }), null, null);
    for (const [column, colIndex] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            key: (`cell-${rowIndex}-${colIndex}`),
        });
        var __VLS_0 = {
            row: (row),
            column: (column),
            index: (__VLS_ctx.getRowIndex(rowIndex)),
        };
        var __VLS_1 = __VLS_tryAsConstant(`cell-${column.key}`);
        (__VLS_ctx.getCellValue(row, column));
    }
}
if (__VLS_ctx.loop && __VLS_ctx.data.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)(Object.assign(Object.assign({ key: ('clone-last') }, { class: "clone-row" }), { style: ({ height: `${__VLS_ctx.rowHeight}px` }) }));
    for (const [column, colIndex] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            key: (colIndex),
        });
        (__VLS_ctx.getCellValue(__VLS_ctx.data[0], column));
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
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(Object.assign({ onInput: (__VLS_ctx.handleSpeedChange) }, { type: "range", min: "0.5", max: "5", step: "0.5" }));
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
var __VLS_2 = __VLS_1, __VLS_3 = __VLS_0, __VLS_5 = __VLS_4, __VLS_7 = __VLS_6;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            headerRef: headerRef,
            bodyRef: bodyRef,
            isScrolling: isScrolling,
            isPaused: isPaused,
            currentSpeed: currentSpeed,
            sortState: sortState,
            totalHeight: totalHeight,
            getRowIndex: getRowIndex,
            getCellValue: getCellValue,
            getColumnStyle: getColumnStyle,
            visibleRows: visibleRows,
            isRowSelected: isRowSelected,
            handleRowClick: handleRowClick,
            handleSort: handleSort,
            offsetY: offsetY,
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
            default: 1,
            validator: (value) => value >= 0.5 && value <= 5
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
            default: 1,
            validator: (value) => value >= 0.5 && value <= 5
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