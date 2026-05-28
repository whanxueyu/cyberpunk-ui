---
title: 实战案例
lang: zh-CN
---

# 实战案例

本节提供了完整可运行的实战案例代码，展示 CyberPunk-UI 多个组件的组合使用。

## 登录表单

下面是一个使用 CyberPunk-UI 组件构建的登录表单：

<div class="login-demo">
  <cyber-magic-text style="font-size: 28px;margin-bottom: 20px;">系统登录</cyber-magic-text>
  
  <div class="form-group">
    <cyber-input 
      placeholder="用户名" 
      theme="primary"
    />
  </div>
  
  <div class="form-group">
    <cyber-input 
      type="password" 
      placeholder="密码" 
      theme="primary"
    />
  </div>
  
  <div class="button-group">
    <cyber-button type="primary">
      登录
    </cyber-button>
    <cyber-button type="success">
      注册
    </cyber-button>
  </div>
</div>

```vue
<template>
  <div class="login-container">
    <cyber-magic-text style="font-size: 28px;margin-bottom: 20px;">系统登录</cyber-magic-text>
    
    <div class="form-group">
      <cyber-input 
        v-model="username"
        placeholder="用户名" 
        theme="primary"
      />
    </div>
    
    <div class="form-group">
      <cyber-input 
        v-model="password"
        type="password" 
        placeholder="密码" 
        theme="primary"
      />
    </div>
    
    <div class="button-group">
      <cyber-button type="primary" @click="handleLogin">
        登录
      </cyber-button>
      <cyber-button type="success" @click="handleRegister">
        注册
      </cyber-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("登录:", username.value, password.value);
};

const handleRegister = () => {
  console.log("注册:", username.value, password.value);
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background: rgba(10, 10, 30, 0.9);
  border: 1px solid #00e6f6;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 230, 246, 0.3);
}

.form-group {
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}
</style>
```

<style scoped>
.login-demo {
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
  padding: 40px;
  background: rgba(10, 10, 30, 0.9);
  border: 1px solid #00e6f6;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 230, 246, 0.3);
}

.login-demo .form-group {
  margin-bottom: 20px;
}

.login-demo .button-group {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: space-around;
}
</style>

## 太空港监控中心

下面是一个完整的赛博朋克风格太空港监控中心页面，综合使用了 15+ 种组件，涵盖了按钮、文字特效、进度条、全息卡片、选择器等各类组件。

<div class="spaceport-demo">
  <header class="sp-header">
    <cyber-magic-text size="large">NOVASTAR // 太空港指挥中心</cyber-magic-text>
    <div class="sp-header-right">
      <cyber-neontoggle :modelValue="true" />
      <cyber-glow-text color="#00e6f6">系统在线</cyber-glow-text>
    </div>
  </header>

  <cyber-divider content="核心态势感知" />

  <div class="sp-cards">
    <div class="sp-card">
      <cyber-holocard title="停泊位占用" type="basic" theme="neon">
        <cyber-digital-counter :value="847" />
        <cyber-glow-text color="#f59e0b">/ 1200 席位</cyber-glow-text>
      </cyber-holocard>
    </div>
    <div class="sp-card">
      <cyber-holocard title="今日货物吞吐" type="basic" theme="neon">
        <cyber-digital-counter :value="52380" />
        <cyber-glow-text color="#22c55e">吨 · 正常流转</cyber-glow-text>
      </cyber-holocard>
    </div>
    <div class="sp-card">
      <cyber-holocard title="导航信标在线率" type="basic" theme="neon">
        <cyber-progress :percentage="98" theme="neon" />
        <cyber-glow-text color="#22c55e">98% 正常</cyber-glow-text>
      </cyber-holocard>
    </div>
    <div class="sp-card">
      <cyber-holocard title="星舰排队数" type="basic" theme="neon">
        <cyber-digital-counter :value="23" />
        <cyber-glow-text color="#ef4444">等待入港</cyber-glow-text>
      </cyber-holocard>
    </div>
  </div>

  <cyber-divider content="子系统资源监控" />

  <div class="sp-resources">
    <div class="sp-resource-item">
      <div class="sp-resource-label">
        <cyber-text>聚变反应堆功率</cyber-text>
        <cyber-glow-text color="#22c55e">76%</cyber-glow-text>
      </div>
      <cyber-progress :percentage="76" theme="neon" />
    </div>
    <div class="sp-resource-item">
      <div class="sp-resource-label">
        <cyber-text>量子通讯带宽</cyber-text>
        <cyber-glow-text color="#f59e0b">52%</cyber-glow-text>
      </div>
      <cyber-progress :percentage="52" theme="neon" />
    </div>
    <div class="sp-resource-item">
      <div class="sp-resource-label">
        <cyber-text>护盾能量储备</cyber-text>
        <cyber-glow-text color="#ef4444">28%</cyber-glow-text>
      </div>
      <cyber-progress :percentage="28" theme="neon" />
    </div>
    <div class="sp-resource-item">
      <div class="sp-resource-label">
        <cyber-text>生命维持系统</cyber-text>
        <cyber-glow-text color="#22c55e">99%</cyber-glow-text>
      </div>
      <cyber-progress :percentage="99" theme="neon" />
    </div>
  </div>

  <cyber-divider content="调度控制台" />

  <div class="sp-controls">
    <div class="sp-control-row">
      <cyber-input placeholder="搜索船舰编号..." theme="primary" style="flex: 1;" />
      <cyber-button type="primary">查询</cyber-button>
      <cyber-button type="warning" size="small">清空</cyber-button>
    </div>
    <div class="sp-actions">
      <cyber-nenobutton type="primary" bg>批准入港</cyber-nenobutton>
      <cyber-nenobutton type="success" bg>开启导航信标</cyber-nenobutton>
      <cyber-reflectbutton>紧急广播</cyber-reflectbutton>
    </div>
  </div>

  <cyber-divider content="运行日志" />

  <div class="sp-terminal">
    <cyber-text lineColor="#00e6f6">[22:47:03] KV-881 货船请求停泊许可 — 泊位 B-12 已分配</cyber-text>
    <cyber-text lineColor="#22c55e">[22:47:15] 量子通讯中继器 #7 同步完成 — 延迟 12ms</cyber-text>
    <cyber-text lineColor="#00e6f6">[22:47:22] XN-104 客运星舰完成对接 — 乘客 340 人安全下船</cyber-text>
    <cyber-text lineColor="#f59e0b">[22:47:31] 护盾发生器 #3 温度异常 — 已自动降功率至 28%</cyber-text>
    <cyber-text lineColor="#00e6f6">[22:48:01] 例行诊断通过 — 所有子系统运行正常</cyber-text>
  </div>
