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
      context.commit('M_LIST', { todo: item });
    },
    setListDetete(context, item){
      context.commit('M_DELETE', { todo: item });
    },
    setListModify(context, item){
      context.commit('M_MODIFY', item);
    },
    getListShow(context, list){
      context.commit('M_SHOW_LIST', list);
    }
  },
  mutations: {
    M_LIST(state, payload) {
      const list = {
        title: payload.todo,
        checked: false
      }
      state.list.push(list);
      this.commit('M_SET_LOCALSTORAGE');
    },
    M_DELETE(state, payload) {
      state.list.splice(payload.todo, 1);
      this.commit('M_SET_LOCALSTORAGE');
    },
    M_MODIFY(state, payload) {
      state.list[payload].checked = !state.list[payload].checked;
      this.commit('M_SET_LOCALSTORAGE');
    },
    M_SET_LOCALSTORAGE(state) {
      localStorage.setItem('todoList', JSON.stringify(state.list));
    },
    M_SHOW_LIST(state, payload) {
      const localList = localStorage.hasOwnProperty('todoList') ? JSON.parse(localStorage.todoList) : localStorage.setItem('todoList', JSON.stringify([]));
      state.list = localList;
    }
  }
})
