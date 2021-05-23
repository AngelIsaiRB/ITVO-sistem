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
    usersAdmin:{
      admins:[]
    },
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
    setOnlyOneAdmin(state,payload){
      state.usersAdmin.admins.push(payload)
    },
    setAlertStatus(state,payload){
      state.alertStatus = {
        ...state.alertStatus,
        ...payload
      };
    },
    deleteFromUsersAdmin(state,payload){
      state.usersAdmin.admins = state.usersAdmin.admins.filter((admin)=>{
        if(admin.id !== payload){
          return admin
        }
      })
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
           payload.push({
             ...prof.data(),
             id:prof.id
           })
        })
        commit("setUsersAdmin",{admins:payload})
        console.log("get all users ok")
      }).catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"algo salio mal al traer los profesores"
        })
        console.log(error)
      })
    },
    async deleteUserForFirebase({commit},payload){
      db.collection("profesor").doc(payload).delete().then(
        ()=>{
          alert("profesor eliminado")
        }
      ).catch((error)=>{
        console.log(error)
        commit("setAlertStatus",{
          status:true,
          msg:"no se pudo eliminar"
        })
      })
      commit("deleteFromUsersAdmin",payload)
    },
    toggleAlertStatus({commit},payload){
      commit("setAlertStatus",payload)
    },
    async onSaveProfesorFirebase({commit},payload){
      const refimg = firebase.storage().ref(`/photos/profesor/${payload.nameImg}`);
      await refimg.put(payload.img).then((snapshot) =>{
        snapshot.ref.getDownloadURL().then((url)=>{
          console.log(url)
          // guardar en DB
          db.collection("profesor").add({
            name:payload.name,
            email:payload.email,
            img:url
          }).then((result)=>{
            // console.log(ev.id)
            commit("setOnlyOneAdmin",{
            name:payload.name,
            email:payload.email,
            img:url,
            id:result.id
            })
            console.log("profero agregado")
          })
          // 
        })
      });
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
