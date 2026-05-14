<template>
    <div class="content">
        <div>
            <div>默认样式</div>
            <cyber-holo-card title="全息投影">
                这是一个全息卡片组件，具有3D视觉效果和动态光影变化。
            </cyber-holo-card>
        </div>
        <div>
            <div>不同主题</div>
            <div class="flex">
                <cyber-holo-card title="霓虹主题" theme="neon" />
                <cyber-holo-card title="全息主题" theme="hologram" />
                <cyber-holo-card title="终端主题" theme="terminal" />
            </div>
        </div>
        <div>
            <div>不同效果</div>
            <div class="flex">
                <cyber-holo-card title="默认效果" />
                <cyber-holo-card title="扫描效果" effect="scan" />
                <cyber-holo-card title="故障效果" effect="glitch" />
                <cyber-holo-card title="脉冲效果" effect="pulse" />
            </div>
        </div>
        <div>
            <div>自定义内容</div>
            <div class="flex">
                <cyber-holo-card>
                    <template #title>
                        <div class="custom-title">
                            <icon-component />
                            自定义标题
                        </div>
                    </template>

                    <div>自定义内容</div>

                    <template #footer>
                        <div class="custom-footer">
                            自定义底部
                        </div>
                    </template>
                </cyber-holo-card>
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
.flex {
    display: flex;
    gap: 20px;
}
</style>
