<template>
    <div class="cp-typing">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'CyberTyping',
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cp-typing {
  display: inline-block;
}

.content {
  font-weight: bold;
  border-right: 3px solid;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 8s steps(26, end), cursor-blink 0.5s step-end infinite alternate;
  animation-delay: 3s;
  font-family: Consolas, Monaco, monospace;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes cursor-blink {
  50% {
    border-color: transparent;
  }
}
</style>/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />

defineOptions({
    name: 'CyberTyping',
});
debugger;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cp-typing" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
var __VLS_0 = {};
;
;
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
;
//# sourceMappingURL=typing.vue.js.map