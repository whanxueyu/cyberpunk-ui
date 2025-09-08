<template>
    <div class="content">
        <div>
            <div>默认样式</div>
            <cyber-neon-toggle v-model="value"></cyber-neon-toggle>
        </div>
        <div>
            <div>不同形状</div>
            <cyber-neon-toggle v-model="value" shape="circle" />
            <cyber-neon-toggle v-model="value" shape="square" />
            <cyber-neon-toggle v-model="value" shape="hex" />
        </div>
        <div>
            <div>自定义颜色</div>
            <cyber-neon-toggle v-model="value" active-color="#ff0000cc" inActiveColor="#99ffff" />
            <cyber-neon-toggle v-model="value" active-color="#ff9900cc" />
            <cyber-neon-toggle v-model="value" shape="hex" active-color="#ff00ffcc" inActiveColor="#00ff00cc" />
            <cyber-neon-toggle v-model="value" active-color="#0066ffcc" />
            <cyber-neon-toggle v-model="value" active-color="#00ff00cc" />
        </div>
        <div>
            <div>禁用状态</div>
            <cyber-neon-toggle v-model="value" disabled />
            <cyber-neon-toggle v-model="value" disabled active-color="#ff0000cc" inActiveColor="#99ffff" />
            <cyber-neon-toggle v-model="value" disabled active-color="#ff9900cc" />
            <cyber-neon-toggle v-model="value" disabled shape="hex" active-color="#ff00ffcc" inActiveColor="#00ff00cc" />
            <cyber-neon-toggle v-model="value" disabled active-color="#0066ffcc" />
            <cyber-neon-toggle v-model="value" disabled active-color="#00ff00cc" />
        </div>
        <div>
            <div>有无动画</div>
            <cyber-neon-toggle v-model="value" :pulse-effect="true" />
            <cyber-neon-toggle v-model="value" :pulse-effect="false" />
        </div>
        <div>
            <div>进度条</div>
            <cyber-glitch-progress :progress="50" />
        </div>
        <div>
            <div>进度条方向</div>
            <cyber-glitch-progress :progress="50" />
            <cyber-glitch-progress :progress="50" direction="vertical" />
        </div>
        <div>
            <div>不确定状态</div>
            <cyber-glitch-progress indeterminate />
        </div>
        <div>
            <div>自定义颜色</div>
            <cyber-glitch-progress :progress="100" color="#02c54d" />
            <cyber-glitch-progress :progress="75" color="#00a6dc" />
            <cyber-glitch-progress :progress="50" color="#ff9900" />
            <cyber-glitch-progress :progress="25" color="#ff013c" />

        </div>
        <div>
            <div>不同故障程度</div>
            <cyber-glitch-progress :progress="80" :glitch-intensity="1" />
            <cyber-glitch-progress :progress="80" :glitch-intensity="5" />
            <cyber-glitch-progress :progress="80" :glitch-intensity="10" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>
<style scoped lang="scss">
.content {
    border-left: 1px solid #ccc;
    padding: 20px;
    text-align: left;
}
</style>
