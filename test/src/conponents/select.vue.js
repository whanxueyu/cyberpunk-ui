import { ref } from 'vue';
const eventLog = ref('等待操作...');
const options = ref([
    { label: '选项 1', value: 'option1' },
    { label: '选项 2', value: 'option2' },
    { label: '选项 3', value: 'option3' },
    { label: '选项 4', value: 'option4' },
    { label: '选项 5', value: 'option5' },
]);
const longOptions = ref([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
    { label: 'Elderberry', value: 'elderberry' },
    { label: 'Fig', value: 'fig' },
    { label: 'Grape', value: 'grape' },
    { label: 'Honeydew', value: 'honeydew' },
    { label: 'Kiwi', value: 'kiwi' },
    { label: 'Lemon', value: 'lemon' },
    { label: 'Mango', value: 'mango' },
    { label: 'Nectarine', value: 'nectarine' },
    { label: 'Orange', value: 'orange' },
    { label: 'Papaya', value: 'papaya' },
    { label: 'Quince', value: 'quince' },
]);
const customOptions = ref([
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    { id: 3, name: 'Project Gamma' },
    { id: 4, name: 'Project Delta' },
]);
const groupOptions = ref([
    {
        label: '前端技术',
        options: [
            { label: 'Vue.js', value: 'vue' },
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
        ]
    },
    {
        label: '后端技术',
        options: [
            { label: 'Node.js', value: 'node' },
            { label: 'Python', value: 'python' },
            { label: 'Java', value: 'java' },
        ]
    },
    {
        label: '数据库',
        options: [
            { label: 'MySQL', value: 'mysql' },
            { label: 'MongoDB', value: 'mongodb' },
            { label: 'PostgreSQL', value: 'postgresql' },
        ]
    },
]);
const selectedValue = ref('');
const searchValue = ref('');
const multiValues = ref([]);
const customValue = ref(null);
const eventValue = ref('');
const groupValue = ref('');
const handleChange = (value) => {
    eventLog.value = `change: 选中值变为 "${value}"`;
    console.log('Change event:', value);
};
const handleFocus = () => {
    eventLog.value = 'focus: 选择器获得焦点';
    console.log('Focus event');
};
const handleBlur = () => {
    eventLog.value = 'blur: 选择器失去焦点';
    console.log('Blur event');
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "form-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
const __VLS_0 = {}.CyberSelect;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.selectedValue),
    options: (__VLS_ctx.options),
    placeholder: "请选择...",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.selectedValue),
    options: (__VLS_ctx.options),
    placeholder: "请选择...",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "result-display" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.selectedValue || '未选择');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "form-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
const __VLS_4 = {}.CyberSelect;
;
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    modelValue: (__VLS_ctx.selectedValue),
    options: (__VLS_ctx.options),
    disabled: true,
}));
const __VLS_6 = __VLS_5({
    modelValue: (__VLS_ctx.selectedValue),
    options: (__VLS_ctx.options),
    disabled: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-grid three" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_8 = {}.CyberSelect;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    size: "large",
    options: (__VLS_ctx.options),
    placeholder: "大尺寸",
}));
const __VLS_10 = __VLS_9({
    size: "large",
    options: (__VLS_ctx.options),
    placeholder: "大尺寸",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_12 = {}.CyberSelect;
;
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    size: "default",
    options: (__VLS_ctx.options),
    placeholder: "默认尺寸",
}));
const __VLS_14 = __VLS_13({
    size: "default",
    options: (__VLS_ctx.options),
    placeholder: "默认尺寸",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_16 = {}.CyberSelect;
;
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    size: "small",
    options: (__VLS_ctx.options),
    placeholder: "小尺寸",
}));
const __VLS_18 = __VLS_17({
    size: "small",
    options: (__VLS_ctx.options),
    placeholder: "小尺寸",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-grid" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_20 = {}.CyberSelect;
;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    theme: "neon",
    options: (__VLS_ctx.options),
    placeholder: "霓虹主题",
}));
const __VLS_22 = __VLS_21({
    theme: "neon",
    options: (__VLS_ctx.options),
    placeholder: "霓虹主题",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_24 = {}.CyberSelect;
;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    theme: "terminal",
    options: (__VLS_ctx.options),
    placeholder: "终端主题",
}));
const __VLS_26 = __VLS_25({
    theme: "terminal",
    options: (__VLS_ctx.options),
    placeholder: "终端主题",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_28 = {}.CyberSelect;
;
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    theme: "matrix",
    options: (__VLS_ctx.options),
    placeholder: "矩阵主题",
}));
const __VLS_30 = __VLS_29({
    theme: "matrix",
    options: (__VLS_ctx.options),
    placeholder: "矩阵主题",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "demo-label" }));
