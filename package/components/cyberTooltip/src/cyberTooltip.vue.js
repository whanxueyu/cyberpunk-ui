import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
defineOptions({
    name: 'CyberTooltip',
});
const props = defineProps({
    content: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: 'top',
        validator: (value) => {
            return ['top', 'right', 'bottom', 'left', 'auto'].indexOf(value) !== -1;
        }
    },
    effect: {
        type: String,
        default: 'hologram',
        validator: (value) => {
            return ['hologram', 'glitch', 'scan', 'fade'].indexOf(value) !== -1;
        }
    },
    trigger: {
        type: String,
        default: 'hover',
        validator: (value) => {
            return ['hover', 'click', 'focus'].indexOf(value) !== -1;
        }
    },
    delay: {
        type: Number,
        default: 200
    },
    width: {
        type: [String, Number],
        default: 'auto'
    },
    theme: {
        type: String,
        default: 'neon',
        validator: (value) => {
            return ['neon', 'terminal', 'holographic'].indexOf(value) !== -1;
        }
    }
});
const emit = defineEmits(['show', 'hide']);
const visible = ref(false);
const triggerRef = ref(null);
const tooltipRef = ref(null);
const timeout = ref(null);
const computedPosition = ref(props.position);
const tooltipStyle = ref({});
const tooltipWidth = computed(() => {
    if (typeof props.width === 'number') {
        return `${props.width}px`;
    }
    return props.width;
});
const show = () => {
    if (timeout.value) {
        clearTimeout(timeout.value);
    }
    timeout.value = window.setTimeout(() => {
        visible.value = true;
        nextTick(() => {
            updatePosition();
            emit('show');
        });
    }, props.delay);
};
const hide = () => {
    if (timeout.value) {
        clearTimeout(timeout.value);
    }
    timeout.value = window.setTimeout(() => {
        visible.value = false;
        emit('hide');
    }, 100);
};
const updatePosition = () => {
    if (!triggerRef.value || !tooltipRef.value)
        return;
    const triggerRect = triggerRef.value.getBoundingClientRect();
    const tooltipRect = tooltipRef.value.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const MARGIN = 10;
    if (props.position === 'auto') {
        const spaceTop = triggerRect.top - MARGIN;
        const spaceBottom = viewportHeight - triggerRect.bottom - MARGIN;
        const spaceLeft = triggerRect.left - MARGIN;
        const spaceRight = viewportWidth - triggerRect.right - MARGIN;
        const tooltipHeight = tooltipRect.height;
        const tooltipWidth = tooltipRect.width;
        var positions = [];
        if (spaceBottom > tooltipHeight) {
            positions.push({ pos: 'bottom', space: spaceBottom });
        }
        if (spaceTop > tooltipHeight) {
            positions.push({ pos: 'top', space: spaceTop });
        }
        if (spaceRight > tooltipWidth) {
            positions.push({ pos: 'right', space: spaceRight });
        }
        if (spaceLeft > tooltipWidth) {
            positions.push({ pos: 'left', space: spaceLeft });
        }
        if (positions.length > 0) {
            positions.sort((a, b) => b.space - a.space);
            computedPosition.value = positions[0].pos;
        }
        else {
            const maxSpace = Math.max(spaceTop, spaceRight, spaceBottom, spaceLeft);
            if (maxSpace === spaceTop) {
                computedPosition.value = 'top';
            }
            else if (maxSpace === spaceRight) {
                computedPosition.value = 'right';
            }
            else if (maxSpace === spaceBottom) {
                computedPosition.value = 'bottom';
            }
            else {
                computedPosition.value = 'left';
            }
        }
    }
    else {
        computedPosition.value = props.position;
    }
    let left = 0;
    let top = 0;
    const GAP = 10;
    switch (computedPosition.value) {
        case 'top':
            left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2) + scrollLeft;
            top = triggerRect.top - tooltipRect.height - GAP + scrollTop;
            break;
        case 'right':
            left = triggerRect.right + GAP + scrollLeft;
            top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2) + scrollTop;
            break;
        case 'bottom':
            left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2) + scrollLeft;
            top = triggerRect.bottom + GAP + scrollTop;
            break;
        case 'left':
            left = triggerRect.left - tooltipRect.width - GAP + scrollLeft;
            top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2) + scrollTop;
            break;
    }
    const adjustPosition = () => {
        if (left < MARGIN) {
            left = MARGIN;
        }
        else if (left + tooltipRect.width > viewportWidth - MARGIN) {
            left = viewportWidth - tooltipRect.width - MARGIN;
        }
        if (top < MARGIN) {
            top = MARGIN;
        }
        else if (top + tooltipRect.height > viewportHeight + scrollTop - MARGIN) {
            top = viewportHeight + scrollTop - tooltipRect.height - MARGIN;
        }
    };
    if (props.position === 'auto') {
        adjustPosition();
    }
    else {
        adjustPosition();
    }
    tooltipStyle.value = {
        left: `${left}px`,
        top: `${top}px`,
        width: tooltipWidth.value
    };
};
const handleMouseEnter = () => {
    if (props.trigger === 'hover') {
        show();
    }
};
const handleMouseLeave = () => {
    if (props.trigger === 'hover') {
        hide();
    }
};
const handleClick = () => {
    if (props.trigger === 'click') {
        if (visible.value) {
            hide();
        }
        else {
            show();
        }
    }
};
const handleFocus = () => {
    if (props.trigger === 'focus') {
        show();
    }
};
const handleBlur = () => {
    if (props.trigger === 'focus') {
        hide();
    }
};
const handleResize = () => {
    if (visible.value) {
        updatePosition();
    }
};
const handleScroll = () => {
    if (visible.value) {
        updatePosition();
    }
};
watch(() => props.position, () => {
    if (visible.value) {
        nextTick(updatePosition);
    }
});
onMounted(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', (e) => {
        if (visible.value && props.trigger === 'click') {
            const target = e.target;
            if (tooltipRef.value && !tooltipRef.value.contains(target) &&
                triggerRef.value && !triggerRef.value.contains(target)) {
                hide();
            }
        }
    });
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
    if (timeout.value) {
        clearTimeout(timeout.value);
    }
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ onMouseenter: (__VLS_ctx.handleMouseEnter) }, { onMouseleave: (__VLS_ctx.handleMouseLeave) }), { onClick: (__VLS_ctx.handleClick) }), { onFocus: (__VLS_ctx.handleFocus) }), { onBlur: (__VLS_ctx.handleBlur) }), { ref: "triggerRef" }), { class: "tooltip-trigger" }));
;
var __VLS_0 = {};
const __VLS_2 = {}.Teleport;
;
const __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
    to: "body",
}));
const __VLS_4 = __VLS_3({
    to: "body",
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_5.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ ref: "tooltipRef" }, { class: (['cp-cyber-tooltip', `theme-${__VLS_ctx.theme}`, `effect-${__VLS_ctx.effect}`, `position-${__VLS_ctx.computedPosition}`]) }), { style: (__VLS_ctx.tooltipStyle) }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.visible) }), null, null);
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tooltip-arrow" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tooltip-inner" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tooltip-content" }));
var __VLS_6 = {};
(__VLS_ctx.content);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tooltip-scanline" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "tooltip-glitch" }));
var __VLS_5;
;
;
;
;
;
;
;
var __VLS_1 = __VLS_0, __VLS_7 = __VLS_6;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            visible: visible,
            triggerRef: triggerRef,
            tooltipRef: tooltipRef,
            computedPosition: computedPosition,
            tooltipStyle: tooltipStyle,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
            handleClick: handleClick,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
        };
    },
    emits: {},
    props: {
        content: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'top',
            validator: (value) => {
                return ['top', 'right', 'bottom', 'left', 'auto'].indexOf(value) !== -1;
            }
        },
        effect: {
            type: String,
            default: 'hologram',
            validator: (value) => {
                return ['hologram', 'glitch', 'scan', 'fade'].indexOf(value) !== -1;
            }
        },
        trigger: {
            type: String,
            default: 'hover',
            validator: (value) => {
                return ['hover', 'click', 'focus'].indexOf(value) !== -1;
            }
        },
        delay: {
            type: Number,
            default: 200
        },
        width: {
            type: [String, Number],
            default: 'auto'
        },
        theme: {
            type: String,
            default: 'neon',
            validator: (value) => {
                return ['neon', 'terminal', 'holographic'].indexOf(value) !== -1;
            }
        }
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        content: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'top',
            validator: (value) => {
                return ['top', 'right', 'bottom', 'left', 'auto'].indexOf(value) !== -1;
            }
        },
        effect: {
            type: String,
            default: 'hologram',
            validator: (value) => {
                return ['hologram', 'glitch', 'scan', 'fade'].indexOf(value) !== -1;
            }
        },
        trigger: {
            type: String,
            default: 'hover',
            validator: (value) => {
                return ['hover', 'click', 'focus'].indexOf(value) !== -1;
            }
        },
        delay: {
            type: Number,
            default: 200
        },
        width: {
            type: [String, Number],
            default: 'auto'
        },
        theme: {
            type: String,
            default: 'neon',
            validator: (value) => {
                return ['neon', 'terminal', 'holographic'].indexOf(value) !== -1;
            }
        }
    },
});
export default {};
;
//# sourceMappingURL=cyberTooltip.vue.js.map