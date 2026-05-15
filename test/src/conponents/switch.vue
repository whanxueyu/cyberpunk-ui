<template>
    <div class="content">
        <!-- 不同形状 -->
        <div class="section">
            <div class="section-title">不同形状 (shape: circle | square | hex)</div>
            <pre class="code-block"><code class="html">&lt;!-- 圆形 --&gt;
&lt;cyber-neon-toggle v-model="value" shape="circle" /&gt;

&lt;!-- 方形 --&gt;
&lt;cyber-neon-toggle v-model="value" shape="square" /&gt;

&lt;!-- 六边形 --&gt;
&lt;cyber-neon-toggle v-model="value" shape="hex" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Circle</p>
                    <cyber-neon-toggle v-model="value" shape="circle" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Square</p>
                    <cyber-neon-toggle v-model="value" shape="square" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Hex</p>
                    <cyber-neon-toggle v-model="value" shape="hex" />
                </div>
            </div>
        </div>

        <!-- 不同大小 -->
        <div class="section">
            <div class="section-title">不同大小 (size: small | large)</div>
            <pre class="code-block"><code class="html">&lt;!-- Small 尺寸 --&gt;
&lt;cyber-neon-toggle size="small" v-model="value" shape="circle" /&gt;
&lt;cyber-neon-toggle size="small" v-model="value" shape="square" /&gt;
&lt;cyber-neon-toggle size="small" v-model="value" shape="hex" /&gt;

&lt;!-- Large 尺寸 --&gt;
&lt;cyber-neon-toggle size="large" v-model="value" shape="circle" /&gt;
&lt;cyber-neon-toggle size="large" v-model="value" shape="square" /&gt;
&lt;cyber-neon-toggle size="large" v-model="value" shape="hex" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Small - Circle</p>
                    <cyber-neon-toggle size="small" v-model="value" shape="circle" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small - Square</p>
                    <cyber-neon-toggle size="small" v-model="value" shape="square" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small - Hex</p>
                    <cyber-neon-toggle size="small" v-model="value" shape="hex" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large - Circle</p>
                    <cyber-neon-toggle size="large" v-model="value" shape="circle" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large - Square</p>
                    <cyber-neon-toggle size="large" v-model="value" shape="square" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Large - Hex</p>
                    <cyber-neon-toggle size="large" v-model="value" shape="hex" />
                </div>
            </div>
        </div>

        <!-- 自定义颜色 -->
        <div class="section">
            <div class="section-title">自定义颜色 (activeColor, inActiveColor)</div>
            <pre class="code-block"><code class="html">&lt;!-- 红色激活 + 青色未激活 --&gt;
&lt;cyber-neon-toggle v-model="value" active-color="#ff0000cc" inActiveColor="#99ffff" /&gt;

&lt;!-- 橙色激活 --&gt;
&lt;cyber-neon-toggle v-model="value" active-color="#ff9900cc" /&gt;

&lt;!-- 紫色激活 + 绿色未激活 --&gt;
&lt;cyber-neon-toggle v-model="value" active-color="#ff00ffcc" inActiveColor="#00ff00cc" /&gt;

&lt;!-- 蓝色激活 --&gt;
&lt;cyber-neon-toggle v-model="value" active-color="#0066ffcc" /&gt;

&lt;!-- 绿色激活 --&gt;
&lt;cyber-neon-toggle v-model="value" active-color="#00ff00cc" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">红+青</p>
                    <cyber-neon-toggle v-model="value" active-color="#ff0000cc" inActiveColor="#99ffff" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">橙色</p>
                    <cyber-neon-toggle v-model="value" active-color="#ff9900cc" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">紫+绿</p>
                    <cyber-neon-toggle v-model="value" active-color="#ff00ffcc" inActiveColor="#00ff00cc" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">蓝色</p>
                    <cyber-neon-toggle v-model="value" active-color="#0066ffcc" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">绿色</p>
                    <cyber-neon-toggle v-model="value" active-color="#00ff00cc" />
                </div>
            </div>
        </div>

        <!-- 禁用状态 -->
        <div class="section">
            <div class="section-title">禁用状态 (disabled)</div>
            <pre class="code-block"><code class="html">&lt;!-- 默认禁用 --&gt;
&lt;cyber-neon-toggle v-model="value" disabled /&gt;

&lt;!-- 带颜色的禁用状态 --&gt;
&lt;cyber-neon-toggle v-model="value" disabled active-color="#ff0000cc" inActiveColor="#99ffff" /&gt;
&lt;cyber-neon-toggle v-model="value" disabled active-color="#ff9900cc" /&gt;
&lt;cyber-neon-toggle v-model="value" disabled active-color="#ff00ffcc" inActiveColor="#00ff00cc" /&gt;
&lt;cyber-neon-toggle v-model="value" disabled active-color="#0066ffcc" /&gt;
&lt;cyber-neon-toggle v-model="value" disabled active-color="#00ff00cc" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">默认禁用</p>
                    <cyber-neon-toggle v-model="value" disabled />
                </div>
                <div class="demo-item">
                    <p class="demo-label">红+青 (禁用)</p>
                    <cyber-neon-toggle v-model="value" disabled active-color="#ff0000cc" inActiveColor="#99ffff" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">橙色 (禁用)</p>
                    <cyber-neon-toggle v-model="value" disabled active-color="#ff9900cc" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">紫+绿 (禁用)</p>
                    <cyber-neon-toggle v-model="value" disabled active-color="#ff00ffcc" inActiveColor="#00ff00cc" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">蓝色 (禁用)</p>
                    <cyber-neon-toggle v-model="value" disabled active-color="#0066ffcc" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">绿色 (禁用)</p>
                    <cyber-neon-toggle v-model="value" disabled active-color="#00ff00cc" />
                </div>
            </div>
        </div>

        <!-- 动画效果 -->
        <div class="section">
            <div class="section-title">脉冲动画效果 (pulseEffect)</div>
            <pre class="code-block"><code class="html">&lt;!-- 启用脉冲动画 --&gt;
&lt;cyber-neon-toggle v-model="value" :pulse-effect="true" /&gt;

&lt;!-- 禁用脉冲动画 --&gt;
&lt;cyber-neon-toggle v-model="value" :pulse-effect="false" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">启用脉冲</p>
                    <cyber-neon-toggle v-model="value" :pulse-effect="true" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">禁用脉冲</p>
                    <cyber-neon-toggle v-model="value" :pulse-effect="false" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
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
