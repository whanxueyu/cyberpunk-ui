import { ref } from 'vue';
const dynamicValue = ref(30);
const updateProgress = () => {
    dynamicValue.value = Math.floor(Math.random() * 100);
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "progress-demo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_0 = {}.CyberProgress;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    percentage: (75),
    theme: "neon",
}));
const __VLS_2 = __VLS_1({
    percentage: (75),
    theme: "neon",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_4 = {}.CyberProgress;
;
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    percentage: (60),
    theme: "hologram",
    percentagePosition: "inside",
}));
const __VLS_6 = __VLS_5({
    percentage: (60),
    theme: "hologram",
    percentagePosition: "inside",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_8 = {}.CyberProgress;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    percentage: (45),
    theme: "terminal",
    percentagePosition: "outside",
}));
const __VLS_10 = __VLS_9({
    percentage: (45),
    theme: "terminal",
    percentagePosition: "outside",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_12 = {}.CyberProgress;
;
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    percentage: (90),
    theme: "matrix",
    percentagePosition: "inside",
}));
const __VLS_14 = __VLS_13({
    percentage: (90),
    theme: "matrix",
    percentagePosition: "inside",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_16 = {}.CyberProgress;
;
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    percentage: (__VLS_ctx.dynamicValue),
    theme: "neon",
    showStatus: (true),
}));
const __VLS_18 = __VLS_17({
    percentage: (__VLS_ctx.dynamicValue),
    theme: "neon",
    showStatus: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.updateProgress) }, { class: "cyber-button" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_20 = {}.CyberProgress;
;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    percentage: (0),
    theme: "neon",
    percentagePosition: "inside",
}));
const __VLS_22 = __VLS_21({
    percentage: (0),
    theme: "neon",
    percentagePosition: "inside",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.CyberProgress;
;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    percentage: (25),
    theme: "neon",
    percentagePosition: "inside",
}));
const __VLS_26 = __VLS_25({
    percentage: (25),
    theme: "neon",
    percentagePosition: "inside",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.CyberProgress;
;
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    percentage: (50),
    theme: "neon",
    percentagePosition: "inside",
}));
const __VLS_30 = __VLS_29({
    percentage: (50),
    theme: "neon",
    percentagePosition: "inside",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_32 = {}.CyberProgress;
;
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    percentage: (75),
    theme: "neon",
    percentagePosition: "inside",
}));
const __VLS_34 = __VLS_33({
    percentage: (75),
    theme: "neon",
    percentagePosition: "inside",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_36 = {}.CyberProgress;
;
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    percentage: (100),
    theme: "neon",
    percentagePosition: "inside",
}));
const __VLS_38 = __VLS_37({
    percentage: (100),
    theme: "neon",
    percentagePosition: "inside",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "demo-section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_40 = {}.CyberProgress;
;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    percentage: (0),
    theme: "neon",
    percentagePosition: "outside",
}));
const __VLS_42 = __VLS_41({
    percentage: (0),
    theme: "neon",
    percentagePosition: "outside",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_44 = {}.CyberProgress;
;
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    percentage: (25),
    theme: "neon",
    percentagePosition: "outside",
}));
const __VLS_46 = __VLS_45({
    percentage: (25),
    theme: "neon",
    percentagePosition: "outside",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_48 = {}.CyberProgress;
;
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    percentage: (50),
    theme: "neon",
    percentagePosition: "outside",
}));
const __VLS_50 = __VLS_49({
    percentage: (50),
    theme: "neon",
    percentagePosition: "outside",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.CyberProgress;
;
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    percentage: (75),
    theme: "neon",
    percentagePosition: "outside",
}));
const __VLS_54 = __VLS_53({
    percentage: (75),
    theme: "neon",
    percentagePosition: "outside",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.CyberProgress;
;
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    percentage: (100),
    theme: "neon",
    percentagePosition: "outside",
}));
const __VLS_58 = __VLS_57({
    percentage: (100),
    theme: "neon",
    percentagePosition: "outside",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
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
            dynamicValue: dynamicValue,
            updateProgress: updateProgress,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=progress.vue.js.map