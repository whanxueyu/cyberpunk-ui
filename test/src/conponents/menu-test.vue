<template>
  <div class="content">
    <!-- 基础用法 -->
    <div class="section">
      <div class="section-title">基础用法</div>
      <pre class="code-block"><code class="html">&lt;cyber-menu :items="menuItems" /&gt;</code></pre>
      <cyber-menu :items="basicMenuItems" />
    </div>

    <!-- 方向 -->
    <div class="section">
      <div class="section-title">方向 (direction: vertical | horizontal)   水平方向显示有问题，鼠标移动高亮错位</div>
      <pre class="code-block"><code class="html">&lt;!-- 垂直方向（默认） --&gt;
&lt;cyber-menu :items="items" direction="vertical" /&gt;

&lt;!-- 水平方向 --&gt;
&lt;cyber-menu :items="items" direction="horizontal" /&gt;</code></pre>
      <div class="demo-row">
        <div class="demo-item">
          <p class="demo-label">Vertical</p>
          <cyber-menu :items="basicMenuItems" direction="vertical" />
        </div>
        <div class="demo-item">
          <p class="demo-label">Horizontal</p>
          <cyber-menu :items="basicMenuItems" direction="horizontal" />
        </div>
      </div>
    </div>

    <!-- 主题 -->
    <div class="section">
      <div class="section-title">主题 (theme: neon | terminal | matrix | hologram)</div>
      <pre class="code-block"><code class="html">&lt;!-- Neon 主题 --&gt;
&lt;cyber-menu :items="items" theme="neon" /&gt;

&lt;!-- Terminal 主题 --&gt;
&lt;cyber-menu :items="items" theme="terminal" /&gt;

&lt;!-- Matrix 主题 --&gt;
&lt;cyber-menu :items="items" theme="matrix" /&gt;

&lt;!-- Hologram 主题 --&gt;
&lt;cyber-menu :items="items" theme="hologram" /&gt;</code></pre>
      <div class="demo-grid">
        <div class="demo-card">
          <p class="demo-label">Neon</p>
          <cyber-menu :items="basicMenuItems" theme="neon" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Terminal</p>
          <cyber-menu :items="basicMenuItems" theme="terminal" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Matrix</p>
          <cyber-menu :items="basicMenuItems" theme="matrix" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Hologram</p>
          <cyber-menu :items="basicMenuItems" theme="hologram" />
        </div>
      </div>
    </div>

    <!-- 特效 -->
    <div class="section">
      <div class="section-title">特效 (effect: none | glitch | scanline | pulse)</div>
      <pre class="code-block"><code class="html">&lt;!-- 无特效 --&gt;
&lt;cyber-menu :items="items" effect="none" /&gt;

&lt;!-- 故障特效 --&gt;
&lt;cyber-menu :items="items" effect="glitch" /&gt;

&lt;!-- 扫描线特效 --&gt;
&lt;cyber-menu :items="items" effect="scanline" /&gt;

&lt;!-- 脉冲特效 --&gt;
&lt;cyber-menu :items="items" effect="pulse" /&gt;</code></pre>
      <div class="demo-grid">
        <div class="demo-card">
          <p class="demo-label">None</p>
          <cyber-menu :items="basicMenuItems" effect="none" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Glitch</p>
          <cyber-menu :items="basicMenuItems" effect="glitch" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Scanline</p>
          <cyber-menu :items="basicMenuItems" effect="scanline" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Pulse</p>
          <cyber-menu :items="basicMenuItems" effect="pulse" />
        </div>
      </div>
    </div>

    <!-- 多级菜单 -->
    <div class="section">
      <div class="section-title">多级菜单 (支持无限层级嵌套)</div>
      <pre class="code-block"><code class="html">&lt;!-- 三级菜单示例 --&gt;
&lt;cyber-menu 
  :items="multiLevelItems" 
  direction="vertical"
  theme="neon"
  effect="glitch"
  :expanded-values="['user-management', 'permissions']"
/&gt;</code></pre>
      <div class="demo-row">
        <div class="demo-item full-width">
          <p class="demo-label">三级菜单 - Neon + Glitch</p>
          <cyber-menu 
            :items="multiLevelItems" 
            direction="vertical"
            theme="neon"
            effect="glitch"
            :expanded-values="['user-management', 'permissions']"
          />
        </div>
      </div>
    </div>

    <!-- 横向多级菜单 -->
    <div class="section">
      <div class="section-title">横向多级菜单 (子菜单向下展开)</div>
      <pre class="code-block"><code class="html">&lt;!-- 横向菜单，子菜单在下方显示 --&gt;
&lt;cyber-menu 
  :items="horizontalMultiItems" 
  direction="horizontal"
  theme="terminal"
  effect="scanline"
