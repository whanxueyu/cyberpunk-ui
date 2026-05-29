<template>
  <div class="content">
    <!-- 四种霓虹光效（hover 触发） -->
    <div class="section">
      <div class="section-title">CyberGlowText - 四种霓虹光效</div>

      <div class="demo-item">
        <p class="demo-label">neon — 经典霓虹灯管交替（hover 触发）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#e91e84" effect="neon"&gt;NEON 霓虹灯管&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#e91e84" effect="neon">NEON 霓虹灯管</cyber-glow-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">flux — 线性平滑呼吸光晕（hover 触发）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#00e6f6" effect="flux"&gt;FLUX 呼吸光晕&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#00e6f6" effect="flux">FLUX 呼吸光晕</cyber-glow-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">turnon — 灯管启动闪烁（hover 触发，每次移入重播）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#ff55de" effect="turnon"&gt;TURNON 启动闪烁&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#ff55de" effect="turnon">TURNON 启动闪烁</cyber-glow-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">blink — 急速闪烁（hover 触发）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#ff0040" effect="blink"&gt;BLINK 急速闪烁&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#ff0040" effect="blink">BLINK 急速闪烁</cyber-glow-text>
      </div>
    </div>

    <!-- glowing 常驻发光 -->
    <div class="section">
      <div class="section-title">CyberGlowText - glowing 常驻发光</div>

      <div class="demo-item">
        <p class="demo-label">neon + glowing（始终发光，无需 hover）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#e91e84" effect="neon" glowing&gt;常驻霓虹&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#e91e84" effect="neon" glowing>常驻霓虹</cyber-glow-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">flux + glowing</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#22c55e" effect="flux" glowing&gt;常驻呼吸&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#22c55e" effect="flux" glowing>常驻呼吸</cyber-glow-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">turnon + glowing（页面加载即触发启动闪烁）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#a855f7" effect="turnon" glowing&gt;常驻启动&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#a855f7" effect="turnon" glowing>常驻启动</cyber-glow-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">blink + glowing（持续急速闪烁）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#ff0040" effect="blink" glowing&gt;WARNING&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#ff0040" effect="blink" glowing>WARNING</cyber-glow-text>
      </div>
    </div>

    <!-- 动画速度 -->
    <div class="section">
      <div class="section-title">CyberGlowText - 动画速度</div>

      <div class="demo-item">
        <p class="demo-label">slow（3s）</p>
        <cyber-glow-text color="#22c55e" effect="flux" glowing animation-speed="slow">SLOW 慢速</cyber-glow-text>
      </div>
      <div class="demo-item">
        <p class="demo-label">normal（1.5s）</p>
        <cyber-glow-text color="#00e6f6" effect="flux" glowing animation-speed="normal">NORMAL 正常</cyber-glow-text>
      </div>
      <div class="demo-item">
        <p class="demo-label">fast（0.75s）</p>
        <cyber-glow-text color="#ff5588" effect="flux" glowing animation-speed="fast">FAST 快速</cyber-glow-text>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="section">
      <div class="section-title">CyberGlowText - 禁用状态</div>

      <div class="demo-item">
        <p class="demo-label">disabled（无交互、灰阶降暗）</p>
        <pre class="code-block"><code class="html">&lt;cyber-glow-text color="#e91e84" effect="neon" disabled&gt;禁用的发光文字&lt;/cyber-glow-text&gt;</code></pre>
        <cyber-glow-text color="#e91e84" effect="neon" disabled>禁用的发光文字</cyber-glow-text>
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
