import { ref, onUnmounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpCyberNotification',
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
defineExpose({
    info: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'info' })),
    success: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'success' })),
    warning: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'warning' })),
    error: (options) => createNotification(Object.assign(Object.assign({}, options), { type: 'error' })),
    create: createNotification,
    close,
    clearAll
});
onUnmounted(() => {
    clearAll();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
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
    emits: {},
});
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
    const __VLS_0 = {}
        .Teleport;
    ({}.Teleport);
    ({}.Teleport);
    __VLS_components.Teleport;
    __VLS_components.Teleport;
    [Teleport, Teleport,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("body"), }));
    const __VLS_2 = __VLS_1({ to: ("body"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("body"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.visible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['cp-cyber-notification-container', `position-${__VLS_ctx.position}`])) }));
        __VLS_styleScopedClasses = (['cp-cyber-notification-container', `position-${position}`]);
        const __VLS_6 = {}
            .TransitionGroup;
        ({}.TransitionGroup);
        ({}.TransitionGroup);
        __VLS_components.TransitionGroup;
        __VLS_components.transitionGroup;
        __VLS_components.TransitionGroup;
        __VLS_components.transitionGroup;
        [TransitionGroup, TransitionGroup,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(Object.assign({ 'onAfterLeave': {} }, { name: ("notification"), tag: ("div") })));
        const __VLS_8 = __VLS_7(Object.assign({ 'onAfterLeave': {} }, { name: ("notification"), tag: ("div") }), ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}(Object.assign({ 'onAfterLeave': {} }, { name: ("notification"), tag: ("div") })));
        let __VLS_12;
        const __VLS_13 = {
            onAfterLeave: (__VLS_ctx.handleAfterLeave)
        };
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        let __VLS_9;
        let __VLS_10;
        for (const [notification] of __VLS_getVForSourceType((__VLS_ctx.notifications))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ key: ((notification.id)) }, { class: ((['cp-cyber-notification', `type-${notification.type}`, `effect-${notification.effect}`])) }));
            __VLS_styleScopedClasses = (['cp-cyber-notification', `type-${notification.type}`, `effect-${notification.effect}`]);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-content") }));
            if (notification.showIcon) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-icon") }));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("icon-circle") }));
                [visible, position, handleAfterLeave, notifications,];
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("icon-symbol") }));
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-body") }));
            if (notification.title) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-title") }));
                (notification.title);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-message") }));
            (notification.message);
            if (notification.actions && notification.actions.length) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-actions") }));
                for (const [action, index] of __VLS_getVForSourceType((notification.actions))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.visible)))
                                return;
                            if (!((notification.actions && notification.actions.length)))
                                return;
                            __VLS_ctx.handleActionClick(notification, action);
                            [handleActionClick,];
                        } }, { key: ((index)) }), { class: ("action-button") }));
                    (action.text);
                }
            }
            if (notification.showClose) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.visible)))
                            return;
                        if (!((notification.showClose)))
                            return;
                        __VLS_ctx.close(notification.id);
                        [close,];
                    } }, { class: ("notification-close") }));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("close-icon") }));
            }
            if (notification.duration > 0) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-progress") }, { style: (({ animationDuration: `${notification.duration}ms` })) }));
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-glitch-effect") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("notification-hologram-effect") }));
        }
        __VLS_nonNullable(__VLS_11.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['notification-content'];
        __VLS_styleScopedClasses['notification-icon'];
        __VLS_styleScopedClasses['icon-circle'];
        __VLS_styleScopedClasses['icon-symbol'];
        __VLS_styleScopedClasses['notification-body'];
        __VLS_styleScopedClasses['notification-title'];
        __VLS_styleScopedClasses['notification-message'];
        __VLS_styleScopedClasses['notification-actions'];
        __VLS_styleScopedClasses['action-button'];
        __VLS_styleScopedClasses['notification-close'];
        __VLS_styleScopedClasses['close-icon'];
        __VLS_styleScopedClasses['notification-progress'];
        __VLS_styleScopedClasses['notification-glitch-effect'];
        __VLS_styleScopedClasses['notification-hologram-effect'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                notifications: notifications,
                visible: visible,
                close: close,
                handleActionClick: handleActionClick,
                handleAfterLeave: handleAfterLeave,
            };
        },
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
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return Object.assign({}, __VLS_exposed);
    },
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
    emits: {},
});
;
//# sourceMappingURL=cyberNotification.vue.js.map