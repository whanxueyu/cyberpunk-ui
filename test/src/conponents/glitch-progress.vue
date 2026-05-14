<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <cyber-glitch-progress :progress="50" />
        </div>
        <div class="section">
            <div class="section-title">方向</div>
            <div class="flex">
                <cyber-glitch-progress :progress="50" />
                <cyber-glitch-progress :progress="50" direction="vertical" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">不确定状态</div>
            <cyber-glitch-progress indeterminate />
        </div>
        <div class="section">
            <div class="section-title">自定义颜色</div>
            <div class="flex">
                <cyber-glitch-progress :progress="100" color="#02c54d" />
                <cyber-glitch-progress :progress="75" color="#00a6dc" />
                <cyber-glitch-progress :progress="50" color="#ff9900" />
                <cyber-glitch-progress :progress="25" color="#ff013c" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">不同故障程度</div>
            <div class="flex">
                <cyber-glitch-progress :progress="80" :glitch-intensity="1" />
                <cyber-glitch-progress :progress="80" :glitch-intensity="5" />
                <cyber-glitch-progress :progress="80" :glitch-intensity="10" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
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
