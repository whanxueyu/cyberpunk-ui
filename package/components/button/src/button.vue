<template>
    <div :class="['cp-button', buttonSize]">
        <div :class="['button', buttonType]" :data-content="props.content">
            <slot v-if="slots"></slot>
            <span v-else>{{ props.content }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
defineOptions({
    name: 'CpButton',
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
    content: {
        type: String,
        default: 'CyberPunk-UI'
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
.cp-button {
    background-color: transparent;
    color: #fff;
    user-select: none;
    display: inline-block;
    cursor: pointer;
}

.cp-button+.cp-button {
    margin-left: 20px;
}

@keyframes glitch {
    0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
    }

    10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
    }

    20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
    }

    30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
    }

    40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
    }

    50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
    }

    60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
    }

    70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
    }

    80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
    }

    90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
    }

    100% {
        clip-path: var(--slice-1);
        transform: translate(0);
    }
}
.large-size .button,
.large-size .button::after {
  padding: 16px 32px;
  font-size: 32px;
  line-height:32px;
}
.large-size.cp-button+.cp-button {
    margin-left: 40px;
}

.default-size .button,
.default-size .button::after {
  padding: 12px 24px;
  font-size: 20px;
  line-height: 20px;
}

.small-size .button,
.small-size .button::after {
  padding: 8px 16px;
  font-size: 12px;
  line-height: 12px;
}
.small-size.cp-button+.cp-button {
    margin-left: 15px;
}
.button,
.button::after {
    position: relative;
    /* padding: 12px 20px;
    font-size: 24px;
    line-height: 1; */
    /* cursive 为通用字体族名——草书 */
    /* font-family: "Bebas Neue", cursive; */
    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    cursor: pointer;
    outline: transparent;
}

.button::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: attr(data-content);
    /* content: "AVAILABLE NOW"; */
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(45deg,
            transparent 3%,
            #00e6f6 3%,
            #00e6f6 5%,
            #ff013c 5%);
    box-shadow: 6px 0 0 #00e6f6;
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
}

.button:hover::after {
    animation: glitch 1s;
    animation-timing-function: steps(2, end);
}

.primary-style {
    /* primary样式定义 */
    background: linear-gradient(45deg, transparent 5%, #00a6dc 5%);

    &::after {
        background: linear-gradient(45deg,
                transparent 3%,
                #9280ed 3%,
                #9280ed 5%,
                #00a6dc 5%);
        box-shadow: 6px 0 0 #9280ed;
        text-shadow: -3px -3px 0px #69f569, 3px 3px 0px #9280ed;
    }
}

.success-style {
    /* success样式定义 */
    background: linear-gradient(45deg, transparent 5%, #02c54d 5%);

    &::after {
        background: linear-gradient(45deg,
                transparent 3%,
                #ffce6c 3%,
                #ffce6c 5%,
                #02c54d 5%);
        box-shadow: 6px 0 0 #ffce6c;
        text-shadow: -3px -3px 0px #00a7d5, 3px 3px 0px #ffce6c;
    }
}

.warning-style {
    /* warning样式定义 */
    background: linear-gradient(45deg, transparent 5%, #ff9900 5%);

    &::after {
        background: linear-gradient(45deg,
                transparent 3%,
                #00e6f6 3%,
                #00e6f6 5%,
                #ff9900 5%);
    }
}

.danger-style {
    /* danger样式定义 */
    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
}
</style>