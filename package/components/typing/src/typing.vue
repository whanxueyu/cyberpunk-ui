<template>
    <div class="cp-typing">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'CpTyping',
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
</style>