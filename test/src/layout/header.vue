<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark({
    storageKey: 'useDarkKEY',
    // 暗黑class名字
    valueDark: 'dark',
    // 高亮class名字
    valueLight: 'light',
})
const emits = defineEmits(["changePosition"])
const toggleDark = useToggle(isDark)
const dotPosition = ref('right')
const changePosition = (position: string) => {
    dotPosition.value = position;
    emits("changePosition",position)
}
</script>
<template>
    <div>
        <cyber-button type="primary" content="top ↑" @click="changePosition('top')">top ↑</cyber-button>
        <cyber-button type="success" content="bottom ↓" @click="changePosition('bottom')">bottom ↓</cyber-button>
        <cyber-button type="danger" content="left ←" @click="changePosition('left')">left ←</cyber-button>
        <cyber-button type="warning" content="right →" @click="changePosition('right')">right →</cyber-button>
    </div>
    <div>
        <cyber-nenobutton type="primary" bg size="small" @click="toggleDark()">切换</cyber-nenobutton>
    </div>
</template>

<style scoped lang="scss"></style>
