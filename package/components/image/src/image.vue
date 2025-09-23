<template>
    <div>
        <div class="imgbox" :style="{ width: normalizedWidth, height: normalizedHeight }" role="img"
            :aria-label="alt || undefined" :aria-busy="!isLoaded && !hasError">
            <img v-if="src" :src="src" :alt="alt" :loading="loading" :crossorigin="crossorigin"
                class="hidden-image">

            <div class="cyberimg" :class="{
                'loaded': isLoaded && !hasError,
                'loading': !isLoaded && !hasError,
                'error': hasError,
                'no-glitch': disableGlitch
            }" :style="{
                background: backgroundImage,
                backgroundSize: backgroundSize
            }">
                <slot v-if="isLoaded && !hasError"></slot>
                <div v-else-if="!isLoaded && placeholder" class="placeholder">
                    <slot name="placeholder">
                        <img :src="placeholder" alt="Loading...">
                    </slot>
                </div>
                <div v-else-if="hasError" class="error">
                    <slot name="error">{{ errorContent }}</slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, ref, computed, onMounted, watch } from 'vue';
defineOptions({
    name: 'CyberImage',
})
// 定义并设置默认值的属性
const props = withDefaults(defineProps<{
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    loading?: 'eager' | 'lazy';
    crossorigin?: '' | 'anonymous' | 'use-credentials';
    placeholder?: string;
    errorSrc?: string;
    errorContent?: string;
    disableGlitch?: boolean;
}>(), {
    src: '',
    alt: '',
    width: '100%',
    height: '100%',
    fit: 'cover',
    loading: 'lazy',
    errorSrc:'',
    crossorigin: 'anonymous',
    errorContent: 'Image failed to load',
    disableGlitch: false
});

// 状态管理
const isLoaded = ref(false);
const hasError = ref(false);
const actualSrc = ref(props.src);

// 尺寸处理
const normalizedWidth = computed(() =>
    typeof props.width === 'number' ? `${props.width}px` : props.width
);
const normalizedHeight = computed(() =>
    typeof props.height === 'number' ? `${props.height}px` : props.height
);

// 背景图像计算
const backgroundImage = computed(() => {
    if (hasError.value && props.errorSrc) return `url(${props.errorSrc}) no-repeat`;
    return `url(${actualSrc.value}) no-repeat`;
});

// 预加载处理
const loadImage = () => {
    if (!props.src) return;

    isLoaded.value = false;
    hasError.value = false;

    const img = new Image();
    if (props.crossorigin) img.crossOrigin = props.crossorigin;
    img.src = props.src;

    img.onload = () => {
        actualSrc.value = props.src;
        isLoaded.value = true;
    };

    img.onerror = () => {
        hasError.value = true;
        if (props.errorSrc && props.errorSrc !== props.src) {
            actualSrc.value = props.errorSrc;
            // 尝试加载错误备用图
            const errorImg = new Image();
            errorImg.src = props.errorSrc;
            errorImg.onload = () => isLoaded.value = true;
        } else {
            isLoaded.value = true;
        }
    };
};
const backgroundSize = computed(() => {
  switch (props.fit) {
    case 'fill':
      return '100% 100%'; // 完全填充（可能变形）
    case 'scale-down':
      return 'contain'; // 作为替代方案（保持比例）
    default:
      return props.fit; // 其他值直接使用
  }
});
// 监听src变化
watch(() => props.src, loadImage);

// 初始加载
onMounted(loadImage);
</script>
<style lang="scss" scoped>
@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

.hidden-image {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
}

.placeholder,
.error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #93939333;
}

.cyberimg {
    &.loaded:not(.no-glitch) {
        animation: main-img-hide 20s infinite step-end;

        &::before {
            content: "";
            animation: glitch-two 20s infinite 1s step-end;
        }

        &::after {
            content: "";
            animation: glitch-one 20s infinite step-end;
        }
    }

    &.loading {
        filter: blur(2px);
        opacity: 0.7;
    }

    &.error {
        background-color: #ffd3da26;
        animation: none;

        &::before,
        &::after {
            animation: none;
        }
    }

    &.no-glitch {
        animation: none;

        &::before,
        &::after {
            animation: none;
        }
    }
}

.imgbox {
    width: 100%;
    height: 100%;
    // overflow: hidden;
}

.cyberimg {
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;
    background-repeat: no-repeat;
    animation: main-img-hide 20s infinite step-end;
}

.cyberimg::before,
.cyberimg::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: inherit;
}

.cyberimg::after {
    content: "";
    animation: glitch-one 20s infinite step-end;
}

.cyberimg::before {
    content: "";
    animation: glitch-two 20s infinite 1s step-end;
}

