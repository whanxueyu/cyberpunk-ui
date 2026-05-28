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
import scrollbarPanel from './conponents/scrollbar.vue';


console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI - Component Showcase"
);

// 当前选中的组件面板
const activeMenu = shallowRef(menuPanel);

// const handleMenuClick = (component: any) => {
//   activeMenu.value = component;
// };

// 菜单项数据结构
interface MenuItem {
  label: string;
  value: string;
  component?: any;
  children?: MenuItem[];
}

// 使用 CyberMenu 的多级菜单数据
const menuItems: MenuItem[] = [
  {
    label: '基础组件',
    value: 'basic',
    children: [
      { label: '按钮组', value: 'button', component: shallowRef(buttonPanel) },
      { label: '文字样式', value: 'text', component: shallowRef(textPanel) },
      { label: '输入框', value: 'input', component: shallowRef(inputPanel) },
      { label: '分割线', value: 'divider', component: shallowRef(dividerPanel) },
      { label: '滚动条', value: 'scrollbar', component: shallowRef(scrollbarPanel) }
    ]
  },
  {
    label: '表单组件',
    value: 'form',
    children: [
      { label: '选择器', value: 'select', component: shallowRef(selectPanel) },
      { label: '级联选择', value: 'cascader', component: shallowRef(cascaderPanel) },
      { label: '树形控件', value: 'tree', component: shallowRef(treePanel) },
      { label: '霓虹开关', value: 'switch', component: shallowRef(switchPanel) }
    ]
  },
  {
    label: '展示组件',
    value: 'display',
    children: [
      { label: '赛博图片', value: 'cyber-image', component: shallowRef(cyberImagePanel) },
      { label: '故障图片', value: 'glitch-image', component: shallowRef(imagesPanel) },
      { label: '轮播图片', value: 'banner', component: shallowRef(bannerPanel) },
      { label: '卡片', value: 'card', component: shallowRef(cardPanel) }
    ]
  },
  {
    label: '反馈组件',
    value: 'feedback',
    children: [
      { label: '鼠标提示', value: 'tooltip', component: shallowRef(tooltipPanel) },
      { label: '通知提示', value: 'notification', component: shallowRef(notificationPanel) },
      { label: '加载器', value: 'loading', component: shallowRef(loadingPanel) }
    ]
  },
  {
    label: '数据组件',
    value: 'data',
    children: [
      { label: '数字翻牌器', value: 'digital-counter', component: shallowRef(digitalCounterPanel) },
      { label: '故障进度条', value: 'glitch-progress', component: shallowRef(glitchProgressPanel) },
      { label: '赛博进度条', value: 'progress', component: shallowRef(progressPanel) },
      { label: '滚动表格', value: 'table', component: shallowRef(tablePanel) }
    ]
  },
  {
    label: '布局组件',
    value: 'layout',
    children: [
      { label: '全屏滚动', value: 'fullpage', component: shallowRef(fullpagePanel) }
    ]
  },
  {
    label: '导航组件',
    value: 'navigation',
    children: [
      { label: '赛博菜单', value: 'menu', component: shallowRef(menuPanel) }
    ]
  }
];

// 默认展开所有一级菜单
const expandedValues = ref(['basic', 'form', 'display', 'feedback', 'data', 'layout', 'navigation']);

// 处理菜单选择
const handleMenuSelect = (item: MenuItem) => {
  if (item.component) {
    activeMenu.value = item.component;
  }
};
</script>

<template>
  <layout>
    <template #aside>
      <CyberMenu
        :items="menuItems"
        direction="vertical"
        theme="neon"
        effect="glitch"
        :expanded-values="expandedValues"
        @select="handleMenuSelect"
      />
    </template>

    <template #content>
      <div class="main-content">
        <component :is="activeMenu" />
      </div>
    </template>
  </layout>
</template>

<style scoped lang="scss">
.main-content {
  width: 100%;
}
</style>
