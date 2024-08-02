<template>
    <div :class="['cp-button-neno', buttonSize]">
        <div :class="['button', buttonType, props.bg ? 'show-bg' : '']">
            <div class="border"></div>
            <div class="border"></div>
            <div class="border"></div>
            <div class="border"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
defineOptions({
    name: 'CpNenobutton',
})
const slots = useSlots()
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
        validator: (value: string) => {
            return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1
        }
    },
    size: {
        type: String,
        default: 'default',
        validator: (value: string) => {
            return ['large', 'default', 'small'].indexOf(value) !== -1
        }
    },
    bg: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(["onMouseEnter", "onMouseLeave"])
const buttonType = computed(() => {
    switch (props.type) {
        case 'primary':
            return 'primary-style';
        case 'success':
            return 'success-style';
        case 'warning':
            return 'warning-style';
        case 'danger':
            return 'danger-style';
        default:
            return 'primary-style'; // 默认样式
    }
})
const buttonSize = computed(() => {
    switch (props.size) {
        case 'large':
            return 'large-size';
        case 'default':
            return 'default-size';
        case 'small':
            return 'small-size';
        default:
            return 'default-size'; // 默认大小

    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cp-button-neno {
    background-color: transparent;
    user-select: none;
    display: inline-block;
    cursor: pointer;
}

.cp-button-neno+.cp-button-neno {
    margin-left: 20px;
}

.large-size .button {
    padding: 16px 32px;
    font-size: 32px;
    line-height: 32px;
}

.large-size.cp-button-neno+.cp-button-neno {
    margin-left: 40px;
}

.default-size .button {
    padding: 12px 24px;
    font-size: 20px;
    line-height: 20px;
}

.small-size .button {
    padding: 8px 16px;
    font-size: 12px;
    line-height: 12px;
}

.small-size.cp-button-neno+.cp-button-neno {
    margin-left: 15px;
}

.button {
    --base-color: #03e9f4;
    position: relative;
    padding: 25px 30px;
    color: var(--base-color);
    font-size: 24px;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    cursor: pointer;
    overflow: hidden;
}

.button:hover {
    background-color: var(--base-color);
    color: #fff;
    box-shadow: 0 0 5px var(--base-color),
        0 0 25px var(--base-color),
        0 0 50px var(--base-color),
        0 0 200px var(--base-color);
}

.button .border {
    position: absolute;
}

.button .border:nth-child(1) {
    width: 100%;
    height: 2px;
    top: 0;
    left: -100%;
    background: linear-gradient(to right, transparent, var(--base-color));
    animation: animate1 1s linear infinite;
}

.button .border:nth-child(2) {
    width: 2px;
    height: 100%;
    top: -100%;
    right: 0;
    background: linear-gradient(to bottom, transparent, var(--base-color));
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}

.button .border:nth-child(3) {
    width: 100%;
    height: 2px;
    bottom: 0;
    right: -100%;
    background: linear-gradient(to left, transparent, var(--base-color));
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
}

.button .border:nth-child(4) {
    width: 2px;
    height: 100%;
    bottom: -100%;
    left: 0;
    background: linear-gradient(to top, transparent, var(--base-color));
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}

@keyframes animate1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

@keyframes animate2 {
    0% {
        top: -100%;
    }

    50%,
    100% {
        top: 100%;
    }
}

@keyframes animate3 {
    0% {
        right: -100%;
    }

    50%,
    100% {
        right: 100%;
    }
}

@keyframes animate4 {
    0% {
        bottom: -100%;
    }

    50%,
    100% {
        bottom: 100%;
    }
}

.primary-style {
    &.show-bg {
        background: #014961;
        &:hover{
            background: #00a6dc;
        }
    }

    &.button {
        --base-color: #00a6dc;
    }
}

.success-style {
    &.show-bg {
        background: #015722;
        &:hover{
            background: #02c54d;
        }
    }

    &.button {
        --base-color: #02c54d;
    }
}

.warning-style {
    &.show-bg {
        background: #613a01;
        &:hover{
            background: #ff9900;
        }
    }

    &.button {
        --base-color: #ff9900;
    }
}

.danger-style {
    &.show-bg {
        background: #5c0116;
        &:hover{
            background: #ff013c;
        }
    }

    &.button {
        --base-color: #ff013c;
    }
}
</style>