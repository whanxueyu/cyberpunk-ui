<template>
  <div class="content">
    <!-- ======================== Neon 主题 ======================== -->
    <div class="section">
      <div class="section-title">Neon 主题（默认）</div>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="75" theme="neon" /&gt;</code></pre>
      <CyberProgress :percentage="75" theme="neon" />
    </div>

    <!-- ======================== Hologram 主题 ======================== -->
    <div class="section">
      <div class="section-title">Hologram 主题 - 内部百分比</div>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="60" theme="hologram" percentage-position="inside" /&gt;</code></pre>
      <CyberProgress :percentage="60" theme="hologram" percentage-position="inside" />
    </div>

    <!-- ======================== Terminal 主题 ======================== -->
    <div class="section">
      <div class="section-title">Terminal 主题 - 外部百分比</div>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="45" theme="terminal" /&gt;</code></pre>
      <CyberProgress :percentage="45" theme="terminal" />
    </div>

    <!-- ======================== Matrix 主题 ======================== -->
    <div class="section">
      <div class="section-title">Matrix 主题 - 内部百分比</div>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="90" theme="matrix" percentage-position="inside" /&gt;</code></pre>
      <CyberProgress :percentage="90" theme="matrix" percentage-position="inside" />
    </div>

    <!-- ======================== 自定义颜色 ======================== -->
    <div class="section">
      <div class="section-title">自定义颜色 (color)</div>
      <p class="desc">通过 color 属性传入任意颜色覆盖主题预设</p>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="80" color="#ff00ff" /&gt;
&lt;CyberProgress :percentage="55" color="#ffbf00" /&gt;
&lt;CyberProgress :percentage="35" color="#00ff88" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item">
          <p class="demo-label">紫红色 #ff00ff</p>
          <CyberProgress :percentage="80" color="#ff00ff" />
        </div>
        <div class="demo-item">
          <p class="demo-label">金色 #ffbf00</p>
          <CyberProgress :percentage="55" color="#ffbf00" />
        </div>
        <div class="demo-item">
          <p class="demo-label">翠绿 #00ff88</p>
          <CyberProgress :percentage="35" color="#00ff88" />
        </div>
      </div>
    </div>

    <!-- ======================== 动态效果 + 状态指示器 ======================== -->
    <div class="section">
      <div class="section-title">动态效果 + 状态指示器 (showStatus)</div>
      <p class="desc">状态随百分比变化：初始化(0-29) → 处理中(30-59) → 加载中(60-89) → 即将完成(90-99) → 已完成(100)</p>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="dynamicValue" theme="neon" :show-status="true" /&gt;</code></pre>
      <div class="demo-row">
        <CyberProgress :percentage="dynamicValue" theme="neon" :show-status="true" />
        <button @click="updateProgress" class="cyber-btn">随机更新</button>
      </div>
    </div>

    <!-- ======================== 不确定态 ======================== -->
    <div class="section">
      <div class="section-title">不确定态 (indeterminate)</div>
      <p class="desc">光带循环滑动，适合加载中场景</p>
      <pre class="code-block"><code>&lt;CyberProgress indeterminate theme="neon" /&gt;
&lt;CyberProgress indeterminate theme="hologram" /&gt;
&lt;CyberProgress indeterminate direction="vertical" theme="terminal" /&gt;</code></pre>
      <div class="demo-row" style="align-items: flex-end;">
        <div class="demo-item">
          <p class="demo-label">neon</p>
          <CyberProgress indeterminate theme="neon" />
        </div>
        <div class="demo-item">
          <p class="demo-label">hologram</p>
          <CyberProgress indeterminate theme="hologram" />
        </div>
        <div class="demo-item" style="height: 180px;">
          <p class="demo-label">vertical terminal</p>
          <CyberProgress indeterminate direction="vertical" theme="terminal" />
        </div>
      </div>
    </div>

    <!-- ======================== 垂直方向 ======================== -->
    <div class="section">
      <div class="section-title">垂直方向 (direction: vertical)</div>
      <p class="desc">液体从底部向上填充，适合仪表盘场景</p>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="75" direction="vertical" theme="neon" /&gt;
