<template>
  <div class="progress-demo">
    <h2>CyberProgress - 赛博朋克科技风进度条</h2>
    
    <div class="demo-section">
      <h3>Neon 主题（默认）</h3>
      <CyberProgress :percentage="75" theme="neon" />
    </div>
    
    <div class="demo-section">
      <h3>Hologram 主题 - 内部显示</h3>
      <CyberProgress :percentage="60" theme="hologram" percentage-position="inside" />
    </div>
    
    <div class="demo-section">
      <h3>Terminal 主题 - 外部显示</h3>
      <CyberProgress :percentage="45" theme="terminal" percentage-position="outside" />
    </div>
    
    <div class="demo-section">
      <h3>Matrix 主题 - 内部显示</h3>
      <CyberProgress :percentage="90" theme="matrix" percentage-position="inside" />
    </div>
    
    <div class="demo-section">
      <h3>动态效果演示</h3>
      <CyberProgress :percentage="dynamicValue" theme="neon" :show-status="true" />
      <button @click="updateProgress" class="cyber-button">更新进度</button>
    </div>
    
    <div class="demo-section">
      <h3>不同百分比 - 内部显示</h3>
      <CyberProgress :percentage="0" theme="neon" percentage-position="inside" />
      <CyberProgress :percentage="25" theme="neon" percentage-position="inside" />
      <CyberProgress :percentage="50" theme="neon" percentage-position="inside" />
      <CyberProgress :percentage="75" theme="neon" percentage-position="inside" />
      <CyberProgress :percentage="100" theme="neon" percentage-position="inside" />
    </div>
    
    <div class="demo-section">
      <h3>不同百分比 - 外部显示</h3>
      <CyberProgress :percentage="0" theme="neon" percentage-position="outside" />
      <CyberProgress :percentage="25" theme="neon" percentage-position="outside" />
      <CyberProgress :percentage="50" theme="neon" percentage-position="outside" />
      <CyberProgress :percentage="75" theme="neon" percentage-position="outside" />
      <CyberProgress :percentage="100" theme="neon" percentage-position="outside" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dynamicValue = ref(30);

const updateProgress = () => {
  dynamicValue.value = Math.floor(Math.random() * 100);
};
</script>

<style scoped>
.progress-demo {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Courier New', monospace;
  color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 0 10px #fcee0a;
  letter-spacing: 2px;
}

.demo-section {
  margin-bottom: 0px;
}

h3 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #fcee0a;
  text-shadow: 0 0 5px rgba(252, 238, 10, 0.5);
}

.cyber-button {
  margin-top: 15px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #fcee0a;
  color: #fcee0a;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: rgba(252, 238, 10, 0.1);
    box-shadow: 0 0 20px rgba(252, 238, 10, 0.4);
  }
}
</style>
