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
const value = ref(false)
const emits = defineEmits(["changePosition", "changeShow"])
const toggleDark = useToggle(isDark)
const dotPosition = ref('right')
const changePosition = (position: string) => {
    dotPosition.value = position;
    emits("changePosition", position)
}
const showTitle = ref(true)
const changeShowTitile = (value: boolean) => {
    showTitle.value = value;
    emits("changeShow", value)
}
</script>
<template>
    <div>
        全屏滚动指示器位置
        <cyber-button type="primary" content="top ↑" size="small" @click="changePosition('top')">top ↑</cyber-button>
        <cyber-button type="success" content="bottom ↓" size="small" @click="changePosition('bottom')">bottom
            ↓</cyber-button>
        <cyber-button type="danger" content="left ←" size="small" @click="changePosition('left')">left ←</cyber-button>
        <cyber-button type="warning" content="right →" size="small" @click="changePosition('right')">right
            →</cyber-button>
    </div>
    <div style="
    display: flex;
    align-items: center;
">
        指示器文字显示
        <cyber-neon-toggle @change="changeShowTitile" v-model="showTitle" shape="square" />
    </div>
    <div style="
    display: flex;
    align-items: center;
">
        暗黑模式切换
        <cyber-neon-toggle v-model="value" @change="toggleDark()" active-color="#ffff00" inActiveColor="#669999" />
    </div>
</template>

<style scoped lang="scss"></style>
