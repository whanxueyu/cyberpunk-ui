<template>
  <div class="content">
    <!-- 四种故障效果（hover 触发） -->
    <div class="section">
      <div class="section-title">CyberText - 四种故障效果</div>

      <div class="demo-item">
        <p class="demo-label">glitch — 经典故障位移（hover 触发 glitch）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="GLITCH 故障文字" effect="glitch" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="GLITCH 故障文字" effect="glitch" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">flicker — 快速闪烁干扰（hover 触发）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="FLICKER 闪烁干扰" effect="flicker" shadow-color="#ff5500" glitch-color="#00ff88" line-color="#ff5500"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="FLICKER 闪烁干扰" effect="flicker" shadow-color="#ff5500" glitch-color="#00ff88" line-color="#ff5500"></cyber-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">pulse — 呼吸脉冲（hover 触发）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="PULSE 呼吸脉冲" effect="pulse" shadow-color="#a855f7" glitch-color="#00e6f6" line-color="#a855f7"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="PULSE 呼吸脉冲" effect="pulse" shadow-color="#a855f7" glitch-color="#00e6f6" line-color="#a855f7"></cyber-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">static — 静态故障叠影（hover 触发一次性 glitch）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="STATIC 静态叠影" effect="static" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="STATIC 静态叠影" effect="static" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
      </div>
    </div>

    <!-- glowing 常驻效果 -->
    <div class="section">
      <div class="section-title">CyberText - glowing 常驻效果</div>

      <div class="demo-item">
        <p class="demo-label">glitch + glowing（故障常驻运行）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="常驻故障" effect="glitch" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="常驻故障" effect="glitch" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">flicker + glowing（持续闪烁）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="常驻闪烁" effect="flicker" glowing shadow-color="#ff5500" glitch-color="#00ff88" line-color="#ff5500"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="常驻闪烁" effect="flicker" glowing shadow-color="#ff5500" glitch-color="#00ff88" line-color="#ff5500"></cyber-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">pulse + glowing（持续呼吸）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="常驻呼吸" effect="pulse" glowing shadow-color="#a855f7" glitch-color="#00e6f6" line-color="#a855f7"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="常驻呼吸" effect="pulse" glowing shadow-color="#a855f7" glitch-color="#00e6f6" line-color="#a855f7"></cyber-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">static + glowing（常驻叠影）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="常驻叠影" effect="static" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="常驻叠影" effect="static" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
      </div>
    </div>

    <!-- 自定义颜色 -->
    <div class="section">
      <div class="section-title">CyberText - 自定义配色</div>

      <div class="demo-item">
        <p class="demo-label">粉 + 青（经典赛博配色）</p>
        <cyber-text text="CYBERPUNK 2077" effect="glitch" glowing shadow-color="#ff00b3" glitch-color="#00e6f6" line-color="#fff"></cyber-text>
      </div>
      <div class="demo-item">
        <p class="demo-label">橙 + 绿（终端配色）</p>
        <cyber-text text="TERMINAL V2.0" effect="glitch" glowing shadow-color="#ff6600" glitch-color="#00ff66" line-color="#ff6600"></cyber-text>
      </div>
      <div class="demo-item">
        <p class="demo-label">紫 + 金（霓虹配色）</p>
        <cyber-text text="NEON CITY" effect="pulse" glowing shadow-color="#a855f7" glitch-color="#ffd700" line-color="#a855f7"></cyber-text>
      </div>
    </div>

    <!-- 动画速度 -->
    <div class="section">
      <div class="section-title">CyberText - 动画速度</div>

      <div class="demo-item">
        <p class="demo-label">slow</p>
        <cyber-text text="SLOW 慢速" effect="glitch" glowing animation-speed="slow" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
      </div>
      <div class="demo-item">
        <p class="demo-label">normal</p>
        <cyber-text text="NORMAL 正常" effect="glitch" glowing animation-speed="normal" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
      </div>
      <div class="demo-item">
        <p class="demo-label">fast</p>
        <cyber-text text="FAST 快速" effect="glitch" glowing animation-speed="fast" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
      </div>
    </div>

    <!-- 隐藏扫描线 & 禁用 -->
    <div class="section">
      <div class="section-title">CyberText - 隐藏扫描线 & 禁用</div>

      <div class="demo-item">
        <p class="demo-label">隐藏扫描线（line-visible="false"）</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="无扫描线" effect="glitch" glowing :line-visible="false" shadow-color="#ff00b3" glitch-color="#00c3ff"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="无扫描线" effect="glitch" glowing :line-visible="false" shadow-color="#ff00b3" glitch-color="#00c3ff"></cyber-text>
      </div>

      <div class="demo-item">
        <p class="demo-label">禁用状态</p>
        <pre class="code-block"><code class="html">&lt;cyber-text text="禁用故障文字" effect="glitch" disabled shadow-color="#ff00b3" glitch-color="#00c3ff"&gt;&lt;/cyber-text&gt;</code></pre>
        <cyber-text text="禁用故障文字" effect="glitch" disabled shadow-color="#ff00b3" glitch-color="#00c3ff"></cyber-text>
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
