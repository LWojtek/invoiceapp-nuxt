export const state = () => ({
  invoiceModal: null,
  invoices: [
    {
      id: '#UG6033',
      date: '3 Sept 2021',
      name: 'Silvia Becker',
      amount: 165.28,
      status: 'paid'
    },
    {
      id: '#DU0412',
      data: '5 Aug 2021',
      name: 'Rhonda Adams',
      amount: 2681.87,
      status: 'pending'
    }
  ]
})

export const mutations = {
  toggleInvoice (state) {
    state.invoiceModal = !state.invoiceModal
  }
}

export const actions = {
  toggleInvoice ({ commit }) {
    commit('toggleInvoice')
  }
}
