<template>
    <div :class="['cp-button-neno', buttonSize]">
        <div :class="['button', buttonType, props.bg ? 'show-bg' : '']">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
defineOptions({
    name: 'CpReflectbutton',
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

@keyframes rotate {
    100% {
        transform: translate(-50%, -50%) rotate(1turn);
    }
}

.button {
    --base-color: #03e9f4;
    color: var(--base-color);
    position: relative;
    z-index: 0;
    // width: 160px;
    // height: 60px;
    line-height: 60px;
    font-size: 24px;
    border-radius: 10px;
    text-align: center;
    margin: auto;
    overflow: hidden;
    cursor: pointer;
    transition: .3s;
    -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(255, 255, 255, 0.4));

    &:hover {
        color: #fff;
        box-shadow: 0 0 5px var(--base-color),
            0 0 25px var(--base-color);
        ;

        &::after,
        &::before {
            transition: .3s;
            background: var(--base-color);
        }
    }

    &::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 150%;
        height: 300%;
        background-repeat: no-repeat;
        background-size: 50% 50%;
        background-position: 0 0;
        background-image: conic-gradient(var(--base-color), var(--base-color));
        animation: rotate 2s linear infinite;
    }

    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 2px;
        top: 2px;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        background: #000000;
        border-radius: 10px;
    }
}

.primary-style {
    &.show-bg {
        color: #fff;
        &::after {
            background: #014961;
        }
        &::before {
            background-color: transparent;
        }

        &:hover {
            background: #00a6dc;
        }
    }

    &.button {
        --base-color: #00a6dc;
    }
}

.success-style {
    &.show-bg {
        color: #fff;
        &::after {
            background: #015722;
        }
        &::before {
            background-color: transparent;
        }

        &:hover {
            background: #02c54d;
        }
    }

    &.button {
        --base-color: #02c54d;
    }
}

.warning-style {
    &.show-bg {
        color: #fff;
        &::after {
            background: #613a01;
        }
        &::before {
            background-color: transparent;
        }

        &:hover {
            background: #ff9900;
        }
    }

    &.button {
        --base-color: #ff9900;
    }
}

.danger-style {
    &.show-bg {
        color: #fff;

        &::after {
            background: #5c0116;
        }
        &::before {
            background-color: transparent;
        }

        &:hover {
            background: #ff013c;
        }
    }

    &.button {
        --base-color: #ff013c;
    }
}
</style>