<template>
  <div class="content">
    <!-- CyberTyping 组件 -->
    <div class="section">
      <div class="section-title">CyberTyping - 打字机效果</div>
      <pre class="code-block"><code class="html">&lt;cyber-typing&gt;CpTyping 1239945646 这是一段打字效果&lt;/cyber-typing&gt;</code></pre>
      <div class="demo-row">
        <cyber-typing>CpTyping 1239945646 这是一段打字效果</cyber-typing>
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
