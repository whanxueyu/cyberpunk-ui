<template>
    <div class="content">
        <div class="section">
            <div class="section-title">默认样式</div>
            <div class="flex">
                <cyber-digital-counter :value="num1" />
                <cyber-button type="warning" size="small" @click="reLoad" content="重新加载">重新加载</cyber-button>
            </div>
        </div>
        <div class="section">
            <div class="section-title">动画时间</div>
            <div class="flex">
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="1000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="2000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="3000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="5000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="8000" />
                <cyber-digital-counter :value="num1" :from="0" :to="num1" :duration="10000" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">不同主题</div>
            <div class="flex">
                <cyber-digital-counter :value="num2" theme="neon" />
                <cyber-digital-counter :value="num2" theme="digital" />
                <cyber-digital-counter :value="num2" theme="hologram" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">前缀和后缀</div>
            <div class="flex">
                <cyber-digital-counter :value="num2" prefix="$" />
                <cyber-digital-counter :value="num3" suffix="%" />
                <cyber-digital-counter :value="num2" prefix="Level " suffix=" Achieved" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">小数位数</div>
            <div class="flex">
                <cyber-digital-counter :value="num4" :decimal="0" />
                <cyber-digital-counter :value="num4" :decimal="2" />
                <cyber-digital-counter :value="num4" :decimal="4" />
            </div>
        </div>
        <div class="section">
            <div class="section-title">分隔符</div>
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
    padding: 20px;
    text-align: left;
}

.section {
    margin-bottom: 40px;
    font-size: 40px;
}

.section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ccc;
}

.flex {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>
