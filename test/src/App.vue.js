import { useDark, useToggle } from '@vueuse/core';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isDark = useDark({
    storageKey: 'useDarkKEY',
    valueDark: 'dark',
    valueLight: 'light',
});
const toggleDark = useToggle(isDark);
const sectionList = [
    {
        title: '按钮样式'
    },
    {
        title: '按钮大小'
    },
    {
        title: '霓虹按钮'
    },
    {
        title: '按钮样式'
    },
];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("main") }));
    const __VLS_0 = {}
        .CpFullPage;
    ({}.CpFullPage);
    ({}.CpFullPage);
    __VLS_components.CpFullPage;
    __VLS_components.cpFullPage;
    __VLS_components.CpFullPage;
    __VLS_components.cpFullPage;
    [CpFullPage, CpFullPage,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ sectionList: ((__VLS_ctx.sectionList)), }));
    const __VLS_2 = __VLS_1({ sectionList: ((__VLS_ctx.sectionList)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ sectionList: ((__VLS_ctx.sectionList)), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("header") }));
    const __VLS_6 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(Object.assign({ 'onClick': {} }, { type: ("primary"), bg: (true), size: ("small") })));
    const __VLS_8 = __VLS_7(Object.assign({ 'onClick': {} }, { type: ("primary"), bg: (true), size: ("small") }), ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}(Object.assign({ 'onClick': {} }, { type: ("primary"), bg: (true), size: ("small") })));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (...[$event]) => {
            __VLS_ctx.toggleDark();
            [sectionList, toggleDark,];
        }
    };
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    let __VLS_9;
    let __VLS_10;
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    const __VLS_14 = {}
        .CpText;
    ({}.CpText);
    ({}.CpText);
    __VLS_components.CpText;
    __VLS_components.cpText;
    __VLS_components.CpText;
    __VLS_components.cpText;
    [CpText, CpText,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    __VLS_nonNullable(__VLS_19.slots).default;
    const __VLS_20 = {}
        .CpShadowText;
    ({}.CpShadowText);
    ({}.CpShadowText);
    __VLS_components.CpShadowText;
    __VLS_components.cpShadowText;
    __VLS_components.CpShadowText;
    __VLS_components.cpShadowText;
    [CpShadowText, CpShadowText,];
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({}));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    __VLS_nonNullable(__VLS_25.slots).default;
    const __VLS_26 = {}
        .CpGlowText;
    ({}.CpGlowText);
    ({}.CpGlowText);
    __VLS_components.CpGlowText;
    __VLS_components.cpGlowText;
    __VLS_components.CpGlowText;
    __VLS_components.cpGlowText;
    [CpGlowText, CpGlowText,];
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({}));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_32 = {}
        .CpTyping;
    ({}.CpTyping);
    ({}.CpTyping);
    __VLS_components.CpTyping;
    __VLS_components.cpTyping;
    __VLS_components.CpTyping;
    __VLS_components.cpTyping;
    [CpTyping, CpTyping,];
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({}));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    __VLS_nonNullable(__VLS_37.slots).default;
    const __VLS_38 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ type: ("primary"), content: ("PRIMARY"), }));
    const __VLS_40 = __VLS_39({ type: ("primary"), content: ("PRIMARY"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ type: ("primary"), content: ("PRIMARY"), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    __VLS_nonNullable(__VLS_43.slots).default;
    const __VLS_44 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ type: ("success"), content: ("SUCCESS"), }));
    const __VLS_46 = __VLS_45({ type: ("success"), content: ("SUCCESS"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ type: ("success"), content: ("SUCCESS"), }));
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    __VLS_nonNullable(__VLS_49.slots).default;
    const __VLS_50 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ type: ("warning"), content: ("WARNING"), }));
    const __VLS_52 = __VLS_51({ type: ("warning"), content: ("WARNING"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ type: ("warning"), content: ("WARNING"), }));
    const __VLS_55 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52));
    __VLS_nonNullable(__VLS_55.slots).default;
    const __VLS_56 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ type: ("danger"), content: ("DANGER"), }));
    const __VLS_58 = __VLS_57({ type: ("danger"), content: ("DANGER"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ type: ("danger"), content: ("DANGER"), }));
    const __VLS_61 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58));
    __VLS_nonNullable(__VLS_61.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_62 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ type: ("primary"), size: ("large"), content: ("PRIMARY"), }));
    const __VLS_64 = __VLS_63({ type: ("primary"), size: ("large"), content: ("PRIMARY"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ type: ("primary"), size: ("large"), content: ("PRIMARY"), }));
    const __VLS_67 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64));
    __VLS_nonNullable(__VLS_67.slots).default;
    const __VLS_68 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ type: ("success"), size: ("large"), content: ("SUCCESS"), }));
    const __VLS_70 = __VLS_69({ type: ("success"), size: ("large"), content: ("SUCCESS"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ type: ("success"), size: ("large"), content: ("SUCCESS"), }));
    const __VLS_73 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70));
    __VLS_nonNullable(__VLS_73.slots).default;
    const __VLS_74 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ type: ("warning"), size: ("large"), content: ("WARNING"), }));
    const __VLS_76 = __VLS_75({ type: ("warning"), size: ("large"), content: ("WARNING"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({ type: ("warning"), size: ("large"), content: ("WARNING"), }));
    const __VLS_79 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76));
    __VLS_nonNullable(__VLS_79.slots).default;
    const __VLS_80 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ type: ("danger"), size: ("large"), content: ("DANGER"), }));
    const __VLS_82 = __VLS_81({ type: ("danger"), size: ("large"), content: ("DANGER"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ type: ("danger"), size: ("large"), content: ("DANGER"), }));
    const __VLS_85 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82));
    __VLS_nonNullable(__VLS_85.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_86 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ type: ("primary"), size: ("default"), content: ("PRIMARY"), }));
    const __VLS_88 = __VLS_87({ type: ("primary"), size: ("default"), content: ("PRIMARY"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ type: ("primary"), size: ("default"), content: ("PRIMARY"), }));
    const __VLS_91 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88));
    __VLS_nonNullable(__VLS_91.slots).default;
    const __VLS_92 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ type: ("success"), size: ("default"), content: ("SUCCESS"), }));
    const __VLS_94 = __VLS_93({ type: ("success"), size: ("default"), content: ("SUCCESS"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}({ type: ("success"), size: ("default"), content: ("SUCCESS"), }));
    const __VLS_97 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94));
    __VLS_nonNullable(__VLS_97.slots).default;
    const __VLS_98 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ type: ("warning"), size: ("default"), content: ("WARNING"), }));
    const __VLS_100 = __VLS_99({ type: ("warning"), size: ("default"), content: ("WARNING"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ type: ("warning"), size: ("default"), content: ("WARNING"), }));
    const __VLS_103 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100));
    __VLS_nonNullable(__VLS_103.slots).default;
    const __VLS_104 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ type: ("danger"), size: ("default"), content: ("DANGER"), }));
    const __VLS_106 = __VLS_105({ type: ("danger"), size: ("default"), content: ("DANGER"), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ type: ("danger"), size: ("default"), content: ("DANGER"), }));
    const __VLS_109 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106));
    __VLS_nonNullable(__VLS_109.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_110 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ type: ("primary"), size: ("small"), content: ("PRIMARY"), }));
    const __VLS_112 = __VLS_111({ type: ("primary"), size: ("small"), content: ("PRIMARY"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    ({}({ type: ("primary"), size: ("small"), content: ("PRIMARY"), }));
    const __VLS_115 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112));
    __VLS_nonNullable(__VLS_115.slots).default;
    const __VLS_116 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ type: ("success"), size: ("small"), content: ("SUCCESS"), }));
    const __VLS_118 = __VLS_117({ type: ("success"), size: ("small"), content: ("SUCCESS"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    ({}({ type: ("success"), size: ("small"), content: ("SUCCESS"), }));
    const __VLS_121 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118));
    __VLS_nonNullable(__VLS_121.slots).default;
    const __VLS_122 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ type: ("warning"), size: ("small"), content: ("WARNING"), }));
    const __VLS_124 = __VLS_123({ type: ("warning"), size: ("small"), content: ("WARNING"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    ({}({ type: ("warning"), size: ("small"), content: ("WARNING"), }));
    const __VLS_127 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124));
    __VLS_nonNullable(__VLS_127.slots).default;
    const __VLS_128 = {}
        .CpButton;
    ({}.CpButton);
    ({}.CpButton);
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    __VLS_components.CpButton;
    __VLS_components.cpButton;
    [CpButton, CpButton,];
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ type: ("danger"), size: ("small"), content: ("DANGER"), }));
    const __VLS_130 = __VLS_129({ type: ("danger"), size: ("small"), content: ("DANGER"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    ({}({ type: ("danger"), size: ("small"), content: ("DANGER"), }));
    const __VLS_133 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130));
    __VLS_nonNullable(__VLS_133.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_134 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ type: ("primary"), size: ("large"), }));
    const __VLS_136 = __VLS_135({ type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    ({}({ type: ("primary"), size: ("large"), }));
    const __VLS_139 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136));
    __VLS_nonNullable(__VLS_139.slots).default;
    const __VLS_140 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ type: ("primary"), size: ("default"), }));
    const __VLS_142 = __VLS_141({ type: ("primary"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    ({}({ type: ("primary"), size: ("default"), }));
    const __VLS_145 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142));
    __VLS_nonNullable(__VLS_145.slots).default;
    const __VLS_146 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ type: ("primary"), size: ("small"), }));
    const __VLS_148 = __VLS_147({ type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    ({}({ type: ("primary"), size: ("small"), }));
    const __VLS_151 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148));
    __VLS_nonNullable(__VLS_151.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_152 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ type: ("primary"), size: ("default"), }));
    const __VLS_154 = __VLS_153({ type: ("primary"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    ({}({ type: ("primary"), size: ("default"), }));
    const __VLS_157 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154));
    __VLS_nonNullable(__VLS_157.slots).default;
    const __VLS_158 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ type: ("success"), size: ("default"), }));
    const __VLS_160 = __VLS_159({ type: ("success"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
    ({}({ type: ("success"), size: ("default"), }));
    const __VLS_163 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160));
    __VLS_nonNullable(__VLS_163.slots).default;
    const __VLS_164 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ type: ("warning"), size: ("default"), }));
    const __VLS_166 = __VLS_165({ type: ("warning"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
    ({}({ type: ("warning"), size: ("default"), }));
    const __VLS_169 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166));
    __VLS_nonNullable(__VLS_169.slots).default;
    const __VLS_170 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ type: ("danger"), size: ("default"), }));
    const __VLS_172 = __VLS_171({ type: ("danger"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
    ({}({ type: ("danger"), size: ("default"), }));
    const __VLS_175 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172));
    __VLS_nonNullable(__VLS_175.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_176 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ type: ("primary"), size: ("small"), }));
    const __VLS_178 = __VLS_177({ type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
    ({}({ type: ("primary"), size: ("small"), }));
    const __VLS_181 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178));
    __VLS_nonNullable(__VLS_181.slots).default;
    const __VLS_182 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ type: ("primary"), size: ("small"), bg: (true), }));
    const __VLS_184 = __VLS_183({ type: ("primary"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
    ({}({ type: ("primary"), size: ("small"), bg: (true), }));
    const __VLS_187 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184));
    __VLS_nonNullable(__VLS_187.slots).default;
    const __VLS_188 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ type: ("success"), size: ("small"), }));
    const __VLS_190 = __VLS_189({ type: ("success"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
    ({}({ type: ("success"), size: ("small"), }));
    const __VLS_193 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190));
    __VLS_nonNullable(__VLS_193.slots).default;
    const __VLS_194 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ type: ("success"), size: ("small"), bg: (true), }));
    const __VLS_196 = __VLS_195({ type: ("success"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
    ({}({ type: ("success"), size: ("small"), bg: (true), }));
    const __VLS_199 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196));
    __VLS_nonNullable(__VLS_199.slots).default;
    const __VLS_200 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ type: ("warning"), size: ("small"), }));
    const __VLS_202 = __VLS_201({ type: ("warning"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
    ({}({ type: ("warning"), size: ("small"), }));
    const __VLS_205 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202));
    __VLS_nonNullable(__VLS_205.slots).default;
    const __VLS_206 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ type: ("warning"), size: ("small"), bg: (true), }));
    const __VLS_208 = __VLS_207({ type: ("warning"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
    ({}({ type: ("warning"), size: ("small"), bg: (true), }));
    const __VLS_211 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208));
    __VLS_nonNullable(__VLS_211.slots).default;
    const __VLS_212 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({ type: ("danger"), size: ("small"), }));
    const __VLS_214 = __VLS_213({ type: ("danger"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
    ({}({ type: ("danger"), size: ("small"), }));
    const __VLS_217 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_212, __VLS_214));
    __VLS_nonNullable(__VLS_217.slots).default;
    const __VLS_218 = {}
        .CpNenobutton;
    ({}.CpNenobutton);
    ({}.CpNenobutton);
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    __VLS_components.CpNenobutton;
    __VLS_components.cpNenobutton;
    [CpNenobutton, CpNenobutton,];
    const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({ type: ("danger"), size: ("small"), bg: (true), }));
    const __VLS_220 = __VLS_219({ type: ("danger"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_219));
    ({}({ type: ("danger"), size: ("small"), bg: (true), }));
    const __VLS_223 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220));
    __VLS_nonNullable(__VLS_223.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel reflect1") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_224 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({ type: ("primary"), size: ("large"), }));
    const __VLS_226 = __VLS_225({ type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_225));
    ({}({ type: ("primary"), size: ("large"), }));
    const __VLS_229 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226));
    __VLS_nonNullable(__VLS_229.slots).default;
    const __VLS_230 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ type: ("primary"), size: ("default"), }));
    const __VLS_232 = __VLS_231({ type: ("primary"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
    ({}({ type: ("primary"), size: ("default"), }));
    const __VLS_235 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232));
    __VLS_nonNullable(__VLS_235.slots).default;
    const __VLS_236 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({ type: ("primary"), size: ("small"), }));
    const __VLS_238 = __VLS_237({ type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
    ({}({ type: ("primary"), size: ("small"), }));
    const __VLS_241 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238));
    __VLS_nonNullable(__VLS_241.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel reflect2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_242 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_243 = __VLS_asFunctionalComponent(__VLS_242, new __VLS_242({ type: ("primary"), size: ("default"), }));
    const __VLS_244 = __VLS_243({ type: ("primary"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_243));
    ({}({ type: ("primary"), size: ("default"), }));
    const __VLS_247 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_242, __VLS_244));
    __VLS_nonNullable(__VLS_247.slots).default;
    const __VLS_248 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({ type: ("success"), size: ("default"), }));
    const __VLS_250 = __VLS_249({ type: ("success"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_249));
    ({}({ type: ("success"), size: ("default"), }));
    const __VLS_253 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_248, __VLS_250));
    __VLS_nonNullable(__VLS_253.slots).default;
    const __VLS_254 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_255 = __VLS_asFunctionalComponent(__VLS_254, new __VLS_254({ type: ("warning"), size: ("default"), }));
    const __VLS_256 = __VLS_255({ type: ("warning"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_255));
    ({}({ type: ("warning"), size: ("default"), }));
    const __VLS_259 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_254, __VLS_256));
    __VLS_nonNullable(__VLS_259.slots).default;
    const __VLS_260 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({ type: ("danger"), size: ("default"), }));
    const __VLS_262 = __VLS_261({ type: ("danger"), size: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_261));
    ({}({ type: ("danger"), size: ("default"), }));
    const __VLS_265 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262));
    __VLS_nonNullable(__VLS_265.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("panel reflect3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("subtitle") }));
    const __VLS_266 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({ type: ("primary"), size: ("small"), }));
    const __VLS_268 = __VLS_267({ type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
    ({}({ type: ("primary"), size: ("small"), }));
    const __VLS_271 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_266, __VLS_268));
    __VLS_nonNullable(__VLS_271.slots).default;
    const __VLS_272 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({ type: ("primary"), size: ("small"), bg: (true), }));
    const __VLS_274 = __VLS_273({ type: ("primary"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_273));
    ({}({ type: ("primary"), size: ("small"), bg: (true), }));
    const __VLS_277 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_272, __VLS_274));
    __VLS_nonNullable(__VLS_277.slots).default;
    const __VLS_278 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_279 = __VLS_asFunctionalComponent(__VLS_278, new __VLS_278({ type: ("success"), size: ("small"), }));
    const __VLS_280 = __VLS_279({ type: ("success"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_279));
    ({}({ type: ("success"), size: ("small"), }));
    const __VLS_283 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_278, __VLS_280));
    __VLS_nonNullable(__VLS_283.slots).default;
    const __VLS_284 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_285 = __VLS_asFunctionalComponent(__VLS_284, new __VLS_284({ type: ("success"), size: ("small"), bg: (true), }));
    const __VLS_286 = __VLS_285({ type: ("success"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_285));
    ({}({ type: ("success"), size: ("small"), bg: (true), }));
    const __VLS_289 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_284, __VLS_286));
    __VLS_nonNullable(__VLS_289.slots).default;
    const __VLS_290 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_291 = __VLS_asFunctionalComponent(__VLS_290, new __VLS_290({ type: ("warning"), size: ("small"), }));
    const __VLS_292 = __VLS_291({ type: ("warning"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
    ({}({ type: ("warning"), size: ("small"), }));
    const __VLS_295 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_290, __VLS_292));
    __VLS_nonNullable(__VLS_295.slots).default;
    const __VLS_296 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_297 = __VLS_asFunctionalComponent(__VLS_296, new __VLS_296({ type: ("warning"), size: ("small"), bg: (true), }));
    const __VLS_298 = __VLS_297({ type: ("warning"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_297));
    ({}({ type: ("warning"), size: ("small"), bg: (true), }));
    const __VLS_301 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_296, __VLS_298));
    __VLS_nonNullable(__VLS_301.slots).default;
    const __VLS_302 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_303 = __VLS_asFunctionalComponent(__VLS_302, new __VLS_302({ type: ("danger"), size: ("small"), }));
    const __VLS_304 = __VLS_303({ type: ("danger"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_303));
    ({}({ type: ("danger"), size: ("small"), }));
    const __VLS_307 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_302, __VLS_304));
    __VLS_nonNullable(__VLS_307.slots).default;
    const __VLS_308 = {}
        .CpReflectbutton;
    ({}.CpReflectbutton);
    ({}.CpReflectbutton);
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    __VLS_components.CpReflectbutton;
    __VLS_components.cpReflectbutton;
    [CpReflectbutton, CpReflectbutton,];
    const __VLS_309 = __VLS_asFunctionalComponent(__VLS_308, new __VLS_308({ type: ("danger"), size: ("small"), bg: (true), }));
    const __VLS_310 = __VLS_309({ type: ("danger"), size: ("small"), bg: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_309));
    ({}({ type: ("danger"), size: ("small"), bg: (true), }));
    const __VLS_313 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_308, __VLS_310));
    __VLS_nonNullable(__VLS_313.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['main'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['reflect1'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['reflect2'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['panel'];
        __VLS_styleScopedClasses['reflect3'];
        __VLS_styleScopedClasses['subtitle'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                toggleDark: toggleDark,
                sectionList: sectionList,
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