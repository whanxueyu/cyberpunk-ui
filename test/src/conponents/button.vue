<template>
    <div class="content">
        <div class="panel">
            <span class="subtitle">large</span>
            <cyber-button type="primary" size="large" content="PRIMARY">PRIMARY</cyber-button>
            <cyber-button type="success" size="large" content="SUCCESS">SUCCESS</cyber-button>
            <cyber-button type="warning" size="large" content="WARNING">WARNING</cyber-button>
            <cyber-button type="danger" size="large" content="DANGER">DANGER</cyber-button>
        </div>
        <div class="panel">
            <span class="subtitle">default</span>
            <cyber-button type="primary" size="default" content="PRIMARY">PRIMARY</cyber-button>
            <cyber-button type="success" size="default" content="SUCCESS">SUCCESS</cyber-button>
            <cyber-button type="warning" size="default" content="WARNING">WARNING</cyber-button>
            <cyber-button type="danger" size="default" content="DANGER">DANGER</cyber-button>
        </div>
        <div class="panel">
            <span class="subtitle">small</span>
            <cyber-button type="primary" size="small" content="PRIMARY">PRIMARY</cyber-button>
            <cyber-button type="success" size="small" content="SUCCESS">SUCCESS</cyber-button>
            <cyber-button type="warning" size="small" content="WARNING">WARNING</cyber-button>
            <cyber-button type="danger" size="small" content="DANGER">DANGER</cyber-button>
        </div>
        <div class="panel">
            <span class="subtitle">大小</span>
            <cyber-nenobutton type="primary" size="large">PRIMARY</cyber-nenobutton>
            <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
            <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
        </div>
        <div class="panel">
            <span class="subtitle">类型</span>
            <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
            <cyber-nenobutton type="success" size="default">SUCCESS</cyber-nenobutton>
            <cyber-nenobutton type="warning" size="default">WARNING</cyber-nenobutton>
            <cyber-nenobutton type="danger" size="default">DANGER</cyber-nenobutton>
        </div>
        <div class="panel">
            <span class="subtitle">有无背景</span>
            <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
            <cyber-nenobutton type="primary" size="small" bg>PRIMARY</cyber-nenobutton>
            <cyber-nenobutton type="success" size="small">SUCCESS</cyber-nenobutton>
            <cyber-nenobutton type="success" size="small" bg>SUCCESS</cyber-nenobutton>
            <cyber-nenobutton type="warning" size="small">WARNING</cyber-nenobutton>
            <cyber-nenobutton type="warning" size="small" bg>WARNING</cyber-nenobutton>
            <cyber-nenobutton type="danger" size="small">DANGER</cyber-nenobutton>
            <cyber-nenobutton type="danger" size="small" bg>DANGER</cyber-nenobutton>
        </div>
        <div class="panel reflect1">
            <span class="subtitle">大小</span>
            <cyber-reflectbutton type="primary" size="large">PRIMARY</cyber-reflectbutton>
            <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
            <cyber-reflectbutton type="primary" size="small">PRIMARY</cyber-reflectbutton>
        </div>
        <div class="panel reflect2">
            <span class="subtitle">类型</span>
            <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
            <cyber-reflectbutton type="success" size="default">SUCCESS</cyber-reflectbutton>
            <cyber-reflectbutton type="warning" size="default">WARNING</cyber-reflectbutton>
            <cyber-reflectbutton type="danger" size="default">DANGER</cyber-reflectbutton>
        </div>
        <div class="panel reflect3">
            <span class="subtitle">有无背景</span>
            <cyber-reflectbutton type="primary" size="small">PRIMARY</cyber-reflectbutton>
            <cyber-reflectbutton type="primary" size="small" bg>PRIMARY</cyber-reflectbutton>
            <cyber-reflectbutton type="success" size="small">SUCCESS</cyber-reflectbutton>
            <cyber-reflectbutton type="success" size="small" bg>SUCCESS</cyber-reflectbutton>
            <cyber-reflectbutton type="warning" size="small">WARNING</cyber-reflectbutton>
            <cyber-reflectbutton type="warning" size="small" bg>WARNING</cyber-reflectbutton>
            <cyber-reflectbutton type="danger" size="small">DANGER</cyber-reflectbutton>
            <cyber-reflectbutton type="danger" size="small" bg>DANGER</cyber-reflectbutton>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.content {
    border-left: 1px solid #ccc;
    padding: 20px;
    text-align: left;
}
.panel {
  margin-bottom: 20px;

  &.reflect1 {
    height: 150px;
  }

  &.reflect2 {
    height: 100px;
  }

  &.reflect3 {
    height: 60px;
  }
}

.subtitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
