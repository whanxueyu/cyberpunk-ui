<template>
    <div class="content">
        <!-- CyberButton 组件 -->
        <div class="section">
            <div class="section-title">CyberButton - 不同尺寸</div>
            <pre class="code-block"><code class="html">&lt;!-- Large 尺寸 --&gt;
&lt;cyber-button type="primary" size="large" content="PRIMARY"&gt;PRIMARY&lt;/cyber-button&gt;

&lt;!-- Default 尺寸 --&gt;
&lt;cyber-button type="primary" size="default" content="PRIMARY"&gt;PRIMARY&lt;/cyber-button&gt;

&lt;!-- Small 尺寸 --&gt;
&lt;cyber-button type="primary" size="small" content="PRIMARY"&gt;PRIMARY&lt;/cyber-button&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">Large</p>
                    <cyber-button type="primary" size="large" content="PRIMARY">PRIMARY</cyber-button>
                    <cyber-button type="success" size="large" content="SUCCESS">SUCCESS</cyber-button>
                    <cyber-button type="warning" size="large" content="WARNING">WARNING</cyber-button>
                    <cyber-button type="danger" size="large" content="DANGER">DANGER</cyber-button>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Default</p>
                    <cyber-button type="primary" size="default" content="PRIMARY">PRIMARY</cyber-button>
                    <cyber-button type="success" size="default" content="SUCCESS">SUCCESS</cyber-button>
                    <cyber-button type="warning" size="default" content="WARNING">WARNING</cyber-button>
                    <cyber-button type="danger" size="default" content="DANGER">DANGER</cyber-button>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small</p>
                    <cyber-button type="primary" size="small" content="PRIMARY">PRIMARY</cyber-button>
                    <cyber-button type="success" size="small" content="SUCCESS">SUCCESS</cyber-button>
                    <cyber-button type="warning" size="small" content="WARNING">WARNING</cyber-button>
                    <cyber-button type="danger" size="small" content="DANGER">DANGER</cyber-button>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">CyberButton - 不同类型</div>
            <pre class="code-block"><code class="html">&lt;cyber-button type="primary" size="default" content="PRIMARY"&gt;PRIMARY&lt;/cyber-button&gt;
&lt;cyber-button type="success" size="default" content="SUCCESS"&gt;SUCCESS&lt;/cyber-button&gt;
&lt;cyber-button type="warning" size="default" content="WARNING"&gt;WARNING&lt;/cyber-button&gt;
&lt;cyber-button type="danger" size="default" content="DANGER"&gt;DANGER&lt;/cyber-button&gt;</code></pre>
            <div class="demo-row">
                <cyber-button type="primary" size="default" content="PRIMARY">PRIMARY</cyber-button>
                <cyber-button type="success" size="default" content="SUCCESS">SUCCESS</cyber-button>
                <cyber-button type="warning" size="default" content="WARNING">WARNING</cyber-button>
                <cyber-button type="danger" size="default" content="DANGER">DANGER</cyber-button>
            </div>
        </div>

        <!-- NeonButton 组件 -->
        <div class="section">
            <div class="section-title">NeonButton - 不同尺寸</div>
            <pre class="code-block"><code class="html">&lt;cyber-nenobutton type="primary" size="large"&gt;PRIMARY&lt;/cyber-nenobutton&gt;
&lt;cyber-nenobutton type="primary" size="default"&gt;PRIMARY&lt;/cyber-nenobutton&gt;
&lt;cyber-nenobutton type="primary" size="small"&gt;PRIMARY&lt;/cyber-nenobutton&gt;</code></pre>
            <div class="demo-row">
                <cyber-nenobutton type="primary" size="large">PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
            </div>
        </div>

        <div class="section">
            <div class="section-title">NeonButton - 不同类型</div>
            <pre class="code-block"><code class="html">&lt;cyber-nenobutton type="primary" size="default"&gt;PRIMARY&lt;/cyber-nenobutton&gt;
&lt;cyber-nenobutton type="success" size="default"&gt;SUCCESS&lt;/cyber-nenobutton&gt;
&lt;cyber-nenobutton type="warning" size="default"&gt;WARNING&lt;/cyber-nenobutton&gt;
&lt;cyber-nenobutton type="danger" size="default"&gt;DANGER&lt;/cyber-nenobutton&gt;</code></pre>
            <div class="demo-row">
                <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="success" size="default">SUCCESS</cyber-nenobutton>
                <cyber-nenobutton type="warning" size="default">WARNING</cyber-nenobutton>
                <cyber-nenobutton type="danger" size="default">DANGER</cyber-nenobutton>
            </div>
        </div>

        <div class="section">
            <div class="section-title">NeonButton - 有无背景对比</div>
            <pre class="code-block"><code class="html">&lt;!-- 无背景 --&gt;
