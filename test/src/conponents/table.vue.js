import { ref, onMounted } from 'vue';
const columns = ref([
    { key: 'id', title: 'ID', width: 80 },
    { key: 'name', title: '名称', width: 150 },
    { key: 'status', title: '状态', width: 100, sortable: true },
    { key: 'value', title: '数值', width: 120 },
    { key: 'timestamp', title: '时间', width: 180 }
]);
const realTimeData = ref([]);
let dataCounter = 0;
const generateData = () => {
    return {
        id: dataCounter++,
        name: `设备-${Math.floor(Math.random() * 100)}`,
        status: ['online', 'offline', 'warning'][Math.floor(Math.random() * 3)],
        value: Math.floor(Math.random() * 1000),
        timestamp: new Date().toLocaleTimeString()
    };
};
const loadMoreData = () => {
    for (let i = 0; i < 20; i++) {
        realTimeData.value.push(generateData());
    }
};
onMounted(() => {
    for (let i = 0; i < 50; i++) {
        realTimeData.value.push(generateData());
    }
    setInterval(() => {
        realTimeData.value.shift();
        realTimeData.value.push(generateData());
    }, 2000);
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "dashboard" }));
const __VLS_0 = {}.CyberInfiniteTable;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onLoadMore': {} }, { data: (__VLS_ctx.realTimeData), columns: (__VLS_ctx.columns), rowHeight: "45", autoScroll: (true), speed: (2), loop: (true), pauseOnHover: (true), showControls: (true) })));
const __VLS_2 = __VLS_1(Object.assign({ 'onLoadMore': {} }, { data: (__VLS_ctx.realTimeData), columns: (__VLS_ctx.columns), rowHeight: "45", autoScroll: (true), speed: (2), loop: (true), pauseOnHover: (true), showControls: (true) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onLoadMore: (__VLS_ctx.loadMoreData)
};
__VLS_3.slots.default;
{
    const { 'cell-status': __VLS_thisSlot } = __VLS_3.slots;
    const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: (`status-dot ${row.status}`) }));
    (row.status);
}
var __VLS_3;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            columns: columns,
            realTimeData: realTimeData,
            loadMoreData: loadMoreData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=table.vue.js.map