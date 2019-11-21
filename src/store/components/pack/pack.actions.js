export default {
  addPackItem: ({ commit }, payload) => {
    commit('removePackItemCount', payload)
  }
}
