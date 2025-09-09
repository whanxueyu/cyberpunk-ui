<template>
    <div class="content">
        <div>默认样式</div>

        <div class="flex">
            <cyber-tooltip content="这是一个提示信息">
                <u>悬停查看提示</u>
            </cyber-tooltip>
        </div>
        <div>不同位置</div>

        <div class="flex">
            <cyber-tooltip content="顶部提示" position="top">
                <u>顶部提示</u>
            </cyber-tooltip>

            <cyber-tooltip content="右侧提示" position="right">
                <u>右侧提示</u>
            </cyber-tooltip>

            <cyber-tooltip content="左侧提示" position="left">
                <u>左侧提示</u>
            </cyber-tooltip>

            <cyber-tooltip content="底部提示" position="bottom">
                <u>底部提示</u>
            </cyber-tooltip>

            <cyber-tooltip content="自动定位" position="auto">
                <u>自动定位</u>
            </cyber-tooltip>
        </div>
        <div>不同效果</div>

        <div class="flex">
            <cyber-tooltip content="全息效果" effect="hologram">
                <u>全息</u>
            </cyber-tooltip>

            <cyber-tooltip content="故障效果" effect="glitch">
                <u>故障</u>
            </cyber-tooltip>

            <cyber-tooltip content="扫描效果" effect="scan">
                <u>扫描</u>
            </cyber-tooltip>

            <cyber-tooltip content="淡入效果" effect="fade">
                <u>淡入</u>
            </cyber-tooltip>
        </div>
        <div>不同主题</div>

        <div class="flex">
            <cyber-tooltip content="霓虹主题" theme="neon">
                <u>霓虹</u>
            </cyber-tooltip>

            <cyber-tooltip content="终端主题" theme="terminal">
                <u>终端</u>
            </cyber-tooltip>

            <cyber-tooltip content="全息主题" theme="holographic">
                <u>全息</u>
            </cyber-tooltip>
        </div>
        <div>不同触发方式</div>

        <div class="flex">
            <cyber-tooltip content="悬停触发" trigger="hover">
                <u>悬停</u>
            </cyber-tooltip>

            <cyber-tooltip content="点击触发" trigger="click">
                <u>点击</u>
            </cyber-tooltip>

            <cyber-tooltip content="聚焦触发" trigger="focus">
                <u>聚焦</u>
            </cyber-tooltip>
        </div>
        <div>自定义内容</div>
        <div class="flex">
            <cyber-tooltip>
                <template #content>
                    <div style="font-size: 16px;font-weight: bold;">自定义标题</div>
                    <div>这是一段自定义内容</div>
                    <cyber-nenobutton type="primary" size="small" bg>操作按钮</cyber-nenobutton>
                </template>
                <u>查看详情</u>
            </cyber-tooltip>
        </div>
        <div style="font-size: 18px;">
            <div>默认样式</div>
            <div class="flex">
                <cyber-digital-counter :value="num1" />
                <cyber-button type="warning" size="small" @click="reLoad" content="重新加载">重新加载</cyber-button>
            </div>
            <div>动画时间（1，2，3，5，8，10）秒</div>
            <div class="flex">
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="1000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="2000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="3000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="5000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="8000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="10000" />
            </div>
            <div>不同主题</div>
            <div class="flex">
                <cyber-digital-counter :value="num2" theme="neon" />
                <cyber-digital-counter :value="num2" theme="digital" />
                <cyber-digital-counter :value="num2" theme="hologram" />
            </div>
            <div>前缀和后缀</div>
            <div class="flex">
                <cyber-digital-counter :value="num2" prefix="$" />
                <cyber-digital-counter :value="num3" suffix="%" />
                <cyber-digital-counter :value="num2" prefix="Level " suffix=" Achieved" />
            </div>
            <div>小数（1234.56789）</div>
            <div class="flex">
                <cyber-digital-counter :value="num4" :decimal="0" />
                <cyber-digital-counter :value="num4" :decimal="2" />
                <cyber-digital-counter :value="num4" :decimal="4" />
            </div>
            <div>分隔符（逗号空格横杠斜杠）</div>
            <div class="flex">
                <cyber-digital-counter :value="num5" separator="," />
                <cyber-digital-counter :value="num5" separator=" " />
                <cyber-digital-counter :value="num5" separator="-" />
                <cyber-digital-counter :value="num5" separator="/" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
const num1 = ref(999)
const num2 = ref(12345)
const num3 = ref(75)
const num4 = ref(1234.56789)
const num5 = ref(1234567.89)
const reLoad = () => {
    num1.value = 0;
    num2.value = 0;
    num3.value = 0;
    num4.value = 0;
    num5.value = 0;
    nextTick(() => {
        num1.value = 999;
        num2.value = 12345;
        num3.value = 75;
        num4.value = 1234.56789;
        num5.value = 1234567.89;
    })
}
</script>
<style scoped lang="scss">
.content {
    border-left: 1px solid #ccc;
    padding: 20px;
    text-align: left;
}

.flex {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &>* {
        margin-right: 20px;
    }
}
</style>
