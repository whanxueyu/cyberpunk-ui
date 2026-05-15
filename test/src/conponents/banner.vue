<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre
                class="code-block"><code class="html">&lt;cyber-banner :imgList="imgList"&gt;&lt;/cyber-banner&gt;</code></pre>
            <cyber-banner :imgList="imgList"></cyber-banner>
        </div>

        <div class="section">
            <div class="section-title">自定义图片尺寸</div>
            <pre class="code-block"><code class="html">&lt;cyber-banner 
  :imgWidth="300" 
  :imgHeight="200" 
  :imgList="imgList"
&gt;&lt;/cyber-banner&gt;</code></pre>
            <cyber-banner :imgWidth="300" :imgHeight="200" :imgList="imgList"></cyber-banner>
        </div>

        <div class="section">
            <div class="section-title">关闭倒影效果</div>
            <pre class="code-block"><code class="html">&lt;cyber-banner 
  :shadow="false" 
  :imgList="imgList"
&gt;&lt;/cyber-banner&gt;</code></pre>
            <cyber-banner :shadow="false" :imgList="imgList"></cyber-banner>
        </div>

        <div class="section">
            <div class="section-title">自定义动画速度</div>
            <pre class="code-block"><code class="html">&lt;!-- 快速旋转 --&gt;
&lt;cyber-banner 
  :animationDuration="10" 
  :imgList="imgList"
&gt;&lt;/cyber-banner&gt;

&lt;!-- 慢速旋转 --&gt;
&lt;cyber-banner 
  :animationDuration="60" 
  :imgList="imgList"
&gt;&lt;/cyber-banner&gt;</code></pre>
            <div class="demo-row">
                <div class="demo-item">
                    <p class="demo-label">快速 (10s)</p>
                    <cyber-banner :animationDuration="10" :imgList="imgList1"></cyber-banner>
                </div>
                <div class="demo-item">
                    <p class="demo-label">慢速 (60s)</p>
                    <cyber-banner :animationDuration="60" :imgList="imgList1"></cyber-banner>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">少量图片展示</div>
            <pre class="code-block"><code class="html">&lt;cyber-banner 
  :imgWidth="250" 
  :imgHeight="180" 
  :imgList="imgList1"
&gt;&lt;/cyber-banner&gt;</code></pre>
            <cyber-banner :imgWidth="250" :imgHeight="180" :imgList="imgList1"></cyber-banner>
        </div>

        <div class="section">
            <div class="section-title">综合配置示例</div>
            <pre class="code-block"><code class="html">&lt;cyber-banner 
  :imgWidth="350" 
  :imgHeight="250" 
  :animationDuration="20" 
  :shadow="true"
  :imgList="imgList"
&gt;&lt;/cyber-banner&gt;</code></pre>
            <cyber-banner :imgWidth="350" :imgHeight="250" :animationDuration="20" :shadow="true"
                :imgList="imgList"></cyber-banner>
        </div>
    </div>
</template>

<script setup lang="ts">
const imgList = [
    "https://axydemo.netlify.app/images/img/Cyber.jpeg",
    "https://axydemo.netlify.app/images/img/Cyber2.jpg",
    "https://axydemo.netlify.app/images/img/Cyber3.jpeg",
    "https://axydemo.netlify.app/images/img/Cyber4.jpeg",
    "https://axydemo.netlify.app/images/img/Cyber5.jpeg",
    "https://axydemo.netlify.app/images/img/Cyber6.jpg",
    "https://axydemo.netlify.app/images/img/Cyber7.jpeg",
    "https://axydemo.netlify.app/images/img/Cyber8.jpeg",
];

const imgList1 = [
    "https://axydemo.netlify.app/images/img/Cyber.jpeg",
    "https://axydemo.netlify.app/images/img/Cyber2.jpg",
    "https://axydemo.netlify.app/images/img/Cyber3.jpeg",
    "https://axydemo.netlify.app/images/img/Cyber4.jpeg",
];
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
    gap: 40px;
    flex-wrap: wrap;
}

.demo-item {
    flex: 1;
    min-width: 300px;
}

.demo-label {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
    text-align: center;
}
</style>
