<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-select 
  v-model="selectedValue"
  :options="options"
  placeholder="请选择..."
&gt;&lt;/cyber-select&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>选择选项：</label>
                    <cyber-select 
                        v-model="selectedValue"
                        :options="options"
                        placeholder="请选择..."
                    ></cyber-select>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ selectedValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">禁用状态</div>
            <pre class="code-block"><code class="html">&lt;cyber-select 
  v-model="selectedValue"
  :options="options"
  disabled
&gt;&lt;/cyber-select&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>禁用选择器：</label>
                    <cyber-select 
                        v-model="selectedValue"
                        :options="options"
                        disabled
                    ></cyber-select>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">不同尺寸</div>
            <pre class="code-block"><code class="html">&lt;!-- 大尺寸 --&gt;
&lt;cyber-select size="large" :options="options" /&gt;

&lt;!-- 默认尺寸 --&gt;
&lt;cyber-select size="default" :options="options" /&gt;

&lt;!-- 小尺寸 --&gt;
&lt;cyber-select size="small" :options="options" /&gt;</code></pre>
            <div class="demo-grid three">
                <div class="demo-item">
                    <p class="demo-label">Large</p>
                    <cyber-select size="large" :options="options" placeholder="大尺寸"></cyber-select>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Default</p>
                    <cyber-select size="default" :options="options" placeholder="默认尺寸"></cyber-select>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small</p>
                    <cyber-select size="small" :options="options" placeholder="小尺寸"></cyber-select>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">主题样式</div>
            <pre class="code-block"><code class="html">&lt;cyber-select theme="neon" :options="options" /&gt;
&lt;cyber-select theme="terminal" :options="options" /&gt;
&lt;cyber-select theme="matrix" :options="options" /&gt;
&lt;cyber-select theme="hologram" :options="options" /&gt;</code></pre>
            <div class="demo-grid">
                <div class="demo-item">
                    <p class="demo-label">Neon Theme</p>
                    <cyber-select theme="neon" :options="options" placeholder="霓虹主题"></cyber-select>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Terminal Theme</p>
                    <cyber-select theme="terminal" :options="options" placeholder="终端主题"></cyber-select>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Matrix Theme</p>
                    <cyber-select theme="matrix" :options="options" placeholder="矩阵主题"></cyber-select>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Hologram Theme</p>
                    <cyber-select theme="hologram" :options="options" placeholder="全息主题"></cyber-select>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">可搜索</div>
            <pre class="code-block"><code class="html">&lt;cyber-select 
  v-model="searchValue"
  :options="longOptions"
  filterable
  placeholder="搜索选项..."
&gt;&lt;/cyber-select&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>可搜索选择器：</label>
                    <cyber-select 
                        v-model="searchValue"
                        :options="longOptions"
                        filterable
                        placeholder="输入关键词搜索..."
                    ></cyber-select>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ searchValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">多选模式</div>
            <pre class="code-block"><code class="html">&lt;cyber-select 
  v-model="multiValues"
  :options="options"
  multiple
  placeholder="请选择多个选项..."
&gt;&lt;/cyber-select&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>多选选择器：</label>
                    <cyber-select 
                        v-model="multiValues"
                        :options="options"
                        multiple
                        placeholder="请选择多个选项..."
                    ></cyber-select>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ multiValues.length > 0 ? multiValues.join(', ') : '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">自定义选项标签</div>
            <pre class="code-block"><code class="html">&lt;cyber-select 
  v-model="customValue"
  :options="customOptions"
  label-key="name"
  value-key="id"
