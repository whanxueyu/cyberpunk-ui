<script setup lang="ts">
import { ref } from 'vue';
import layout from './layout/layout.vue';
import buttonPanel from './conponents/button.vue'
import textPanel from './conponents/text.vue'
import switchPanel from './conponents/switch.vue'
import tooltipPanel from './conponents/tooltip.vue'
import progressPanel from './conponents/progress.vue'
// import imagesPanel from './conponents/images.vue'
// import cyberImagePanel from './conponents/cyberimage.vue'
// import bannerPanel from './conponents/banner.vue'
import cardPanel from './conponents/card.vue';
import loadingPanel from './conponents/loading.vue';
import tablePanel from './conponents/table.vue'
console.log(
  '%c %s',
  'border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)',
  'CyberPunk-UI'
);
const toNext = (index: number) => {
  console.log("toNext", index)
}
const toLast = (index: number) => {
  console.log("toLast", index)
}
const changePage = (content: any) => {
  console.log("changePage", content)
}
const dotPosition = ref('right')
const changePosition = (position: string) => {
  dotPosition.value = position
}
const changeShow = (show: boolean) => {
  console.log(show)
  showTitle.value = show;
}
const sectionItems = [
  // {
  //   title: '轮播图片',
  //   content: 'buttonPanel'
  // },
  // {
  //   title: '赛博图片',
  //   content: 'imagesPanel'
  // },
  // {
  //   title: '故障图片',
  //   content: 'cyberImagePanel'
  // },
  {
    title: '滚动表格',
    content: 'tablePanel'
  },
  {
    title: '文字样式',
    content: 'textPanel'
  },
  {
    title: '故障按钮',
    content: 'buttonPanel'
  },
  {
    title: '进度条',
    content: 'switchPanel'
  },
  {
    title: '数字翻牌',
    content: 'tooltipPanel'
  },
  {
    title: '加载器',
    content: 'loadingPanel'
  },
  {
    title: '卡片',
    content: 'cardPanel'
  }
]
const showTitle = ref(true)
</script>

<template>
  <layout @changePosition="changePosition" @changeShow="changeShow">
    <CyberFullPage :items="sectionItems" @toNext="toNext" @toLast="toLast" @change="changePage" :position="dotPosition"
      :offset="60" :showTitle="showTitle">
      <!-- <div class="section">
        <div class="title">
          <div class="title_text">轮播图片
          </div>
        </div>
        <bannerPanel></bannerPanel>
      </div>
      <div class="section">
        <div class="title">
          <div class="title_text">赛博图片
          </div>
        </div>
        <cyberImagePanel></cyberImagePanel>
      </div>
      <div class="section">
        <div class="title">
          <div class="title_text">故障图片
          </div>
        </div>
        <imagesPanel></imagesPanel>
      </div> -->
      <div class="section">
        <div class="title">滚动表格</div>
        <div class="content-box">
          <tablePanel></tablePanel>
        </div>
      </div>
      <div class="section">
        <div class="title">文字样式</div>
        <div class="content-box">
          <textPanel></textPanel>
        </div>
      </div>
      <div class="section">
        <div class="title">
          <div class="title_text">故障按钮</div>
          <div class="title_text">霓虹按钮</div>
          <div class="title_text">反光按钮</div>
        </div>
        <div class="content-box">
          <buttonPanel></buttonPanel>
        </div>
      </div>
      <div class="section">
        <div class="title">
          <div class="title_text">霓虹开关</div>
          <div class="title_text">进度条</div>
        </div>
        <!-- <switchPanel></switchPanel> -->
        <progressPanel></progressPanel>
      </div>
      <div class="section">
        <div class="title">
          <div class="title_text">鼠标提示</div>
          <div class="title_text">数字翻牌器</div>
        </div>
        <div class="content-box">
          <tooltipPanel></tooltipPanel>
        </div>
      </div>
      <div class="section">
        <div class="title">
          <div class="title_text">loading</div>
        </div>
        <div class="content-box">
          <loadingPanel></loadingPanel>
        </div>
      </div>

      <div class="section">
        <div class="title">
          <div class="title_text">卡片</div>
        </div>
        <cardPanel></cardPanel>
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
