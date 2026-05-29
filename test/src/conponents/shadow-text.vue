<template>
  <div class="content">
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
