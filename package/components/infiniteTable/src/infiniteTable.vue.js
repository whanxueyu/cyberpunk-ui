var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ref, computed, onMounted, reactive } from 'vue';
defineOptions({
    name: 'CyberInfiniteTable',
});
const props = withDefaults(defineProps(), {
    data: () => [],
    columns: () => [],
    theme: 'neon',
    rowHeight: 40,
    bufferSize: 5,
    scrollType: 'single',
    showScanline: true,
    autoScroll: true,
    rowNum: 5,
    waitTime: 2000,
    hoverPause: true
});
const bodyRef = ref(null);
const isLoading = ref(false);
const hasMore = ref(true);
const currentPage = ref(1);
const animationIndex = ref(0);
const isPaused = ref(false);
const updater = ref(0);
const internalData = reactive([]);
if (props.data.length > 0) {
    internalData.splice(0, internalData.length, ...props.data);
}
let uniqueIdCounter = 0;
const generateUniqueKey = () => {
    return `row-${++uniqueIdCounter}-${Date.now()}`;
};
const tableHeight = computed(() => {
    return props.rowNum * props.rowHeight;
});
const bodyHeight = computed(() => {
    return tableHeight.value;
});
const visibleRows = computed(() => {
    const dataLength = internalData.length;
    const displayNum = props.rowNum;
    if (dataLength === 0)
        return [];
    if (dataLength <= displayNum) {
        return internalData.map((row, i) => ({
            key: row._uniqueKey || generateUniqueKey(),
            data: row,
            index: i
        }));
    }
    let rowsData = [...internalData];
    if (dataLength > displayNum && dataLength < 2 * displayNum) {
        rowsData = [...rowsData, ...rowsData];
    }
    rowsData = rowsData.map((d, i) => ({
        key: d._uniqueKey || generateUniqueKey(),
        data: d,
        index: i,
        scroll: i
    }));
    let rows = rowsData.slice(animationIndex.value);
    rows.push(...rowsData.slice(0, animationIndex.value));
    const visibleRows = rows.slice(0, displayNum);
    return visibleRows;
});
const getColumnWidth = (index) => {
    var _a;
    if ((_a = props.columns[index]) === null || _a === void 0 ? void 0 : _a.width) {
        return props.columns[index].width;
    }
    return 'auto';
};
const getTextAlign = (align) => {
    if (align === 'center')
        return 'center';
    if (align === 'right')
        return 'flex-end';
    return 'flex-start';
};
const getHeaderBgColor = () => {
    if (props.theme === 'neon')
        return 'rgba(0, 230, 246, 0.15)';
    if (props.theme === 'hologram')
        return 'rgba(138, 43, 226, 0.2)';
    if (props.theme === 'terminal')
        return 'rgba(0, 255, 0, 0.15)';
    if (props.theme === 'matrix')
        return 'rgba(0, 255, 65, 0.15)';
    return 'rgba(0, 230, 246, 0.15)';
};
const getRowBackgroundColor = (index) => {
    const actualIndex = (animationIndex.value + index) % internalData.length;
    if (actualIndex % 2 === 0) {
        return 'var(--table-row-bg)';
    }
    return 'var(--table-row-hover)';
};
const getCellValue = (row, field) => {
    const keys = field.split('.');
    let value = row;
    for (const key of keys) {
        value = value === null || value === void 0 ? void 0 : value[key];
    }
    return value !== null && value !== void 0 ? value : '';
};
const loadMoreData = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (isLoading.value || !hasMore.value)
        return;
    isLoading.value = true;
    try {
        if (props.remoteMethod) {
            const result = yield props.remoteMethod({
                page: currentPage.value,
                size: props.bufferSize * 10
            });
            if (result.data && result.data.length > 0) {
                const newData = result.data.map((row) => {
                    if (!row._uniqueKey) {
                        row._uniqueKey = generateUniqueKey();
                    }
                    return row;
                });
                if (currentPage.value === 1) {
                    internalData.splice(0, internalData.length, ...newData);
                }
                else {
                    internalData.push(...newData);
                }
                if (props.data) {
                    props.data.splice(0, props.data.length, ...internalData);
                }
            }
            hasMore.value = (_a = result.hasMore) !== null && _a !== void 0 ? _a : false;
            currentPage.value++;
        }
        else if (props.loadMore) {
            yield props.loadMore();
        }
    }
    catch (error) {
        console.error('Failed to load more data:', error);
        hasMore.value = false;
    }
    finally {
        isLoading.value = false;
    }
});
const startAutoScroll = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!props.autoScroll || isPaused.value)
        return;
    const dataLength = internalData.length;
    const displayNum = props.rowNum;
    if (dataLength <= displayNum)
        return;
    yield new Promise(resolve => setTimeout(resolve, props.waitTime));
    if (isPaused.value)
        return;
    const animate = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isPaused.value)
            return;
        const currentUpdater = updater.value;
        const scrollDistance = props.scrollType === 'page' ? displayNum : 1;
        animationIndex.value = (animationIndex.value + scrollDistance) % dataLength;
        const animDuration = props.scrollType === 'page' ? 500 : 300;
        yield new Promise(resolve => setTimeout(resolve, animDuration));
        if (updater.value !== currentUpdater || isPaused.value)
            return;
        yield new Promise(resolve => setTimeout(resolve, props.waitTime));
        if (updater.value !== currentUpdater || isPaused.value)
            return;
        animate();
    });
    animate();
});
const stopAnimation = () => {
    updater.value = (updater.value + 1) % 999999;
};
const handleMouseEnter = () => {
    if (props.hoverPause) {
        isPaused.value = true;
        stopAnimation();
    }
};
const handleMouseLeave = () => {
    if (props.hoverPause) {
        isPaused.value = false;
        startAutoScroll();
    }
};
onMounted(() => {
    if (props.remoteMethod && internalData.length === 0) {
        loadMoreData();
    }
    if (props.autoScroll) {
        startAutoScroll();
    }
});
debugger;
const __VLS_withDefaultsArg = (function (t) { return t; })({
    data: () => [],
    columns: () => [],
    theme: 'neon',
    rowHeight: 40,
    bufferSize: 5,
    scrollType: 'single',
    showScanline: true,
    autoScroll: true,
    rowNum: 5,
    waitTime: 2000,
    hoverPause: true
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cyber-infinite-table" }, { class: ([`theme-${__VLS_ctx.theme}`, `scroll-${__VLS_ctx.scrollType}`]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "table-header" }, { style: ({ backgroundColor: __VLS_ctx.getHeaderBgColor() }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "header-row" }));
for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ key: (column.field || index) }, { class: "header-cell" }), { style: ({
            width: __VLS_ctx.getColumnWidth(index),
            minWidth: column.minWidth || '100px',
            textAlign: column.align || 'left'
        }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "header-content" }, { style: ({ justifyContent: __VLS_ctx.getTextAlign(column.align || 'left') }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "header-text" }));
    (column.title);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign({ onMouseenter: (__VLS_ctx.handleMouseEnter) }, { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { class: "table-body" }), { ref: "bodyRef" }));
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "rows-container" }, { style: ({ height: __VLS_ctx.bodyHeight + 'px' }) }));
const __VLS_0 = {}.TransitionGroup;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "scroll-list",
}));
const __VLS_2 = __VLS_1({
    name: "scroll-list",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
for (const [row] of __VLS_getVForSourceType((__VLS_ctx.visibleRows))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ class: "table-row" }, { key: (row.key) }), { style: ({
            height: __VLS_ctx.rowHeight + 'px',
            lineHeight: __VLS_ctx.rowHeight + 'px',
            backgroundColor: __VLS_ctx.getRowBackgroundColor(row.index)
        }) }));
    for (const [column, colIndex] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ key: (column.field || colIndex) }, { class: "table-cell" }), { style: ({
                width: __VLS_ctx.getColumnWidth(colIndex),
                minWidth: column.minWidth || '100px',
                justifyContent: __VLS_ctx.getTextAlign(column.align || 'left')
            }) }));
        var __VLS_4 = {
            row: (row.data),
            column: (column),
        };
        var __VLS_5 = __VLS_tryAsConstant(column.field);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "cell-text" }));
        (__VLS_ctx.getCellValue(row.data, column.field));
    }
    if (__VLS_ctx.showScanline) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "row-scanline" }));
    }
}
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "table-border-effect" }));
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
var __VLS_6 = __VLS_5, __VLS_7 = __VLS_4;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            bodyRef: bodyRef,
            bodyHeight: bodyHeight,
            visibleRows: visibleRows,
            getColumnWidth: getColumnWidth,
            getTextAlign: getTextAlign,
            getHeaderBgColor: getHeaderBgColor,
            getRowBackgroundColor: getRowBackgroundColor,
            getCellValue: getCellValue,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
export default {};
;
//# sourceMappingURL=infiniteTable.vue.js.map