<template>
  <div class="invoices__content">
    <VInvoicesHeader />
    <VInvoicesContainer />
    <transition name="modal">
      <VInvoiceModal />
    </transition>
    <div class="blur" :class="{active : invoiceModal}" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['invoiceModal'])
  },
  created () {
    this.$nuxt.$on('showInvoice', () => {
      this.isActive = !this.isActive
    })
  }
}
</script>

<style lang="scss" scoped>

  .invoices__content {
    width: 100vw;
    height: 100vh;
    padding: 8rem 2rem 2rem;

    @media screen and (max-width: 999px){
      height: 100%;
    }
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0, .5);
    opacity: 0;
    z-index: -1;
    transition: opacity 400ms;

    @media screen and (max-width: 999px){
      max-height: calc(100vh);
    }

    &.active {
      z-index: 0;
      opacity: 1;
    }
  }
</style>
