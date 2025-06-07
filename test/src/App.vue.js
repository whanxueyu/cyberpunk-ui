import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark({
    storageKey: 'useDarkKEY',
    valueDark: 'dark',
    valueLight: 'light',
});
console.log('%c %s', 'border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)', 'CyberPunk-UI');
const toggleDark = useToggle(isDark);
const toNext = (index) => {
    console.log(index);
};
const toLast = (index) => {
    console.log(index);
};
const changePage = (scroll) => {
    console.log(scroll);
};
const dotPosition = ref('right');
const changePosition = (position) => {
    dotPosition.value = position;
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "main" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "header" }));
const __VLS_0 = {}.CyberNenobutton;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onClick': {} }, { type: "primary", bg: true, size: "small" })));
const __VLS_2 = __VLS_1(Object.assign({ 'onClick': {} }, { type: "primary", bg: true, size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (...[$event]) => {
        __VLS_ctx.toggleDark();
    }
};
__VLS_3.slots.default;
var __VLS_3;
const __VLS_8 = {}.CyberNenobutton;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign({ 'onClick': {} }, { type: "primary" })));
const __VLS_10 = __VLS_9(Object.assign({ 'onClick': {} }, { type: "primary" }), ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('top');
    }
};
__VLS_11.slots.default;
var __VLS_11;
const __VLS_16 = {}.CyberNenobutton;
;
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(Object.assign({ 'onClick': {} }, { type: "success" })));
const __VLS_18 = __VLS_17(Object.assign({ 'onClick': {} }, { type: "success" }), ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
let __VLS_22;
const __VLS_23 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('bottom');
    }
};
__VLS_19.slots.default;
var __VLS_19;
const __VLS_24 = {}.CyberNenobutton;
;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(Object.assign({ 'onClick': {} }, { type: "danger" })));
const __VLS_26 = __VLS_25(Object.assign({ 'onClick': {} }, { type: "danger" }), ...__VLS_functionalComponentArgsRest(__VLS_25));
let __VLS_28;
let __VLS_29;
let __VLS_30;
const __VLS_31 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('left');
    }
};
__VLS_27.slots.default;
var __VLS_27;
const __VLS_32 = {}.CyberNenobutton;
;
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(Object.assign({ 'onClick': {} }, { type: "warning" })));
const __VLS_34 = __VLS_33(Object.assign({ 'onClick': {} }, { type: "warning" }), ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('right');
    }
};
__VLS_35.slots.default;
var __VLS_35;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "page-aside" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "page-content" }));
const __VLS_40 = {}.CyberFullPage;
;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(Object.assign(Object.assign(Object.assign({ 'onToNext': {} }, { 'onToLast': {} }), { 'onChange': {} }), { pageNum: (4), position: (__VLS_ctx.dotPosition), offset: (60) })));
const __VLS_42 = __VLS_41(Object.assign(Object.assign(Object.assign({ 'onToNext': {} }, { 'onToLast': {} }), { 'onChange': {} }), { pageNum: (4), position: (__VLS_ctx.dotPosition), offset: (60) }), ...__VLS_functionalComponentArgsRest(__VLS_41));
let __VLS_44;
let __VLS_45;
let __VLS_46;
const __VLS_47 = {
    onToNext: (__VLS_ctx.toNext)
};
const __VLS_48 = {
    onToLast: (__VLS_ctx.toLast)
};
const __VLS_49 = {
    onChange: (__VLS_ctx.changePage)
};
__VLS_43.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_50 = {}.CyberText;
;
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
    lineColor: "#000",
}));
const __VLS_52 = __VLS_51({
    lineColor: "#000",
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
__VLS_53.slots.default;
var __VLS_53;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: {} }));
const __VLS_54 = {}.CyberShadowText;
;
const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
    shadowColor: "#33a6f9",
    direction: "left",
    long: (20),
}));
const __VLS_56 = __VLS_55({
    shadowColor: "#33a6f9",
    direction: "left",
    long: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
__VLS_57.slots.default;
var __VLS_57;
const __VLS_58 = {}.CyberShadowText;
;
const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({
    shadowColor: "#33a89f",
    direction: "left",
    long: (10),
}));
const __VLS_60 = __VLS_59({
    shadowColor: "#33a89f",
    direction: "left",
    long: (10),
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
__VLS_61.slots.default;
var __VLS_61;
const __VLS_62 = {}.CyberShadowText;
;
const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({
    shadowColor: "#ff5555",
    direction: "right",
    long: (10),
}));
const __VLS_64 = __VLS_63({
    shadowColor: "#ff5555",
    direction: "right",
    long: (10),
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
__VLS_65.slots.default;
var __VLS_65;
const __VLS_66 = {}.CyberShadowText;
;
const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({
    shadowColor: "#ff5588",
    direction: "right",
    long: (20),
}));
const __VLS_68 = __VLS_67({
    shadowColor: "#ff5588",
    direction: "right",
    long: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_67));
__VLS_69.slots.default;
var __VLS_69;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_70 = {}.CyberGlowText;
;
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({
    color: "#3355ff",
}));
const __VLS_72 = __VLS_71({
    color: "#3355ff",
}, ...__VLS_functionalComponentArgsRest(__VLS_71));
__VLS_73.slots.default;
var __VLS_73;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_74 = {}.CyberTyping;
;
const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
__VLS_77.slots.default;
var __VLS_77;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_78 = {}.CyberButton;
;
const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({
    type: "primary",
    size: "large",
    content: "PRIMARY",
}));
const __VLS_80 = __VLS_79({
    type: "primary",
    size: "large",
    content: "PRIMARY",
}, ...__VLS_functionalComponentArgsRest(__VLS_79));
__VLS_81.slots.default;
var __VLS_81;
const __VLS_82 = {}.CyberButton;
;
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({
    type: "success",
    size: "large",
    content: "SUCCESS",
}));
const __VLS_84 = __VLS_83({
    type: "success",
    size: "large",
    content: "SUCCESS",
}, ...__VLS_functionalComponentArgsRest(__VLS_83));
__VLS_85.slots.default;
var __VLS_85;
const __VLS_86 = {}.CyberButton;
;
const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({
    type: "warning",
    size: "large",
    content: "WARNING",
}));
const __VLS_88 = __VLS_87({
    type: "warning",
    size: "large",
    content: "WARNING",
}, ...__VLS_functionalComponentArgsRest(__VLS_87));
__VLS_89.slots.default;
var __VLS_89;
const __VLS_90 = {}.CyberButton;
;
const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({
    type: "danger",
    size: "large",
    content: "DANGER",
}));
const __VLS_92 = __VLS_91({
    type: "danger",
    size: "large",
    content: "DANGER",
}, ...__VLS_functionalComponentArgsRest(__VLS_91));
__VLS_93.slots.default;
var __VLS_93;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_94 = {}.CyberButton;
;
const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({
    type: "primary",
    size: "default",
    content: "PRIMARY",
}));
const __VLS_96 = __VLS_95({
    type: "primary",
    size: "default",
    content: "PRIMARY",
}, ...__VLS_functionalComponentArgsRest(__VLS_95));
__VLS_97.slots.default;
var __VLS_97;
const __VLS_98 = {}.CyberButton;
;
const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({
    type: "success",
    size: "default",
    content: "SUCCESS",
}));
const __VLS_100 = __VLS_99({
    type: "success",
    size: "default",
    content: "SUCCESS",
}, ...__VLS_functionalComponentArgsRest(__VLS_99));
__VLS_101.slots.default;
var __VLS_101;
const __VLS_102 = {}.CyberButton;
;
const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({
    type: "warning",
    size: "default",
    content: "WARNING",
}));
const __VLS_104 = __VLS_103({
    type: "warning",
    size: "default",
    content: "WARNING",
}, ...__VLS_functionalComponentArgsRest(__VLS_103));
__VLS_105.slots.default;
var __VLS_105;
const __VLS_106 = {}.CyberButton;
;
const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({
    type: "danger",
    size: "default",
    content: "DANGER",
}));
const __VLS_108 = __VLS_107({
    type: "danger",
    size: "default",
    content: "DANGER",
}, ...__VLS_functionalComponentArgsRest(__VLS_107));
__VLS_109.slots.default;
var __VLS_109;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_110 = {}.CyberButton;
;
const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({
    type: "primary",
    size: "small",
    content: "PRIMARY",
}));
const __VLS_112 = __VLS_111({
    type: "primary",
    size: "small",
    content: "PRIMARY",
}, ...__VLS_functionalComponentArgsRest(__VLS_111));
__VLS_113.slots.default;
var __VLS_113;
const __VLS_114 = {}.CyberButton;
;
const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({
    type: "success",
    size: "small",
    content: "SUCCESS",
}));
const __VLS_116 = __VLS_115({
    type: "success",
    size: "small",
    content: "SUCCESS",
}, ...__VLS_functionalComponentArgsRest(__VLS_115));
__VLS_117.slots.default;
var __VLS_117;
const __VLS_118 = {}.CyberButton;
;
const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({
    type: "warning",
    size: "small",
    content: "WARNING",
}));
const __VLS_120 = __VLS_119({
    type: "warning",
    size: "small",
    content: "WARNING",
}, ...__VLS_functionalComponentArgsRest(__VLS_119));
__VLS_121.slots.default;
var __VLS_121;
const __VLS_122 = {}.CyberButton;
;
const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({
    type: "danger",
    size: "small",
    content: "DANGER",
}));
const __VLS_124 = __VLS_123({
    type: "danger",
    size: "small",
    content: "DANGER",
}, ...__VLS_functionalComponentArgsRest(__VLS_123));
__VLS_125.slots.default;
var __VLS_125;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_126 = {}.CyberNenobutton;
;
const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({
    type: "primary",
    size: "large",
}));
const __VLS_128 = __VLS_127({
    type: "primary",
    size: "large",
}, ...__VLS_functionalComponentArgsRest(__VLS_127));
__VLS_129.slots.default;
var __VLS_129;
const __VLS_130 = {}.CyberNenobutton;
;
const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({
    type: "primary",
    size: "default",
}));
const __VLS_132 = __VLS_131({
    type: "primary",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_131));