/&gt;</code></pre>
      <div class="demo-row">
        <div class="demo-item full-width">
          <p class="demo-label">Horizontal Multi-level - Terminal + Scanline</p>
          <cyber-menu 
            :items="horizontalMultiItems" 
            direction="horizontal"
            theme="terminal"
            effect="scanline"
          />
        </div>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="section">
      <div class="section-title">禁用状态 (disabled)</div>
      <pre class="code-block"><code class="html">&lt;!-- 禁用某些菜单项 --&gt;
&lt;cyber-menu :items="disabledItems" /&gt;</code></pre>
      <div class="demo-row">
        <div class="demo-item">
          <p class="demo-label">包含禁用项</p>
          <cyber-menu :items="disabledMenuItems" theme="neon" effect="glitch" />
        </div>
      </div>
    </div>

    <!-- 受控模式 -->
    <div class="section">
      <div class="section-title">受控模式 (v-model / @change)</div>
      <pre class="code-block"><code class="html">&lt;cyber-menu 
  v-model="activeValue" 
  :items="items" 
  @change="handleChange"
/&gt;</code></pre>
      <div class="demo-row">
        <div class="demo-item">
          <p class="demo-label">当前选中值: {{ activeValue }}</p>
          <cyber-menu 
            v-model="activeValue" 
            :items="basicMenuItems" 
            theme="matrix"
            effect="pulse"
            @change="handleMenuChange"
          />
        </div>
      </div>
    </div>

    <!-- 组合效果 -->
    <div class="section">
      <div class="section-title">组合效果展示</div>
      <pre class="code-block"><code class="html">&lt;!-- 不同主题和特效的组合 --&gt;
&lt;cyber-menu :items="items" theme="neon" effect="glitch" /&gt;
&lt;cyber-menu :items="items" theme="terminal" effect="scanline" /&gt;
&lt;cyber-menu :items="items" theme="matrix" effect="pulse" /&gt;</code></pre>
      <div class="demo-grid">
        <div class="demo-card">
          <p class="demo-label">Neon + Glitch</p>
          <cyber-menu :items="basicMenuItems" theme="neon" effect="glitch" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Terminal + Scanline</p>
          <cyber-menu :items="basicMenuItems" theme="terminal" effect="scanline" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Matrix + Pulse</p>
          <cyber-menu :items="basicMenuItems" theme="matrix" effect="pulse" />
        </div>
        <div class="demo-card">
          <p class="demo-label">Hologram + Glitch</p>
          <cyber-menu :items="basicMenuItems" theme="hologram" effect="glitch" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 受控模式的激活值
const activeValue = ref('home');

// 基础菜单项
const basicMenuItems = [
  { label: '首页', value: 'home' },
  { label: '产品', value: 'products' },
  { label: '服务', value: 'services' },
  { label: '关于', value: 'about' },
  { label: '联系', value: 'contact' }
];

// 多级菜单项（三级）
const multiLevelItems = [
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
          { label: '权限分配', value: 'assign-permissions' },
          { label: '访问控制', value: 'access-control' }
        ]
      }
    ]
  },
  { 
    label: '内容管理', 
    value: 'content-management',
    children: [
      { label: '文章管理', value: 'articles' },
      { label: '媒体库', value: 'media' },
      { label: '评论审核', value: 'comments' }
    ]
  },
  { label: '系统设置', value: 'system-settings' },
  { label: '数据分析', value: 'analytics' }
];

// 横向多级菜单项
const horizontalMultiItems = [
  { 
    label: '仪表盘', 
    value: 'dashboard',
    children: [
      { label: '概览', value: 'overview' },
      { label: '统计', value: 'statistics' }
    ]
  },
  { 
    label: '项目管理', 
    value: 'projects',
    children: [
      { label: '项目列表', value: 'project-list' },
      { label: '任务看板', value: 'kanban' },
      { label: '里程碑', value: 'milestones' }
    ]
  },
  { label: '团队协作', value: 'team' },
  { label: '设置', value: 'settings' }
];

// 包含禁用项的菜单
const disabledMenuItems = [
  { label: '首页', value: 'home' },
  { label: '产品', value: 'products', disabled: true },
  { label: '服务', value: 'services' },
  { label: '定价', value: 'pricing', disabled: true },
  { label: '关于', value: 'about' }
];

// 处理菜单变化事件
const handleMenuChange = (value: string | number) => {
  console.log('菜单选择变更:', value);
};
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

.code-block {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 20px;
  overflow-x: auto;
  
  code {
    color: #00ff9f;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.6;
  }
}

.demo-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.demo-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  min-width: 200px;
  
  &.full-width {
    width: 100%;
  }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 4px;
}

.demo-label {
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  font-weight: 500;
}
</style>
