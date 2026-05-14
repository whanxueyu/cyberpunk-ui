<template>
    <div class="content">
        <div>
            <cyber-text lineColor="#000">赛博朋克风格组件 CyberPunk-UI 震撼来袭 ！！！</cyber-text>
        </div>
        <div style="font-size: 48px;font-weight: bold;color:#99f8ff;">
            <!-- 设置颜色不生效 -->
            <cyber-shadow-text shadowColor="#33a6f9" direction="left" :long="20">shadow-left-long20</cyber-shadow-text>
            <cyber-shadow-text shadowColor="#33a89f" direction="left" :long="10">shadow-left-long10</cyber-shadow-text>
            <cyber-shadow-text shadowColor="#ff5555" direction="right"
                :long="10">shadow-right-long10</cyber-shadow-text>
            <cyber-shadow-text shadowColor="#ff5588" direction="right"
                :long="20">shadow-right-long20</cyber-shadow-text>
        </div>
        <div>
            <cyber-glow-text color="#3355ff">cp-glow-text 鼠标移上来看看</cyber-glow-text>
        </div>
        <div>
            <cyber-typing>CpTyping 1239945646 这是一段打字效果</cyber-typing>
        </div>
        <div style="display: flex;color: #fff;font-size: 48px;">
            <cyber-magic-text>CyberMagicText</cyber-magic-text>
            <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
        </div>
        <div style="display: flex;color: #fff;font-size: 22px;">
            <cyber-magic-text>CyberMagicText</cyber-magic-text>
            <cyber-magic-text>1234567890</cyber-magic-text>
            <cyber-magic-text>~!@#$%^&&*=+*/\|</cyber-magic-text>
            <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
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
</style>

