<template>
    <div class="content">
        <div>基本用法</div>
        <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="图片描述" />
        <div>不同故障类型</div>
        <div class="flex">
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                glitch-type="rgb-shift" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                glitch-type="scanline" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                glitch-type="pixelate" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                glitch-type="noise" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                glitch-type="combined" />
        </div>
        <div>故障强度</div>
        <div class="flex">
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                :intensity="3" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                :intensity="7" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                :intensity="10" />
                <div>动画效果</div>

        <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            :animated="true" />
        </div>
        

        <div>触发模式</div>
        <div class="flex">
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                trigger-mode="hover" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                trigger-mode="click" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                trigger-mode="auto" />
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                trigger-mode="random" />
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
    flex-wrap: wrap;
}
.pic {
    width: 200px;
    margin: 10px;
}
</style>
