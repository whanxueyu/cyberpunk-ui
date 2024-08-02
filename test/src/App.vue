<script setup lang="ts">
</script>

<template>
  <div class="main">
    <div class="section">
      <div class="title">按钮样式</div>
      <div class="content">
        <cp-button type="primary" content="PRIMARY">PRIMARY</cp-button>
        <cp-button type="success" content="SUCCESS">SUCCESS</cp-button>
        <cp-button type="warning" content="WARNING">WARNING</cp-button>
        <cp-button type="danger" content="DANGER">DANGER</cp-button>
      </div>
    </div>
    <div class="section">
      <div class="title">按钮大小</div>
      <div class="content">
        <div class="panel">
          <span class="subtitle">large</span>
          <cp-button type="primary" size="large" content="PRIMARY">PRIMARY</cp-button>
          <cp-button type="success" size="large" content="SUCCESS">SUCCESS</cp-button>
          <cp-button type="warning" size="large" content="WARNING">WARNING</cp-button>
          <cp-button type="danger" size="large" content="DANGER">DANGER</cp-button>
        </div>
        <div class="panel">
          <span class="subtitle">default</span>
          <cp-button type="primary" size="default" content="PRIMARY">PRIMARY</cp-button>
          <cp-button type="success" size="default" content="SUCCESS">SUCCESS</cp-button>
          <cp-button type="warning" size="default" content="WARNING">WARNING</cp-button>
          <cp-button type="danger" size="default" content="DANGER">DANGER</cp-button>
        </div>
        <div class="panel">
          <span class="subtitle">small</span>
          <cp-button type="primary" size="small" content="PRIMARY">PRIMARY</cp-button>
          <cp-button type="success" size="small" content="SUCCESS">SUCCESS</cp-button>
          <cp-button type="warning" size="small" content="WARNING">WARNING</cp-button>
          <cp-button type="danger" size="small" content="DANGER">DANGER</cp-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
}

.section {
  display: flex;
  margin: 20px 0px;
  border: 1px solid #ccc;
}

.title {
  min-width: 200px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
}

.content {
  border-left: 1px solid #ccc;
  padding: 20px;
  text-align: left;
}
.panel{
  margin-bottom: 20px;
}
.subtitle{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
