<script setup lang="ts">
import { ref } from "vue";
import layout from "./layout/layout.vue";

// 导入所有演示组件
import buttonPanel from "./conponents/button.vue";
import textPanel from "./conponents/text.vue";
import switchPanel from "./conponents/switch.vue";
import tooltipPanel from "./conponents/tooltip.vue";
import progressPanel from "./conponents/progress.vue";
import cardPanel from "./conponents/card.vue";
import loadingPanel from "./conponents/loading.vue";
import tablePanel from "./conponents/table.vue";
import imagesPanel from './conponents/images.vue'
import cyberImagePanel from './conponents/cyberimage.vue'
import bannerPanel from './conponents/banner.vue'

console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI - Component Showcase"
);

// 导航配置
const sections = [
    {
    title: '轮播图片',
    component: bannerPanel,
    hasContentBox: true,
  },
  {
    title: '赛博图片',
    component: cyberImagePanel,
    hasContentBox: true,
  },
  // {
  //   title: '故障图片',
  //   component: imagesPanel,
  //   hasContentBox: true,
  // },
  { title: '进度条', component: progressPanel, hasContentBox: false },
  { title: '滚动表格', component: tablePanel, hasContentBox: true },
  { title: '文字样式', component: textPanel, hasContentBox: true },
  { 
    title: '按钮组', 
    component: buttonPanel,
    hasContentBox: true,
    subTitles: ['故障按钮', '霓虹按钮', '反光按钮']
  },
  { title: '霓虹开关', component: switchPanel, hasContentBox: false },
  { 
    title: '提示与翻牌器', 
    component: tooltipPanel,
    hasContentBox: true,
    subTitles: ['鼠标提示', '数字翻牌器']
  },
  { title: 'Loading', component: loadingPanel, hasContentBox: true },
  { title: '卡片', component: cardPanel, hasContentBox: false },
];

// FullPage 组件配置
const sectionItems = sections.map(section => ({
  title: section.title,
  component: section.component,
}));

// 状态管理
const dotPosition = ref("right");
const showTitle = ref(true);

// 事件处理
const handleNavigate = (index: number, direction: string) => {
  console.log(`${direction}:`, index);
};

const handleChangePage = (content: any) => {
  console.log("Current page:", content);
};

const handleChangePosition = (position: string) => {
  dotPosition.value = position;
};

const handleChangeShow = (show: boolean) => {
  showTitle.value = show;
};
</script>

<template>
  <layout 
    @changePosition="handleChangePosition" 
    @changeShow="handleChangeShow"
  >
    <CyberFullPage
      :items="sectionItems"
      @toNext="(index: number) => handleNavigate(index, 'Next')"
      @toLast="(index: number) => handleNavigate(index, 'Last')"
      @change="handleChangePage"
      :position="dotPosition"
      :offset="60"
      :showTitle="showTitle"
    >
      <div 
        v-for="(section, index) in sections" 
        :key="index"
        class="section"
      >
        <div class="title">
          <!-- 有子标题的情况 -->
          <template v-if="section.subTitles">
            <div 
              v-for="(subTitle, idx) in section.subTitles" 
              :key="idx"
              class="title_text"
            >
              {{ subTitle }}
            </div>
          </template>
          <!-- 普通标题 -->
          <template v-else>
            {{ section.title }}
          </template>
        </div>
        
        <div v-if="section.hasContentBox" class="content-box">
          <component :is="section.component" />
        </div>
        <component v-else :is="section.component" />
      </div>
    </CyberFullPage>
  </layout>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
}

.title {
  min-width: 200px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .title_text {
    padding: 10px;
  }
}

.content {
  border-left: 1px solid #ccc;
  padding: 20px;
  text-align: left;
  height: calc(100% - 40px);
}

.content-box {
  height: 100%;
  width: calc(100% - 240px);
  overflow-y: auto;
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
