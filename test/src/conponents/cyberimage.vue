<template>
    <div class="content">
        <!-- 基础用法 -->
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-image src="/src/assets/img/cyber-building.jpeg" /&gt;</code></pre>
            <cyber-image class="pic" src="/src/assets/img/cyber-building.jpeg"/>
        </div>

        <!-- 设置宽高 -->
        <div class="section">
            <div class="section-title">设置宽高 (width, height)</div>
            <pre class="code-block"><code class="html">&lt;!-- 默认大小 --&gt;
&lt;cyber-image src="/src/assets/img/cyber-building.jpeg" /&gt;

&lt;!-- 设置大小 100*70 --&gt;
&lt;cyber-image width="100px" height="70px" src="/src/assets/img/cyber-building.jpeg" /&gt;

&lt;!-- 设置大小 200*50，使用 contain 适应方式 --&gt;
&lt;cyber-image fit="contain" width="200px" height="50px" src="/src/assets/img/cyber-building.jpeg" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">默认大小</p>
                    <cyber-image class="pic" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">100×70</p>
                    <cyber-image class="pic" width="100px" height="70px" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">200×50 (contain)</p>
                    <cyber-image class="pic" fit="contain" width="200px" height="50px" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
            </div>
        </div>

        <!-- 加载失败处理 -->
        <div class="section">
            <div class="section-title">加载失败处理 (errorContent, errorSrc)</div>
            <pre class="code-block"><code class="html">&lt;!-- 默认错误提示 --&gt;
&lt;cyber-image src="555.png" /&gt;

&lt;!-- 自定义错误文字 --&gt;
&lt;cyber-image src="555.png" errorContent="我尽力了，加载失败" /&gt;

&lt;!-- 显示备用图片 --&gt;
&lt;cyber-image src="555.png" errorSrc="/src/assets/img/cyber-building.jpeg" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">默认错误提示</p>
                    <cyber-image class="pic" src="555.png"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">自定义错误文字</p>
                    <cyber-image class="pic" src="555.png" errorContent="我尽力了，加载失败"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">显示备用图片</p>
                    <cyber-image class="pic" src="555.png" errorSrc="/src/assets/img/cyber-building.jpeg"/>
                </div>
            </div>
        </div>

        <!-- 图片适应方式 -->
        <div class="section">
            <div class="section-title">图片适应方式 (fit: cover | contain | fill | none | scale-down)</div>
            <pre class="code-block"><code class="html">&lt;cyber-image fit="cover" width="150px" height="150px" src="/src/assets/img/cyber-building.jpeg" /&gt;
&lt;cyber-image fit="contain" width="150px" height="150px" src="/src/assets/img/cyber-building.jpeg" /&gt;
&lt;cyber-image fit="fill" width="150px" height="150px" src="/src/assets/img/cyber-building.jpeg" /&gt;
&lt;cyber-image fit="none" width="150px" height="150px" src="/src/assets/img/cyber-building.jpeg" /&gt;
&lt;cyber-image fit="scale-down" width="150px" height="150px" src="/src/assets/img/cyber-building.jpeg" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">cover</p>
                    <cyber-image fit="cover" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">contain</p>
                    <cyber-image fit="contain" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">fill</p>
                    <cyber-image fit="fill" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">none</p>
                    <cyber-image fit="none" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">scale-down</p>
                    <cyber-image fit="scale-down" class="picfit" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
            </div>
        </div>

        <!-- 加载策略 -->
        <div class="section">
            <div class="section-title">加载策略 (loading: lazy | eager)</div>
            <pre class="code-block"><code class="html">&lt;!-- 懒加载 --&gt;
&lt;cyber-image loading="lazy" src="/src/assets/img/cyber-building.jpeg" /&gt;

&lt;!-- 立即加载 --&gt;
&lt;cyber-image loading="eager" src="/src/assets/img/cyber-building.jpeg" /&gt;

&lt;!-- 禁用故障效果 --&gt;
&lt;cyber-image disableGlitch src="/src/assets/img/cyber-building.jpeg" /&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Lazy 加载</p>
                    <cyber-image loading="lazy" class="pic" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Eager 加载</p>
                    <cyber-image loading="eager" class="pic" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
                <div class="demo-item">
                    <p class="demo-label">禁用故障效果</p>
                    <cyber-image disableGlitch class="pic" src="/src/assets/img/cyber-building.jpeg"/>
                </div>
            </div>
        </div>

        <!-- 具名插槽 -->
        <div class="section">
            <div class="section-title">具名插槽 (placeholder, error)</div>
            <pre class="code-block"><code class="html">&lt;!-- 自定义占位符 --&gt;
&lt;cyber-image src="/src/assets/img/cyber-building.jpeg"&gt;
  &lt;template #placeholder&gt;
    &lt;div style="color: aqua;"&gt;具名插槽 placeholder&lt;/div&gt;
  &lt;/template&gt;
&lt;/cyber-image&gt;

&lt;!-- 自定义错误内容 --&gt;
&lt;cyber-image src="555.png"&gt;
  &lt;template #error&gt;
    &lt;div style="color: aqua;"&gt;具名插槽 error&lt;/div&gt;
  &lt;/template&gt;
&lt;/cyber-image&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">自定义 placeholder</p>
                    <cyber-image class="pic" src="/src/assets/img/cyber-building.jpeg">
                        <template #placeholder>
                            <div style="color: aqua;">具名插槽 placeholder</div>
                        </template>
                    </cyber-image>
                </div>
                <div class="demo-item">
                    <p class="demo-label">自定义 error</p>
                    <cyber-image class="pic" src="555.png">
                        <template #error>
                            <div style="color: aqua;">具名插槽 error</div>
                        </template>
                    </cyber-image>
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
    height: 150px;
}

.picfit {
    width: 150px;
    height: 150px;
}
</style>
