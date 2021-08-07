<template>
  <div>
    <div class="content">
      <VHeader />
      <Nuxt />
    </div>
  </div>
</template>

<script>

import VHeader from '@/components/VHeader.vue'

export default {
  components: {
    VHeader
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>

.content {
  overflow-x:hidden;
}

</style>