&lt;CyberProgress :percentage="45" direction="vertical" theme="hologram" :height="16" /&gt;
&lt;CyberProgress :percentage="90" direction="vertical" theme="matrix" :height="30" /&gt;</code></pre>
      <div class="demo-row" style="align-items: flex-end; gap: 30px; height: 200px;">
        <div class="demo-item" style="height: 100%; width: 60px;">
          <p class="demo-label">neon (24px)</p>
          <CyberProgress :percentage="75" direction="vertical" theme="neon" />
        </div>
        <div class="demo-item" style="height: 100%; width: 60px;">
          <p class="demo-label">hologram (16px)</p>
          <CyberProgress :percentage="45" direction="vertical" theme="hologram" :height="16" />
        </div>
        <div class="demo-item" style="height: 100%; width: 60px;">
          <p class="demo-label">matrix (30px)</p>
          <CyberProgress :percentage="90" direction="vertical" theme="matrix" :height="30" />
        </div>
      </div>
    </div>

    <!-- ======================== 管道高度 ======================== -->
    <div class="section">
      <div class="section-title">管道高度 (height)</div>
      <p class="desc">自定义3D管道的粗细</p>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="70" :height="12" /&gt;
&lt;CyberProgress :percentage="70" :height="24" /&gt;
&lt;CyberProgress :percentage="70" :height="40" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item">
          <p class="demo-label">细管 (12px)</p>
          <CyberProgress :percentage="70" theme="neon" :height="12" />
        </div>
        <div class="demo-item">
          <p class="demo-label">标准 (24px)</p>
          <CyberProgress :percentage="70" theme="neon" :height="24" />
        </div>
        <div class="demo-item">
          <p class="demo-label">粗管 (40px)</p>
          <CyberProgress :percentage="70" theme="neon" :height="40" />
        </div>
      </div>
    </div>

    <!-- ======================== 发光强度 ======================== -->
    <div class="section">
      <div class="section-title">发光强度 (glowIntensity: 1-10)</div>
      <p class="desc">控制管道外发光和液体辉光的强度</p>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="60" :glow-intensity="1" /&gt;
&lt;CyberProgress :percentage="60" :glow-intensity="5" /&gt;
&lt;CyberProgress :percentage="60" :glow-intensity="10" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item">
          <p class="demo-label">微弱 (1)</p>
          <CyberProgress :percentage="60" theme="neon" :glow-intensity="1" />
        </div>
        <div class="demo-item">
          <p class="demo-label">标准 (5)</p>
          <CyberProgress :percentage="60" theme="neon" :glow-intensity="5" />
        </div>
        <div class="demo-item">
          <p class="demo-label">强光 (10)</p>
          <CyberProgress :percentage="60" theme="neon" :glow-intensity="10" />
        </div>
      </div>
    </div>

    <!-- ======================== 完成态效果 ======================== -->
    <div class="section">
      <div class="section-title">100% 完成态闪烁特效</div>
      <p class="desc">进度达到100%时触发持续1.5s的亮度脉冲</p>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="100" theme="neon" :show-status="true" /&gt;</code></pre>
      <CyberProgress :percentage="100" theme="neon" :show-status="true" />
    </div>

    <!-- ======================== 各百分比阶梯对比 ======================== -->
    <div class="section">
      <div class="section-title">各百分比阶梯对比 - 外部显示</div>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="n" theme="neon" percentage-position="outside" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item" v-for="pct in [0, 15, 30, 50, 75, 100]" :key="pct">
          <p class="demo-label">{{ pct }}%</p>
          <CyberProgress :percentage="pct" theme="neon" percentage-position="outside" />
        </div>
      </div>
    </div>

    <!-- ======================== 禁用动画 ======================== -->
    <div class="section">
      <div class="section-title">禁用动画 (:animated="false")</div>
      <p class="desc">关闭所有动画效果，仅保留静态3D管道造型</p>
      <pre class="code-block"><code>&lt;CyberProgress :percentage="65" :animated="false" /&gt;</code></pre>
      <CyberProgress :percentage="65" theme="neon" :animated="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dynamicValue = ref(30)

const updateProgress = () => {
  dynamicValue.value = Math.floor(Math.random() * 100)
}
</script>

<style scoped lang="scss">
.content {
  padding: 30px;
  text-align: left;
}

.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.desc {
  font-size: 13px;
  color: #888;
  margin-bottom: 12px;
}

.code-block {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 10px 14px;
  margin-bottom: 14px;
  overflow-x: auto;

  code {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #ccc;
    white-space: pre;
  }
}

.demo-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  width: 100%;
}

.demo-label {
  font-size: 13px;
  color: #999;
}

.cyber-btn {
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #00ffff;
  color: #00ffff;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
}
</style>
