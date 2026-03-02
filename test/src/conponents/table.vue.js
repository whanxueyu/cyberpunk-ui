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
onMounted(() => {
    for (let i = 0; i < 10; i++) {
        realTimeData.value.push(generateData());
    }
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "dashboard" }));
const __VLS_0 = {}.CyberInfiniteTable;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    data: (__VLS_ctx.realTimeData),
    columns: (__VLS_ctx.columns),
    speed: (0.1),
    loop: (true),
    pauseOnHover: (true),
    theme: "neon",
}));
const __VLS_2 = __VLS_1({
    data: (__VLS_ctx.realTimeData),
    columns: (__VLS_ctx.columns),
    speed: (0.1),
    loop: (true),
    pauseOnHover: (true),
    theme: "neon",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
{
    const { 'cell-status': __VLS_thisSlot } = __VLS_3.slots;
    const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: (`status-indicator ${row.status}`) }));
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