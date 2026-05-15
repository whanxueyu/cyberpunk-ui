defineOptions({
    name: 'CyberShadowText',
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
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: (['shadow-text', props.direction]) }, { style: ({ textShadow: __VLS_ctx.makeLongShadow(props.shadowColor, props.direction) }) }));
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
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