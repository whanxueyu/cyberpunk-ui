<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-cascader 
  v-model="value"
  :options="options"
  placeholder="请选择..."
&gt;&lt;/cyber-cascader&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>选择选项：</label>
                    <cyber-cascader 
                        v-model="selectedValue"
                        :options="options"
                        placeholder="请选择..."
                    ></cyber-cascader>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ selectedValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">多选模式</div>
            <pre class="code-block"><code class="html">&lt;cyber-cascader 
  v-model="multiValues"
  :options="options"
  multiple
  placeholder="请选择多个选项..."
&gt;&lt;/cyber-cascader&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>多选级联：</label>
                    <cyber-cascader 
                        v-model="multiValues"
                        :options="options"
                        multiple
                        placeholder="请选择多个选项..."
                    ></cyber-cascader>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ multiValues.length > 0 ? multiValues.join(', ') : '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">只显示最后一级</div>
            <pre class="code-block"><code class="html">&lt;cyber-cascader 
  v-model="value"
  :options="options"
  :show-all-levels="false"
  placeholder="请选择..."
&gt;&lt;/cyber-cascader&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>只显示末级：</label>
                    <cyber-cascader 
                        v-model="lastLevelValue"
                        :options="options"
                        :show-all-levels="false"
                        placeholder="只显示最后一级"
                    ></cyber-cascader>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ lastLevelValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">不同尺寸</div>
            <pre class="code-block"><code class="html">&lt;!-- 大尺寸 --&gt;
&lt;cyber-cascader size="large" :options="options" /&gt;

&lt;!-- 默认尺寸 --&gt;
&lt;cyber-cascader size="default" :options="options" /&gt;

&lt;!-- 小尺寸 --&gt;
&lt;cyber-cascader size="small" :options="options" /&gt;</code></pre>
            <div class="demo-grid three">
                <div class="demo-item">
                    <p class="demo-label">Large</p>
                    <cyber-cascader size="large" :options="options" placeholder="大尺寸"></cyber-cascader>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Default</p>
                    <cyber-cascader size="default" :options="options" placeholder="默认尺寸"></cyber-cascader>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Small</p>
                    <cyber-cascader size="small" :options="options" placeholder="小尺寸"></cyber-cascader>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">主题样式</div>
            <pre class="code-block"><code class="html">&lt;cyber-cascader theme="neon" :options="options" /&gt;
&lt;cyber-cascader theme="terminal" :options="options" /&gt;
&lt;cyber-cascader theme="matrix" :options="options" /&gt;
&lt;cyber-cascader theme="hologram" :options="options" /&gt;</code></pre>
            <div class="demo-grid">
                <div class="demo-item">
                    <p class="demo-label">Neon Theme</p>
                    <cyber-cascader theme="neon" :options="options" placeholder="霓虹主题"></cyber-cascader>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Terminal Theme</p>
                    <cyber-cascader theme="terminal" :options="options" placeholder="终端主题"></cyber-cascader>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Matrix Theme</p>
                    <cyber-cascader theme="matrix" :options="options" placeholder="矩阵主题"></cyber-cascader>
                </div>
                <div class="demo-item">
                    <p class="demo-label">Hologram Theme</p>
                    <cyber-cascader theme="hologram" :options="options" placeholder="全息主题"></cyber-cascader>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">禁用状态</div>
            <pre class="code-block"><code class="html">&lt;cyber-cascader 
  :options="options"
  disabled
  placeholder="禁用状态"
&gt;&lt;/cyber-cascader&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>禁用级联：</label>
                    <cyber-cascader 
                        :options="options"
                        disabled
                        placeholder="禁用状态"
                    ></cyber-cascader>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">自定义字段名</div>
            <pre class="code-block"><code class="html">&lt;cyber-cascader 
  v-model="customValue"
  :options="customOptions"
  label-key="name"
  value-key="id"
  children-key="items"
  placeholder="自定义字段名"
&gt;&lt;/cyber-cascader&gt;</code></pre>
            <div class="demo-panel">
                <div class="form-item">
                    <label>自定义字段：</label>
                    <cyber-cascader 
                        v-model="customValue"
                        :options="customOptions"
                        label-key="name"
                        value-key="id"
                        children-key="items"
                        placeholder="使用自定义字段名"
                    ></cyber-cascader>
                </div>
                <div class="result-display">
                    <p>当前选中值: <span class="highlight">{{ customValue || '未选择' }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedValue = ref('');
const multiValues = ref([]);
const lastLevelValue = ref('');
const customValue = ref('');

// 基础选项数据
const options = ref([
    {
        label: '电子产品',
        value: 'electronics',
        children: [
            {
                label: '手机',
                value: 'phone',
                children: [
                    { label: 'iPhone', value: 'iphone' },
                    { label: 'Android', value: 'android' },
                ],
            },
            {
                label: '电脑',
                value: 'computer',
                children: [
                    { label: '笔记本', value: 'laptop' },
                    { label: '台式机', value: 'desktop' },
                ],
            },
        ],
    },
    {
        label: '服装',
        value: 'clothing',
        children: [
            {
                label: '男装',
                value: 'men',
                children: [
                    { label: '衬衫', value: 'shirt' },
                    { label: 'T恤', value: 'tshirt' },
                ],
            },
            {
                label: '女装',
                value: 'women',
                children: [
                    { label: '连衣裙', value: 'dress' },
                    { label: '裙子', value: 'skirt' },
                ],
            },
        ],
    },
]);

// 自定义字段名选项
const customOptions = ref([
    {
        name: '食品',
        id: 'food',
        items: [
            {
                name: '水果',
                id: 'fruit',
                items: [
                    { name: '苹果', id: 'apple' },
                    { name: '香蕉', id: 'banana' },
                ],
            },
            {
                name: '蔬菜',
                id: 'vegetable',
                items: [
                    { name: '白菜', id: 'cabbage' },
                    { name: '萝卜', id: 'carrot' },
                ],
            },
        ],
    },
]);
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

.code-block {
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
</style>
