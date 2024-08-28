<template>
    <div :class="['shadow-text', props.type]" :data-color="props.shadowColor">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'CpShadowText',
})
const props = defineProps({
    type: {
        type: String,
        default: 'left',
        validator: (value: string) => {
            return ['left', 'right'].indexOf(value) !== -1
        }
    },
    shadowColor: {
        type: String,
        default: '#ae0ed68c',
    },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function makelongleftshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 25 {
        $color: fade-out(desaturate($color, 1%), .06);
        $val: #{$val}, -#{$i}px #{$i}px #{$color};
    }

    @return $val;
}

@function makelongrightshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 10 {
        $color: fade-out(desaturate($color, 1%), .1);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}

.right {
    text-shadow: makelongrightshadow(attr(data-color));
}

.shadow-text {
    text-align: center;
}

.left {
    text-shadow: makelongleftshadow(attr(data-color));
}
</style>