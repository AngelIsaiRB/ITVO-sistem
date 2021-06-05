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
    publicProyects:[],
    // proyects
    proyects:[],
    ActiveProyect:{},
    // 
    periods: []
  },
  mutations: {
    setLogged(state){
      state.isLogged = !state.isLogged;
    },
    setUsersAdmin(state,payload){
      state.usersAdmin = payload;
    },
    setAllProyects(state,payload){
      state.proyects = payload
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
    },
    // public commits proyects
    setPublicProyects(state,payload){
      state.publicProyects = payload;
    },
    // period
    setAllPeriods(state,payload){
      state.periods = payload;
    }
  },
  actions: {
    // login user super root
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
    // 
    // profesores
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
    async onSaveProfesorFirebase({commit},payload){
      const refimg = firebase.storage().ref(`/photos/profesor/${payload.nameImg}`);
      await refimg.put(payload.img).then((snapshot) =>{
        snapshot.ref.getDownloadURL().then((url)=>{
          console.log(url)
          db.collection("profesor").add({
            name:payload.name,
            email:payload.email,
            img:url
          }).then((result)=>{
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
    },
    // 
    // alertas
    toggleAlertStatus({commit},payload){
      commit("setAlertStatus",payload)
    },
    // proyectos
    async getAllProyects({commit}){
      const payload=[];
      const proyects = db.collection("proyects");
     await proyects.get().then( (doc)=>{
         doc.forEach((proy)=>{
           payload.push({
             ...proy.data(),
             id:proy.id
           })
        })
        commit("setAllProyects",payload)
        // console.log(payload)
      }).catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"algo salio mal al traer los proyectos"
        })
        console.log(error)
      })
    },
    // proyects publics
    async getAllPublicProyects({commit}){
      const payload =[];
      const proyects = db.collection("proyects").where("status", "==", true);
      await proyects.get().then((doc)=>{
        doc.forEach((proyect)=>{
          payload.push(proyect.data())
        })
      })
      .catch((error)=>{
        console.log(error)
        commit("setAlertStatus",{
          status:true,
          msg:"no se pudo extraer los proyectos publicos"
        })
      })
     commit("setPublicProyects",payload)
    },
    // 
    // periodos
    onSaveNewPeriod(_,payload){   
      console.log(payload)   
       db.collection("period").doc().set({
        period:payload.period,        
      })
      .then(()=>{
        console.log("peridodo guardado");
      })
    },
    async getAllPeriodsFirebase({commit}){
      const payload=[];
      const periods = db.collection("period");
      await periods.get().then((doc)=>{
        doc.forEach((peri)=>{
          payload.push( peri.data());
        })
        commit("setAllPeriods",payload)
      }).catch((error)=>{
        console.log(error)
      })
    },
    // 
  },
  modules: {
  },
  getters:{
    getUsersAdmin(state){
      return state.usersAdmin;
    },
    getAllPoryects(state){
      return state.proyects;
    },
    getAlertStatus(state){
      return state.alertStatus;
    },
    getPublicProyects(state){
      return state.publicProyects;
    },
    getAllPeriods(state){
      return state.periods;
    }
  }
})
