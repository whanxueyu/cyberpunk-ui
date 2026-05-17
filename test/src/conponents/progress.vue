<template>
    <div class="content">
        <!-- Neon 主题 -->
        <div class="section">
            <div class="section-title">Neon 主题（默认）</div>
            <pre class="code-block"><code class="html">&lt;CyberProgress :percentage="75" theme="neon" /&gt;</code></pre>
            <CyberProgress :percentage="75" theme="neon" />
        </div>

        <!-- Hologram 主题 -->
        <div class="section">
            <div class="section-title">Hologram 主题 - 内部显示</div>
            <pre class="code-block"><code class="html">&lt;CyberProgress :percentage="60" theme="hologram" percentage-position="inside" /&gt;</code></pre>
            <CyberProgress :percentage="60" theme="hologram" percentage-position="inside" />
        </div>

        <!-- Terminal 主题 -->
        <div class="section">
            <div class="section-title">Terminal 主题 - 外部显示</div>
            <pre class="code-block"><code class="html">&lt;CyberProgress :percentage="45" theme="terminal" percentage-position="outside" /&gt;</code></pre>
            <CyberProgress :percentage="45" theme="terminal" percentage-position="outside" />
        </div>

        <!-- Matrix 主题 -->
        <div class="section">
            <div class="section-title">Matrix 主题 - 内部显示</div>
            <pre class="code-block"><code class="html">&lt;CyberProgress :percentage="90" theme="matrix" percentage-position="inside" /&gt;</code></pre>
            <CyberProgress :percentage="90" theme="matrix" percentage-position="inside" />
        </div>

        <!-- 动态效果演示 -->
        <div class="section">
            <div class="section-title">动态效果演示 (showStatus)</div>
            <pre class="code-block"><code class="html">&lt;CyberProgress :percentage="dynamicValue" theme="neon" :show-status="true" /&gt;
&lt;button @click="updateProgress"&gt;更新进度&lt;/button&gt;</code></pre>
            <div class="demo-row">
                <CyberProgress :percentage="dynamicValue" theme="neon" :show-status="true" />
                <button @click="updateProgress" class="cyber-button">更新进度</button>
            </div>
        </div>

        <!-- 不同百分比 - 内部显示 -->
        <div class="section">
            <div class="section-title">不同百分比 - 内部显示 (percentagePosition: inside)</div>
            <pre class="code-block"><code class="html">&lt;CyberProgress :percentage="0" theme="neon" percentage-position="inside" /&gt;
&lt;CyberProgress :percentage="25" theme="neon" percentage-position="inside" /&gt;
&lt;CyberProgress :percentage="50" theme="neon" percentage-position="inside" /&gt;
&lt;CyberProgress :percentage="75" theme="neon" percentage-position="inside" /&gt;
&lt;CyberProgress :percentage="100" theme="neon" percentage-position="inside" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">0%</p>
                    <CyberProgress :percentage="0" theme="neon" percentage-position="inside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">25%</p>
                    <CyberProgress :percentage="25" theme="neon" percentage-position="inside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">50%</p>
                    <CyberProgress :percentage="50" theme="neon" percentage-position="inside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">75%</p>
                    <CyberProgress :percentage="75" theme="neon" percentage-position="inside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">100%</p>
                    <CyberProgress :percentage="100" theme="neon" percentage-position="inside" />
                </div>
            </div>
        </div>

        <!-- 不同百分比 - 外部显示 -->
        <div class="section">
            <div class="section-title">不同百分比 - 外部显示 (percentagePosition: outside)</div>
            <pre class="code-block"><code class="html">&lt;CyberProgress :percentage="0" theme="neon" percentage-position="outside" /&gt;
&lt;CyberProgress :percentage="25" theme="neon" percentage-position="outside" /&gt;
&lt;CyberProgress :percentage="50" theme="neon" percentage-position="outside" /&gt;
&lt;CyberProgress :percentage="75" theme="neon" percentage-position="outside" /&gt;
&lt;CyberProgress :percentage="100" theme="neon" percentage-position="outside" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">0%</p>
                    <CyberProgress :percentage="0" theme="neon" percentage-position="outside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">25%</p>
                    <CyberProgress :percentage="25" theme="neon" percentage-position="outside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">50%</p>
                    <CyberProgress :percentage="50" theme="neon" percentage-position="outside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">75%</p>
                    <CyberProgress :percentage="75" theme="neon" percentage-position="outside" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">100%</p>
                    <CyberProgress :percentage="100" theme="neon" percentage-position="outside" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dynamicValue = ref(30);

const updateProgress = () => {
  dynamicValue.value = Math.floor(Math.random() * 100);
};
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

.cyber-button {
    padding: 10px 20px;
    background: transparent;
    border: 1px solid #00ffff;
    color: #00ffff;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        background: rgba(0, 255, 255, 0.1);
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
    }
}
</style>