__VLS_133.slots.default;
var __VLS_133;
const __VLS_134 = {}.CyberNenobutton;
;
const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({
    type: "primary",
    size: "small",
}));
const __VLS_136 = __VLS_135({
    type: "primary",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_135));
__VLS_137.slots.default;
var __VLS_137;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_138 = {}.CyberNenobutton;
;
const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({
    type: "primary",
    size: "default",
}));
const __VLS_140 = __VLS_139({
    type: "primary",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_139));
__VLS_141.slots.default;
var __VLS_141;
const __VLS_142 = {}.CyberNenobutton;
;
const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({
    type: "success",
    size: "default",
}));
const __VLS_144 = __VLS_143({
    type: "success",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_143));
__VLS_145.slots.default;
var __VLS_145;
const __VLS_146 = {}.CyberNenobutton;
;
const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({
    type: "warning",
    size: "default",
}));
const __VLS_148 = __VLS_147({
    type: "warning",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_147));
__VLS_149.slots.default;
var __VLS_149;
const __VLS_150 = {}.CyberNenobutton;
;
const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({
    type: "danger",
    size: "default",
}));
const __VLS_152 = __VLS_151({
    type: "danger",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_151));
__VLS_153.slots.default;
var __VLS_153;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_154 = {}.CyberNenobutton;
;
const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({
    type: "primary",
    size: "small",
}));
const __VLS_156 = __VLS_155({
    type: "primary",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_155));
