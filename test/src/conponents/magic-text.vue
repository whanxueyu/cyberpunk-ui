<template>
  <div class="content">
    <!-- CyberMagicText 组件 -->
    <div class="section">
      <div class="section-title">CyberMagicText - 魔术文字效果</div>
      <pre class="code-block"><code class="html">&lt;!-- 大字号示例 --&gt;
&lt;cyber-magic-text style="font-size: 48px;"&gt;CyberMagicText&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 48px;"&gt;赛博朋克魔术文字&lt;/cyber-magic-text&gt;

&lt;!-- 小字号示例 --&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;CyberMagicText&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;1234567890&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;~!@#$%^&&*=+*/\|&lt;/cyber-magic-text&gt;
&lt;cyber-magic-text style="font-size: 22px;"&gt;赛博朋克魔术文字&lt;/cyber-magic-text&gt;</code></pre>
      <div class="demo-row">
        <div class="demo-item">
          <p class="demo-label">大字号 (48px)</p>
          <div style="display: flex; gap: 20px; color: #fff; font-size: 48px;">
            <cyber-magic-text>CyberMagicText</cyber-magic-text>
            <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
          </div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 30px;">
        <div class="demo-item">
          <p class="demo-label">小字号 (22px)</p>
          <div style="display: flex; gap: 20px; color: #fff; font-size: 22px;">
            <cyber-magic-text>CyberMagicText</cyber-magic-text>
            <cyber-magic-text>1234567890</cyber-magic-text>
            <cyber-magic-text>~!@#$%^&&*=+*/\|</cyber-magic-text>
            <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
          </div>
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
