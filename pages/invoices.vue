<template>
  <div class="container invoices">
    <VContent />
  </div>
</template>

<script>
export default {
  name: 'VInvoices'
}
</script>

<style lang="scss" scoped>

.invoices {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media screen and (max-width: 999px){
    padding-top: 10.3rem;
  }
}
</style>
