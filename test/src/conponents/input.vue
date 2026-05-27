<template>
  <div class="content">
    <!-- 基础用法 -->
    <div class="section">
      <div class="section-title">基础用法</div>
      <div class="code-block"><code>v-model 双向绑定，赛博朋克风格输入框</code></div>
      <div class="demo-panel">
        <cyber-input v-model="inputValue" placeholder="请输入内容" style="max-width: 360px;"></cyber-input>
        <p class="demo-info">输入值: {{ inputValue || '(空)' }}</p>
      </div>
    </div>

    <!-- 可清除 -->
    <div class="section">
      <div class="section-title">可清除</div>
      <div class="code-block"><code>clearable 属性可在输入框尾部显示清除按钮</code></div>
      <div class="demo-panel">
        <cyber-input v-model="clearValue" placeholder="输入后会出现清除按钮" clearable style="max-width: 360px;"></cyber-input>
        <p class="demo-info">输入值: {{ clearValue || '(空)' }}</p>
      </div>
    </div>

    <!-- 密码框 -->
    <div class="section">
      <div class="section-title">密码输入 + 可见切换</div>
      <div class="code-block"><code>type="password" + show-password 提供密码可见切换按钮</code></div>
      <div class="demo-panel">
        <cyber-input
          v-model="passwordValue"
          type="password"
          placeholder="请输入密码"
          show-password
          style="max-width: 360px;"
        ></cyber-input>
        <p class="demo-info">密码: {{ passwordValue || '(空)' }}</p>
      </div>
    </div>

    <!-- 不同主题 -->
    <div class="section">
      <div class="section-title">主题风格</div>
      <div class="code-block"><code>theme: primary / success / warning / danger / info</code></div>
      <div class="demo-panel">
        <div class="input-group">
          <cyber-input theme="primary" placeholder="Primary 主题" v-model="t1"></cyber-input>
          <cyber-input theme="success" placeholder="Success 主题" v-model="t2"></cyber-input>
          <cyber-input theme="warning" placeholder="Warning 主题" v-model="t3"></cyber-input>
          <cyber-input theme="danger" placeholder="Danger 主题" v-model="t4"></cyber-input>
          <cyber-input theme="info" placeholder="Info 主题" v-model="t5"></cyber-input>
        </div>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="section">
      <div class="section-title">尺寸变体</div>
      <div class="code-block"><code>size: large / default / small</code></div>
      <div class="demo-panel">
        <div class="input-group">
          <cyber-input size="large" placeholder="Large 大尺寸" style="max-width: 400px;"></cyber-input>
          <cyber-input size="default" placeholder="Default 默认尺寸" style="max-width: 360px;"></cyber-input>
          <cyber-input size="small" placeholder="Small 小尺寸" style="max-width: 280px;"></cyber-input>
        </div>
      </div>
    </div>

    <!-- 前后缀插槽 -->
    <div class="section">
      <div class="section-title">前缀 / 后缀插槽</div>
      <div class="code-block"><code>使用 #prefix 和 #suffix 插槽添加图标或文字</code></div>
      <div class="demo-panel">
        <div class="input-group">
          <cyber-input v-model="prefixValue" placeholder="搜索内容" style="max-width: 360px;">
            <template #prefix>
              <span style="font-size: 16px;">🔍</span>
            </template>
          </cyber-input>
          <cyber-input v-model="suffixValue" placeholder="域名" style="max-width: 360px;">
            <template #suffix>
              <span style="font-size: 13px; white-space: nowrap;">@cyber.io</span>
            </template>
          </cyber-input>
        </div>
      </div>
    </div>

    <!-- 状态 -->
    <div class="section">
      <div class="section-title">禁用 & 只读</div>
      <div class="demo-panel">
        <div class="input-group">
          <cyber-input disabled value="禁用状态，不可交互" style="max-width: 360px;"></cyber-input>
          <cyber-input readonly model-value="只读内容，不可编辑" style="max-width: 360px;"></cyber-input>
        </div>
      </div>
    </div>

    <!-- 输入类型 -->
    <div class="section">
      <div class="section-title">输入类型</div>
      <div class="code-block"><code>type: text / password / number / email / tel / url</code></div>
      <div class="demo-panel">
        <div class="input-group">
          <cyber-input type="email" placeholder="邮箱地址" style="max-width: 360px;"></cyber-input>
          <cyber-input type="number" placeholder="数字输入" style="max-width: 360px;"></cyber-input>
          <cyber-input type="tel" placeholder="电话号码" style="max-width: 360px;"></cyber-input>
        </div>
      </div>
    </div>

    <!-- 最大长度 -->
    <div class="section">
      <div class="section-title">最大长度限制</div>
      <div class="demo-panel">
        <cyber-input v-model="maxlenValue" :maxlength="15" placeholder="最多输入15个字符" clearable style="max-width: 360px;"></cyber-input>
        <p class="demo-info">{{ (maxlenValue || '').length }} / 15</p>
      </div>
    </div>

    <!-- 特效控制 -->
    <div class="section">
      <div class="section-title">特效控制</div>
      <div class="demo-panel">
        <div class="input-group">
          <cyber-input :glitch-effect="false" placeholder="关闭故障特效" style="max-width: 360px;"></cyber-input>
          <cyber-input :scanline-effect="false" placeholder="关闭扫描线" style="max-width: 360px;"></cyber-input>
          <cyber-input :glitch-effect="false" :scanline-effect="false" placeholder="关闭全部特效" style="max-width: 360px;"></cyber-input>
        </div>
      </div>
    </div>

    <!-- 事件日志 -->
    <div class="section">
      <div class="section-title">事件监听</div>
      <div class="demo-panel">
        <cyber-input
          v-model="eventValue"
          placeholder="在此输入观察事件..."
          clearable
          @focus="log('focus 获取焦点')"
          @blur="log('blur 失去焦点')"
          @input="(v: string) => log(`input: ${v}`)"
          @change="(v: string) => log(`change: ${v}`)"
          @clear="log('clear 已清除')"
          @keyup="(e: KeyboardEvent) => log(`keyup: ${e.key}`)"
          style="max-width: 400px;"
        ></cyber-input>
        <div class="event-log">
          <div v-for="(msg, i) in eventLogs.slice(0).reverse().slice(0, 6)" :key="i" class="event-log-item">
            {{ msg }}
          </div>
          <div v-if="eventLogs.length === 0" style="color: rgba(255,255,255,0.3);">等待事件...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const clearValue = ref('')
const passwordValue = ref('')
const t1 = ref('')
const t2 = ref('')
const t3 = ref('')
const t4 = ref('')
const t5 = ref('')
const prefixValue = ref('')
const suffixValue = ref('')
const maxlenValue = ref('')
const eventValue = ref('')

const eventLogs = ref<string[]>([])

const log = (msg: string) => {
  eventLogs.value.push(`[${new Date().toLocaleTimeString()}] ${msg}`)
}
</script>

<style scoped>
.content {
  padding: 24px;
}

.section {
  margin-bottom: 36px;
}

.section-title {
  font-size: 17px;
  color: var(--cp-primary-color);
  margin-bottom: 12px;
  text-shadow: 0 0 8px var(--cp-primary-color);
  font-weight: bold;
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

.input-group {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.event-log {
  margin-top: 14px;
  padding: 10px 14px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 166, 220, 0.2);
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  max-height: 140px;
  overflow-y: auto;
}

.event-log-item {
  color: #0f0;
  padding: 2px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
