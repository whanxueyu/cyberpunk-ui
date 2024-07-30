## button 按钮

<!-- <script setup lang="ts">
import { CPButton } from 'cyberpunk-ui'
</script>

<c-p-button>CyberPunkUI</c-p-button> -->

```vue
<script setup lang="ts">
import { CpButton } from 'cyberpunk-ui'
</script>
<template>
    <cp-button>CyberPunkUI</cp-button>
</template>
```

| 名称        | 类型           | 默认值  | 说明  |
| ------------- |:-------------:| -----:| -----:|
| color      | string | #333333 | 支持色值#333333或red |
| size      | number      |   14 |  支持屏幕缩放 |
| icon | string      |    AddCircle |  参考图标库 | 作者：MissBluee https://www.bilibili.com/read/cv27664516/ 出处：bilibili