&gt;&lt;/cyber-select&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>自定义字段名：</label>
                    <cyber-select 
                        v-model="customValue"
                        :options="customOptions"
                        label-key="name"
                        value-key="id"
                        placeholder="选择项目..."
                    ></cyber-select>
                </div>
                <div class="result-display">
                    <p>当前选中ID: <span class="highlight">{{ customValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">事件监听</div>
            <pre class="event-log">{{ eventLog }}</pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>带事件的选择器：</label>
                    <cyber-select 
                        v-model="eventValue"
                        :options="options"
                        @change="handleChange"
                        @focus="handleFocus"
                        @blur="handleBlur"
                        placeholder="触发事件..."
                    ></cyber-select>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">分组选项</div>
            <pre class="code-block"><code class="html">&lt;cyber-select 
  v-model="groupValue"
  :options="groupOptions"
  placeholder="选择分组选项..."
&gt;&lt;/cyber-select&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>分组选择器：</label>
                    <cyber-select 
                        v-model="groupValue"
                        :options="groupOptions"
                        placeholder="选择分组选项..."
                    ></cyber-select>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ groupValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">带图标和快捷键</div>
            <pre class="code-block"><code class="html">&lt;cyber-select 
  v-model="iconValue"
  :options="iconOptions"
  placeholder="选择操作..."
&gt;&lt;/cyber-select&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>带图标和快捷键的选择器：</label>
                    <cyber-select 
                        v-model="iconValue"
                        :options="iconOptions"
                        placeholder="选择操作..."
                    ></cyber-select>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ iconValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const eventLog = ref('等待操作...');

// 基础选项
const options = ref([
    { label: '选项 1', value: 'option1' },
    { label: '选项 2', value: 'option2' },
    { label: '选项 3', value: 'option3' },
    { label: '选项 4', value: 'option4' },
    { label: '选项 5', value: 'option5' },
]);

// 长列表选项（用于搜索演示）
const longOptions = ref([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
    { label: 'Elderberry', value: 'elderberry' },
    { label: 'Fig', value: 'fig' },
    { label: 'Grape', value: 'grape' },
    { label: 'Honeydew', value: 'honeydew' },
    { label: 'Kiwi', value: 'kiwi' },
    { label: 'Lemon', value: 'lemon' },
    { label: 'Mango', value: 'mango' },
    { label: 'Nectarine', value: 'nectarine' },
    { label: 'Orange', value: 'orange' },
    { label: 'Papaya', value: 'papaya' },
    { label: 'Quince', value: 'quince' },
]);

// 自定义选项
const customOptions = ref([
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    { id: 3, name: 'Project Gamma' },
    { id: 4, name: 'Project Delta' },
]);

// 分组选项
const groupOptions = ref([
    {
        label: '前端技术',
        options: [
            { label: 'Vue.js', value: 'vue' },
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
        ]
    },
    {
        label: '后端技术',
        options: [
            { label: 'Node.js', value: 'node' },
            { label: 'Python', value: 'python' },
            { label: 'Java', value: 'java' },
        ]
    },
    {
        label: '数据库',
        options: [
            { label: 'MySQL', value: 'mysql' },
            { label: 'MongoDB', value: 'mongodb' },
            { label: 'PostgreSQL', value: 'postgresql' },
        ]
    },
]);


// 带图标的选项
const iconOptions = ref([
    { label: '首页', value: 'home', shortcut: 'Alt+H' },
    { label: '搜索', value: 'search', shortcut: 'Ctrl+F' },
    { divider: true },
    { label: '设置', value: 'settings', shortcut: 'Ctrl+,' },
    { label: '帮助', value: 'help', shortcut: 'F1' },
]);

// 响应式数据
const selectedValue = ref('');
const searchValue = ref('');
const multiValues = ref([]);
const customValue = ref(null);
const eventValue = ref('');
const groupValue = ref('');
const iconValue = ref('');

// 事件处理
const handleChange = (value: any) => {
    eventLog.value = `change: 选中值变为 "${value}"`;
    console.log('Change event:', value);
};

const handleFocus = () => {
    eventLog.value = 'focus: 选择器获得焦点';
    console.log('Focus event');
};

const handleBlur = () => {
    eventLog.value = 'blur: 选择器失去焦点';
    console.log('Blur event');
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
    margin-bottom: 20px;
    color: #00ffff;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.code-block,
.event-log {
    margin: 0 0 20px;
    padding: 14px 16px;
    overflow-x: auto;
    color: #d8fbff;
    background: rgba(5, 12, 24, 0.86);
    border: 1px solid rgba(0, 255, 255, 0.24);
    border-radius: 6px;
    box-shadow: inset 0 0 18px rgba(0, 255, 255, 0.08);
    font-size: 13px;
    line-height: 1.6;
}

.demo-panel {
    padding: 18px;
    background: linear-gradient(135deg, rgba(8, 16, 30, 0.9), rgba(18, 12, 34, 0.72));
    border: 1px solid rgba(0, 255, 255, 0.16);
    border-radius: 6px;
}

.form-item {
    margin-bottom: 16px;
    
    label {
        display: block;
        margin-bottom: 8px;
        color: #a5b8c8;
        font-size: 14px;
    }
}

.result-display {
    margin-top: 16px;
    padding: 12px;
    background: rgba(0, 255, 255, 0.05);
    border-left: 3px solid #00ffff;
    border-radius: 4px;
    
    p {
        margin: 0;
        color: #d8fbff;
        font-size: 14px;
        
        .highlight {
            color: #47f2c6;
            font-weight: bold;
        }
    }
}

.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;

    &.three {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
}

.demo-item {
    padding: 18px;
    background: linear-gradient(135deg, rgba(8, 16, 30, 0.9), rgba(18, 12, 34, 0.72));
    border: 1px solid rgba(0, 255, 255, 0.16);
    border-radius: 6px;
}

.demo-label {
    margin: 0 0 14px;
    color: #a5b8c8;
    font-size: 14px;
}

.event-log {
    max-width: 760px;
    color: #47f2c6;
}
</style>
