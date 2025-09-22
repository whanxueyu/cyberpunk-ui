<template>
    <div class="imgbox">
        <div class="cyberimg" :style="{
        background: `url(${props.imgurl}) no-repeat`,
        backgroundSize: 'cover'
      }">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps} from 'vue';
defineOptions({
  name: 'CyberImage',
})
const props = defineProps({
	imgurl: {
		type: String,
		default: 'https://mzz-files.oss-cn-shenzhen.aliyuncs.com///uploads/U1002433/0cb5e044a1f0f7fc15f61264ee97ac1f.png'
	}
})
</script>
<style lang="scss" scoped>

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

.imgbox {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.cyberimg {
    position: relative;
    width: 70%;
    height: 100%;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    animation: main-img-hide 20s infinite step-end;
}

.cyberimg::before,
.cyberimg::after {
    position: absolute;
    width: 70%;
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

    15.5% {
        clip-path: inset(10px 0 320px);
        left: -20px;
    }

    16% {
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
    }

    45% {
        opacity: 0.5;
        left: -20px;
        filter: hue-rotate(90deg) saturate(1.3);
    }

    45.5% {
        left: 0px;
        filter: invert(1);
    }

    46% {
        clip-path: inset(150px 0 160px);
        left: 8%;
    }

    46.5% {
        clip-path: inset(20px 0 200px);
        left: -8%;
        transform: scale(1.1);
    }

    48.5% {
        clip-path: inset(260px 0 10px);
        left: -3%;
        transform: scale(1.06);
        filter: none;
    }

    49% {
        clip-path: inset(5px 0 200px);
        left: 2%;
        transform: scale(1);
    }

    49.5% {
        clip-path: inset(105px 0 210px);
        left: -2%;
        transform: scale(1.1);
    }

    50% {
        clip-path: inset(175px 0 160px);
        left: -4%;
    }

    51.5% {
        clip-path: inset(350px 0 7px);
        left: 4%;
    }

    52% {
        clip-path: inset(320px 0 27px);
        left: -2%;
        transform: scale(1.1);
    }

    52.5% {
        clip-path: inset(190px 0 127px);
        left: -1%;
        transform: scale(1.03);
        filter: hue-rotate(90deg) saturate(1.3);
    }

    54% {
        clip-path: inset(20px 0 20px);
        left: 2%;
        transform: scale(1.1);
        filter: none;
    }

    54% {
        opacity: 0;
    }
}

@keyframes glitch-two {

    25.5% {
        clip-path: inset(10px 0 320px);
        left: -20px;
    }

    26% {
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
    }

    45% {
        opacity: 0.3;
        left: -20px;
        filter: hue-rotate(45deg) saturate(1.1);
    }

    46.5% {
        clip-path: inset(120px 0 100px);
        left: -1%;
        transform: scale(1.2);
    }

    47% {
        clip-path: inset(40px 0 200px);
        left: 1%;
        transform: scale(1.03);
    }

    48.5% {
        clip-path: inset(0px 0 310px);
        left: -3%;
        transform: scale(1.2);
        filter: none;
    }

    49% {
        clip-path: inset(255px 0 50px);
        left: 2%;
        transform: scale(1.03);
    }

    49.5% {
        clip-path: inset(10px 0 240px);
        left: -2%;
        transform: scale(1.1);
    }

    50% {
        clip-path: inset(275px 0 90px);
        left: -4%;
    }

    51.5% {
        clip-path: inset(350px 0 7px);
        left: 4%;
    }

    52% {
        clip-path: inset(20px 0 270px);
        left: -2%;
        transform: scale(1.1);
    }

    52.5% {
        clip-path: inset(90px 0 227px);
        left: -1%;
        transform: scale(1.03);
        filter: hue-rotate(150deg) saturate(1.3);
    }

    54% {
        clip-path: inset(220px 0 100px);
        left: 2%;
        transform: scale(1.06);
        filter: none;
    }

    54% {
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

    45% {
        opacity: 0.5;
        filter: grayscale(1);
    }

    46% {
        filter: none;
        opacity: 1;
    }

    53.5% {
        opacity: 0.5;
        filter: grayscale(1);
    }

    54% {
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

    55.5% {
        filter: none;
        opacity: 1;
    }

    56% {
        opacity: 0.5;
    }

    57% {
        opacity: 0.8;
    }

    57.5% {
        opacity: 0.3;
    }

    58% {
        opacity: 1;
    }
    99% { 
        opacity: 0;
    }
}</style>