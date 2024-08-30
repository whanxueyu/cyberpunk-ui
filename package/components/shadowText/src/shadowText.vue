<template>
    <div :class="['shadow-text', props.direction]" :style="{ textShadow: makeLongShadow(props.shadowColor, props.direction) }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'CpShadowText',
})
const props = defineProps({
    direction: {
        type: String,
        default: 'left',
    },
    shadowColor: {
        type: String,
        default: '#ae0ed68c',
    },
    long:{
        type: Number,
        default: 20,
    }
})

const makeLongShadow = (color,direction): string => {
    let val = `0px 0px ${color}`;

    for (let i = 1; i <= props.long; i++) {
        const newColor = adjustColor(color, i);
        val += `, ${direction === 'left' ? '-' : ''}${i}px ${i}px ${newColor}`;
    }
    return val;
};
const adjustColor = (color: string, step: number): string => {
    // 这里简化了颜色调整逻辑，实际可能需要更复杂的算法来模拟fade-out和desaturate效果
    return color;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


@function makelongleftshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 20 {
        $color: fade-out(desaturate($color, 1%), .05);
        $val: #{$val}, -#{$i}px #{$i}px #{$color};
    }

    @return $val;
}

@function makelongrightshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 20 {
        $color: fade-out(desaturate($color, 1%), .05);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}

.shadow-text {
    text-align: center;
    display: inline-block;
}
</style>