__VLS_157.slots.default;
var __VLS_157;
const __VLS_158 = {}.CyberNenobutton;
;
const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({
    type: "primary",
    size: "small",
    bg: true,
}));
const __VLS_160 = __VLS_159({
    type: "primary",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_159));
__VLS_161.slots.default;
var __VLS_161;
const __VLS_162 = {}.CyberNenobutton;
;
const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({
    type: "success",
    size: "small",
}));
const __VLS_164 = __VLS_163({
    type: "success",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_163));
__VLS_165.slots.default;
var __VLS_165;
const __VLS_166 = {}.CyberNenobutton;
;
const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({
    type: "success",
    size: "small",
    bg: true,
}));
const __VLS_168 = __VLS_167({
    type: "success",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_167));
__VLS_169.slots.default;
var __VLS_169;
const __VLS_170 = {}.CyberNenobutton;
;
const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({
    type: "warning",
    size: "small",
}));
const __VLS_172 = __VLS_171({
    type: "warning",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_171));
__VLS_173.slots.default;
var __VLS_173;
const __VLS_174 = {}.CyberNenobutton;
;
const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({
    type: "warning",
    size: "small",
    bg: true,
}));
const __VLS_176 = __VLS_175({
    type: "warning",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_175));
__VLS_177.slots.default;
var __VLS_177;
const __VLS_178 = {}.CyberNenobutton;
;
const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({
    type: "danger",
    size: "small",
}));
const __VLS_180 = __VLS_179({
    type: "danger",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_179));
__VLS_181.slots.default;
var __VLS_181;
const __VLS_182 = {}.CyberNenobutton;
;
const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({
    type: "danger",
    size: "small",
    bg: true,
}));
const __VLS_184 = __VLS_183({
    type: "danger",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_183));
