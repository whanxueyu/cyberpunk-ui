<template>
    <div class="content">
        <!-- 基础用法 -->
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-digital-counter :value="999" /&gt;
&lt;cyber-button @click="reLoad"&gt;重新加载&lt;/cyber-button&gt;</code></pre>
            <div class="demo-row">
                <cyber-digital-counter :value="num1" />
                <cyber-button type="warning" size="small" @click="reLoad" content="重新加载">重新加载</cyber-button>
            </div>
        </div>

        <!-- 动画时间 -->
        <div class="section">
            <div class="section-title">动画时间 (duration: 毫秒)</div>
            <pre class="code-block"><code class="html">&lt;cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="1000" /&gt;
&lt;cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="2000" /&gt;
&lt;cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="3000" /&gt;
&lt;cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="5000" /&gt;
&lt;cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="8000" /&gt;
&lt;cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="10000" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">1s</p>
                    <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="1000" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">2s</p>
                    <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="2000" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">3s</p>
                    <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="3000" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">5s</p>
                    <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="5000" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">8s</p>
                    <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="8000" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">10s</p>
                    <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="10000" />
                </div>
            </div>
        </div>

        <!-- 不同主题 -->
        <div class="section">
            <div class="section-title">不同主题 (theme: neon | digital | hologram)</div>
            <pre class="code-block"><code class="html">&lt;cyber-digital-counter :value="12345" theme="neon" /&gt;
&lt;cyber-digital-counter :value="12345" theme="digital" /&gt;
&lt;cyber-digital-counter :value="12345" theme="hologram" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Neon</p>
                    <cyber-digital-counter :value="num2" theme="neon" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Digital</p>
                    <cyber-digital-counter :value="num2" theme="digital" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">Hologram</p>
                    <cyber-digital-counter :value="num2" theme="hologram" />
                </div>
            </div>
        </div>

        <!-- 前缀和后缀 -->
        <div class="section">
            <div class="section-title">前缀和后缀 (prefix, suffix)</div>
            <pre class="code-block"><code class="html">&lt;!-- 仅前缀 --&gt;
&lt;cyber-digital-counter :value="12345" prefix="$" /&gt;

&lt;!-- 仅后缀 --&gt;
&lt;cyber-digital-counter :value="75" suffix="%" /&gt;

&lt;!-- 前后缀组合 --&gt;
&lt;cyber-digital-counter :value="12345" prefix="Level " suffix=" Achieved" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">前缀 ($)</p>
                    <cyber-digital-counter :value="num2" prefix="$" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">后缀 (%)</p>
                    <cyber-digital-counter :value="num3" suffix="%" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">前后缀组合</p>
                    <cyber-digital-counter :value="num2" prefix="Level " suffix=" Achieved" />
                </div>
            </div>
        </div>

        <!-- 小数位数 -->
        <div class="section">
            <div class="section-title">小数位数 (decimal)</div>
            <pre class="code-block"><code class="html">&lt;cyber-digital-counter :value="1234.56789" :decimal="0" /&gt;
&lt;cyber-digital-counter :value="1234.56789" :decimal="2" /&gt;
&lt;cyber-digital-counter :value="1234.56789" :decimal="4" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">0 位小数</p>
                    <cyber-digital-counter :value="num4" :decimal="0" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">2 位小数</p>
                    <cyber-digital-counter :value="num4" :decimal="2" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">4 位小数</p>
                    <cyber-digital-counter :value="num4" :decimal="4" />
                </div>
            </div>
        </div>

        <!-- 分隔符 -->
        <div class="section">
            <div class="section-title">分隔符 (separator)</div>
            <pre class="code-block"><code class="html">&lt;cyber-digital-counter :value="1234567.89" separator="," /&gt;
&lt;cyber-digital-counter :value="1234567.89" separator=" " /&gt;
&lt;cyber-digital-counter :value="1234567.89" separator="-" /&gt;
&lt;cyber-digital-counter :value="1234567.89" separator="/" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">逗号 (,)</p>
                    <cyber-digital-counter :value="num5" separator="," />
                </div>
                <div class="demo-item">
                    <p class="demo-label">空格</p>
                    <cyber-digital-counter :value="num5" separator=" " />
                </div>
                <div class="demo-item">
                    <p class="demo-label">连字符 (-)</p>
                    <cyber-digital-counter :value="num5" separator="-" />
                </div>
                <div class="demo-item">
                    <p class="demo-label">斜杠 (/)</p>
                    <cyber-digital-counter :value="num5" separator="/" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
const num1 = ref(999)
const num2 = ref(12345)
const num3 = ref(75)
const num4 = ref(1234.56789)
const num5 = ref(1234567.89)
const reLoad = () => {
    num1.value = 0;
    num2.value = 0;
    num3.value = 0;
    num4.value = 0;
    num5.value = 0;
    nextTick(() => {
        num1.value = 999;
        num2.value = 12345;
        num3.value = 75;
        num4.value = 1234.56789;
        num5.value = 1234567.89;
    })
}
</script>
<style scoped lang="scss">
.content {
    padding: 20px;
    text-align: left;
}

.section {
    margin-bottom: 60px;
    font-size: 40px;
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
