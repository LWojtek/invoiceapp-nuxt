<template>
  <div class="invoices__header--right">
    <div class="invoices__header--filter" @click="modal = !modal">
      <div class="text__wrapper">
        Filter by status
      </div>
      <div class="icon__wrapper">
        <i class="fas fa-chevron-down" />
      </div>
    </div>
    <div class="invoices__header--btn">
      <div class="icon__wrapper">
        <i class="fas fa-2x fa-plus-circle" />
      </div>
      <div class="text__wrapper" @click="showNewInvoice">
        New Invoice
      </div>
    </div>
    <transition name="modal">
      <VFilterModal v-if="modal" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      modal: false
    }
  },
  computed: {
    ...mapState([
      'invoiceModal'
    ])
  },
  methods: {
    showNewInvoice () {
      this.$store.dispatch('toggleInvoice')
    }
  }
}
</script>

<style lang="scss" scoped>

.modal-enter,
.modal-leave-to {
  visibility: hidden;
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

</style>
