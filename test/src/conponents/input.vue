<template>
  <div class="content">
    <div class="section">
      <div class="section-title">基础用法</div>
      <pre class="code-block"><code class="html">&lt;cyber-input v-model="value" placeholder="请输入内容"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <cyber-input v-model="inputValue" placeholder="请输入内容"></cyber-input>
        <p style="margin-top: 10px; color: #fff;">输入值: {{ inputValue }}</p>
      </div>
    </div>

    <div class="section">
      <div class="section-title">不同主题</div>
      <pre class="code-block"><code class="html">&lt;!-- 主要主题 --&gt;
&lt;cyber-input theme="primary" placeholder="主要主题"&gt;&lt;/cyber-input&gt;

&lt;!-- 成功主题 --&gt;
&lt;cyber-input theme="success" placeholder="成功主题"&gt;&lt;/cyber-input&gt;

&lt;!-- 警告主题 --&gt;
&lt;cyber-input theme="warning" placeholder="警告主题"&gt;&lt;/cyber-input&gt;

&lt;!-- 危险主题 --&gt;
&lt;cyber-input theme="danger" placeholder="危险主题"&gt;&lt;/cyber-input&gt;

&lt;!-- 信息主题 --&gt;
&lt;cyber-input theme="info" placeholder="信息主题"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <div class="theme-group">
          <cyber-input theme="primary" placeholder="主要主题" style="margin-right: 15px;"></cyber-input>
          <cyber-input theme="success" placeholder="成功主题" style="margin-right: 15px;"></cyber-input>
          <cyber-input theme="warning" placeholder="警告主题" style="margin-right: 15px;"></cyber-input>
          <cyber-input theme="danger" placeholder="危险主题" style="margin-right: 15px;"></cyber-input>
          <cyber-input theme="info" placeholder="信息主题"></cyber-input>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">不同尺寸</div>
      <pre class="code-block"><code class="html">&lt;!-- 大尺寸 --&gt;
&lt;cyber-input size="large" placeholder="大尺寸输入框"&gt;&lt;/cyber-input&gt;

&lt;!-- 默认尺寸 --&gt;
&lt;cyber-input size="default" placeholder="默认尺寸输入框"&gt;&lt;/cyber-input&gt;

&lt;!-- 小尺寸 --&gt;
&lt;cyber-input size="small" placeholder="小尺寸输入框"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <div class="size-group">
          <cyber-input size="large" placeholder="大尺寸输入框" style="margin-bottom: 15px;"></cyber-input>
          <cyber-input size="default" placeholder="默认尺寸输入框" style="margin-bottom: 15px;"></cyber-input>
          <cyber-input size="small" placeholder="小尺寸输入框"></cyber-input>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">禁用状态</div>
      <pre class="code-block"><code class="html">&lt;cyber-input disabled placeholder="禁用状态"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <cyber-input disabled placeholder="禁用状态"></cyber-input>
      </div>
    </div>

    <div class="section">
      <div class="section-title">只读状态</div>
      <pre class="code-block"><code class="html">&lt;cyber-input readonly model-value="只读内容"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <cyber-input readonly model-value="只读内容"></cyber-input>
      </div>
    </div>

    <div class="section">
      <div class="section-title">密码输入框</div>
      <pre class="code-block"><code class="html">&lt;cyber-input type="password" placeholder="请输入密码"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <cyber-input type="password" placeholder="请输入密码"></cyber-input>
      </div>
    </div>

    <div class="section">
      <div class="section-title">带最大长度限制</div>
      <pre class="code-block"><code class="html">&lt;cyber-input maxlength="10" placeholder="最多输入10个字符"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <cyber-input maxlength="10" placeholder="最多输入10个字符"></cyber-input>
      </div>
    </div>

    <div class="section">
      <div class="section-title">关闭特效</div>
      <pre class="code-block"><code class="html">&lt;!-- 关闭故障特效 --&gt;
&lt;cyber-input :glitch-effect="false" placeholder="无故障特效"&gt;&lt;/cyber-input&gt;

&lt;!-- 关闭扫描线特效 --&gt;
&lt;cyber-input :scanline-effect="false" placeholder="无扫描线特效"&gt;&lt;/cyber-input&gt;

&lt;!-- 关闭所有特效 --&gt;
&lt;cyber-input :glitch-effect="false" :scanline-effect="false" placeholder="无特效"&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <div class="effect-group">
          <cyber-input :glitch-effect="false" placeholder="无故障特效" style="margin-bottom: 15px;"></cyber-input>
          <cyber-input :scanline-effect="false" placeholder="无扫描线特效" style="margin-bottom: 15px;"></cyber-input>
          <cyber-input :glitch-effect="false" :scanline-effect="false" placeholder="无特效"></cyber-input>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">事件处理</div>
      <pre class="code-block"><code class="html">&lt;cyber-input 
  v-model="eventValue"
  @focus="handleFocus"
  @blur="handleBlur"
  @input="handleInput"
  @keyup="handleKeyup"
  placeholder="触发事件"
&gt;&lt;/cyber-input&gt;</code></pre>
      <div class="demo-panel">
        <cyber-input 
          v-model="eventValue"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @keyup="handleKeyup"
          placeholder="触发事件"
        ></cyber-input>
        <p style="margin-top: 10px; color: #fff;">当前值: {{ eventValue }}</p>
        <p style="color: #aaa;">{{ eventLog }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('');
const eventValue = ref('');
const eventLog = ref('');

const handleFocus = () => {
  eventLog.value = '焦点已获取';
};

const handleBlur = () => {
  eventLog.value = '焦点已失去';
};

const handleInput = (value: string) => {
  eventLog.value = `输入值: ${value}`;
};

const handleKeyup = (event: KeyboardEvent) => {
  eventLog.value = `按键: ${event.key}`;
};
</script>

<style scoped>
.content {
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 18px;
  color: var(--cp-primary-color);
  margin-bottom: 15px;
  text-shadow: 0 0 8px var(--cp-primary-color);
}

.code-block {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--cp-border-color);
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  overflow-x: auto;
}

.code-block code {
  color: #0f0;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.demo-panel {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--cp-border-color);
  border-radius: 4px;
  padding: 20px;
}

.theme-group,
.size-group,
.effect-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.theme-group > *,
.size-group > *,
.effect-group > * {
  flex: 1;
  min-width: 200px;
}
</style>