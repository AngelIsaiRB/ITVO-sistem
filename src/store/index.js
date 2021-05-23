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
  const db = firebase.firestore();
// 
export default createStore({
  state: {
    isLogged:false,
    usersAdmin:{},
    alertStatus:{
      status:false,
      msg:""
    },
  },
  mutations: {
    setLogged(state){
      state.isLogged = !state.isLogged;
    },
    setUsersAdmin(state,payload){
      state.usersAdmin = payload;
    },
    setAlertStatus(state,payload){
      state.alertStatus = {
        ...state.alertStatus,
        ...payload
      };
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
    },
   async getAllUsers({commit}){
      const payload=[];
      const profesors = db.collection("profesor");
     await profesors.get().then( (doc)=>{
         doc.forEach((prof)=>{
          // console.log(prof.data())
           payload.push(prof.data())
        })
        console.log("commit")
        commit("setUsersAdmin",{admins:payload})
      }).catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"hola mundo"
        })
        console.log(error)
      })
    },
    toggleAlertStatus({commit},payload){
      commit("setAlertStatus",payload)
    }
  },
  modules: {
  },
  getters:{
    getUsersAdmin(state){
      return state.usersAdmin;
    },
    getAlertStatus(state){
      return state.alertStatus;
    }
  }
})
