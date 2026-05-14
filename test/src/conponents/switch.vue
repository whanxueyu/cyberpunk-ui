<template>
    <div class="content">
        <div class="section">
            <div class="section-title">不同形状</div>
            <cyber-neon-toggle v-model="value" shape="circle" />
            <cyber-neon-toggle v-model="value" shape="square" />
            <cyber-neon-toggle v-model="value" shape="hex" />
        </div>
        <div class="section">
            <div class="section-title">不同大小</div>
            <div class="flex">
                <cyber-neon-toggle size="small" v-model="value" shape="circle" />
                <cyber-neon-toggle size="small" v-model="value" shape="square" />
                <cyber-neon-toggle size="small" v-model="value" shape="hex" />
                <cyber-neon-toggle size="large" v-model="value" shape="circle" />
                <cyber-neon-toggle size="large" v-model="value" shape="square" />
                <cyber-neon-toggle size="large" v-model="value" shape="hex" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">自定义颜色</div>
            <div class="flex">
                <cyber-neon-toggle v-model="value" active-color="#ff0000cc" inActiveColor="#99ffff" />
                <cyber-neon-toggle v-model="value" active-color="#ff9900cc" />
                <cyber-neon-toggle v-model="value" active-color="#ff00ffcc" inActiveColor="#00ff00cc" />
                <cyber-neon-toggle v-model="value" active-color="#0066ffcc" />
                <cyber-neon-toggle v-model="value" active-color="#00ff00cc" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">禁用状态</div>
            <div class="flex">
                <cyber-neon-toggle v-model="value" disabled />
                <cyber-neon-toggle v-model="value" disabled active-color="#ff0000cc" inActiveColor="#99ffff" />
                <cyber-neon-toggle v-model="value" disabled active-color="#ff9900cc" />
                <cyber-neon-toggle v-model="value" disabled active-color="#ff00ffcc" inActiveColor="#00ff00cc" />
                <cyber-neon-toggle v-model="value" disabled active-color="#0066ffcc" />
                <cyber-neon-toggle v-model="value" disabled active-color="#00ff00cc" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">有无动画</div>
            <div class="flex">
                <cyber-neon-toggle v-model="value" :pulse-effect="true" />
                <cyber-neon-toggle v-model="value" :pulse-effect="false" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
<style scoped lang="scss">
.content {
    padding: 20px;
    text-align: left;
}

.section {
    margin-bottom: 40px;
}

.section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ccc;
}

.flex {
    display: flex;
    gap: 20px;
    align-items: center;
}
</style>
