import { ref } from 'vue';
const notificationRef = ref(null);
const currentPosition = ref('top-right');
const changePosition = (position) => {
    currentPosition.value = position;
};
const showInfo = () => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.info({
        title: '信息提示',
        message: '这是一条信息通知',
    });
};
const showSuccess = () => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.success({
        title: '成功提示',
        message: '操作已成功完成',
    });
};
const showWarning = () => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.warning({
        title: '警告提示',
        message: '请注意当前操作',
    });
};
const showError = () => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.error({
        title: '错误提示',
        message: '操作失败，请重试',
    });
};
const showEffect = (effect) => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.create({
        title: '效果演示',
        message: `当前效果：${effect}`,
        effect: effect,
    });
};
const showWithActions = () => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.warning({
        title: '操作确认',
        message: '确定要执行此操作吗？此通知将自动居中显示且不会自动关闭',
        actions: [
            {
                text: '确认',
                callback: () => console.log('已确认'),
            },
            {
                text: '取消',
                callback: () => console.log('已取消'),
            },
        ],
    });
};
const showWithDuration = (duration) => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.info({
        title: '持续时间',
        message: duration === 0 ? '不会自动关闭' : `${duration / 1000}秒后关闭`,
        duration,
    });
};
const clearAll = () => {
    var _a;
    (_a = notificationRef.value) === null || _a === void 0 ? void 0 : _a.clearAll();
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_0 = {}.CyberButton;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onClick': {} }, { type: "primary", size: "default", content: "Info" })));
const __VLS_2 = __VLS_1(Object.assign({ 'onClick': {} }, { type: "primary", size: "default", content: "Info" }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.showInfo)
};
__VLS_3.slots.default;
var __VLS_3;
const __VLS_8 = {}.CyberButton;
;
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign({ 'onClick': {} }, { type: "success", size: "default", content: "Success" })));
const __VLS_10 = __VLS_9(Object.assign({ 'onClick': {} }, { type: "success", size: "default", content: "Success" }), ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (__VLS_ctx.showSuccess)
};
__VLS_11.slots.default;
var __VLS_11;
const __VLS_16 = {}.CyberButton;
;
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(Object.assign({ 'onClick': {} }, { type: "warning", size: "default", content: "Warning" })));
const __VLS_18 = __VLS_17(Object.assign({ 'onClick': {} }, { type: "warning", size: "default", content: "Warning" }), ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
let __VLS_22;
const __VLS_23 = {
    onClick: (__VLS_ctx.showWarning)
};
__VLS_19.slots.default;
var __VLS_19;
const __VLS_24 = {}.CyberButton;
;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(Object.assign({ 'onClick': {} }, { type: "danger", size: "default", content: "Error" })));
const __VLS_26 = __VLS_25(Object.assign({ 'onClick': {} }, { type: "danger", size: "default", content: "Error" }), ...__VLS_functionalComponentArgsRest(__VLS_25));
let __VLS_28;
let __VLS_29;
let __VLS_30;
const __VLS_31 = {
    onClick: (__VLS_ctx.showError)
};
__VLS_27.slots.default;
var __VLS_27;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_32 = {}.CyberButton;
;
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'top-right' ? 'primary' : 'default'), size: "small" })));
const __VLS_34 = __VLS_33(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'top-right' ? 'primary' : 'default'), size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('top-right');
    }
};
__VLS_35.slots.default;
var __VLS_35;
const __VLS_40 = {}.CyberButton;
;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'top-left' ? 'primary' : 'default'), size: "small" })));
const __VLS_42 = __VLS_41(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'top-left' ? 'primary' : 'default'), size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_41));
let __VLS_44;
let __VLS_45;
let __VLS_46;
const __VLS_47 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('top-left');
    }
};
__VLS_43.slots.default;
var __VLS_43;
const __VLS_48 = {}.CyberButton;
;
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'bottom-right' ? 'primary' : 'default'), size: "small" })));
const __VLS_50 = __VLS_49(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'bottom-right' ? 'primary' : 'default'), size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_49));
let __VLS_52;
let __VLS_53;
let __VLS_54;
const __VLS_55 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('bottom-right');
    }
};
__VLS_51.slots.default;
var __VLS_51;
const __VLS_56 = {}.CyberButton;
;
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'bottom-left' ? 'primary' : 'default'), size: "small" })));
const __VLS_58 = __VLS_57(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'bottom-left' ? 'primary' : 'default'), size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_57));
let __VLS_60;
let __VLS_61;
let __VLS_62;
const __VLS_63 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('bottom-left');
    }
};
__VLS_59.slots.default;
var __VLS_59;
const __VLS_64 = {}.CyberButton;
;
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'center' ? 'primary' : 'default'), size: "small" })));
const __VLS_66 = __VLS_65(Object.assign({ 'onClick': {} }, { type: (__VLS_ctx.currentPosition === 'center' ? 'primary' : 'default'), size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_65));
let __VLS_68;
let __VLS_69;
let __VLS_70;
const __VLS_71 = {
    onClick: (...[$event]) => {
        __VLS_ctx.changePosition('center');
    }
};
__VLS_67.slots.default;
var __VLS_67;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "position-hint" }));
(__VLS_ctx.currentPosition);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_72 = {}.CyberButton;
;
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" })));
const __VLS_74 = __VLS_73(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_73));
let __VLS_76;
let __VLS_77;
let __VLS_78;
const __VLS_79 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showEffect('glitch');
    }
};
__VLS_75.slots.default;
var __VLS_75;
const __VLS_80 = {}.CyberButton;
;
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" })));
const __VLS_82 = __VLS_81(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_81));
let __VLS_84;
let __VLS_85;
let __VLS_86;
const __VLS_87 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showEffect('hologram');
    }
};
__VLS_83.slots.default;
var __VLS_83;
const __VLS_88 = {}.CyberButton;
;
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" })));
const __VLS_90 = __VLS_89(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_89));
let __VLS_92;
let __VLS_93;
let __VLS_94;
const __VLS_95 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showEffect('circuit');
    }
};
__VLS_91.slots.default;
var __VLS_91;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_96 = {}.CyberButton;
;
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(Object.assign({ 'onClick': {} }, { type: "warning", size: "default", content: "显示带操作的通知" })));
const __VLS_98 = __VLS_97(Object.assign({ 'onClick': {} }, { type: "warning", size: "default", content: "显示带操作的通知" }), ...__VLS_functionalComponentArgsRest(__VLS_97));
let __VLS_100;
let __VLS_101;
let __VLS_102;
const __VLS_103 = {
    onClick: (__VLS_ctx.showWithActions)
};
__VLS_99.slots.default;
var __VLS_99;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_104 = {}.CyberButton;
;
const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" })));
const __VLS_106 = __VLS_105(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_105));
let __VLS_108;
let __VLS_109;
let __VLS_110;
const __VLS_111 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showWithDuration(2000);
    }
};
__VLS_107.slots.default;
var __VLS_107;
const __VLS_112 = {}.CyberButton;
;
const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" })));
const __VLS_114 = __VLS_113(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_113));
let __VLS_116;
let __VLS_117;
let __VLS_118;
const __VLS_119 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showWithDuration(5000);
    }
};
__VLS_115.slots.default;
var __VLS_115;
const __VLS_120 = {}.CyberButton;
;
const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" })));
const __VLS_122 = __VLS_121(Object.assign({ 'onClick': {} }, { type: "primary", size: "small" }), ...__VLS_functionalComponentArgsRest(__VLS_121));
let __VLS_124;
let __VLS_125;
let __VLS_126;
const __VLS_127 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showWithDuration(0);
    }
};
__VLS_123.slots.default;
var __VLS_123;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "section-title" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex" }));
const __VLS_128 = {}.CyberButton;
;
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128(Object.assign({ 'onClick': {} }, { type: "danger", size: "default", content: "清除所有通知" })));
const __VLS_130 = __VLS_129(Object.assign({ 'onClick': {} }, { type: "danger", size: "default", content: "清除所有通知" }), ...__VLS_functionalComponentArgsRest(__VLS_129));
let __VLS_132;
let __VLS_133;
let __VLS_134;
const __VLS_135 = {
    onClick: (__VLS_ctx.clearAll)
};
__VLS_131.slots.default;
var __VLS_131;
const __VLS_136 = {}.CyberNotification;
;
const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({
    ref: "notificationRef",
    position: (__VLS_ctx.currentPosition),
}));
const __VLS_138 = __VLS_137({
    ref: "notificationRef",
    position: (__VLS_ctx.currentPosition),
}, ...__VLS_functionalComponentArgsRest(__VLS_137));
;
var __VLS_140 = {};
var __VLS_139;
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
var __VLS_141 = __VLS_140;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            notificationRef: notificationRef,
            currentPosition: currentPosition,
            changePosition: changePosition,
            showInfo: showInfo,
            showSuccess: showSuccess,
            showWarning: showWarning,
            showError: showError,
            showEffect: showEffect,
            showWithActions: showWithActions,
            showWithDuration: showWithDuration,
            clearAll: clearAll,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=notification.vue.js.map