@keyframes glitch-one {
    20% {
        left: #{randomNum(30, -10, 1)}px;
        clip-path: inset(#{randomNum(100, 10, 1)}px 0 #{randomNum(50, 10, 1)}px 0);
        opacity: 0.8;
        filter: hue-rotate(80deg) saturate(1.3);
    }

    22% {
        left: #{randomNum(20, -20, 1)}px;
        clip-path: inset(#{randomNum(200, 100, 1)}px 0 #{randomNum(100, 10, 1)}px 0);
        // opacity: 0.1;
        // filter: hue-rotate(20deg) saturate(0.9);
    }
    24% {
        left: #{randomNum(10, -20, 1)}px;
        clip-path: inset(#{randomNum(100, 30, 1)}px 0 #{randomNum(150, 80, 1)}px 0);
        // opacity: 0.1;
        // filter: hue-rotate(20deg) saturate(0.9);
    }
    26% {
        left: #{randomNum(6, -20, 1)}px;
        clip-path: inset(#{randomNum(100, 130, 1)}px 0 #{randomNum(10, 50, 1)}px 0);
        // opacity: 0.1;
        filter: hue-rotate(40deg) saturate(0.9);
    }
    28% {
        left: #{randomNum(20, -20, 1)}px;
        clip-path: inset(#{randomNum(100, 130, 1)}px 0 #{randomNum(40, 10, 1)}px 0);
    }

    30% {
        left: #{randomNum(10, -20, 1)}px;
        clip-path: inset(#{randomNum(50, 10, 1)}px 0 #{randomNum(20, 0, 1)}px 0);
        transform: scale(0.99);
        filter: hue-rotate(46deg) saturate(1.1);
    }

    45% {
        opacity: 0.5;
        left: -20px;
        filter: hue-rotate(90deg) saturate(1.3);
    }

    53% {
        clip-path: inset(220px 0 100px);
        left: 2%;
        transform: scale(1.06);
        filter: none;
    }

    54% {
        opacity: 0;
    }

    99% {
        opacity: 0;
    }
}
@keyframes glitch-two {

    25.5% {
        clip-path: inset(10px 0 320px);
        left: -20px;
    }

    26% {
        clip-path: inset(30px 0 200px);
        left: -10px;
        opacity: 0;
    }

    36% {
        left: #{randomNum(30, -10, 1)}px;
        clip-path: inset(#{randomNum(100, 10, 1)}px 0 #{randomNum(50, 10, 1)}px 0);
        opacity: 0.8;
        filter: hue-rotate(80deg) saturate(1.3);
    }

    40% {
        left: #{randomNum(20, -20, 1)}px;
        clip-path: inset(#{randomNum(200, 100, 1)}px 0 #{randomNum(100, 10, 1)}px 0);
        // opacity: 0.1;
        // filter: hue-rotate(20deg) saturate(0.9);
    }
    42% {
        left: #{randomNum(10, -20, 1)}px;
        clip-path: inset(#{randomNum(100, 30, 1)}px 0 #{randomNum(150, 80, 1)}px 0);
        // opacity: 0.1;
        // filter: hue-rotate(20deg) saturate(0.9);
    }
    44% {
        left: #{randomNum(6, -20, 1)}px;
        clip-path: inset(#{randomNum(100, 130, 1)}px 0 #{randomNum(10, 50, 1)}px 0);
        // opacity: 0.1;
        filter: hue-rotate(40deg) saturate(0.9);
    }
    48% {
        left: #{randomNum(20, -20, 1)}px;
        clip-path: inset(#{randomNum(100, 130, 1)}px 0 #{randomNum(40, 10, 1)}px 0);
    }

    50% {
        left: #{randomNum(10, -20, 1)}px;
        clip-path: inset(#{randomNum(50, 10, 1)}px 0 #{randomNum(20, 0, 1)}px 0);
        transform: scale(0.99);
        filter: hue-rotate(46deg) saturate(1.1);
    }

    53% {
        clip-path: inset(220px 0 100px);
        left: 2%;
        transform: scale(1.06);
        filter: none;
    }

    54% {
        opacity: 0;
    }

    99% {
        opacity: 0;
    }
}
@keyframes main-img-hide {
    5% {
        filter: invert(1);
    }

    5.2% {
        filter: none;
    }

    10% {
        opacity: 0.5;
        filter: grayscale(1);
    }

    11% {
        filter: none;
        opacity: 1;
    }

    40% {
        opacity: 0.5;
        filter: grayscale(1);
    }
    42% {
        opacity: 0.5;
        filter: none;
    }

    48% {
        filter: none;
        opacity: 1;
    }

    54.5% {
        opacity: 0.5;
        filter: hue-rotate(30deg);
    }

    55% {
        filter: none;
    }

    58% {
        opacity: 1;
    }
}
</style>