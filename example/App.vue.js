import HelloWorld from './components/HelloWorld.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const handleClick = () => {
    console.log('click');
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    [HelloWorld,];
    const __VLS_0 = __VLS_asFunctionalComponent(HelloWorld, new HelloWorld({ msg: ("Vite + Vue"), }));
    const __VLS_1 = __VLS_0({ msg: ("Vite + Vue"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ msg: ("Vite + Vue"), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(HelloWorld, __VLS_1));
    const __VLS_5 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(Object.assign({ 'onClick': {} })));
    const __VLS_7 = __VLS_6(Object.assign({ 'onClick': {} }), ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}(Object.assign({ 'onClick': {} })));
    let __VLS_11;
    const __VLS_12 = {
        onClick: (__VLS_ctx.handleClick)
    };
    const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7));
    let __VLS_8;
    let __VLS_9;
    [handleClick,];
    __VLS_nonNullable(__VLS_10.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                HelloWorld: HelloWorld,
                handleClick: handleClick,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

//# sourceMappingURL=App.vue.js.map