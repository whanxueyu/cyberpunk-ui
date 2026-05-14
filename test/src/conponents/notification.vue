<template>
    <div class="content">
        <div class="section">
            <div class="section-title">基础用法</div>
            <div class="flex">
                <cyber-button type="primary" size="default" @click="showInfo" content="Info">Info</cyber-button>
                <cyber-button type="success" size="default" @click="showSuccess" content="Success">Success</cyber-button>
                <cyber-button type="warning" size="default" @click="showWarning" content="Warning">Warning</cyber-button>
                <cyber-button type="danger" size="default" @click="showError" content="Error">Error</cyber-button>
            </div>
        </div>
        <div class="section">
            <div class="section-title">不同位置（点击按钮切换位置）</div>
            <div class="flex">
                <cyber-button 
                    :type="currentPosition === 'top-right' ? 'primary' : 'default'" 
                    size="small" 
                    @click="changePosition('top-right')">
                    右上角
                </cyber-button>
                <cyber-button 
                    :type="currentPosition === 'top-left' ? 'primary' : 'default'" 
                    size="small" 
                    @click="changePosition('top-left')">
                    左上角
                </cyber-button>
                <cyber-button 
                    :type="currentPosition === 'bottom-right' ? 'primary' : 'default'" 
                    size="small" 
                    @click="changePosition('bottom-right')">
                    右下角
                </cyber-button>
                <cyber-button 
                    :type="currentPosition === 'bottom-left' ? 'primary' : 'default'" 
                    size="small" 
                    @click="changePosition('bottom-left')">
                    左下角
                </cyber-button>
                <cyber-button 
                    :type="currentPosition === 'center' ? 'primary' : 'default'" 
                    size="small" 
                    @click="changePosition('center')">
                    居中
                </cyber-button>
            </div>
            <div class="position-hint">当前通知位置：{{ currentPosition }}</div>
        </div>
        <div class="section">
            <div class="section-title">不同效果</div>
            <div class="flex">
                <cyber-button type="primary" size="small" @click="showEffect('glitch')">Glitch</cyber-button>
                <cyber-button type="primary" size="small" @click="showEffect('hologram')">Hologram</cyber-button>
                <cyber-button type="primary" size="small" @click="showEffect('circuit')">Circuit</cyber-button>
            </div>
        </div>
        <div class="section">
            <div class="section-title">带操作按钮（自动居中且不自动关闭）</div>
            <div class="flex">
                <cyber-button type="warning" size="default" @click="showWithActions" content="显示带操作的通知">显示带操作的通知</cyber-button>
            </div>
        </div>
        <div class="section">
            <div class="section-title">自定义持续时间</div>
            <div class="flex">
                <cyber-button type="primary" size="small" @click="showWithDuration(2000)">2秒</cyber-button>
                <cyber-button type="primary" size="small" @click="showWithDuration(5000)">5秒</cyber-button>
                <cyber-button type="primary" size="small" @click="showWithDuration(0)">不自动关闭</cyber-button>
            </div>
        </div>
        <div class="section">
            <div class="section-title">清除所有</div>
            <div class="flex">
                <cyber-button type="danger" size="default" @click="clearAll" content="清除所有通知">清除所有通知</cyber-button>
            </div>
        </div>
    </div>
    <cyber-notification ref="notificationRef" :position="currentPosition" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const notificationRef = ref<any>(null)
const currentPosition = ref<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'>('top-right')

const changePosition = (position: typeof currentPosition.value) => {
    currentPosition.value = position
}

const showInfo = () => {
    notificationRef.value?.info({
        title: '信息提示',
        message: '这是一条信息通知',
    })
}

const showSuccess = () => {
    notificationRef.value?.success({
        title: '成功提示',
        message: '操作已成功完成',
    })
}

const showWarning = () => {
    notificationRef.value?.warning({
        title: '警告提示',
        message: '请注意当前操作',
    })
}

const showError = () => {
    notificationRef.value?.error({
        title: '错误提示',
        message: '操作失败，请重试',
    })
}

const showEffect = (effect: string) => {
    notificationRef.value?.create({
        title: '效果演示',
        message: `当前效果：${effect}`,
        effect: effect as any,
    })
}

const showWithActions = () => {
    notificationRef.value?.warning({
        title: '操作确认',
        message: '确定要执行此操作吗？此通知将自动居中显示且不会自动关闭',
        actions: [
            {
                text: '确认',
                callback: () => console.log('已确认'),
            },
            {
                text: '取消',
                callback: () => console.log('已取消'),
            },
        ],
    })
}

const showWithDuration = (duration: number) => {
    notificationRef.value?.info({
        title: '持续时间',
        message: duration === 0 ? '不会自动关闭' : `${duration / 1000}秒后关闭`,
        duration,
    })
}

const clearAll = () => {
    notificationRef.value?.clearAll()
}
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

.position-hint {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: rgba(0, 230, 246, 0.1);
    border-left: 3px solid #00e6f6;
    color: #00e6f6;
    font-size: 13px;
    border-radius: 4px;
}

.flex {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
}
</style>
