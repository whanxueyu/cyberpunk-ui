<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const value = ref(false)
const isDark = useDark({
    storageKey: 'useDarkKEY',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>
<template>
    <div class="header-content">
        <!-- <cyber-text class="logo">CyberPunk-UI</cyber-text> -->
        <cyber-shadow-text shadowColor="#ff5588" class="logo" direction="right" :long="6">CyberPunk-UI</cyber-shadow-text>
        <cyber-magic-text class="logo">CyberPunk-UI</cyber-magic-text>
        <div class="controls">
            <cyber-text v-if="value">亮色模式</cyber-text>
            <cyber-text v-else>暗黑模式</cyber-text>
            <cyber-neon-toggle v-model="value" @change="toggleDark()" active-color="#ffff00" inActiveColor="#669999" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.header-content {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
}

.logo {
    font-size: 26px;
    font-weight: bold;
    color: #00b6ff;
}

.controls {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
}
</style>
