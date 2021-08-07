<template>
  <div class="invoices__content">
    <VInvoicesHeader />
    <VInvoicesContainer />
    <transition name="popup">
      <VModal v-if="modal" class="popup" />
    </transition>
    <transition name="modal">
      <VInvoiceModal />
    </transition>
    <div class="blur" :class="{active : invoiceModal}" @click="discardInvoice" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['invoiceModal', 'modal'])
  },
  beforeCreate () {
    this.$store.dispatch('getInvoices')
  },
  methods: {
    discardInvoice () {
      this.$store.dispatch('toggleModal')
    }
  }
}
</script>

<style lang="scss" scoped>

.popup-enter,
.popup-leave-to {
  visibility: hidden;
  opacity: 0;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.25s ease;
}

  .invoices__content {
    width: 100vw;
    height: 100vh;
    padding: 8rem 2rem 2rem;

    @media screen and (max-width: 999px){
      height: 100%;
    }
  }

  .blur {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;

    background-color: rgba(0,0,0, .5);
    opacity: 0;
    z-index: -1;
    transition: opacity 400ms;

    @media screen and (max-width: 999px){
      max-height: 100vh;
    }

    &.active {
      z-index: 0;
      opacity: 1;
    }
  }
</style>
