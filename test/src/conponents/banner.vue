<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <cyber-banner :imgWidth="200" :imgHeight="120" :imgList="imgList"></cyber-banner>
        </div>
        <div class="section">
            <div class="section-title">自定义动画</div>
            <cyber-banner :animationDuration="20" :imgList="imgList1" :shadow="false"></cyber-banner>
        </div>
    </div>
</template>
<script setup lang="ts">
const imgList = [
    'https://axydemo.netlify.app/images/img/Cyber.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber2.jpg',
    'https://axydemo.netlify.app/images/img/Cyber3.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber4.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber5.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber6.jpg',
    'https://axydemo.netlify.app/images/img/Cyber7.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber8.jpeg',
]
const imgList1 = [
    'https://axydemo.netlify.app/images/img/Cyber.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber2.jpg',
    'https://axydemo.netlify.app/images/img/Cyber3.jpeg',
    'https://axydemo.netlify.app/images/img/Cyber4.jpeg',
]
</script>
<style scoped lang="scss">
.content {
    padding: 20px;
    text-align: left;
}

.section {
    margin-bottom: 40px;
}

.section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ccc;
}
</style>