const __VLS_32 = {}.CyberSelect;
;
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    theme: "hologram",
    options: (__VLS_ctx.options),
    placeholder: "全息主题",
}));
const __VLS_34 = __VLS_33({
    theme: "hologram",
    options: (__VLS_ctx.options),
    placeholder: "全息主题",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "form-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
const __VLS_36 = {}.CyberSelect;
;
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    modelValue: (__VLS_ctx.searchValue),
    options: (__VLS_ctx.longOptions),
    filterable: true,
    placeholder: "输入关键词搜索...",
}));
const __VLS_38 = __VLS_37({
    modelValue: (__VLS_ctx.searchValue),
    options: (__VLS_ctx.longOptions),
    filterable: true,
    placeholder: "输入关键词搜索...",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "result-display" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.searchValue || '未选择');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "form-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
const __VLS_40 = {}.CyberSelect;
;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    modelValue: (__VLS_ctx.multiValues),
    options: (__VLS_ctx.options),
    multiple: true,
    placeholder: "请选择多个选项...",
}));
const __VLS_42 = __VLS_41({
    modelValue: (__VLS_ctx.multiValues),
    options: (__VLS_ctx.options),
    multiple: true,
    placeholder: "请选择多个选项...",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "result-display" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.multiValues.length > 0 ? __VLS_ctx.multiValues.join(', ') : '未选择');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "form-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
const __VLS_44 = {}.CyberSelect;
;
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    modelValue: (__VLS_ctx.customValue),
    options: (__VLS_ctx.customOptions),
    labelKey: "name",
    valueKey: "id",
    placeholder: "选择项目...",
}));
const __VLS_46 = __VLS_45({
    modelValue: (__VLS_ctx.customValue),
    options: (__VLS_ctx.customOptions),
    labelKey: "name",
    valueKey: "id",
    placeholder: "选择项目...",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "result-display" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.customValue || '未选择');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "event-log" }));
(__VLS_ctx.eventLog);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "form-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
const __VLS_48 = {}.CyberSelect;
;
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(Object.assign(Object.assign(Object.assign({ 'onChange': {} }, { 'onFocus': {} }), { 'onBlur': {} }), { modelValue: (__VLS_ctx.eventValue), options: (__VLS_ctx.options), placeholder: "触发事件..." })));
const __VLS_50 = __VLS_49(Object.assign(Object.assign(Object.assign({ 'onChange': {} }, { 'onFocus': {} }), { 'onBlur': {} }), { modelValue: (__VLS_ctx.eventValue), options: (__VLS_ctx.options), placeholder: "触发事件..." }), ...__VLS_functionalComponentArgsRest(__VLS_49));
let __VLS_52;
let __VLS_53;
let __VLS_54;
const __VLS_55 = {
    onChange: (__VLS_ctx.handleChange)
};
const __VLS_56 = {
    onFocus: (__VLS_ctx.handleFocus)
};
const __VLS_57 = {
    onBlur: (__VLS_ctx.handleBlur)
};
var __VLS_51;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(Object.assign({ class: "code-block" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)(Object.assign({ class: "html" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "form-item" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
const __VLS_58 = {}.CyberSelect;
;
const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({
    modelValue: (__VLS_ctx.groupValue),
    options: (__VLS_ctx.groupOptions),
    placeholder: "选择分组选项...",
}));
const __VLS_60 = __VLS_59({
    modelValue: (__VLS_ctx.groupValue),
    options: (__VLS_ctx.groupOptions),
    placeholder: "选择分组选项...",
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "result-display" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.groupValue || '未选择');
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
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            eventLog: eventLog,
            options: options,
            longOptions: longOptions,
            customOptions: customOptions,
            groupOptions: groupOptions,
            selectedValue: selectedValue,
            searchValue: searchValue,
            multiValues: multiValues,
            customValue: customValue,
            eventValue: eventValue,
            groupValue: groupValue,
            handleChange: handleChange,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=select.vue.js.map