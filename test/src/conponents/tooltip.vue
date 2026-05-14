<template>
    <div class="content">
        <div class="section">
            <div class="section-title">默认样式</div>
            <div class="flex">
                <cyber-tooltip content="这是一个提示信息">
                    <u>悬停查看提示</u>
                </cyber-tooltip>
            </div>
        </div>
        <div class="section">
            <div class="section-title">不同位置</div>
            <div class="flex">
                <cyber-tooltip content="顶部提示" position="top">
                    <u>顶部提示</u>
                </cyber-tooltip>
                <cyber-tooltip content="右侧提示" position="right">
                    <u>右侧提示</u>
                </cyber-tooltip>
                <cyber-tooltip content="左侧提示" position="left">
                    <u>左侧提示</u>
                </cyber-tooltip>
                <cyber-tooltip content="底部提示" position="bottom">
                    <u>底部提示</u>
                </cyber-tooltip>
                <cyber-tooltip content="自动定位" position="auto">
                    <u>自动定位</u>
                </cyber-tooltip>
            </div>
        </div>
        <div class="section">
            <div class="section-title">不同效果</div>
            <div class="flex">
                <cyber-tooltip content="全息效果" effect="hologram">
                    <u>全息</u>
                </cyber-tooltip>
                <cyber-tooltip content="故障效果" effect="glitch">
                    <u>故障</u>
                </cyber-tooltip>
                <cyber-tooltip content="扫描效果" effect="scan">
                    <u>扫描</u>
                </cyber-tooltip>
                <cyber-tooltip content="淡入效果" effect="fade">
                    <u>淡入</u>
                </cyber-tooltip>
            </div>
        </div>
        <div class="section">
            <div class="section-title">不同主题</div>
            <div class="flex">
                <cyber-tooltip content="霓虹主题" theme="neon">
                    <u>霓虹</u>
                </cyber-tooltip>
                <cyber-tooltip content="终端主题" theme="terminal">
                    <u>终端</u>
                </cyber-tooltip>
                <cyber-tooltip content="全息主题" theme="holographic">
                    <u>全息</u>
                </cyber-tooltip>
            </div>
        </div>
        <div class="section">
            <div class="section-title">不同触发方式</div>
            <div class="flex">
                <cyber-tooltip content="悬停触发" trigger="hover">
                    <u>悬停</u>
                </cyber-tooltip>
                <cyber-tooltip content="点击触发" trigger="click">
                    <u>点击</u>
                </cyber-tooltip>
                <cyber-tooltip content="聚焦触发" trigger="focus">
                    <u>聚焦</u>
                </cyber-tooltip>
            </div>
        </div>
        <div class="section">
            <div class="section-title">自定义内容</div>
            <div class="flex">
                <cyber-tooltip>
                    <template #content>
                        <div style="font-size: 16px;font-weight: bold;">自定义标题</div>
                        <div>这是一段自定义内容</div>
                        <cyber-nenobutton type="primary" size="small" bg>操作按钮</cyber-nenobutton>
                    </template>
                    <u>查看详情</u>
                </cyber-tooltip>
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
    align-items: center;
    gap: 20px;
}
</style>
