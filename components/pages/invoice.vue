<template>
  <div>
    <h1>Some text</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  data () {
    return {
      invoiceId: this.$route.params.id
    }
  },
  computed: {
    ...mapState(['invoiceData']),
    currentInvoice () {
      let result

      for (let i = 0; i < this.invoiceData.length; i++) {
        if (this.invoiceData[i].id === this.id) {
          result = this.invoiceData[i]
          break
        }
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
