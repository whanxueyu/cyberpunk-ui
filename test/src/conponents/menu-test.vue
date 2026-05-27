<template>
  <div class="content">
    <!-- 基础用法 -->
    <div class="section">
      <div class="section-title">基础用法</div>
      <div class="code-block"><code>v-model 绑定当前选中值，items 传入菜单数据</code></div>
      <div class="demo-panel">
        <cyber-menu v-model="activeValue" :items="basicMenuItems" @select="logSelect" />
        <p class="demo-info">当前选中: {{ activeValue || '(无)' }}</p>
      </div>
    </div>

    <!-- 方向 -->
    <div class="section">
      <div class="section-title">方向 (direction)</div>
      <div class="code-block"><code>vertical（默认） | horizontal</code></div>
      <div class="demo-panel">
        <div class="demo-row">
          <div class="demo-col">
            <p class="demo-label">Vertical</p>
            <cyber-menu :items="basicMenuItems" direction="vertical" theme="neon" />
          </div>
          <div class="demo-col">
            <p class="demo-label">Horizontal</p>
            <cyber-menu :items="basicMenuItems" direction="horizontal" theme="neon" />
          </div>
        </div>
      </div>
    </div>

    <!-- 主题 -->
    <div class="section">
      <div class="section-title">主题 (theme)</div>
      <div class="code-block"><code>neon | terminal | matrix | hologram</code></div>
      <div class="demo-panel">
        <div class="demo-grid">
          <div class="demo-card" v-for="t in themes" :key="t">
            <p class="demo-label">{{ t }}</p>
            <cyber-menu :items="basicMenuItems" :theme="t" />
          </div>
        </div>
      </div>
    </div>

    <!-- 特效 -->
    <div class="section">
      <div class="section-title">特效 (effect)</div>
      <div class="code-block"><code>none | glitch | scanline | pulse</code></div>
      <div class="demo-panel">
        <div class="demo-grid">
          <div class="demo-card" v-for="e in effects" :key="e">
            <p class="demo-label">{{ e }}</p>
            <cyber-menu :items="basicMenuItems" theme="neon" :effect="e" />
          </div>
        </div>
      </div>
    </div>

    <!-- 多级菜单 -->
    <div class="section">
      <div class="section-title">多级菜单（三级嵌套）</div>
      <div class="demo-panel">
        <div class="demo-row">
          <div class="demo-col">
            <p class="demo-label">Neon + Glitch</p>
            <cyber-menu
              :items="multiLevelItems"
              direction="vertical"
              theme="neon"
              effect="glitch"
              :expanded-values="['user-mgmt', 'permissions']"
            />
          </div>
          <div class="demo-col">
            <p class="demo-label">Terminal + Scanline</p>
            <cyber-menu
              :items="multiLevelItems"
              direction="vertical"
              theme="terminal"
              effect="scanline"
              :expanded-values="['user-mgmt']"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 横向多级菜单 -->
    <div class="section">
      <div class="section-title">横向多级菜单</div>
      <div class="code-block"><code>水平方向，子菜单下拉展开，hover 触发</code></div>
      <div class="demo-panel">
        <div class="demo-col">
          <p class="demo-label">Terminal + Pulse</p>
          <cyber-menu
            :items="horizontalMultiItems"
            direction="horizontal"
            theme="terminal"
            effect="pulse"
          />
        </div>
        <div style="margin-top: 24px;">
          <p class="demo-label">Hologram + Glitch</p>
          <cyber-menu
            :items="horizontalMultiItems"
            direction="horizontal"
            theme="hologram"
            effect="glitch"
          />
        </div>
      </div>
    </div>

    <!-- 禁用项 -->
    <div class="section">
      <div class="section-title">禁用菜单项</div>
      <div class="demo-panel">
        <cyber-menu :items="disabledItems" theme="neon" effect="glitch" />
      </div>
    </div>

    <!-- 受控模式 -->
    <div class="section">
      <div class="section-title">受控模式 (v-model + @change + @select)</div>
      <div class="demo-panel">
        <div class="demo-row">
          <cyber-menu
            v-model="controlledValue"
            :items="basicMenuItems"
            theme="matrix"
            effect="pulse"
            @change="handleChange"
            @select="handleSelectEvent"
          />
          <div class="event-panel">
            <p class="demo-label">选中值: {{ controlledValue }}</p>
            <p class="demo-label">事件日志:</p>
            <div class="event-log">
              <div v-for="(msg, i) in eventLogs.slice(0).reverse().slice(0, 5)" :key="i" class="event-log-item">
                {{ msg }}
              </div>
              <div v-if="eventLogs.length === 0" class="event-log-empty">等待事件...</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主题与特效组合全览 -->
    <div class="section">
      <div class="section-title">主题 × 特效 组合</div>
      <div class="demo-panel">
        <div class="combo-grid">
          <div v-for="t in themes" :key="t" class="combo-row">
            <span class="combo-label">{{ t }}</span>
            <cyber-menu :items="basicMenuItems" :theme="t" effect="none" />
            <cyber-menu :items="basicMenuItems" :theme="t" effect="glitch" />
            <cyber-menu :items="basicMenuItems" :theme="t" effect="scanline" />
            <cyber-menu :items="basicMenuItems" :theme="t" effect="pulse" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeValue = ref('home')
