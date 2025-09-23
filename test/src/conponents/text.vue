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
        <cyber-image style="width: 300px;height: 200px;"
            src="https://mzz-files.oss-cn-shenzhen.aliyuncs.com///uploads/U1002433/0cb5e044a1f0f7fc15f61264ee97ac1f.png"></cyber-image>
        <div style="display: flex;">
            <cyber-magic-text>CyberMagicText</cyber-magic-text>
            <cyber-magic-text>CyberMagicText</cyber-magic-text>
        </div>
        <!-- <cyber-banner></cyber-banner> -->
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.content {
    border-left: 1px solid #ccc;
    padding: 20px;
    text-align: left;
}
</style>
