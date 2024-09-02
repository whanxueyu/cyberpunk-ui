const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    name: 'CpShadowText',
});
const props = defineProps({
    direction: {
        type: String,
        default: 'left',
    },
    shadowColor: {
        type: String,
        default: '#ae0ed68c',
    },
    long: {
        type: Number,
        default: 20,
    }
});
const makeLongShadow = (color, direction) => {
    let val = `0px 0px ${color}`;
    for (let i = 1; i <= props.long; i++) {
        const newColor = adjustColor(color, i);
        val += `, ${direction === 'left' ? '-' : ''}${i}px ${i}px ${newColor}`;
    }
    return val;
};
const adjustColor = (color, step) => {
    const hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(color);
    const rgbMatch = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(color);
    if (hexMatch) {
        const r = parseInt(hexMatch[1], 16);
        const g = parseInt(hexMatch[2], 16);
        const b = parseInt(hexMatch[3], 16);
        const a = hexMatch[4] ? parseInt(hexMatch[4], 16) / 255 : 1;
        const newAlpha = Math.max(0, a - step * 0.05);
        return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
    }
    else if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 10);
        const g = parseInt(rgbMatch[2], 10);
        const b = parseInt(rgbMatch[3], 10);
        const a = rgbMatch[5] ? parseFloat(rgbMatch[5]) : 1;
        const newAlpha = Math.max(0, a - step * 0.05);
        return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
    }
    else {
        throw new Error(`Unsupported color format: ${color}`);
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        direction: {
            type: String,
            default: 'left',
        },
        shadowColor: {
            type: String,
            default: '#ae0ed68c',
        },
        long: {
            type: Number,
            default: 20,
        }
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((['shadow-text', props.direction])) }, { style: (({ textShadow: __VLS_ctx.makeLongShadow(props.shadowColor, props.direction) })) }));
    __VLS_styleScopedClasses = (['shadow-text', props.direction]);
    var __VLS_0 = {};
    [makeLongShadow,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                makeLongShadow: makeLongShadow,
            };
        },
        props: {
            direction: {
                type: String,
                default: 'left',
            },
            shadowColor: {
                type: String,
                default: '#ae0ed68c',
            },
            long: {
                type: Number,
                default: 20,
            }
        },
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        direction: {
            type: String,
            default: 'left',
        },
        shadowColor: {
            type: String,
            default: '#ae0ed68c',
        },
        long: {
            type: Number,
            default: 20,
        }
    },
});
export default {};
;
//# sourceMappingURL=shadowText.vue.js.map