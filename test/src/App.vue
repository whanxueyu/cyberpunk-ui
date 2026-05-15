<script setup lang="ts">
import { ref } from "vue";
import layout from "./layout/layout.vue";

// 导入所有演示组件
import bannerPanel from './conponents/banner.vue';
import treePanel from './conponents/tree.vue';
import cyberImagePanel from './conponents/cyberimage.vue';
import imagesPanel from './conponents/images.vue';
import buttonPanel from "./conponents/button.vue";
import textPanel from "./conponents/text.vue";
import switchPanel from "./conponents/switch.vue";
import glitchProgressPanel from './conponents/glitch-progress.vue';
import tooltipPanel from "./conponents/tooltip.vue";
import digitalCounterPanel from './conponents/digital-counter.vue';
import progressPanel from "./conponents/progress.vue";
import tablePanel from "./conponents/table.vue";
import loadingPanel from "./conponents/loading.vue";
import cardPanel from "./conponents/card.vue";
import notificationPanel from './conponents/notification.vue';
import fullpagePanel from './conponents/fullpage.vue';
import selectPanel from './conponents/select.vue';

console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI - Component Showcase"
);

// 组件菜单列表
const componentsMenu = ref([
  { title: '轮播图片', component: bannerPanel },
  { title: '树形控件', component: treePanel },
  { title: '赛博图片', component: cyberImagePanel },
  { title: '故障图片', component: imagesPanel },
  { title: '按钮组', component: buttonPanel },
  { title: '文字样式', component: textPanel },
  { title: '霓虹开关', component: switchPanel },
  { title: '故障进度条', component: glitchProgressPanel },
  { title: '鼠标提示', component: tooltipPanel },
  { title: '数字翻牌器', component: digitalCounterPanel },
  { title: '赛博进度条', component: progressPanel },
  { title: '滚动表格', component: tablePanel },
  { title: 'Loading', component: loadingPanel },
  { title: '卡片', component: cardPanel },
  { title: '通知提示', component: notificationPanel },
  { title: '全屏滚动', component: fullpagePanel },
  { title: '选择器', component: selectPanel },
]);

// 当前选中的组件面板
const activeMenu = ref(bannerPanel);

const handleMenuClick = (component: any) => {
  activeMenu.value = component;
};
</script>

<template>
  <layout>
    <template #aside>
      <div class="menu-list">
        <div
          v-for="(item, index) in componentsMenu"
          :key="index"
          class="menu-item"
          :class="{ active: activeMenu === item.component }"
          @click="handleMenuClick(item.component)"
        >
          {{ item.title }}
        </div>
      </div>
    </template>

    <template #content>
      <div class="main-content">
        <component :is="activeMenu" />
      </div>
    </template>
  </layout>
</template>

<style scoped lang="scss">
.menu-list {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.menu-item {
  padding: 12px 20px;
  cursor: pointer;
  color: #888;
  transition: all 0.3s;
  border-radius: 6px;
  margin-bottom: 4px;

  &:hover {
    color: #fff;
    background: #222;
  }

  &.active {
    color: #fff;
    background: linear-gradient(90deg, #CC54D1, #4EAFFA);
    font-weight: bold;
  }
}

.main-content {
  width: 100%;
}
</style>
