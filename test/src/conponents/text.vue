<template>
    <div class="content">
        <!-- CyberText 组件 -->
        <div class="section">
            <div class="section-title">CyberText - 基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-text lineColor="#000"&gt;赛博朋克风格组件 CyberPunk-UI 震撼来袭 ！！！&lt;/cyber-text&gt;</code></pre>
            <cyber-text lineColor="#000">赛博朋克风格组件 CyberPunk-UI 震撼来袭 ！！！</cyber-text>
        </div>

        <!-- CyberShadowText 组件 -->
        <div class="section">
            <div class="section-title">CyberShadowText - 不同方向和长度</div>
            <pre class="code-block"><code class="html">&lt;!-- 左方向，长度20 --&gt;
&lt;cyber-shadow-text shadowColor="#33a6f9" direction="left" :long="20"&gt;shadow-left-long20&lt;/cyber-shadow-text&gt;

&lt;!-- 左方向，长度10 --&gt;
&lt;cyber-shadow-text shadowColor="#33a89f" direction="left" :long="10"&gt;shadow-left-long10&lt;/cyber-shadow-text&gt;

&lt;!-- 右方向，长度10 --&gt;
&lt;cyber-shadow-text shadowColor="#ff5555" direction="right" :long="10"&gt;shadow-right-long10&lt;/cyber-shadow-text&gt;

&lt;!-- 右方向，长度20 --&gt;
&lt;cyber-shadow-text shadowColor="#ff5588" direction="right" :long="20"&gt;shadow-right-long20&lt;/cyber-shadow-text&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Left + Long 20</p>
                    <cyber-shadow-text shadowColor="#33a6f9" direction="left" :long="20" style="font-size: 48px;font-weight: bold;color:#99f8ff;">shadow-left-long20</cyber-shadow-text>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Left + Long 10</p>
                    <cyber-shadow-text shadowColor="#33a89f" direction="left" :long="10" style="font-size: 48px;font-weight: bold;color:#99f8ff;">shadow-left-long10</cyber-shadow-text>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Right + Long 10</p>
                    <cyber-shadow-text shadowColor="#ff5555" direction="right" :long="10" style="font-size: 48px;font-weight: bold;color:#99f8ff;">shadow-right-long10</cyber-shadow-text>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Right + Long 20</p>
                    <cyber-shadow-text shadowColor="#ff5588" direction="right" :long="20" style="font-size: 48px;font-weight: bold;color:#99f8ff;">shadow-right-long20</cyber-shadow-text>
                </div>
            </div>
        </div>

        <!-- CyberGlowText 组件 -->
        <div class="section">
            <div class="section-title">CyberGlowText - 发光效果</div>
            <pre class="code-block"><code class="html">&lt;!-- 自定义发光颜色 --&gt;
&lt;cyber-glow-text color="#3355ff"&gt;cp-glow-text 鼠标移上来看看&lt;/cyber-glow-text&gt;</code></pre>
            <div class="demo-row">
                <cyber-glow-text color="#3355ff">cp-glow-text 鼠标移上来看看</cyber-glow-text>
            </div>
        </div>

        <!-- CyberTyping 组件 -->
        <div class="section">
            <div class="section-title">CyberTyping - 打字机效果</div>
            <pre class="code-block"><code class="html">&lt;cyber-typing&gt;CpTyping 1239945646 这是一段打字效果&lt;/cyber-typing&gt;</code></pre>
            <div class="demo-row">
                <cyber-typing>CpTyping 1239945646 这是一段打字效果</cyber-typing>
            </div>
        </div>

        <!-- CyberMagicText 组件 -->
        <div class="section">
            <div class="section-title">CyberMagicText - 魔术文字效果</div>
            <pre class="code-block"><code class="html">&lt;!-- 大字号示例 --&gt;
&lt;cyber-magic-text style="font-size: 48px;"&gt;CyberMagicText&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 48px;"&gt;赛博朋克魔术文字&lt;/cyber-magic-text&gt;

&lt;!-- 小字号示例 --&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;CyberMagicText&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;1234567890&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;~!@#$%^&&*=+*/\|&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;赛博朋克魔术文字&lt;/cyber-magic-text&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">大字号 (48px)</p>
                    <div style="display: flex; gap: 20px; color: #fff; font-size: 48px;">
                        <cyber-magic-text>CyberMagicText</cyber-magic-text>
                        <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
                    </div>
                </div>
            </div>
            <div class="demo-row" style="margin-top: 30px;">
                <div class="demo-item">
                    <p class="demo-label">小字号 (22px)</p>
                    <div style="display: flex; gap: 20px; color: #fff; font-size: 22px;">
                        <cyber-magic-text>CyberMagicText</cyber-magic-text>
                        <cyber-magic-text>1234567890</cyber-magic-text>
                        <cyber-magic-text>~!@#$%^&&*=+*/\|</cyber-magic-text>
                        <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
                    </div>
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
</style>

