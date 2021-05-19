import { createStore } from 'vuex';
import router from '../router';
import firebase from 'firebase';

// firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyBBFFiFGqzO9djayQ7UNOV8ngkBR-Qx5c4",
    authDomain: "itvo-titulacion-integral.firebaseapp.com",
    projectId: "itvo-titulacion-integral",
    storageBucket: "itvo-titulacion-integral.appspot.com",
    messagingSenderId: "792269148058",
    appId: "1:792269148058:web:91977f07df9a1086c7b423",
    measurementId: "G-JDK4E63G89"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// 
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
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
      .then((user)=>{
        const userData = user.user;
        console.log(userData.uid)
        console.log(userData.displayName)
        localStorage.setItem("isLogged","true");
        commit("setLogged")
        router.push("/")
      })      
    }
  },
  modules: {
  }
})
