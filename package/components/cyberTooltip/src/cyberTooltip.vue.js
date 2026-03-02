import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
defineOptions({
    name: "CyberTooltip",
});
const props = defineProps({
    content: {
        type: String,
        default: "",
    },
    position: {
        type: String,
        default: "top",
        validator: (value) => {
            return ["top", "right", "bottom", "left", "auto"].indexOf(value) !== -1;
        },
    },
    effect: {
        type: String,
        default: "hologram",
        validator: (value) => {
            return ["hologram", "glitch", "scan", "fade"].indexOf(value) !== -1;
        },
    },
    trigger: {
        type: String,
        default: "hover",
        validator: (value) => {
            return ["hover", "click", "focus"].indexOf(value) !== -1;
        },
    },
    delay: {
        type: Number,
        default: 200,
    },
    width: {
        type: [String, Number],
        default: "auto",
    },
    theme: {
        type: String,
        default: "neon",
        validator: (value) => {
            return ["neon", "terminal", "holographic"].indexOf(value) !== -1;
        },
    },
});
const emit = defineEmits(["show", "hide"]);
const visible = ref(false);
const triggerRef = ref(null);
const tooltipRef = ref(null);
const timeout = ref(null);
const computedPosition = ref(props.position);
const tooltipStyle = ref({});
const calculateBestPosition = () => {
    if (!triggerRef.value || !tooltipRef.value || props.position !== "auto") {
        return props.position;
    }
    const triggerRect = triggerRef.value.getBoundingClientRect();
    const tooltipRect = tooltipRef.value.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const spaceTop = triggerRect.top;
    const spaceRight = viewportWidth - triggerRect.right;
    const spaceBottom = viewportHeight - triggerRect.bottom;
    const spaceLeft = triggerRect.left;
    const spaces = [
        { position: "top", space: spaceTop },
        { position: "right", space: spaceRight },
        { position: "bottom", space: spaceBottom },
        { position: "left", space: spaceLeft },
    ];
    spaces.sort((a, b) => b.space - a.space);
    const requiredSpace = tooltipRect.height || 50;
    const requiredWidth = tooltipRect.width || 150;
    for (const space of spaces) {
        if ((space.position === "top" && space.space >= requiredSpace + 10) ||
            (space.position === "bottom" && space.space >= requiredSpace + 10) ||
            (space.position === "left" && space.space >= requiredWidth + 10) ||
            (space.position === "right" && space.space >= requiredWidth + 10)) {
            return space.position;
        }
    }
    return "top";
};
const tooltipWidth = computed(() => {
    if (typeof props.width === "number") {
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
            if (props.position === "auto") {
                computedPosition.value = calculateBestPosition();
            }
            else {
                computedPosition.value = props.position;
            }
            updatePosition();
            emit("show");
        });
    }, props.delay);
};
const hide = () => {
    if (timeout.value) {
        clearTimeout(timeout.value);
    }
    timeout.value = window.setTimeout(() => {
        visible.value = false;
        emit("hide");
    }, 100);
};
const updatePosition = () => {
    if (!triggerRef.value || !tooltipRef.value)
        return;
    const triggerRect = triggerRef.value.getBoundingClientRect();
    const tooltipRect = tooltipRef.value.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let left = 0;
    let top = 0;
    const GAP = 10;
    switch (computedPosition.value) {
        case "top":
            left =
                triggerRect.left +
                    triggerRect.width / 2 -
                    tooltipRect.width / 2 +
                    scrollLeft;
            top = triggerRect.top - tooltipRect.height - GAP + scrollTop;
            break;
        case "right":
            left = triggerRect.right + GAP + scrollLeft;
            top =
                triggerRect.top +
                    triggerRect.height / 2 -
                    tooltipRect.height / 2 +
                    scrollTop;
            break;
        case "bottom":
            left =
                triggerRect.left +
                    triggerRect.width / 2 -
                    tooltipRect.width / 2 +
                    scrollLeft;
            top = triggerRect.bottom + GAP + scrollTop;
            break;
        case "left":
            left = triggerRect.left - tooltipRect.width - GAP + scrollLeft;
            top =
                triggerRect.top +
                    triggerRect.height / 2 -
                    tooltipRect.height / 2 +
                    scrollTop;
            break;
    }
    const adjustPosition = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const MARGIN = 10;
        if (left < MARGIN) {
            left = MARGIN;
        }
        else if (left + tooltipRect.width > viewportWidth - MARGIN) {
            left = viewportWidth - tooltipRect.width - MARGIN;
        }
        if (top < MARGIN) {
            top = MARGIN;
        }
        else if (top + tooltipRect.height > viewportHeight - MARGIN) {
            top = viewportHeight - tooltipRect.height - MARGIN;
        }
    };
    adjustPosition();
    tooltipStyle.value = {
        left: `${left}px`,
        top: `${top}px`,
        width: tooltipWidth.value,
    };
};
const handleMouseEnter = () => {
    if (props.trigger === "hover") {
        show();
    }
};
const handleMouseLeave = () => {
    if (props.trigger === "hover") {
        hide();
    }
};
const handleClick = () => {
    if (props.trigger === "click") {
        if (visible.value) {
            hide();
        }
        else {
            show();
        }
    }
};
const handleFocus = () => {
    if (props.trigger === "focus") {
        show();
    }
};
const handleBlur = () => {
    if (props.trigger === "focus") {
        hide();
    }
};
const handleResize = () => {
    if (visible.value) {
        if (props.position === "auto") {
            computedPosition.value = calculateBestPosition();
        }
        updatePosition();
    }
};
const handleScroll = () => {
    if (visible.value) {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            updatePosition();
        }, 16);
    }
};
watch(() => props.position, (newPos) => {
    if (visible.value) {
        nextTick(() => {
            if (newPos === "auto") {
                computedPosition.value = calculateBestPosition();
            }
            else {
                computedPosition.value = newPos;
            }
            updatePosition();
        });
    }
});
let scrollParents = [];
const findScrollParents = (element) => {
    let parents = [];
    let parent = element.parentElement;
    while (parent) {
        const style = window.getComputedStyle(parent);
        const overflowRegex = /(auto|scroll)/;
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
            parents.push(parent);
        }
        parent = parent.parentElement;
    }
    parents.push(document.documentElement);
    return parents;
};
onMounted(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", (e) => {
        if (visible.value && props.trigger === "click") {
            const target = e.target;
            if (tooltipRef.value &&
                !tooltipRef.value.contains(target) &&
                triggerRef.value &&
                !triggerRef.value.contains(target)) {
                hide();
            }
        }
    });
    if (triggerRef.value) {
        scrollParents = findScrollParents(triggerRef.value);
        const throttledHandleScroll = () => {
            if (scrollTimer)
                clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                if (visible.value)
                    updatePosition();
            }, 16);
        };
        scrollParents.forEach((parent) => {
            parent.addEventListener("scroll", throttledHandleScroll);
        });
    }
});
let scrollTimer = null;
onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);
    scrollParents.forEach((parent) => {
        parent.removeEventListener("scroll", handleScroll);
    });
    if (timeout.value) {
        clearTimeout(timeout.value);
    }
    if (scrollTimer) {
        clearTimeout(scrollTimer);
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ ref: "tooltipRef" }, { class: ([
        'cp-cyber-tooltip',
        `theme-${__VLS_ctx.theme}`,
        `effect-${__VLS_ctx.effect}`,
        `position-${__VLS_ctx.computedPosition}`,
    ]) }), { style: (__VLS_ctx.tooltipStyle) }));
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
            default: "",
        },
        position: {
            type: String,
            default: "top",
            validator: (value) => {
                return ["top", "right", "bottom", "left", "auto"].indexOf(value) !== -1;
            },
        },
        effect: {
            type: String,
            default: "hologram",
            validator: (value) => {
                return ["hologram", "glitch", "scan", "fade"].indexOf(value) !== -1;
            },
        },
        trigger: {
            type: String,
            default: "hover",
            validator: (value) => {
                return ["hover", "click", "focus"].indexOf(value) !== -1;
            },
        },
        delay: {
            type: Number,
            default: 200,
        },
        width: {
            type: [String, Number],
            default: "auto",
        },
        theme: {
            type: String,
            default: "neon",
            validator: (value) => {
                return ["neon", "terminal", "holographic"].indexOf(value) !== -1;
            },
        },
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
            default: "",
        },
        position: {
            type: String,
            default: "top",
            validator: (value) => {
                return ["top", "right", "bottom", "left", "auto"].indexOf(value) !== -1;
            },
        },
        effect: {
            type: String,
            default: "hologram",
            validator: (value) => {
                return ["hologram", "glitch", "scan", "fade"].indexOf(value) !== -1;
            },
        },
        trigger: {
            type: String,
            default: "hover",
            validator: (value) => {
                return ["hover", "click", "focus"].indexOf(value) !== -1;
            },
        },
        delay: {
            type: Number,
            default: 200,
        },
        width: {
            type: [String, Number],
            default: "auto",
        },
        theme: {
            type: String,
            default: "neon",
            validator: (value) => {
                return ["neon", "terminal", "holographic"].indexOf(value) !== -1;
            },
        },
    },
});
export default {};
;
//# sourceMappingURL=cyberTooltip.vue.js.map