<template>
  <div class="divider-demo">
    <h2>CyberDivider 分割线组件演示</h2>
    
    <!-- 基础用法 -->
    <section class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-content">
        <p>上方内容区域</p>
        <cyber-divider />
        <p>下方内容区域</p>
      </div>
    </section>

    <!-- 不同主题类型 -->
    <section class="demo-section">
      <h3>不同主题类型</h3>
      <div class="demo-content">
        <cyber-divider type="primary" />
        <cyber-divider type="success" />
        <cyber-divider type="warning" />
        <cyber-divider type="danger" />
        <cyber-divider type="info" />
      </div>
    </section>

    <!-- 带内容的分割线 -->
    <section class="demo-section">
      <h3>带内容的分割线</h3>
      <div class="demo-content">
        <cyber-divider content="CHAPTER 01" />
        <cyber-divider type="success" content="SYSTEM STATUS" />
        <cyber-divider type="warning" content="WARNING ZONE" />
        <cyber-divider type="danger">
          <strong>DANGER AREA</strong>
        </cyber-divider>
        <cyber-divider type="info">
          <em>Information</em>
        </cyber-divider>
      </div>
    </section>

    <!-- 垂直分割线 -->
    <section class="demo-section">
      <h3>垂直分割线</h3>
      <div class="demo-content vertical-demo">
        <span>左侧内容</span>
        <cyber-divider direction="vertical" />
        <span>中间内容</span>
        <cyber-divider direction="vertical" type="success" />
        <span>右侧内容</span>
      </div>
    </section>

    <!-- 自定义尺寸 -->
    <section class="demo-section">
      <h3>自定义尺寸</h3>
      <div class="demo-content">
        <cyber-divider size="50%" content="50% WIDTH" />
        <cyber-divider size="200px" type="success" content="200PX WIDTH" />
        <cyber-divider size="80%" type="danger" content="80% WIDTH" />
      </div>
    </section>

    <!-- 控制线条显示 -->
    <section class="demo-section">
      <h3>控制线条显示</h3>
      <div class="demo-content">
        <cyber-divider content="LEFT ONLY" :show-right-line="false" />
        <cyber-divider content="RIGHT ONLY" :show-left-line="false" />
        <cyber-divider content="NO LINES" :show-left-line="false" :show-right-line="false" />
      </div>
    </section>

    <!-- 组合使用 -->
    <section class="demo-section">
      <h3>组合使用示例</h3>
      <div class="demo-content">
        <cyber-divider type="primary" content="SECTION A" />
        <p style="padding: 10px;">这是第一个部分的内容</p>
        
        <cyber-divider type="success" content="SECTION B" />
        <p style="padding: 10px;">这是第二个部分的内容</p>
        
        <cyber-divider type="warning" content="SECTION C" />
        <p style="padding: 10px;">这是第三个部分的内容</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 演示组件，无需额外逻辑
</script>

<style scoped>
.divider-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-section h3 {
  margin-bottom: 16px;
  color: var(--cp-primary-color);
  text-shadow: 0 0 8px var(--cp-primary-color);
}

.demo-content {
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--cp-border-color);
  border-radius: 4px;
}

.vertical-demo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  gap: 20px;
}

.vertical-demo span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
