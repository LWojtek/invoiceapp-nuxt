<template>
  <ul class="invoice__container">
    <VInvoice
      v-for="invoice in invoices"
      :key="invoice.id"
      :invoice="invoice"
    />
  </ul>
</template>

<script>
export default {
  computed: {
    invoices () {
      return this.$store.state.invoices
    }
  }
}
</script>

<style lang="scss">

.invoice__container {
  list-style-type: none;
  padding: 3rem 0;
}

</style>
