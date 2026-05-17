<script setup lang="ts">
import { ref, shallowRef } from "vue";
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
import dividerPanel from './conponents/divider.vue';
import inputPanel from './conponents/input.vue';
import cascaderPanel from './conponents/cascader.vue';
import menuPanel from './conponents/menu-test.vue';


console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI - Component Showcase"
);

// 组件菜单列表
const componentsMenu = ref([
  // 基础组件
  { title: '按钮组', component: shallowRef(buttonPanel) },
  { title: '文字样式', component: shallowRef(textPanel) },
  { title: '输入框', component: shallowRef(inputPanel) },
  { title: '分割线', component: shallowRef(dividerPanel) },
  
  // 表单组件
  { title: '选择器', component: shallowRef(selectPanel) },
  { title: '级联选择', component: shallowRef(cascaderPanel) },
  { title: '树形控件', component: shallowRef(treePanel) },
  { title: '霓虹开关', component: shallowRef(switchPanel) },
  
  // 展示组件
  { title: '赛博图片', component: shallowRef(cyberImagePanel) },
  { title: '故障图片', component: shallowRef(imagesPanel) },
  { title: '轮播图片', component: shallowRef(bannerPanel) },
  { title: '卡片', component: shallowRef(cardPanel) },
  
  // 反馈组件
  { title: '鼠标提示', component: shallowRef(tooltipPanel) },
  { title: '通知提示', component: shallowRef(notificationPanel) },
  { title: '加载器', component: shallowRef(loadingPanel) },
  
  // 数据组件
  { title: '数字翻牌器', component: shallowRef(digitalCounterPanel) },
  { title: '故障进度条', component: shallowRef(glitchProgressPanel) },
  { title: '赛博进度条', component: shallowRef(progressPanel) },
  { title: '滚动表格', component: shallowRef(tablePanel) },
  
  // 布局组件
  { title: '全屏滚动', component: shallowRef(fullpagePanel) },
  
  // 导航组件
  { title: '赛博菜单', component: shallowRef(menuPanel) },
]);

// 当前选中的组件面板
const activeMenu = shallowRef(dividerPanel);

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
