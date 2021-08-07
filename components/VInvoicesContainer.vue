<template>
  <ul class="invoice__container">
    <VInvoiceListItem
      v-for="invoice in invoiceData"
      :key="invoice.id"
      :invoice="invoice"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'invoiceData'
    ])
  }
}
</script>

<style lang="scss">

.invoice__container {
  list-style-type: none;
  padding: 3rem 0;
}

</style>
