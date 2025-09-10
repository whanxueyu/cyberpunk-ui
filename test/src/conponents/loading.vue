<template>
    <div class="content">
        <div>不同类型、颜色</div>
        <div class="flex">
            <cyber-holo-loader type="cube" />
            <cyber-holo-loader color="#ff00ff" type="sphere" />
            <cyber-holo-loader color="#ffff00" type="datastream" />
            <cyber-holo-loader color="#00ff66" type="circuit" />
        </div>
        <div>不同尺寸、文本</div>
        <div class="flex">
            <cyber-holo-loader size="small" text="加载中..."/>
            <cyber-holo-loader size="default" text="正在处理数据..." />
            <cyber-holo-loader size="large" text="" />
            <cyber-holo-loader size="small" type="sphere"/>
            <cyber-holo-loader size="large" type="sphere" />
            <cyber-holo-loader size="small" type="datastream"/>
            <cyber-holo-loader size="large" type="datastream" />
            <cyber-holo-loader size="small" type="circuit"/>
            <cyber-holo-loader size="large" type="circuit" />
        </div>
        <div>动画速度、透明背景</div>
        <div class="flex">
            <cyber-holo-loader :speed="0.5" />
            <cyber-holo-loader :speed="1" :transparent="true"/>
            <cyber-holo-loader :speed="2" />
        </div>
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

.flex {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

}
</style>
