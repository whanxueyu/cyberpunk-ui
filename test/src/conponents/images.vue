<template>
    <div class="content">
        <!-- 基础用法 -->
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="图片描述" /&gt;</code></pre>
            <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="图片描述" />
        </div>

        <!-- 不同故障类型 -->
        <div class="section">
            <div class="section-title">不同故障类型 (glitchType: rgb-shift | scanline | pixelate | noise | combined)</div>
            <pre class="code-block"><code class="html">&lt;cyber-glitch-image glitch-type="rgb-shift" src="..." /&gt;
&lt;cyber-glitch-image glitch-type="scanline" src="..." /&gt;
&lt;cyber-glitch-image glitch-type="pixelate" src="..." /&gt;
&lt;cyber-glitch-image glitch-type="noise" src="..." /&gt;
&lt;cyber-glitch-image glitch-type="combined" src="..." /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">RGB Shift</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        glitch-type="rgb-shift" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Scanline</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        glitch-type="scanline" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Pixelate</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        glitch-type="pixelate" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Noise</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        glitch-type="noise" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Combined</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        glitch-type="combined" />
                </div>
            </div>
        </div>

        <!-- 故障强度 -->
        <div class="section">
            <div class="section-title">故障强度 (intensity: 1-10)</div>
            <pre class="code-block"><code class="html">&lt;!-- 低强度 --&gt;
&lt;cyber-glitch-image :intensity="3" src="..." /&gt;

&lt;!-- 中等强度 --&gt;
&lt;cyber-glitch-image :intensity="7" src="..." /&gt;

&lt;!-- 高强度 --&gt;
&lt;cyber-glitch-image :intensity="10" src="..." /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">低强度 (3)</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        :intensity="3" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">中等强度 (7)</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        :intensity="7" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">高强度 (10)</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        :intensity="10" />
                </div>
            </div>
        </div>

        <!-- 动画效果 -->
        <div class="section">
            <div class="section-title">动画效果 (animated)</div>
            <pre class="code-block"><code class="html">&lt;!-- 启用动画 --&gt;
&lt;cyber-glitch-image :animated="true" src="..." /&gt;

&lt;!-- 禁用动画（默认） --&gt;
&lt;cyber-glitch-image :animated="false" src="..." /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">启用动画</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        :animated="true" />
                </div>
            </div>
        </div>

        <!-- 触发模式 -->
        <div class="section">
            <div class="section-title">触发模式 (triggerMode: hover | click | auto | random)</div>
            <pre class="code-block"><code class="html">&lt;!-- 悬停触发 --&gt;
&lt;cyber-glitch-image trigger-mode="hover" src="..." /&gt;

&lt;!-- 点击触发 --&gt;
&lt;cyber-glitch-image trigger-mode="click" src="..." /&gt;

&lt;!-- 自动触发 --&gt;
&lt;cyber-glitch-image trigger-mode="auto" src="..." /&gt;

&lt;!-- 随机触发 --&gt;
&lt;cyber-glitch-image trigger-mode="random" src="..." /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Hover 触发</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        trigger-mode="hover" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Click 触发</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        trigger-mode="click" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Auto 触发</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        trigger-mode="auto" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Random 触发</p>
                    <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        trigger-mode="random" />
                </div>
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
    margin-bottom: 60px;
}

.section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.demo-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
}

.demo-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
}

.demo-label {
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
}

.pic {
    width: 200px;
}
</style>
