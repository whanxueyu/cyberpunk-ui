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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_0 = {}.CyberDigitalCounter;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    value: (__VLS_ctx.num1),
}));
const __VLS_2 = __VLS_1({
    value: (__VLS_ctx.num1),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_4 = {}.CyberButton;
;
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(Object.assign({ 'onClick': {} }, { type: "warning", size: "small", content: "重新加载" })));
const __VLS_6 = __VLS_5(Object.assign({ 'onClick': {} }, { type: "warning", size: "small", content: "重新加载" }), ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onClick: (__VLS_ctx.reLoad)
};
__VLS_7.slots.default;
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_12 = {}.CyberDigitalCounter;
;
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (1000),
}));
const __VLS_14 = __VLS_13({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (1000),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_16 = {}.CyberDigitalCounter;
;
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (2000),
}));
const __VLS_18 = __VLS_17({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (2000),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_20 = {}.CyberDigitalCounter;
;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (3000),
}));
const __VLS_22 = __VLS_21({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (3000),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.CyberDigitalCounter;
;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (5000),
}));
const __VLS_26 = __VLS_25({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (5000),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.CyberDigitalCounter;
;
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (8000),
}));
const __VLS_30 = __VLS_29({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (8000),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_32 = {}.CyberDigitalCounter;
;
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (10000),
}));
const __VLS_34 = __VLS_33({
    value: (__VLS_ctx.num1),
    from: (0),
    to: (__VLS_ctx.num1),
    duration: (10000),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_36 = {}.CyberDigitalCounter;
;
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    value: (__VLS_ctx.num2),
    theme: "neon",
}));
const __VLS_38 = __VLS_37({
    value: (__VLS_ctx.num2),
    theme: "neon",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const __VLS_40 = {}.CyberDigitalCounter;
;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    value: (__VLS_ctx.num2),
    theme: "digital",
}));
const __VLS_42 = __VLS_41({
    value: (__VLS_ctx.num2),
    theme: "digital",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_44 = {}.CyberDigitalCounter;
;
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    value: (__VLS_ctx.num2),
    theme: "hologram",
}));
const __VLS_46 = __VLS_45({
    value: (__VLS_ctx.num2),
    theme: "hologram",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_48 = {}.CyberDigitalCounter;
;
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    value: (__VLS_ctx.num2),
    prefix: "$",
}));
const __VLS_50 = __VLS_49({
    value: (__VLS_ctx.num2),
    prefix: "$",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.CyberDigitalCounter;
;
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    value: (__VLS_ctx.num3),
    suffix: "%",
}));
const __VLS_54 = __VLS_53({
    value: (__VLS_ctx.num3),
    suffix: "%",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.CyberDigitalCounter;
;
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    value: (__VLS_ctx.num2),
    prefix: "Level ",
    suffix: " Achieved",
}));
const __VLS_58 = __VLS_57({
    value: (__VLS_ctx.num2),
    prefix: "Level ",
    suffix: " Achieved",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_60 = {}.CyberDigitalCounter;
;
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    value: (__VLS_ctx.num4),
    decimal: (0),
}));
const __VLS_62 = __VLS_61({
    value: (__VLS_ctx.num4),
    decimal: (0),
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const __VLS_64 = {}.CyberDigitalCounter;
;
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    value: (__VLS_ctx.num4),
    decimal: (2),
}));
const __VLS_66 = __VLS_65({
    value: (__VLS_ctx.num4),
    decimal: (2),
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_68 = {}.CyberDigitalCounter;
;
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    value: (__VLS_ctx.num4),
    decimal: (4),
}));
const __VLS_70 = __VLS_69({
    value: (__VLS_ctx.num4),
    decimal: (4),
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_72 = {}.CyberDigitalCounter;
;
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    value: (__VLS_ctx.num5),
    separator: ",",
}));
const __VLS_74 = __VLS_73({
    value: (__VLS_ctx.num5),
    separator: ",",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_76 = {}.CyberDigitalCounter;
;
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    value: (__VLS_ctx.num5),
    separator: " ",
}));
const __VLS_78 = __VLS_77({
    value: (__VLS_ctx.num5),
    separator: " ",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
const __VLS_80 = {}.CyberDigitalCounter;
;
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    value: (__VLS_ctx.num5),
    separator: "-",
}));
const __VLS_82 = __VLS_81({
    value: (__VLS_ctx.num5),
    separator: "-",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
const __VLS_84 = {}.CyberDigitalCounter;
;
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    value: (__VLS_ctx.num5),
    separator: "/",
}));
const __VLS_86 = __VLS_85({
    value: (__VLS_ctx.num5),
    separator: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
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
//# sourceMappingURL=digital-counter.vue.js.map