import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pageRow:20
    },
    mutations: {
        setPageRow(state,data){
          state.pageRow = data;
        }
    },
    actions: {},
    modules: {}
})