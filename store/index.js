import db from '~/plugins/firebaseInit'

export const state = () => ({
  invoiceModal: null,
  modal: null,
  invoiceData: [
    // {
    //   id: '#16759',
    //   billerStreetAddress: 'Test',
    //   billerCity: 'Test',
    //   illerPostCode: 'Test',
    //   billerCountry: 'Test',
    //   clientName: 'Test',
    //   clientEmail: 'Test',
    //   clientStreetAddress: 'Test',
    //   clientCity: 'Test',
    //   clientPostCode: 'Test',
    //   clientCountry: 'Test',
    //   invoiceDate: '__vue_devtool_undefined__',
    //   paymentTerms: '7',
    //   paymentDueDate: 'Aug 14, 2021',
    //   productDescription: 'Test',
    //   invoiceItemList:
    //   [
    //     {
    //       itemName: 'Test',
    //       total: 4.59,
    //       price: '4.59',
    //       id: '134aa9b7-201e-41be-a06b-ba111078d4be',
    //       qty: '1'
    //     }
    //   ],
    //   invoiceTotal: 4.59,
    //   invoicePending: null,
    //   invoiceDraft: true,
    //   invoicePaid: null
    // }
  ],
  invoicesLoaded: null
})

export const mutations = {
  toggleInvoice (state) {
    state.invoiceModal = !state.invoiceModal
  },
  toggleModal (state) {
    state.modal = !state.modal
  },
  resetModal (state) {
    state.modal = null
  },
  invoicesLoaded (state) {
    state.invoicesLoaded = true
  },
  setInvoiceData (state, payload) {
    state.invoiceData = payload
  }
}

export const actions = {
  toggleInvoice ({ commit }) {
    commit('toggleInvoice')
  },
  toggleModal ({ commit }) {
    commit('toggleModal')
  },
  resetModal ({ commit }) {
    commit('resetModal')
  },
  async getInvoices ({ commit, state }) {
    const getData = db.collection('invoices')
    const results = await getData.get()
    const dataArr = results.docs.map(doc => doc.data())
    commit('setInvoiceData', dataArr)
    commit('invoicesLoaded')
  }

}
