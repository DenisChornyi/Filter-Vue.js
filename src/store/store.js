import Vue from 'vue'
import Vuex from 'vuex'
import item from './modules/Item'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    item
  }
})
