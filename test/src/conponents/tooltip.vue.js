import { ref, nextTick } from 'vue';
const num1 = ref(999);
const num2 = ref(12345);
const num3 = ref(75);
const num4 = ref(1234.56789);
const num5 = ref(1234567.89);
const reLoad = () => {
    num1.value = 0;
    num2.value = 0;
    num3.value = 0;
    num4.value = 0;
    num5.value = 0;
    nextTick(() => {
        num1.value = 999;
        num2.value = 12345;
        num3.value = 75;
        num4.value = 1234.56789;
        num5.value = 1234567.89;
    });
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_0 = {}.CyberTooltip;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    content: "这是一个提示信息",
}));
const __VLS_2 = __VLS_1({
    content: "这是一个提示信息",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_4 = {}.CyberTooltip;
;
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    content: "顶部提示",
    position: "top",
}));
const __VLS_6 = __VLS_5({
    content: "顶部提示",
    position: "top",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_7;
const __VLS_8 = {}.CyberTooltip;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    content: "右侧提示",
    position: "right",
}));
const __VLS_10 = __VLS_9({
    content: "右侧提示",
    position: "right",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_11;
const __VLS_12 = {}.CyberTooltip;
;
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    content: "左侧提示",
    position: "left",
}));
const __VLS_14 = __VLS_13({
    content: "左侧提示",
    position: "left",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_15;
const __VLS_16 = {}.CyberTooltip;
;
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    content: "底部提示",
    position: "bottom",
}));
const __VLS_18 = __VLS_17({
    content: "底部提示",
    position: "bottom",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_19;
const __VLS_20 = {}.CyberTooltip;
;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    content: "自动定位",
    position: "auto",
}));
const __VLS_22 = __VLS_21({
    content: "自动定位",
    position: "auto",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_24 = {}.CyberTooltip;
;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    content: "全息效果",
    effect: "hologram",
}));
const __VLS_26 = __VLS_25({
    content: "全息效果",
    effect: "hologram",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_27;
const __VLS_28 = {}.CyberTooltip;
;
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    content: "故障效果",
    effect: "glitch",
}));
const __VLS_30 = __VLS_29({
    content: "故障效果",
    effect: "glitch",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_31;
const __VLS_32 = {}.CyberTooltip;
;
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    content: "扫描效果",
    effect: "scan",
}));
const __VLS_34 = __VLS_33({
    content: "扫描效果",
    effect: "scan",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_35;
const __VLS_36 = {}.CyberTooltip;
;
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    content: "淡入效果",
    effect: "fade",
}));
const __VLS_38 = __VLS_37({
    content: "淡入效果",
    effect: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_39;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_40 = {}.CyberTooltip;
;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    content: "霓虹主题",
    theme: "neon",
}));
const __VLS_42 = __VLS_41({
    content: "霓虹主题",
    theme: "neon",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_43;
const __VLS_44 = {}.CyberTooltip;
;
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    content: "终端主题",
    theme: "terminal",
}));
const __VLS_46 = __VLS_45({
    content: "终端主题",
    theme: "terminal",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_47;
const __VLS_48 = {}.CyberTooltip;
;
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    content: "全息主题",
    theme: "holographic",
}));
const __VLS_50 = __VLS_49({
    content: "全息主题",
    theme: "holographic",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_51;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_52 = {}.CyberTooltip;
;
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    content: "悬停触发",
    trigger: "hover",
}));
const __VLS_54 = __VLS_53({
    content: "悬停触发",
    trigger: "hover",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_55;
const __VLS_56 = {}.CyberTooltip;
;
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    content: "点击触发",
    trigger: "click",
}));
const __VLS_58 = __VLS_57({
    content: "点击触发",
    trigger: "click",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_59;
const __VLS_60 = {}.CyberTooltip;
;
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    content: "聚焦触发",
    trigger: "focus",
}));
const __VLS_62 = __VLS_61({
    content: "聚焦触发",
    trigger: "focus",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_63;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_64 = {}.CyberTooltip;
;
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({}));
const __VLS_66 = __VLS_65({}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
{
    const { content: __VLS_thisSlot } = __VLS_67.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: {} }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_68 = {}.CyberNenobutton;
    ;
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        type: "primary",
        size: "small",
        bg: true,
    }));
    const __VLS_70 = __VLS_69({
        type: "primary",
        size: "small",
        bg: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    __VLS_71.slots.default;
    var __VLS_71;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.u, __VLS_intrinsicElements.u)({});
var __VLS_67;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: {} }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_72 = {}.CyberDigitalCounter;
;
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    value: (__VLS_ctx.num1),
}));
const __VLS_74 = __VLS_73({
    value: (__VLS_ctx.num1),
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_76 = {}.CyberButton;
;
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(Object.assign({ 'onClick': {} }, { type: "warning", size: "small", content: "重新加载" })));
const __VLS_78 = __VLS_77(Object.assign({ 'onClick': {} }, { type: "warning", size: "small", content: "重新加载" }), ...__VLS_functionalComponentArgsRest(__VLS_77));
let __VLS_80;
let __VLS_81;
let __VLS_82;
const __VLS_83 = {
    onClick: (__VLS_ctx.reLoad)
};
__VLS_79.slots.default;
var __VLS_79;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_84 = {}.CyberDigitalCounter;
;
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (1000),
}));
const __VLS_86 = __VLS_85({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (1000),
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
const __VLS_88 = {}.CyberDigitalCounter;
;
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (2000),
}));
const __VLS_90 = __VLS_89({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (2000),
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
const __VLS_92 = {}.CyberDigitalCounter;
;
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (3000),
}));
const __VLS_94 = __VLS_93({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (3000),
}, ...__VLS_functionalComponentArgsRest(__VLS_93));
const __VLS_96 = {}.CyberDigitalCounter;
;
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (5000),
}));
const __VLS_98 = __VLS_97({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (5000),
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
const __VLS_100 = {}.CyberDigitalCounter;
;
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (8000),
}));
const __VLS_102 = __VLS_101({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (8000),
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
const __VLS_104 = {}.CyberDigitalCounter;
;
const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (10000),
}));
const __VLS_106 = __VLS_105({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (10000),
}, ...__VLS_functionalComponentArgsRest(__VLS_105));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_108 = {}.CyberDigitalCounter;
;
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
    value: (__VLS_ctx.num2),
    theme: "neon",
}));
const __VLS_110 = __VLS_109({
    value: (__VLS_ctx.num2),
    theme: "neon",
}, ...__VLS_functionalComponentArgsRest(__VLS_109));
const __VLS_112 = {}.CyberDigitalCounter;
;
const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({
    value: (__VLS_ctx.num2),
    theme: "digital",
}));
const __VLS_114 = __VLS_113({
    value: (__VLS_ctx.num2),
    theme: "digital",
}, ...__VLS_functionalComponentArgsRest(__VLS_113));
const __VLS_116 = {}.CyberDigitalCounter;
;
const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
    value: (__VLS_ctx.num2),
    theme: "hologram",
}));
const __VLS_118 = __VLS_117({
    value: (__VLS_ctx.num2),
    theme: "hologram",
}, ...__VLS_functionalComponentArgsRest(__VLS_117));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_120 = {}.CyberDigitalCounter;
;
const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
    value: (__VLS_ctx.num2),
    prefix: "$",
}));
const __VLS_122 = __VLS_121({
    value: (__VLS_ctx.num2),
    prefix: "$",
}, ...__VLS_functionalComponentArgsRest(__VLS_121));
const __VLS_124 = {}.CyberDigitalCounter;
;
const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({
    value: (__VLS_ctx.num3),
    suffix: "%",
}));
const __VLS_126 = __VLS_125({
    value: (__VLS_ctx.num3),
    suffix: "%",
}, ...__VLS_functionalComponentArgsRest(__VLS_125));
const __VLS_128 = {}.CyberDigitalCounter;
;
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({
    value: (__VLS_ctx.num2),
    prefix: "Level ",
    suffix: " Achieved",
}));
const __VLS_130 = __VLS_129({
    value: (__VLS_ctx.num2),
    prefix: "Level ",
    suffix: " Achieved",
}, ...__VLS_functionalComponentArgsRest(__VLS_129));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_132 = {}.CyberDigitalCounter;
;
const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
    value: (__VLS_ctx.num4),
    decimal: (0),
}));
const __VLS_134 = __VLS_133({
    value: (__VLS_ctx.num4),
    decimal: (0),
}, ...__VLS_functionalComponentArgsRest(__VLS_133));
const __VLS_136 = {}.CyberDigitalCounter;
;
const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({
    value: (__VLS_ctx.num4),
    decimal: (2),
}));
const __VLS_138 = __VLS_137({
    value: (__VLS_ctx.num4),
    decimal: (2),
}, ...__VLS_functionalComponentArgsRest(__VLS_137));
const __VLS_140 = {}.CyberDigitalCounter;
;
const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({
    value: (__VLS_ctx.num4),
    decimal: (4),
}));
const __VLS_142 = __VLS_141({
    value: (__VLS_ctx.num4),
    decimal: (4),
}, ...__VLS_functionalComponentArgsRest(__VLS_141));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_144 = {}.CyberDigitalCounter;
;
const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
    value: (__VLS_ctx.num5),
    separator: ",",
}));
const __VLS_146 = __VLS_145({
    value: (__VLS_ctx.num5),
    separator: ",",
}, ...__VLS_functionalComponentArgsRest(__VLS_145));
const __VLS_148 = {}.CyberDigitalCounter;
;
const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({
    value: (__VLS_ctx.num5),
    separator: " ",
}));
const __VLS_150 = __VLS_149({
    value: (__VLS_ctx.num5),
    separator: " ",
}, ...__VLS_functionalComponentArgsRest(__VLS_149));
const __VLS_152 = {}.CyberDigitalCounter;
;
const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({
    value: (__VLS_ctx.num5),
    separator: "-",
}));
const __VLS_154 = __VLS_153({
    value: (__VLS_ctx.num5),
    separator: "-",
}, ...__VLS_functionalComponentArgsRest(__VLS_153));
const __VLS_156 = {}.CyberDigitalCounter;
;
const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
    value: (__VLS_ctx.num5),
    separator: "/",
}));
const __VLS_158 = __VLS_157({
    value: (__VLS_ctx.num5),
    separator: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_157));
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
            num1: num1,
            num2: num2,
            num3: num3,
            num4: num4,
            num5: num5,
            reLoad: reLoad,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=tooltip.vue.js.map