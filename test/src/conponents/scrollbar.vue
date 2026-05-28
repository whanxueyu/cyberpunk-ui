<template>
  <div class="demo-page">
    <h2>CyberScrollbar 测试</h2>

    <section>
      <h3>基本垂直滚动</h3>
      <cyber-scrollbar height="180px" style="border: 1px solid #222; background: #050510;">
        <div style="padding: 12px 20px;">
          <p v-for="i in 15" :key="i" class="log-line">[{{ String(i).padStart(2, '0') }}] SYSTEM:// 日志条目 — 系统正常</p>
        </div>
      </cyber-scrollbar>
    </section>

    <section>
      <h3>横向滚动</h3>
      <cyber-scrollbar height="100px" style="border: 1px solid #222; background: #050510;">
        <div style="display: flex; gap: 10px; padding: 10px; width: max-content;">
          <div v-for="i in 10" :key="i" class="card">NODE-{{ String(i).padStart(2, '0') }}</div>
        </div>
      </cyber-scrollbar>
    </section>

    <section>
      <h3>主题色切换</h3>
      <div class="theme-row">
        <cyber-scrollbar v-for="t in themes" :key="t" :theme="t" height="120px" style="flex:1; border: 1px solid #222; background: #050510;">
          <p v-for="i in 8" :key="i" style="padding: 2px 12px; margin: 0; color: #888;">{{ t }} · 条目 {{ i }}</p>
        </cyber-scrollbar>
      </div>
    </section>

    <section>
      <h3>尺寸对比</h3>
      <div class="theme-row">
        <cyber-scrollbar size="small" height="100px" style="flex:1; border: 1px solid #222; background: #050510;">
          <p v-for="i in 10" :key="i" style="padding: 2px 12px; margin: 0; color: #888;">small · {{ i }}</p>
        </cyber-scrollbar>
        <cyber-scrollbar size="default" height="100px" style="flex:1; border: 1px solid #222; background: #050510;">
          <p v-for="i in 10" :key="i" style="padding: 2px 12px; margin: 0; color: #888;">default · {{ i }}</p>
        </cyber-scrollbar>
        <cyber-scrollbar size="large" height="100px" style="flex:1; border: 1px solid #222; background: #050510;">
          <p v-for="i in 10" :key="i" style="padding: 2px 12px; margin: 0; color: #888;">large · {{ i }}</p>
        </cyber-scrollbar>
      </div>
    </section>

    <section>
      <h3>始终显示 (always)</h3>
      <cyber-scrollbar :always="true" height="120px" style="border: 1px solid #222; background: #050510;">
        <p v-for="i in 10" :key="i" style="padding: 2px 16px; margin: 0; color: #888;">始终可见 · 条目 {{ i }}</p>
      </cyber-scrollbar>
    </section>
  </div>
</template>

<script setup lang="ts">
const themes = ['primary', 'success', 'warning', 'danger', 'info'] as const
</script>

<style scoped>
.demo-page {
  padding: 20px;
  background: #0a0a0a;
  color: #ccc;
  font-family: Consolas, monospace;
}
h2 { color: #00e6f6; margin-bottom: 20px; }
h3 { color: #888; margin: 20px 0 8px; font-size: 14px; text-transform: uppercase; }
section { margin-bottom: 16px; }
.log-line { margin: 0 0 6px 0; color: #aaa; font-size: 13px; }
.card {
  flex-shrink: 0; width: 140px; height: 70px;
  background: rgba(0,230,246,0.06); border: 1px solid rgba(0,230,246,0.2);
  display: flex; align-items: center; justify-content: center;
  color: #00e6f6; font-family: Consolas, monospace; font-size: 12px;
}
.theme-row { display: flex; gap: 12px; }
</style>