&lt;cyber-nenobutton type="primary" size="small"&gt;PRIMARY&lt;/cyber-nenobutton&gt;

&lt;!-- 有背景 (bg 属性) --&gt;
&lt;cyber-nenobutton type="primary" size="small" bg&gt;PRIMARY&lt;/cyber-nenobutton&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">无背景</p>
                    <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
                    <cyber-nenobutton type="success" size="small">SUCCESS</cyber-nenobutton>
                    <cyber-nenobutton type="warning" size="small">WARNING</cyber-nenobutton>
                    <cyber-nenobutton type="danger" size="small">DANGER</cyber-nenobutton>
                </div>
                <div class="demo-item">
                    <p class="demo-label">有背景 (bg)</p>
                    <cyber-nenobutton type="primary" size="small" bg>PRIMARY</cyber-nenobutton>
                    <cyber-nenobutton type="success" size="small" bg>SUCCESS</cyber-nenobutton>
                    <cyber-nenobutton type="warning" size="small" bg>WARNING</cyber-nenobutton>
                    <cyber-nenobutton type="danger" size="small" bg>DANGER</cyber-nenobutton>
                </div>
            </div>
        </div>

        <!-- ReflectButton 组件 -->
        <div class="section">
            <div class="section-title">ReflectButton - 不同尺寸</div>
            <pre class="code-block"><code class="html">&lt;cyber-reflectbutton type="primary" size="large"&gt;PRIMARY&lt;/cyber-reflectbutton&gt;
&lt;cyber-reflectbutton type="primary" size="default"&gt;PRIMARY&lt;/cyber-reflectbutton&gt;
&lt;cyber-reflectbutton type="primary" size="small"&gt;PRIMARY&lt;/cyber-reflectbutton&gt;</code></pre>
            <div class="demo-row">
                <cyber-reflectbutton type="primary" size="large">PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="primary" size="small">PRIMARY</cyber-reflectbutton>
            </div>
        </div>

        <div class="section">
            <div class="section-title">ReflectButton - 不同类型</div>
            <pre class="code-block"><code class="html">&lt;cyber-reflectbutton type="primary" size="default"&gt;PRIMARY&lt;/cyber-reflectbutton&gt;
&lt;cyber-reflectbutton type="success" size="default"&gt;SUCCESS&lt;/cyber-reflectbutton&gt;
&lt;cyber-reflectbutton type="warning" size="default"&gt;WARNING&lt;/cyber-reflectbutton&gt;
&lt;cyber-reflectbutton type="danger" size="default"&gt;DANGER&lt;/cyber-reflectbutton&gt;</code></pre>
            <div class="demo-row">
                <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="success" size="default">SUCCESS</cyber-reflectbutton>
                <cyber-reflectbutton type="warning" size="default">WARNING</cyber-reflectbutton>
                <cyber-reflectbutton type="danger" size="default">DANGER</cyber-reflectbutton>
            </div>
        </div>

        <div class="section">
            <div class="section-title">ReflectButton - 有无背景对比</div>
            <pre class="code-block"><code class="html">&lt;!-- 无背景 --&gt;
&lt;cyber-reflectbutton type="primary" size="small"&gt;PRIMARY&lt;/cyber-reflectbutton&gt;

&lt;!-- 有背景 (bg 属性) --&gt;
&lt;cyber-reflectbutton type="primary" size="small" bg&gt;PRIMARY&lt;/cyber-reflectbutton&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">无背景</p>
                    <cyber-reflectbutton type="primary">PRIMARY</cyber-reflectbutton>
                    <cyber-reflectbutton type="success">SUCCESS</cyber-reflectbutton>
                    <cyber-reflectbutton type="warning">WARNING</cyber-reflectbutton>
                    <cyber-reflectbutton type="danger">DANGER</cyber-reflectbutton>
                </div>
                <div class="demo-item">
                    <p class="demo-label">有背景 (bg)</p>
                    <cyber-reflectbutton type="primary" bg>PRIMARY</cyber-reflectbutton>
                    <cyber-reflectbutton type="success" bg>SUCCESS</cyber-reflectbutton>
                    <cyber-reflectbutton type="warning" bg>WARNING</cyber-reflectbutton>
                    <cyber-reflectbutton type="danger" bg>DANGER</cyber-reflectbutton>
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
.demo-item {
    padding-bottom: 60px;
}

.demo-label {
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
}
</style>
