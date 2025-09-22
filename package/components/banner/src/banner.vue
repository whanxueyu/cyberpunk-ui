<template>
    <div class="container">
        <!-- 舞台层 -->
        <div class="stage">
            <!-- 控制层 -->
            <div class="control">
                <!-- 图片层 -->
                <div class="imgWrap">
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
        type: Array as ()=> Array<string>, 
        default: [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        ]
    },
    translateZ: {
        type: Number,
        default: 650
    }
})
const imageCount = ref(1)
imageCount.value = props.imgList.length;
const getImageStyle = (index: number) => {
    const angle = 35 + (index + 1) * (360 / imageCount.value); // 索引从0开始，需+1匹配原逻辑
    return {
        transform: `rotateY(${angle}deg) translateZ(${props.translateZ}px)`
    };
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
}

@media (min-width:800px) {
    .stage {
        position: relative;
        width: 800px;
        height: 320px;
        margin: 20px auto;
        perspective: 2000px;
        transform-style: preserve-3d;
        -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .5));

        .control {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transform: translateZ(-2000px) rotateY(50deg) rotateZ(0deg);
            animation: rotate 30s linear infinite;

            .imgWrap {
                position: absolute;
                width: 400px;
                height: 400px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transform-style: preserve-3d;

                .img {
                    position: absolute;
                    width: 500px;
                    height: 400px;
                    line-height: 400px;
                    text-align: center;
                    font-size: 120px;
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

                // @for $i from 1 through v-bind('$imageCount') {
                //     .img#{$i} {
                //         // transform: rotateY(35 + ($i * 45deg)) translateZ(482.84px) ;
                //         transform: rotateY(35 + ($i * 45deg)) translateZ(650px);
                //     }
                // }
            }
        }
    }
}

@media (max-width:800px) {
    .stage {
        position: relative;
        width: 100vw;
        height: 30vw;
        margin: 10px auto;
        perspective: 2000px;
        transform-style: preserve-3d;
        -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .5));

        .control {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transform: translateZ(-2000px) rotateY(50deg) rotateZ(0deg);
            animation: rotate 30s linear infinite;

            .imgWrap {
                position: absolute;
                width: 50vw;
                height: 50vw;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transform-style: preserve-3d;

                .img {
                    position: absolute;
                    width: 63vw;
                    height: 50vw;
                    line-height: 50vw;
                    text-align: center;
                    font-size: 120px;
                    top: 0;
                    left: 0;
                    transform-style: preserve-3d;
                    transform-origin: 50% 50% 0px;
                }

                img {
                    width: 63vw;
                    height: 50vw;
                    object-fit: cover;
                }
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