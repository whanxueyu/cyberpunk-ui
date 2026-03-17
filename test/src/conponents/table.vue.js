import { ref, onMounted } from "vue";
const columns = ref([
    { title: "ID", field: "id", width: "80px", align: "center" },
    { title: "Name", field: "name", minWidth: "150px" },
    { title: "Email", field: "email", minWidth: "200px" },
    { title: "Status", field: "status", width: "100px", align: "center" },
    { title: "Department", field: "department", minWidth: "150px" },
]);
const localData = ref([]);
const generateLocalData = (count) => {
    const statuses = ["online", "offline", "warning", "error"];
    const departments = ["Engineering", "Design", "Marketing", "Sales", "HR"];
    const names = [
        "Alice",
        "Bob",
        "Charlie",
        "Diana",
        "Eve",
        "Frank",
        "Grace",
        "Henry",
    ];
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `${names[i % names.length]}_${i + 1}`,
        email: `user${i + 1}@cyberpunk.ui`,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        department: departments[Math.floor(Math.random() * departments.length)],
    }));
};
localData.value = generateLocalData(1000);
onMounted(() => {
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "dashboard" }));
const __VLS_0 = {}.CyberInfiniteTable;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    autoScroll: (true),
    rowNum: (5),
    waitTime: (1000),
    hoverPause: (true),
    rowHeight: (40),
}));
const __VLS_2 = __VLS_1({
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    autoScroll: (true),
    rowNum: (5),
    waitTime: (1000),
    hoverPause: (true),
    rowHeight: (40),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_4 = {}.CyberInfiniteTable;
;
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    theme: "hologram",
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    autoScroll: (true),
    rowNum: (5),
    scrollType: "page",
    waitTime: (2000),
    hoverPause: (true),
    rowHeight: (40),
}));
const __VLS_6 = __VLS_5({
    theme: "hologram",
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    autoScroll: (true),
    rowNum: (5),
    scrollType: "page",
    waitTime: (2000),
    hoverPause: (true),
    rowHeight: (40),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.CyberInfiniteTable;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    theme: "terminal",
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    autoScroll: (true),
    rowNum: (5),
    scrollType: "page",
    waitTime: (3000),
    hoverPause: (true),
    rowHeight: (40),
}));
const __VLS_10 = __VLS_9({
    theme: "terminal",
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    autoScroll: (true),
    rowNum: (5),
    scrollType: "page",
    waitTime: (3000),
    hoverPause: (true),
    rowHeight: (40),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_12 = {}.CyberInfiniteTable;
;
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    theme: "matrix",
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    rowNum: (5),
    waitTime: (2000),
    hoverPause: (true),
    rowHeight: (40),
}));
const __VLS_14 = __VLS_13({
    theme: "matrix",
    data: (__VLS_ctx.localData),
    columns: (__VLS_ctx.columns),
    rowNum: (5),
    waitTime: (2000),
    hoverPause: (true),
    rowHeight: (40),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            columns: columns,
            localData: localData,
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