import { ref } from 'vue';
defineOptions({
    name: 'CyberBanner',
});
const props = defineProps({
    imgList: {
        type: Array,
        default: []
    },
    shadow: {
        type: Boolean,
        default: true
    },
    animationDuration: {
        type: Number,
        default: 30
    },
    imgWidth: {
        type: Number,
        default: 500
    },
    imgHeight: {
        type: Number,
        default: 400
    }
});
const imageCount = ref(props.imgList.length);
const containerWidth = calculateWaistLength(props.imgWidth, 360 / imageCount.value) * 1.6;
function calculateWaistLength(baseLength, apexAngle) {
    const angleInRadians = apexAngle * Math.PI / 180;
    const waistLength = baseLength / (2 * Math.sin(angleInRadians / 2));
    return waistLength;
}
const getImageStyle = (index) => {
    const angle = 35 + (index + 1) * (360 / imageCount.value);
    const waistLength = calculateWaistLength(props.imgWidth, 360 / imageCount.value);
    return {
        transform: `rotateY(${angle}deg) translateZ(${waistLength}px)`
    };
};
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "container" }, { style: ({
        '--container-width': `${__VLS_ctx.containerWidth}px`,
        '--img-width': `${props.imgWidth}px`,
        '--img-height': `${props.imgHeight}px`,
    }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "stage" }, { class: ({ 'has-shadow': props.shadow }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "control" }, { style: ({
        '--animation-duration': `${props.animationDuration}s`,
    }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: " imgWrap" }));
for (const [img, index] of __VLS_getVForSourceType((props.imgList))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ key: (index) }, { class: "img" }), { style: (__VLS_ctx.getImageStyle(index)) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: (img),
    });
}
;
;
;
;
;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            containerWidth: containerWidth,
            getImageStyle: getImageStyle,
        };
    },
    props: {
        imgList: {
            type: Array,
            default: []
        },
        shadow: {
            type: Boolean,
            default: true
        },
        animationDuration: {
            type: Number,
            default: 30
        },
        imgWidth: {
            type: Number,
            default: 500
        },
        imgHeight: {
            type: Number,
            default: 400
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        imgList: {
            type: Array,
            default: []
        },
        shadow: {
            type: Boolean,
            default: true
        },
        animationDuration: {
            type: Number,
            default: 30
        },
        imgWidth: {
            type: Number,
            default: 500
        },
        imgHeight: {
            type: Number,
            default: 400
        }
    },
});
;
//# sourceMappingURL=banner.vue.js.map