__VLS_185.slots.default;
var __VLS_185;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel reflect1" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_186 = {}.CyberReflectbutton;
;
const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({
    type: "primary",
    size: "large",
}));
const __VLS_188 = __VLS_187({
    type: "primary",
    size: "large",
}, ...__VLS_functionalComponentArgsRest(__VLS_187));
__VLS_189.slots.default;
var __VLS_189;
const __VLS_190 = {}.CyberReflectbutton;
;
const __VLS_191 = __VLS_asFunctionalComponent(__VLS_190, new __VLS_190({
    type: "primary",
    size: "default",
}));
const __VLS_192 = __VLS_191({
    type: "primary",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_191));
__VLS_193.slots.default;
var __VLS_193;
const __VLS_194 = {}.CyberReflectbutton;
;
const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({
    type: "primary",
    size: "small",
}));
const __VLS_196 = __VLS_195({
    type: "primary",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_195));
__VLS_197.slots.default;
var __VLS_197;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel reflect2" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_198 = {}.CyberReflectbutton;
;
const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({
    type: "primary",
    size: "default",
}));
const __VLS_200 = __VLS_199({
    type: "primary",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_199));
__VLS_201.slots.default;
var __VLS_201;
const __VLS_202 = {}.CyberReflectbutton;
;
const __VLS_203 = __VLS_asFunctionalComponent(__VLS_202, new __VLS_202({
    type: "success",
    size: "default",
}));
const __VLS_204 = __VLS_203({
    type: "success",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_203));
__VLS_205.slots.default;
var __VLS_205;
const __VLS_206 = {}.CyberReflectbutton;
;
const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({
    type: "warning",
    size: "default",
}));
const __VLS_208 = __VLS_207({
    type: "warning",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_207));
__VLS_209.slots.default;
var __VLS_209;
const __VLS_210 = {}.CyberReflectbutton;
;
const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({
    type: "danger",
    size: "default",
}));
const __VLS_212 = __VLS_211({
    type: "danger",
    size: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_211));
__VLS_213.slots.default;
var __VLS_213;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "panel reflect3" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "subtitle" }));
const __VLS_214 = {}.CyberReflectbutton;
;
const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({
    type: "primary",
    size: "small",
}));
const __VLS_216 = __VLS_215({
    type: "primary",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_215));
__VLS_217.slots.default;
var __VLS_217;
const __VLS_218 = {}.CyberReflectbutton;
;
const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({
    type: "primary",
    size: "small",
    bg: true,
}));
const __VLS_220 = __VLS_219({
    type: "primary",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_219));
__VLS_221.slots.default;
var __VLS_221;
const __VLS_222 = {}.CyberReflectbutton;
;
const __VLS_223 = __VLS_asFunctionalComponent(__VLS_222, new __VLS_222({
    type: "success",
    size: "small",
}));
const __VLS_224 = __VLS_223({
    type: "success",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_223));
__VLS_225.slots.default;
var __VLS_225;
const __VLS_226 = {}.CyberReflectbutton;
;
const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({
    type: "success",
    size: "small",
    bg: true,
}));
const __VLS_228 = __VLS_227({
    type: "success",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_227));
__VLS_229.slots.default;
var __VLS_229;
const __VLS_230 = {}.CyberReflectbutton;
;
const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({
    type: "warning",
    size: "small",
}));
const __VLS_232 = __VLS_231({
    type: "warning",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_231));
__VLS_233.slots.default;
var __VLS_233;
const __VLS_234 = {}.CyberReflectbutton;
;
const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({
    type: "warning",
    size: "small",
    bg: true,
}));
const __VLS_236 = __VLS_235({
    type: "warning",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_235));
__VLS_237.slots.default;
var __VLS_237;
const __VLS_238 = {}.CyberReflectbutton;
;
const __VLS_239 = __VLS_asFunctionalComponent(__VLS_238, new __VLS_238({
    type: "danger",
    size: "small",
}));
const __VLS_240 = __VLS_239({
    type: "danger",
    size: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_239));
__VLS_241.slots.default;
var __VLS_241;
const __VLS_242 = {}.CyberReflectbutton;
;
const __VLS_243 = __VLS_asFunctionalComponent(__VLS_242, new __VLS_242({
    type: "danger",
    size: "small",
    bg: true,
}));
const __VLS_244 = __VLS_243({
    type: "danger",
    size: "small",
    bg: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_243));
__VLS_245.slots.default;
var __VLS_245;
var __VLS_43;
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
            toggleDark: toggleDark,
            toNext: toNext,
            toLast: toLast,
            changePage: changePage,
            dotPosition: dotPosition,
            changePosition: changePosition,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=App.vue.js.map