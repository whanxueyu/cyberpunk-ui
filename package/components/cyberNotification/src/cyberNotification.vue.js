import { ref, onUnmounted } from 'vue';
defineOptions({
    name: 'CyberNotification',
});
const props = defineProps({
    position: {
        type: String,
        default: 'top-right',
        validator: (value) => {
            return ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'center'].indexOf(value) !== -1;
        }
    },
    maxCount: {
        type: Number,
        default: 10
    },
    duration: {
        type: Number,
        default: 4500
    },
    effect: {
        type: String,
        default: 'glitch',
        validator: (value) => {
            return ['glitch', 'hologram', 'circuit'].indexOf(value) !== -1;
        }
    }
});
const emit = defineEmits(['close']);
const notifications = ref([]);
const visible = ref(false);
let notificationIdCounter = 0;
const createNotification = (options) => {
    const id = ++notificationIdCounter;
    const notification = {
        id,
        title: options.title || '',
        message: options.message,
        type: options.type || 'info',
        duration: options.duration !== undefined ? options.duration : props.duration,
        showClose: options.showClose !== undefined ? options.showClose : true,
        showIcon: options.showIcon !== undefined ? options.showIcon : true,
        actions: options.actions || [],
        effect: options.effect || props.effect,
        onClose: options.onClose || (() => { })
    };
    notifications.value.push(notification);
    visible.value = true;
    if (notification.duration > 0) {
        setTimeout(() => {
            close(id);
        }, notification.duration);
    }
    if (notifications.value.length > props.maxCount) {
        const firstNotification = notifications.value[0];
        close(firstNotification.id);
    }
    return id;
};
const close = (id) => {
    const index = notifications.value.findIndex(item => item.id === id);
    if (index !== -1) {
        const notification = notifications.value[index];
        if (notification.onClose) {
            notification.onClose();
        }
        notifications.value.splice(index, 1);
        emit('close', id);
    }
};
const handleActionClick = (notification, action) => {
    if (action.callback) {
        action.callback();
    }
    close(notification.id);
};
const handleAfterLeave = () => {
    if (notifications.value.length === 0) {
        visible.value = false;
    }
};
const clearAll = () => {
    notifications.value.forEach(notification => {
        if (notification.onClose) {
            notification.onClose();
        }
    });
    notifications.value = [];
    visible.value = false;
};
const __VLS_exposed = {
    info: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'info' })),
    success: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'success' })),
    warning: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'warning' })),
    error: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'error' })),
    create: createNotification,
    close,
    clearAll
};
defineExpose(__VLS_exposed);
onUnmounted(() => {
    clearAll();
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
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
const __VLS_0 = {}.Teleport;
;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "body",
}));
const __VLS_2 = __VLS_1({
    to: "body",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.visible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['cp-cyber-notification-container', `position-${__VLS_ctx.position}`]) }));
    const __VLS_4 = {}.TransitionGroup;
    ;
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(Object.assign({ 'onAfterLeave': {} }, { name: "notification", tag: "div" })));
    const __VLS_6 = __VLS_5(Object.assign({ 'onAfterLeave': {} }, { name: "notification", tag: "div" }), ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = {
        onAfterLeave: (__VLS_ctx.handleAfterLeave)
    };
    __VLS_7.slots.default;
    for (const [notification] of __VLS_getVForSourceType((__VLS_ctx.notifications))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ key: (notification.id) }, { class: (['cp-cyber-notification', `type-${notification.type}`, `effect-${notification.effect}`]) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-content" }));
        if (notification.showIcon) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-icon" }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-circle" }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-symbol" }));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-body" }));
        if (notification.title) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-title" }));
            (notification.title);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-message" }));
        (notification.message);
        if (notification.actions && notification.actions.length) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-actions" }));
            for (const [action, index] of __VLS_getVForSourceType((notification.actions))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.visible))
                            return;
                        if (!(notification.actions && notification.actions.length))
                            return;
                        __VLS_ctx.handleActionClick(notification, action);
                    } }, { key: (index) }), { class: "action-button" }));
                (action.text);
            }
        }
        if (notification.showClose) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.visible))
                        return;
                    if (!(notification.showClose))
                        return;
                    __VLS_ctx.close(notification.id);
                } }, { class: "notification-close" }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "close-icon" }));
        }
        if (notification.duration > 0) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-progress" }, { style: ({ animationDuration: `${notification.duration}ms` }) }));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-glitch-effect" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "notification-hologram-effect" }));
    }
    var __VLS_7;
}
var __VLS_3;
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
            notifications: notifications,
            visible: visible,
            close: close,
            handleActionClick: handleActionClick,
            handleAfterLeave: handleAfterLeave,
        };
    },
    emits: {},
    props: {
        position: {
            type: String,
            default: 'top-right',
            validator: (value) => {
                return ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'center'].indexOf(value) !== -1;
            }
        },
        maxCount: {
            type: Number,
            default: 10
        },
        duration: {
            type: Number,
            default: 4500
        },
        effect: {
            type: String,
            default: 'glitch',
            validator: (value) => {
                return ['glitch', 'hologram', 'circuit'].indexOf(value) !== -1;
            }
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return Object.assign({}, __VLS_exposed);
    },
    emits: {},
    props: {
        position: {
            type: String,
            default: 'top-right',
            validator: (value) => {
                return ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'center'].indexOf(value) !== -1;
            }
        },
        maxCount: {
            type: Number,
            default: 10
        },
        duration: {
            type: Number,
            default: 4500
        },
        effect: {
            type: String,
            default: 'glitch',
            validator: (value) => {
                return ['glitch', 'hologram', 'circuit'].indexOf(value) !== -1;
            }
        }
    },
});
;
//# sourceMappingURL=cyberNotification.vue.js.map