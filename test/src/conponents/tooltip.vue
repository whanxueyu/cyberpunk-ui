<template>
    <div class="content">
        <!-- 基础用法 -->
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-tooltip content="这是一个提示信息"&gt;
  &lt;u&gt;悬停查看提示&lt;/u&gt;
&lt;/cyber-tooltip&gt;</code></pre>
            <div class="demo-row">
                <cyber-tooltip content="这是一个提示信息">
                    <u>悬停查看提示</u>
                </cyber-tooltip>
            </div>
        </div>

        <!-- 不同位置 -->
        <div class="section">
            <div class="section-title">不同位置 (position: top | right | left | bottom | auto)</div>
            <pre class="code-block"><code class="html">&lt;cyber-tooltip content="顶部提示" position="top"&gt;&lt;u&gt;顶部提示&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="右侧提示" position="right"&gt;&lt;u&gt;右侧提示&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="左侧提示" position="left"&gt;&lt;u&gt;左侧提示&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="底部提示" position="bottom"&gt;&lt;u&gt;底部提示&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="自动定位" position="auto"&gt;&lt;u&gt;自动定位&lt;/u&gt;&lt;/cyber-tooltip&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Top</p>
                    <cyber-tooltip content="顶部提示" position="top">
                        <u>顶部提示</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Right</p>
                    <cyber-tooltip content="右侧提示" position="right">
                        <u>右侧提示</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Left</p>
                    <cyber-tooltip content="左侧提示" position="left">
                        <u>左侧提示</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Bottom</p>
                    <cyber-tooltip content="底部提示" position="bottom">
                        <u>底部提示</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Auto</p>
                    <cyber-tooltip content="自动定位" position="auto">
                        <u>自动定位</u>
                    </cyber-tooltip>
                </div>
            </div>
        </div>

        <!-- 不同效果 -->
        <div class="section">
            <div class="section-title">不同效果 (effect: hologram | glitch | scan | fade)</div>
            <pre class="code-block"><code class="html">&lt;cyber-tooltip content="全息效果" effect="hologram"&gt;&lt;u&gt;全息&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="故障效果" effect="glitch"&gt;&lt;u&gt;故障&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="扫描效果" effect="scan"&gt;&lt;u&gt;扫描&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="淡入效果" effect="fade"&gt;&lt;u&gt;淡入&lt;/u&gt;&lt;/cyber-tooltip&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Hologram</p>
                    <cyber-tooltip content="全息效果" effect="hologram">
                        <u>全息</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Glitch</p>
                    <cyber-tooltip content="故障效果" effect="glitch">
                        <u>故障</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Scan</p>
                    <cyber-tooltip content="扫描效果" effect="scan">
                        <u>扫描</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Fade</p>
                    <cyber-tooltip content="淡入效果" effect="fade">
                        <u>淡入</u>
                    </cyber-tooltip>
                </div>
            </div>
        </div>

        <!-- 不同主题 -->
        <div class="section">
            <div class="section-title">不同主题 (theme: neon | terminal | holographic)</div>
            <pre class="code-block"><code class="html">&lt;cyber-tooltip content="霓虹主题" theme="neon"&gt;&lt;u&gt;霓虹&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="终端主题" theme="terminal"&gt;&lt;u&gt;终端&lt;/u&gt;&lt;/cyber-tooltip&gt;
&lt;cyber-tooltip content="全息主题" theme="holographic"&gt;&lt;u&gt;全息&lt;/u&gt;&lt;/cyber-tooltip&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Neon</p>
                    <cyber-tooltip content="霓虹主题" theme="neon">
                        <u>霓虹</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Terminal</p>
                    <cyber-tooltip content="终端主题" theme="terminal">
                        <u>终端</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Holographic</p>
                    <cyber-tooltip content="全息主题" theme="holographic">
                        <u>全息</u>
                    </cyber-tooltip>
                </div>
            </div>
        </div>

        <!-- 不同触发方式 -->
        <div class="section">
            <div class="section-title">不同触发方式 (trigger: hover | click | focus)</div>
            <pre class="code-block"><code class="html">&lt;!-- 悬停触发（默认） --&gt;
&lt;cyber-tooltip content="悬停触发" trigger="hover"&gt;&lt;u&gt;悬停&lt;/u&gt;&lt;/cyber-tooltip&gt;

&lt;!-- 点击触发 --&gt;
&lt;cyber-tooltip content="点击触发" trigger="click"&gt;&lt;u&gt;点击&lt;/u&gt;&lt;/cyber-tooltip&gt;

&lt;!-- 聚焦触发 --&gt;
&lt;cyber-tooltip content="聚焦触发" trigger="focus"&gt;&lt;u&gt;聚焦&lt;/u&gt;&lt;/cyber-tooltip&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Hover</p>
                    <cyber-tooltip content="悬停触发" trigger="hover">
                        <u>悬停</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Click</p>
                    <cyber-tooltip content="点击触发" trigger="click">
                        <u>点击</u>
                    </cyber-tooltip>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Focus</p>
                    <cyber-tooltip content="聚焦触发" trigger="focus">
                        <u>聚焦</u>
                    </cyber-tooltip>
                </div>
            </div>
        </div>

        <!-- 自定义内容 -->
        <div class="section">
            <div class="section-title">自定义内容 (具名插槽 content)</div>
            <pre class="code-block"><code class="html">&lt;cyber-tooltip&gt;
  &lt;template #content&gt;
    &lt;div style="font-size: 16px;font-weight: bold;"&gt;自定义标题&lt;/div&gt;
    &lt;div&gt;这是一段自定义内容&lt;/div&gt;
    &lt;cyber-nenobutton type="primary" size="small" bg&gt;操作按钮&lt;/cyber-nenobutton&gt;
  &lt;/template&gt;
  &lt;u&gt;查看详情&lt;/u&gt;
&lt;/cyber-tooltip&gt;</code></pre>
            <div class="demo-row">
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
