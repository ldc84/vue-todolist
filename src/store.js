import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    list(state) {
      return state.list;
    }
  },
  actions: {
    setListUpdate(context, item){
      context.commit('M_LIST', item);
    },
    setListDetete(context, item){
      context.commit('M_DELETE', item);
    },
    setListModify(context, item){
      context.commit('M_MODIFY', item);
    },
  },
  mutations: {
    M_LIST(state, item) {
      state.list.push({
        title: item,
        modify: false,
        checked: false
      });
    },
    M_DELETE(state, item) {
      state.list.splice(item, 1);
    },
    M_MODIFY(state, item) {
      console.log(item);
    },
  }
})