const controlledValue = ref('home')
const eventLogs = ref<string[]>([])

const themes = ['neon', 'terminal', 'matrix', 'hologram'] as const
const effects = ['none', 'glitch', 'scanline', 'pulse'] as const

const basicMenuItems = [
  { label: '首页', value: 'home' },
  { label: '产品', value: 'products' },
  { label: '服务', value: 'services' },
  { label: '关于', value: 'about' },
  { label: '联系', value: 'contact' },
]

const multiLevelItems = [
  {
    label: '用户管理',
    value: 'user-mgmt',
    children: [
      { label: '个人资料', value: 'profile' },
      { label: '账户设置', value: 'account' },
      {
        label: '权限管理',
        value: 'permissions',
        children: [
          { label: '角色管理', value: 'roles' },
          { label: '权限分配', value: 'assign' },
          { label: '访问控制', value: 'acl' },
        ],
      },
    ],
  },
  {
    label: '内容管理',
    value: 'content',
    children: [
      { label: '文章管理', value: 'articles' },
      { label: '媒体库', value: 'media' },
      { label: '评论审核', value: 'comments' },
    ],
  },
  { label: '系统设置', value: 'settings' },
  { label: '数据分析', value: 'analytics' },
]

const horizontalMultiItems = [
  {
    label: '仪表盘',
    value: 'dashboard',
    children: [
      { label: '概览', value: 'overview' },
      { label: '统计', value: 'stats' },
    ],
  },
  {
    label: '项目管理',
    value: 'projects',
    children: [
      { label: '项目列表', value: 'proj-list' },
      { label: '任务看板', value: 'kanban' },
      { label: '里程碑', value: 'milestones' },
    ],
  },
  { label: '团队', value: 'team' },
  { label: '设置', value: 'config' },
]

const disabledItems = [
  { label: '可用项', value: 'enabled' },
  { label: '禁用项', value: 'disabled-1', disabled: true },
  { label: '可用项2', value: 'enabled-2' },
  { label: '禁用项2', value: 'disabled-2', disabled: true },
  { label: '可用项3', value: 'enabled-3' },
]

const log = (msg: string) => {
  eventLogs.value.push(`[${new Date().toLocaleTimeString()}] ${msg}`)
}

const logSelect = (item: any) => log(`select: ${item.label}`)
const handleChange = (v: string | number) => log(`change: ${v}`)
const handleSelectEvent = (item: any) => log(`select: ${item.label}`)
</script>

<style scoped lang="scss">
.content {
  padding: 24px;
  text-align: left;
}

.section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 12px;
  color: var(--cp-primary-color);
  text-shadow: 0 0 8px var(--cp-primary-color);
  letter-spacing: 1px;
}

.code-block {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 166, 220, 0.3);
  border-left: 3px solid var(--cp-primary-color);
  padding: 10px 15px;
  margin-bottom: 14px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #0f0;
}

.demo-panel {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 24px;
}

.demo-info {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
}

.demo-row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.demo-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
}

.demo-label {
  font-size: 13px;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 250px;
}

.event-log {
  padding: 10px 14px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 166, 220, 0.2);
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  max-height: 130px;
  overflow-y: auto;
}

.event-log-item {
  color: #0f0;
  padding: 2px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.event-log-empty {
  color: rgba(255, 255, 255, 0.3);
}

/* 组合网格 */
.combo-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.combo-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.combo-label {
  font-size: 12px;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  letter-spacing: 2px;
  padding-top: 4px;
}
</style>
