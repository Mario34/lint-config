<template>
  <div class="demo-vue">{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'demo-vue',
  setup() {
    return {
      msg: 'demo component'
    }
  }
})
</script>