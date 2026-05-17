<template>
  <div class="menu-test-container">
    <h1>CyberMenu 组件测试</h1>
    
    <div class="test-section">
      <h2>垂直菜单 - Neon主题</h2>
      <CyberMenu
        v-model="activeMenu1"
        :items="menuItems1"
        direction="vertical"
        theme="neon"
        effect="glitch"
        @change="handleMenuChange"
      />
      <p>当前选中: {{ activeMenu1 }}</p>
    </div>
    
    <div class="test-section">
      <h2>水平菜单 - Terminal主题</h2>
      <CyberMenu
        v-model="activeMenu2"
        :items="menuItems2"
        direction="horizontal"
        theme="terminal"
        effect="scanline"
        @change="handleMenuChange"
      />
      <p>当前选中: {{ activeMenu2 }}</p>
    </div>
    
    <div class="test-section">
      <h2>多级菜单 - Matrix主题</h2>
      <CyberMenu
        v-model="activeMenu3"
        :items="menuItems3"
        direction="vertical"
        theme="matrix"
        effect="pulse"
        @change="handleMenuChange"
      />
      <p>当前选中: {{ activeMenu3 }}</p>
    </div>
    
    <div class="test-section">
      <h2>Hologram主题 - 无效果</h2>
      <CyberMenu
        v-model="activeMenu4"
        :items="menuItems4"
        direction="vertical"
        theme="hologram"
        effect="none"
        @change="handleMenuChange"
      />
      <p>当前选中: {{ activeMenu4 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeMenu1 = ref('home');
const activeMenu2 = ref('dashboard');
const activeMenu3 = ref('user-profile');
const activeMenu4 = ref('settings');

// 简单菜单项
const menuItems1 = [
  { label: '首页', value: 'home' },
  { label: '产品', value: 'products' },
  { label: '服务', value: 'services' },
  { label: '关于', value: 'about' },
  { label: '联系', value: 'contact' }
];

// 水平菜单项
const menuItems2 = [
  { label: '仪表盘', value: 'dashboard' },
  { label: '分析', value: 'analytics' },
  { label: '报告', value: 'reports' },
  { label: '设置', value: 'settings' }
];

// 多级菜单项
const menuItems3 = [
  { 
    label: '用户管理', 
    value: 'user-management',
    children: [
      { label: '个人资料', value: 'user-profile' },
      { label: '账户设置', value: 'account-settings' },
      { 
        label: '权限管理', 
        value: 'permissions',
        children: [
          { label: '角色管理', value: 'roles' },
          { label: '权限分配', value: 'assign-permissions' }
        ]
      }
    ]
  },
  { 
    label: '内容管理', 
    value: 'content-management',
    children: [
      { label: '文章管理', value: 'articles' },
      { label: '媒体库', value: 'media' }
    ]
  },
  { label: '系统设置', value: 'system-settings' }
];

// 另一个菜单
const menuItems4 = [
  { label: '配置', value: 'config' },
  { label: '日志', value: 'logs' },
  { label: '监控', value: 'monitoring' },
  { label: '备份', value: 'backup' }
];

const handleMenuChange = (value: string | number) => {
  console.log('菜单选择变更:', value);
};
</script>

<style scoped>
.menu-test-container {
  padding: 20px;
  background: #0a0f1e;
  color: #f5fcff;
  min-height: 100vh;
}

.test-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid rgba(0, 230, 246, 0.2);
  border-radius: 8px;
  background: rgba(10, 15, 30, 0.6);
}

h1 {
  color: #00e6f6;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 0 0 10px rgba(0, 230, 246, 0.5);
}

h2 {
  color: #47f2c6;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(71, 242, 198, 0.3);
  padding-bottom: 8px;
}

p {
  margin-top: 10px;
  color: #cee8f5;
  font-family: monospace;
}
</style>
