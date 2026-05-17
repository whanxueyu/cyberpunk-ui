<template>
    <div class="content">
        <!-- 基础用法 -->
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-holo-card title="全息投影"&gt;
  这是一个全息卡片组件，具有3D视觉效果和动态光影变化。
&lt;/cyber-holo-card&gt;</code></pre>
            <cyber-holo-card title="全息投影">
                这是一个全息卡片组件，具有3D视觉效果和动态光影变化。
            </cyber-holo-card>
        </div>

        <!-- 不同主题 -->
        <div class="section">
            <div class="section-title">不同主题 (theme: neon | hologram | terminal)</div>
            <pre class="code-block"><code class="html">&lt;cyber-holo-card title="霓虹主题" theme="neon" /&gt;
&lt;cyber-holo-card title="全息主题" theme="hologram" /&gt;
&lt;cyber-holo-card title="终端主题" theme="terminal" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Neon</p>
                    <cyber-holo-card title="霓虹主题" theme="neon" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Hologram</p>
                    <cyber-holo-card title="全息主题" theme="hologram" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Terminal</p>
                    <cyber-holo-card title="终端主题" theme="terminal" />
                </div>
            </div>
        </div>

        <!-- 不同效果 -->
        <div class="section">
            <div class="section-title">不同效果 (effect: default | scan | glitch | pulse)</div>
            <pre class="code-block"><code class="html">&lt;cyber-holo-card title="默认效果" /&gt;
&lt;cyber-holo-card title="扫描效果" effect="scan" /&gt;
&lt;cyber-holo-card title="故障效果" effect="glitch" /&gt;
&lt;cyber-holo-card title="脉冲效果" effect="pulse" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Default</p>
                    <cyber-holo-card title="默认效果" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Scan</p>
                    <cyber-holo-card title="扫描效果" effect="scan" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Glitch</p>
                    <cyber-holo-card title="故障效果" effect="glitch" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Pulse</p>
                    <cyber-holo-card title="脉冲效果" effect="pulse" />
                </div>
            </div>
        </div>

        <!-- 自定义内容 -->
        <div class="section">
            <div class="section-title">自定义内容 (具名插槽 title, default, footer)</div>
            <pre class="code-block"><code class="html">&lt;cyber-holo-card&gt;
  &lt;template #title&gt;
    &lt;div class="custom-title"&gt;
      &lt;icon-component /&gt;
      自定义标题
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;div&gt;自定义内容&lt;/div&gt;

  &lt;template #footer&gt;
    &lt;div class="custom-footer"&gt;
      自定义底部
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/cyber-holo-card&gt;</code></pre>
            <div class="demo-row">
                <cyber-holo-card>
                    <template #title>
                        <div class="custom-title">
                            <span style="margin-right: 8px;">🔮</span>
                            自定义标题
                        </div>
                    </template>

                    <div>自定义内容区域，可以放置任何HTML元素</div>

                    <template #footer>
                        <div class="custom-footer">
                            自定义底部区域
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

.custom-title {
    display: flex;
    align-items: center;
    font-weight: bold;
}

.custom-footer {
    font-size: 12px;
    color: #999;
}
</style>
