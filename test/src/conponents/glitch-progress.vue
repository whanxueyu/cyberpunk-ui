<template>
    <div class="content">
        <!-- 基础用法 -->
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-glitch-progress :progress="50" /&gt;</code></pre>
            <cyber-glitch-progress :progress="50" />
        </div>

        <!-- 方向 -->
        <div class="section">
            <div class="section-title">方向 (direction: horizontal | vertical)</div>
            <pre class="code-block"><code class="html">&lt;!-- 水平方向（默认） --&gt;
&lt;cyber-glitch-progress :progress="50" /&gt;

&lt;!-- 垂直方向 --&gt;
&lt;cyber-glitch-progress :progress="50" direction="vertical" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Horizontal</p>
                    <cyber-glitch-progress :progress="50" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Vertical</p>
                    <cyber-glitch-progress :progress="50" direction="vertical" />
                </div>
            </div>
        </div>

        <!-- 不确定状态 -->
        <div class="section">
            <div class="section-title">不确定状态 (indeterminate)</div>
            <pre class="code-block"><code class="html">&lt;!-- 不确定进度，显示动画效果 --&gt;
&lt;cyber-glitch-progress indeterminate /&gt;</code></pre>
            <div class="demo-row">
                <cyber-glitch-progress indeterminate />
            </div>
        </div>

        <!-- 自定义颜色 -->
        <div class="section">
            <div class="section-title">自定义颜色 (color)</div>
            <pre class="code-block"><code class="html">&lt;!-- 绿色 - 100% --&gt;
&lt;cyber-glitch-progress :progress="100" color="#02c54d" /&gt;

&lt;!-- 蓝色 - 75% --&gt;
&lt;cyber-glitch-progress :progress="75" color="#00a6dc" /&gt;

&lt;!-- 橙色 - 50% --&gt;
&lt;cyber-glitch-progress :progress="50" color="#ff9900" /&gt;

&lt;!-- 红色 - 25% --&gt;
&lt;cyber-glitch-progress :progress="25" color="#ff013c" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">绿色 (100%)</p>
                    <cyber-glitch-progress :progress="100" color="#02c54d" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">蓝色 (75%)</p>
                    <cyber-glitch-progress :progress="75" color="#00a6dc" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">橙色 (50%)</p>
                    <cyber-glitch-progress :progress="50" color="#ff9900" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">红色 (25%)</p>
                    <cyber-glitch-progress :progress="25" color="#ff013c" />
                </div>
            </div>
        </div>

        <!-- 故障强度 -->
        <div class="section">
            <div class="section-title">故障强度 (glitchIntensity: 1-10)</div>
            <pre class="code-block"><code class="html">&lt;!-- 低强度 --&gt;
&lt;cyber-glitch-progress :progress="80" :glitch-intensity="1" /&gt;

&lt;!-- 中等强度 --&gt;
&lt;cyber-glitch-progress :progress="80" :glitch-intensity="5" /&gt;

&lt;!-- 高强度 --&gt;
&lt;cyber-glitch-progress :progress="80" :glitch-intensity="10" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">低强度 (1)</p>
                    <cyber-glitch-progress :progress="80" :glitch-intensity="1" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">中等强度 (5)</p>
                    <cyber-glitch-progress :progress="80" :glitch-intensity="5" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">高强度 (10)</p>
                    <cyber-glitch-progress :progress="80" :glitch-intensity="10" />
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
    // display: flex;
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
</style>