</div>

```vue
<template>
  <div class="spaceport-console">
    <!-- 顶部标题栏 -->
    <header class="sp-header">
      <cyber-magic-text size="large">NOVASTAR // 太空港指挥中心</cyber-magic-text>
      <div class="sp-header-right">
        <cyber-neontoggle v-model="systemOnline" active-color="#22c55e" />
        <cyber-glow-text :color="systemOnline ? '#22c55e' : '#ef4444'">
          {{ systemOnline ? '系统在线' : '系统离线' }}
        </cyber-glow-text>
      </div>
    </header>

    <cyber-divider content="核心态势感知" />

    <!-- 指标卡片区 -->
    <section class="sp-cards">
      <cyber-holocard v-for="card in statCards" :key="card.title" :title="card.title" type="basic" theme="neon">
        <cyber-digital-counter :value="card.value" />
        <cyber-glow-text :color="card.statusColor">{{ card.desc }}</cyber-glow-text>
      </cyber-holocard>
    </section>

    <cyber-divider content="子系统资源监控" />

    <!-- 资源监控区 -->
    <section class="sp-resources">
      <div class="sp-resource-item" v-for="res in resources" :key="res.name">
        <div class="sp-resource-label">
          <cyber-text>{{ res.name }}</cyber-text>
          <cyber-glow-text :color="res.color">{{ res.percent }}%</cyber-glow-text>
        </div>
        <cyber-progress :percentage="res.percent" theme="neon" />
      </div>
    </section>

    <cyber-divider content="调度控制台" />

    <!-- 操作区 -->
    <section class="sp-controls">
      <div class="sp-control-row">
        <cyber-input v-model="searchQuery" placeholder="搜索船舰编号..." theme="primary" />
        <cyber-button type="primary" @click="handleSearch">查询</cyber-button>
        <cyber-button type="warning" size="small" @click="searchQuery = ''">清空</cyber-button>
      </div>
      <div class="sp-actions">
        <cyber-tooltip content="允许当前等待队列中的星舰进入停泊区">
          <cyber-nenobutton type="primary" bg @click="handleApprove">批准入港</cyber-nenobutton>
        </cyber-tooltip>
        <cyber-tooltip content="激活所有导航信标，引导星舰安全着陆">
          <cyber-nenobutton type="success" bg @click="handleBeacon">开启导航信标</cyber-nenobutton>
        </cyber-tooltip>
        <cyber-tooltip content="向所有频道广播紧急疏散指令">
          <cyber-reflectbutton @click="handleBroadcast">紧急广播</cyber-reflectbutton>
        </cyber-tooltip>
      </div>
    </section>

    <cyber-divider content="运行日志" />

    <!-- 终端日志区 -->
    <section class="sp-terminal">
      <cyber-text
        v-for="(log, i) in terminalLogs"
        :key="i"
        :lineColor="log.level === 'warn' ? '#f59e0b' : log.level === 'success' ? '#22c55e' : '#00e6f6'"
      >[{{ log.time }}] {{ log.message }}</cyber-text>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";

const systemOnline = ref(true);
const searchQuery = ref("");

const statCards = reactive([
  { title: "停泊位占用", value: 847, desc: "/ 1200 席位", statusColor: "#f59e0b" },
  { title: "今日货物吞吐", value: 52380, desc: "吨 · 正常流转", statusColor: "#22c55e" },
  { title: "导航信标在线率", value: 98, desc: "98% 正常", statusColor: "#22c55e" },
  { title: "星舰排队数", value: 23, desc: "等待入港", statusColor: "#ef4444" },
]);

const resources = reactive([
  { name: "聚变反应堆功率", percent: 76, color: "#22c55e" },
  { name: "量子通讯带宽", percent: 52, color: "#f59e0b" },
  { name: "护盾能量储备", percent: 28, color: "#ef4444" },
  { name: "生命维持系统", percent: 99, color: "#22c55e" },
]);

const terminalLogs = reactive([
  { time: "22:47:03", message: "KV-881 货船请求停泊许可 — 泊位 B-12 已分配", level: "info" },
  { time: "22:47:15", message: "量子通讯中继器 #7 同步完成 — 延迟 12ms", level: "success" },
  { time: "22:47:22", message: "XN-104 客运星舰完成对接 — 乘客 340 人安全下船", level: "info" },
  { time: "22:47:31", message: "护盾发生器 #3 温度异常 — 已自动降功率至 28%", level: "warn" },
  { time: "22:48:01", message: "例行诊断通过 — 所有子系统运行正常", level: "info" },
]);

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    terminalLogs.unshift({ time: new Date().toLocaleTimeString(), message: `查询船舰 "${searchQuery.value}" — 已定位`, level: "info" });
  }
};

const handleApprove = () => {
  terminalLogs.unshift({ time: new Date().toLocaleTimeString(), message: "入港许可已批准 — 当前队列 23 艘星舰进入停泊程序", level: "success" });
};

const handleBeacon = () => {
  terminalLogs.unshift({ time: new Date().toLocaleTimeString(), message: "所有导航信标已激活 — 覆盖半径 500km", level: "info" });
};

const handleBroadcast = () => {
  terminalLogs.unshift({ time: new Date().toLocaleTimeString(), message: "紧急广播已发送至全部 47 个通讯频道", level: "warn" });
};

let timer: ReturnType<typeof setInterval>;
onMounted(() => {
  timer = setInterval(() => {
    resources[0].percent = Math.max(50, Math.min(95, resources[0].percent + (Math.random() - 0.5) * 5));
    resources[1].percent = Math.max(30, Math.min(80, resources[1].percent + (Math.random() - 0.5) * 10));
    statCards[3].value = Math.floor(Math.random() * 15) + 10;
  }, 3000);
});

onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
.spaceport-console {
  min-height: 100vh;
  background: linear-gradient(180deg, #050510 0%, #0a0a2e 30%, #0d1b2a 60%, #0a0a0a 100%);
  color: #e0e0e0;
  font-family: "Courier New", monospace;
}

.sp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  border-bottom: 1px solid rgba(0, 230, 246, 0.15);
  background: rgba(5, 5, 16, 0.8);
  backdrop-filter: blur(10px);
}

.sp-header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sp-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 24px 40px;
}

.sp-resources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  padding: 24px 40px;
}

.sp-resource-item {
  padding: 16px 20px;
  background: rgba(0, 230, 246, 0.03);
  border: 1px solid rgba(0, 230, 246, 0.12);
  border-radius: 4px;
}

.sp-resource-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.sp-controls {
  padding: 24px 40px;
}

.sp-control-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.sp-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.sp-terminal {
  margin: 0 40px 24px;
  padding: 20px 24px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 230, 246, 0.2);
  border-radius: 4px;
  max-height: 240px;
  overflow-y: auto;
}

.sp-terminal > * + * {
  margin-top: 6px;
}
</style>
```

<style scoped>
.spaceport-demo {
  background: linear-gradient(180deg, #050510 0%, #0a0a2e 30%, #0d1b2a 60%, #0a0a0a 100%);
  color: #e0e0e0;
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
  font-family: "Courier New", monospace;
}

.sp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(0, 230, 246, 0.15);
  background: rgba(5, 5, 16, 0.8);
}

.sp-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.spaceport-demo .sp-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  padding: 20px 30px;
}

.spaceport-demo .sp-resources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
  padding: 20px 30px;
}

.spaceport-demo .sp-resource-item {
  padding: 14px 16px;
  background: rgba(0, 230, 246, 0.03);
  border: 1px solid rgba(0, 230, 246, 0.12);
  border-radius: 4px;
}

.spaceport-demo .sp-resource-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.spaceport-demo .sp-controls {
  padding: 20px 30px;
}

.spaceport-demo .sp-control-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.spaceport-demo .sp-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.spaceport-demo .sp-terminal {
  margin: 0 30px 20px;
  padding: 16px 20px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 230, 246, 0.2);
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.spaceport-demo .sp-terminal > * + * {
  margin-top: 6px;
}
</style>
