<template>
    <div class="content">

        <div>设置宽高 ----- width height loading </div>
        <div class="flex">
            <cyber-image class="pic" src="/src/assets/img/cyber-building.jpeg"/>
            设置大小100*70
            <cyber-image class="pic" width="100px" height="70px" src="/src/assets/img/cyber-building.jpeg"/>
            设置大小200*50
            <cyber-image class="pic" fit="contain" width="200px" height="50px" src="/src/assets/img/cyber-building.jpeg"/>
        </div>
        <div>加载失败</div>
        <div class="flex">
            <cyber-image class="pic" src="555.png"/>
            设置加载失败文字
            <cyber-image class="pic" src="555.png" errorContent="我尽力了，加载失败"/>
            设置加载失败后显示的图片
            <cyber-image class="pic" src="555.png" errorSrc="/src/assets/img/cyber-building.jpeg"/>
        </div>
        <div>适应到容器框 ----- 'cover' | 'contain' |  'fill' | 'none' | 'scale-down'</div>
        <div class="flex">
            <cyber-image fit="cover" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
            <cyber-image fit="contain" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
            <cyber-image fit="fill" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
            <cyber-image fit="none" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
            <cyber-image fit="scale-down" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
        </div>

        <div>加载 ----- lazy eager</div>
        <div class="flex">
            <cyber-image loading="lazy" class="pic" src="/src/assets/img/cyber-building.jpeg"/>
            <cyber-image loading="eager" class="pic" src="/src/assets/img/cyber-building.jpeg"/>
            禁用效果
            <cyber-image disableGlitch class="pic" src="/src/assets/img/cyber-building.jpeg"/>

            <cyber-image class="pic" src="/src/assets/img/cyber-building.jpeg">
                <template #placeholder>
                    <div style="color: aqua;">具名插槽placeholder</div>
                </template>
            </cyber-image>
            <cyber-image class="pic" src="555.png">
                <template #error>
                    <div style="color: aqua;">具名插槽error</div>
                </template>
            </cyber-image>
        </div>
        <div>插槽 ----- 具名插槽placeholder error</div>
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
    flex-wrap: wrap;
}

.pic {
    width: 200px;
    height: 150px;
    margin: 10px;
}
.picfit {
    width: 150px;
    height: 150px;
    margin: 10px;
}
</style>
