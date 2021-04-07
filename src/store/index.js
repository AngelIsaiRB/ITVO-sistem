import { createStore } from 'vuex'
import router from '../router';

export default createStore({
  state: {
    isLogged:false,
  },
  mutations: {
    setLogged(state){
      state.isLogged = !state.isLogged;
    }
  },
  actions: {
    LoginUser({commit},payload){
      console.log(payload)
      localStorage.setItem("isLogged","true");
      commit("setLogged")
      router.push("/")
    }
  },
  modules: {
  }
})
