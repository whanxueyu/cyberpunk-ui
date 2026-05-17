<template>
    <div class="content">
        <!-- 不同类型和颜色 -->
        <div class="section">
            <div class="section-title">不同类型和颜色 (type, color)</div>
            <pre class="code-block"><code class="html">&lt;cyber-holo-loader type="cube" /&gt;
&lt;cyber-holo-loader color="#ff00ff" type="sphere" /&gt;
&lt;cyber-holo-loader color="#ffff00" type="datastream" /&gt;
&lt;cyber-holo-loader color="#00ff66" type="circuit" /&gt;
&lt;cyber-holo-loader type="split" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Cube</p>
                    <cyber-holo-loader type="cube" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Sphere (紫色)</p>
                    <cyber-holo-loader color="#ff00ff" type="sphere" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Datastream (黄色)</p>
                    <cyber-holo-loader color="#ffff00" type="datastream" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Circuit (绿色)</p>
                    <cyber-holo-loader color="#00ff66" type="circuit" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Split</p>
                    <cyber-holo-loader type="split" />
                </div>
            </div>
        </div>

        <!-- 不同尺寸和文本 -->
        <div class="section">
            <div class="section-title">不同尺寸和文本 (size, text)</div>
            <pre class="code-block"><code class="html">&lt;!-- Small 尺寸 --&gt;
&lt;cyber-holo-loader size="small" text="加载中..."/&gt;

&lt;!-- Default 尺寸 --&gt;
&lt;cyber-holo-loader size="default" text="正在处理数据..." /&gt;

&lt;!-- Large 尺寸 --&gt;
&lt;cyber-holo-loader size="large" text="" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Small + Text</p>
                    <cyber-holo-loader size="small" text="加载中..."/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Default + Text</p>
                    <cyber-holo-loader size="default" text="正在处理数据..." />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large (无文本)</p>
                    <cyber-holo-loader size="large" text="" />
                </div>
            </div>
            <div class="demo-row" style="margin-top: 30px;">
                <div class="demo-item">
                    <p class="demo-label">Small - Sphere</p>
                    <cyber-holo-loader size="small" type="sphere"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large - Sphere</p>
                    <cyber-holo-loader size="large" type="sphere" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small - Datastream</p>
                    <cyber-holo-loader size="small" type="datastream"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large - Datastream</p>
                    <cyber-holo-loader size="large" type="datastream" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small - Circuit</p>
                    <cyber-holo-loader size="small" type="circuit"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large - Circuit</p>
                    <cyber-holo-loader size="large" type="circuit" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small - Split</p>
                    <cyber-holo-loader size="small" type="split" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large - Split</p>
                    <cyber-holo-loader size="large" type="split" />
                </div>
            </div>
        </div>

        <!-- 动画速度和透明背景 -->
        <div class="section">
            <div class="section-title">动画速度和透明背景 (speed, transparent)</div>
            <pre class="code-block"><code class="html">&lt;!-- 慢速 (0.5x) --&gt;
&lt;cyber-holo-loader :speed="0.5" /&gt;

&lt;!-- 正常速度 + 透明背景 --&gt;
&lt;cyber-holo-loader :speed="1" :transparent="true"/&gt;

&lt;!-- 快速 (2x) --&gt;
&lt;cyber-holo-loader :speed="2" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">慢速 (0.5x)</p>
                    <cyber-holo-loader :speed="0.5" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">正常 + 透明</p>
                    <cyber-holo-loader :speed="1" :transparent="true"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">快速 (2x)</p>
                    <cyber-holo-loader :speed="2" />
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
    // align-items: center;
}

.demo-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 18%
}

.demo-label {
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
}
</style>
