<template>
    <div :class="['shadow-text', props.type]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
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
// onMounted(()=>{
  document.documentElement.style.setProperty('--shadow-color', props.shadowColor)
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function makelongleftshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 20 {
        $color: fade-out(desaturate($color, 1%), .06);
        $val: #{$val}, -#{$i}px #{$i}px #{$color};
    }

    @return $val;
}

@function makelongrightshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 20 {
        $color: fade-out(desaturate($color, 1%), .1);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}

.right {
    text-shadow: makelongrightshadow(var(--shadow-color));
}

.shadow-text {
    text-align: center;
    color: var(--shadow-color);
}

.left {
    text-shadow: makelongleftshadow(var(--shadow-color));
}
</style>