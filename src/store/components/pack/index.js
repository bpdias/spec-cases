import state from './pack.state'
import actions from './pack.actions'
import mutations from './pack.mutations'
import getters from './pack.getters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
