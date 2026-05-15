<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <pre class="code-block"><code class="html">&lt;cyber-full-page :items="sectionItems"&gt;
  &lt;div class="section" style="background: #368f8fff;"&gt;Section 1&lt;/div&gt;
  &lt;div class="section" style="background: #a14161ff;"&gt;Section 2&lt;/div&gt;
  &lt;div class="section" style="background: #a3a342ff;"&gt;Section 3&lt;/div&gt;
  &lt;div class="section" style="background: #46a146ff;"&gt;Section 4&lt;/div&gt;
&lt;/cyber-full-page&gt;</code></pre>
            <div class="demo-panel fullpage-demo">
                <cyber-full-page :items="sectionItems">
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #368f8fff, #2a6b6b);">
                        <h2>Section 1</h2>
                        <p>Welcome to Cyberpunk Full Page</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #a14161ff, #7a3049);">
                        <h2>Section 2</h2>
                        <p>Scroll to explore more</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #a3a342ff, #7a7a32);">
                        <h2>Section 3</h2>
                        <p>Interactive navigation dots</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #46a146ff, #357a35);">
                        <h2>Section 4</h2>
                        <p>End of demonstration</p>
                    </div>
                </cyber-full-page>
            </div>
        </div>

        <div class="section">
            <div class="section-title">指示器位置 - 顶部</div>
            <pre class="code-block"><code class="html">&lt;cyber-full-page :items="sectionItems" position="top"&gt;&lt;/cyber-full-page&gt;</code></pre>
            <div class="demo-panel fullpage-demo">
                <cyber-full-page :items="sectionItems" position="top">
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #CC54D1, #9a3f9a);">
                        <h2>Top Position</h2>
                        <p>Indicator at the top</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #4EAFFA, #3b82c4);">
                        <h2>Smooth Scroll</h2>
                        <p>With top navigation</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #F7DA66, #c4ad51);">
                        <h2>Cyber Theme</h2>
                        <p>Futuristic design</p>
                    </div>
                </cyber-full-page>
            </div>
        </div>

        <div class="section">
            <div class="section-title">指示器位置 - 底部</div>
            <pre class="code-block"><code class="html">&lt;cyber-full-page :items="sectionItems" position="bottom"&gt;&lt;/cyber-full-page&gt;</code></pre>
            <div class="demo-panel fullpage-demo">
                <cyber-full-page :items="sectionItems" position="bottom">
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #fF717F, #c45761);">
                        <h2>Bottom Position</h2>
                        <p>Indicator at the bottom</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #3DE1C3, #2eb098);">
                        <h2>Modern UI</h2>
                        <p>With bottom navigation</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #9b59b6, #76448a);">
                        <h2>Responsive</h2>
                        <p>Works on all devices</p>
                    </div>
                </cyber-full-page>
            </div>
        </div>

        <div class="section">
            <div class="section-title">指示器位置 - 左侧</div>
            <pre class="code-block"><code class="html">&lt;cyber-full-page :items="sectionItems" position="left"&gt;&lt;/cyber-full-page&gt;</code></pre>
            <div class="demo-panel fullpage-demo">
                <cyber-full-page :items="sectionItems" position="left">
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #e74c3c, #b0392e);">
                        <h2>Left Position</h2>
                        <p>Indicator on the left</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #3498db, #2874a6);">
                        <h2>Vertical Layout</h2>
                        <p>Left-side navigation</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #2ecc71, #239b56);">
                        <h2>Clean Design</h2>
                        <p>Minimalist approach</p>
                    </div>
                </cyber-full-page>
            </div>
        </div>

        <div class="section">
            <div class="section-title">隐藏标题显示</div>
            <pre class="code-block"><code class="html">&lt;cyber-full-page :items="sectionItems" :showTitle="false"&gt;&lt;/cyber-full-page&gt;</code></pre>
            <div class="demo-panel fullpage-demo">
                <cyber-full-page :items="sectionItems" :showTitle="false">
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #1abc9c, #148f77);">
                        <h2>No Title Display</h2>
                        <p>Only dots visible</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #e67e22, #b36119);">
                        <h2>Clean Look</h2>
                        <p>Without text labels</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #95a5a6, #707b7c);">
                        <h2>Minimalist</h2>
                        <p>Simplified interface</p>
                    </div>
                </cyber-full-page>
            </div>
        </div>

        <div class="section">
            <div class="section-title">事件监听</div>
            <pre class="event-log">{{ eventLog }}</pre>
            <div class="demo-panel fullpage-demo">
                <cyber-full-page 
                    :items="sectionItems" 
                    @toNext="handleToNext"
                    @toLast="handleToLast"
                    @change="handleChange"
                >
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #8e44ad, #6c3483);">
                        <h2>Event Demo 1</h2>
                        <p>Scroll to trigger events</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #d35400, #a04000);">
                        <h2>Event Demo 2</h2>
                        <p>Watch the log below</p>
                    </div>
                    <div class="fullpage-section" style="background: linear-gradient(135deg, #16a085, #117864);">
                        <h2>Event Demo 3</h2>
                        <p>Real-time updates</p>
                    </div>
                </cyber-full-page>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface SectionItem {
    title: string;
}

const eventLog = ref('等待滚动操作...');

const sectionItems = ref<SectionItem[]>([
    { title: 'First Section' },
    { title: 'Second Section' },
    { title: 'Third Section' },
]);

const handleToNext = (index: number) => {
    eventLog.value = `toNext: 滚动到第 ${index + 1} 页`;
    console.log('Scrolled to next page:', index);
};

const handleToLast = (index: number) => {
    eventLog.value = `toLast: 滚动到第 ${index + 1} 页`;
    console.log('Scrolled to last page:', index);
};

const handleChange = (data: any) => {
    eventLog.value = `change: 从 "${data.from?.title}" 到 "${data.to?.title}"，方向: ${data.type}`;
    console.log('Page changed:', data);
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

    &.fullpage-demo {
        height: 500px;
        overflow: hidden;
    }
}

.fullpage-section {
    width: 100%;
    height: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    
    h2 {
        font-size: 48px;
        margin: 0 0 20px 0;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    
    p {
        font-size: 24px;
        margin: 0;
        opacity: 0.9;
    }
}

.event-log {
    max-width: 760px;
    color: #47f2c6;
}
</style>
