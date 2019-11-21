import Vue from 'vue'
import Vuex from 'vuex'
import pack from './components/pack/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pack
  }
})
