<template>
    <div class="cp-full-page">
        <div ref="element" :class="{ activeTranstion: isCloseTranstion }" class="inner-box" @mousewheel="mousewheel"
            @touchstart="handleTouchStart" @touchend="handleTouchEnd" @touchmove="handleTouchMove">
            <slot></slot>
        </div>
        <div :class="['cp-full-dot', props.position]">
            <div v-for="i, index in props.pageNum" @click="changeBac(index)" class="cp-full-dot-item">
                <div class="cp-full-dot-item-bg" :class="{ active: index === $index }"></div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
defineOptions({
    name: 'CpFullPage',
})
const props = defineProps(['pageNum', "position"])
const emits = defineEmits(['toNext', 'toLast', 'change'])
// ELEMENT
const element = ref()
watchEffect(() => {
    if (element.value?.style) {
        // element.value.style.transform = transformScroll.value
        element.value.style.top = transformScroll.value
    }
})

//HEIGHT
const height = ref(window.innerHeight)
const windowHeight = computed(() => {
    // 高度变化时需要关闭动画
    isCloseTranstion.value = true
    return height.value
})
const transformScroll = computed(() => {
    // return `translateY(-${$index.value * windowHeight.value}px)`
    return `-${$index.value * windowHeight.value}px`
})

const isCloseTranstion = ref(false) //控制是否显示动画效果
const canRun = ref(true) //节流控制器

function mousewheel(e) {
    isCloseTranstion.value = false
    if (canRun.value) {
        canRun.value = false
        goScroll(e)
        setTimeout(() => {
            canRun.value = true
        }, 500)
    }
}

//#region 移动端
const startY = ref(0) //记录开始位置
const endY = ref(0) //记录结束位置
const moveDistance = ref(0) //滑动距离

// 触摸开始
function handleTouchStart(e) {
    startY.value = e.touches[0].pageY || e.changedTouches[0].pageY
}

// 触摸抬起
function handleTouchEnd(e) {
    e.preventDefault()
    // 抬起时开启动画
    isCloseTranstion.value = false
    // 计算结束距离
    endY.value = e.changedTouches[0].pageY || e.touches[0].pageY
    // 计算移动距离，判断应该上一页还是下一页，直接更改index即可在原先基础上整页移动
    moveDistance.value = endY.value - startY.value
    // 这里我做了一个最小值 大于50才翻页
    if (Math.abs(moveDistance.value) >= 60) {
        if ($index.value < props.pageNum - 1 && moveDistance.value < 0) {
            $index.value++
        }
        if ($index.value > 0 && moveDistance.value > 0) {
            $index.value--
        }
    } else {
        // 当临界值小于60意味着不需要翻页 就恢复原来的位置即可
        // element.value.style.transform = `translateY(-${$index.value * windowHeight.value}px)`
        element.value.style.top = `-${$index.value * windowHeight.value}px`
    }
}

// 触摸移动
function handleTouchMove(e) {
    isCloseTranstion.value = true // 开始移动 关闭动画
    // e.stopPropagation()
    e.preventDefault()
    // if (isIOS()) {
    //   return
    // }
    moveDistance.value = (e.changedTouches[0].pageY || e.touches[0].pageY) - startY.value // 计算移动距离\
    //判断临界点
    const isCriticalPoint =
        ($index.value === props.pageNum - 1 && moveDistance.value < 0) ||
        ($index.value === 0 && moveDistance.value > 0)
    // 如果是临界点就直接返回
    if (isCriticalPoint) {
        return
    }
    // 否则直接对内层容器应用 随之移动
    // element.value.style.transform = `translateY(-${$index.value * windowHeight.value + moveDistance.value * -1}px)`
    element.value.style.top = `-${$index.value * windowHeight.value + moveDistance.value * -1}px`
}
//#endregion

//ANOTHER writting about full-page
// const { y } = useScroll(document)
// watchThrottled(
//   y,
//   (newValue, oldValue) => {
//     if (newValue > oldValue && newValue > 120) {
//       next()
//     } else {
//       last()
//     }
//   },
//   { throttle: 300 },
// )

function goScroll(e) {
    //e.wheelDelta 用来判断上一个下一个 <0 下一个 >0上一个
    emits('change', e.wheelDelta)
    if (e.wheelDelta < 0) {
        next()
    } else {
        last()
    }
}

//$INDEX
const $index = ref(0) //索引控制第几个显示
// 下一个
function next() {
    if ($index.value < props.pageNum - 1) {
        $index.value++
        emits('toNext', $index.value)
    }
}
// 上一个
function last() {
    if ($index.value > 1 || $index.value === 1) {
        $index.value--
        emits('toLast', $index.value)

    }
}

// 点击切换
function changeBac(index) {
    // 点击切换时需要开启动画
    console.log(index)
    isCloseTranstion.value = false
    $index.value = index
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.activeTranstion {
    transition: all 0ms ease 0s !important;
}

.active {
    display: inline-block;
    width: 12px !important;
    height: 12px !important;
    transition: all .2s;
}

.cp-full-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    .inner-box {
        position: absolute;
        width: 100%;
        transition: all ease-in-out 0.3s;

        .scroll-element {
            // height: 100%;
            background-size: cover !important;
            background-position: center;
            background-repeat: no-repeat;
            transition: all ease-in-out .2s;
        }
    }

    .section {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        transition: all ease-in-out .2s;
    }

    .cp-full-dot {
        list-style: none;
        position: fixed;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        transition: all ease-in-out .2s;

        &.left {
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
        }

        &.top {
            left: 50%;
            top: 20px;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
        }

        &.bottom {
            left: 50%;
            bottom: 20px;
            top: auto;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
        }

        .cp-full-dot-item {
            height: 14px;
            width: 14px;
            margin: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            transition: all ease-in-out .2s;

            .cp-full-dot-item-bg {
                border-radius: 100%;
                border: #fff solid 1px;
                width: 4px;
                height: 4px;
                display: inline-block;
                // background-color: #fff;
                box-shadow: 0 0 5px 1px #666;
                transition: all ease-in-out 0.2s;
            }

            &:hover .cp-full-dot-item-bg {
                width: 10px;
                height: 10px;
                // background-color: #fff;
                box-shadow: 0 0 5px 1px #666;
                cursor: pointer;
                transition: all ease-in-out .2s;
            }
        }
    }
}
</style>