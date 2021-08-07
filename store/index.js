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
    state.invoiceData.push(payload)
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
    results.forEach((doc) => {
      if (!state.invoiceData.some(invoice => invoice.id === doc.id)) {
        const data = {
          id: doc.data().id,
          billerStreetAddress: doc.data().billerStreetAddress,
          billerCity: doc.data().billerCity,
          billerPostCode: doc.data().billerPostCode,
          billerCountry: doc.data().billerCountry,
          clientName: doc.data().clientName,
          clientEmail: doc.data().clientEmail,
          clientStreetAddress: doc.data().clientStreetAddress,
          clientCity: doc.data().clientCity,
          clientPostCode: doc.data().clientPostCode,
          clientCountry: doc.data().clientCountry,
          invoiceDate: doc.data().invoiceData,
          paymentTerms: doc.data().paymentTerms,
          paymentDueDate: doc.data().paymentDueDate,
          productDescription: doc.data().productDescription,
          invoiceItemList: doc.data().invoiceItemList,
          invoiceTotal: doc.data().invoiceTotal,
          invoicePending: doc.data().invoicePending,
          invoiceDraft: doc.data().invoiceDraft,
          invoicePaid: doc.data().invoicePaid
        }
        commit('setInvoiceData', data)
      }
    })
    commit('invoicesLoaded')
  }

}
