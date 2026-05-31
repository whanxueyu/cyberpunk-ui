<template>
  <div class="content">
    <!-- ======================== 基础用法 ======================== -->
    <div class="section">
      <div class="section-title">基础用法</div>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="50" /&gt;</code></pre>
      <cyber-cubic-progress :percent="50" />
    </div>

    <!-- ======================== 五种预设配色 ======================== -->
    <div class="section">
      <div class="section-title">预设配色方案</div>
      <p class="desc">内置 pink / cyan / green / gold / purple 五套赛博配色</p>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="75" color="pink" /&gt;
&lt;cyber-cubic-progress :percent="75" color="cyan" /&gt;
&lt;cyber-cubic-progress :percent="75" color="green" /&gt;
&lt;cyber-cubic-progress :percent="75" color="gold" /&gt;
&lt;cyber-cubic-progress :percent="75" color="purple" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item" v-for="preset in presets" :key="preset">
          <p class="demo-label">{{ preset }}</p>
          <cyber-cubic-progress :percent="75" :color="preset" />
        </div>
      </div>
    </div>

    <!-- ======================== 自定义颜色 ======================== -->
    <div class="section">
      <div class="section-title">自定义颜色</div>
      <p class="desc">支持传入十六进制颜色，自动派生出辅助色和渐变</p>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="60" color="#ff6600" /&gt;
&lt;cyber-cubic-progress :percent="80" color="#ff00ff" /&gt;
&lt;cyber-cubic-progress :percent="45" color="#00ffcc" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item">
          <p class="demo-label">#ff6600（暖橙）</p>
          <cyber-cubic-progress :percent="60" color="#ff6600" />
        </div>
        <div class="demo-item">
          <p class="demo-label">#ff00ff（洋红）</p>
          <cyber-cubic-progress :percent="80" color="#ff00ff" />
        </div>
        <div class="demo-item">
          <p class="demo-label">#00ffcc（青绿）</p>
          <cyber-cubic-progress :percent="45" color="#00ffcc" />
        </div>
      </div>
    </div>

    <!-- ======================== 各百分比阶梯 ======================== -->
    <div class="section">
      <div class="section-title">百分比阶梯对比</div>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="n" color="pink" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item" v-for="pct in [0, 15, 30, 50, 75, 100]" :key="pct">
          <p class="demo-label">{{ pct }}%</p>
          <cyber-cubic-progress :percent="pct" color="pink" />
        </div>
      </div>
    </div>

    <!-- ======================== 不确定态 ======================== -->
    <div class="section">
      <div class="section-title">不确定态 (indeterminate)</div>
      <p class="desc">光带在管道中持续滑动，适合等待加载的场景</p>
      <pre class="code-block"><code>&lt;cyber-cubic-progress indeterminate color="pink" /&gt;
&lt;cyber-cubic-progress indeterminate color="cyan" /&gt;
&lt;cyber-cubic-progress indeterminate color="green" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item" v-for="preset in ['pink', 'cyan', 'green']" :key="'ind-' + preset">
          <p class="demo-label">{{ preset }} indeterminate</p>
          <cyber-cubic-progress indeterminate :color="preset" />
        </div>
      </div>
    </div>

    <!-- ======================== 动态更新 ======================== -->
    <div class="section">
      <div class="section-title">动态更新进度</div>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="dynamicValue" color="cyan" /&gt;</code></pre>
      <div class="demo-row-control">
        <cyber-cubic-progress :percent="dynamicValue" color="cyan" />
        <div class="control-bar">
          <button class="cyber-btn" @click="randomProgress">随机更新</button>
          <button class="cyber-btn" @click="simulateLoading">模拟加载</button>
          <button class="cyber-btn" @click="dynamicValue = 0">重置</button>
        </div>
      </div>
    </div>

    <!-- ======================== 管道尺寸 ======================== -->
    <div class="section">
      <div class="section-title">管道粗细 (pipeHeight)</div>
      <p class="desc">控制 3D 管道的截面高度</p>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="70" :pipe-height="40" /&gt;
&lt;cyber-cubic-progress :percent="70" :pipe-height="100" /&gt;
&lt;cyber-cubic-progress :percent="70" :pipe-height="160" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item">
          <p class="demo-label">细管 (40px)</p>
          <cyber-cubic-progress :percent="70" :pipe-height="40" color="cyan" />
        </div>
        <div class="demo-item">
          <p class="demo-label">标准 (100px)</p>
          <cyber-cubic-progress :percent="70" :pipe-height="100" color="cyan" />
        </div>
        <div class="demo-item">
          <p class="demo-label">粗管 (160px)</p>
          <cyber-cubic-progress :percent="70" :pipe-height="160" color="cyan" />
        </div>
      </div>
    </div>

    <!-- ======================== 发光强度 ======================== -->
    <div class="section">
      <div class="section-title">发光强度 (glowIntensity: 1-10)</div>
      <p class="desc">管道的霓虹发光效果强度</p>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="60" :glow-intensity="1" /&gt;
&lt;cyber-cubic-progress :percent="60" :glow-intensity="5" /&gt;
&lt;cyber-cubic-progress :percent="60" :glow-intensity="10" /&gt;</code></pre>
      <div class="demo-col">
        <div class="demo-item">
          <p class="demo-label">微弱 (1)</p>
          <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="1" />
        </div>
        <div class="demo-item">
          <p class="demo-label">标准 (5)</p>
          <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="5" />
        </div>
        <div class="demo-item">
          <p class="demo-label">强光 (10)</p>
          <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="10" />
        </div>
      </div>
    </div>

    <!-- ======================== 隐藏文字 ======================== -->
    <div class="section">
      <div class="section-title">隐藏进度文字</div>
      <pre class="code-block"><code>&lt;cyber-cubic-progress :percent="88" :show-text="false" /&gt;</code></pre>
      <cyber-cubic-progress :percent="88" color="gold" :show-text="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const presets = ['pink', 'cyan', 'green', 'gold', 'purple']

const dynamicValue = ref(30)

function randomProgress() {
  dynamicValue.value = Math.floor(Math.random() * 100)
}

function simulateLoading() {
  dynamicValue.value = 0
  let step = 0
  const timer = setInterval(() => {
    step++
    dynamicValue.value = Math.min(step * 5, 100)
    if (step >= 20) clearInterval(timer)
  }, 150)
}
</script>

<style scoped lang="scss">
.content {
  padding: 30px;
  text-align: left;
}

.section {
  margin-bottom: 60px;
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
  margin-bottom: 16px;
  overflow-x: auto;

  code {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #ccc;
    white-space: pre;
  }
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
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

.demo-row-control {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.control-bar {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
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
