<template>
    <div class="container" :style="{
        '--container-width': `${containerWidth}px`,
        '--img-width': `${props.imgWidth}px`,
        '--img-height': `${props.imgHeight}px`,
    }">
        <!-- 舞台层 -->
        <div class="stage" :class="{ 'has-shadow': props.shadow }">
            <!-- 控制层 -->
            <div class="control" :style="{
                '--animation-duration': `${props.animationDuration}s`,
            }">
                <!-- 图片层 -->
                <div class=" imgWrap">
                    <div v-for="(img, index) in props.imgList" :key="index" class="img" :style="getImageStyle(index)">
                        <img :src="img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
    name: 'CyberBanner',
})
const props = defineProps({
    imgList: {
        type: Array as () => Array<string>,
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
})
const containerHeight = ref(props.imgHeight);
if(props.shadow) containerHeight.value = props.imgHeight * 2;
const imageCount = ref(props.imgList.length);
const containerWidth = calculateWaistLength(props.imgWidth, 360 / imageCount.value) * 1.6;
function calculateWaistLength(baseLength, apexAngle) {
    // 将角度转换为弧度
    const angleInRadians = apexAngle * Math.PI / 180;

    // 计算腰长
    const waistLength = baseLength / (2 * Math.sin(angleInRadians / 2));

    return waistLength;
}

const getImageStyle = (index: number) => {
    const angle = 35 + (index + 1) * (360 / imageCount.value); // 索引从0开始，需+1匹配原逻辑
    const waistLength = calculateWaistLength(props.imgWidth, 360 / imageCount.value);
    return {
        transform: `rotateY(${angle}deg) translateZ(${waistLength}px)`
    };
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    height: v-bind('containerHeight + "px"');
}

.stage.has-shadow {
    -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .5));
}

.stage {
    position: relative;
    width: var(--container-width);
    margin: 20px auto;
    perspective: 2000px;
    transform-style: preserve-3d;

    .control {
        position: relative;
        height: var(--img-height);
        transform-style: preserve-3d;
        transform: translateZ(-2000px) rotateY(50deg) rotateZ(0deg);
        animation: rotate var(--animation-duration) linear infinite;

        .imgWrap {
            position: absolute;
            width: var(--img-width);
            height: var(--img-height);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transform-style: preserve-3d;

            .img {
                position: absolute;
                width: var(--img-width);
                height: var(--img-height);
                line-height: var(--img-height);
                text-align: center;
                top: 0;
                left: 0;
                transform-style: preserve-3d;
                transform-origin: 50% 50% 0px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}


@keyframes rotate {
    0% {
        transform: translateZ(-2000px) rotateY(0deg);
    }

    50% {
        transform: translateZ(-2000px) rotateY(-360deg);
    }

    100% {
        transform: translateZ(-2000px) rotateY(-720deg);
    }
}
</style>