<template>
  <div>
    <div class="content">
      <VHeader v-if="path !== '/' " />
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
  layout: 'default',
  data () {
    return {
      path: this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  position: relative;
}

</style>
