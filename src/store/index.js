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
    succesStatus:{
      status:false,
      msg:""
    },
    publicProyects:[],
    // proyects
    proyects:[],
    activeProyect:{},
    // 
    periods: [],
    // 
    alumno:{},
  },
  mutations: {
    setAlumno(state,payload){
      state.alumno = payload;
    },
    setActiveProyect(state,payload){
      state.activeProyect = payload;
    },
    setStatusPdfPreliminarLocal(state){
      state.alumno = {...state.alumno, statusPre:"pendiente"};
    },
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
    setSuccesStatus(state,payload){
      state.succesStatus = {
        ...state.succesStatus,
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
    toggleSuccesStatus({commit},payload){
      commit("setSuccesStatus",payload)
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
    async getProyectsForPeriod({commit},search){
      const payload=[];
      const proyects = db.collection("proyects").where("periodo","==", search);
     await proyects.get().then( (doc)=>{
         doc.forEach((proy)=>{
           payload.push({
             ...proy.data(),
             id:proy.id
           })
        })
        commit("setAllProyects",payload);
        // console.log(payload)
      }).catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"algo salio mal al traer los proyectos filtrados"
        })
        console.log(error)
      })
    },
    async toggleStatusProyect({commit},payload){
      await db.collection("proyects").doc(payload.id).update({status:payload.status}).
      then(()=>{
        commit("setSuccesStatus",{
          status:true,
          msg:"se actualizo es estatus del proyecto"
        })
      })
      .catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"algo salio mal al actualizar el documento"
        })
        console.log(error)
      })
    },
    async onUpdateProyectFirebase({commit},payload){
      await db.collection("proyects").doc(payload.id).update({
          name:payload.name,
          type:payload.type,
          periodo:payload.periodo,
          residents:payload.residents,
          empresa:payload.empresa,
          sector:payload.sector,
          rfc:payload.rfc,
          street:payload.street,
          colony:payload.colony,
          zipCode:payload.zipCode,
          municipio:payload.municipio,
          city:payload.city,
          estado:payload.estado,
          phone:payload.phone,
          email:payload.email,
          mision:payload.mision,
          titular:payload.titular,
          titularPosition:payload.titularPosition,
          externalAsesor:payload.externalAsesor,
          positionAsesor:payload.positionAsesor,
          namePersonAcuerdo:payload.namePersonAcuerdo,
          namePersonAcuerdoPosition:payload.namePersonAcuerdoPosition,
      }).
      then(()=>{
        commit("setSuccesStatus",{
          status:true,
          msg:"se actualizo el proyecto"
        })
      })
      .catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"algo salio mal al actualizar el proyecto"
        })
        console.log(error)
      })
    },
    async deleteProyect({commit},payload){
      await db.collection("proyects").doc(payload.id).delete().
      then(()=>{
        commit("setSuccesStatus",{
          status:true,
          msg:"se elimino el proyecto"
        })
      })
      .catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"algo salio mal al eliminar el documento"
        })
        console.log(error)
      })
    },
    async onSaveNewProyect({commit},payload){
      await db.collection("proyects").add({
        ...payload,
        actualResidents:0,
        piked:false,
        status:false,
        AlumnsInThisProyect:[]                
      })
      .then(()=>{
        commit("setSuccesStatus",{
          status:true,
          msg:"Proyecto agregado"
        })
      }).catch((error)=>{
        commit("setAlertStatus",{
          status:true,
          msg:"algo salio mal al guardar el proyecto"
        })
        console.log(error)
      })
    },
    // proyects publics
    async getAllPublicProyects({commit}){
      const payload =[];
      const proyects = db.collection("proyects").where("status", "==", true).where("picked", "==", false);
      await proyects.get().then((doc)=>{
        doc.forEach((proyect)=>{
          payload.push({...proyect.data(),id:proyect.id})
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
    // Alumnos-------------------
    async onGetAlumnForFirebase({commit}){
      const idAlum = localStorage.getItem("idAlumn");
      db.collection("usersAlums").doc(idAlum).get()
      .then(async (alm) =>{
        const data = alm.data();
        commit("setAlumno",data);
        if(data.myProyect){
          db.collection("proyects").doc(data.myProyect).get()
          .then(proy => commit("setActiveProyect",proy.data()))
        }
      })
    },
    async createUserAlumn({commit},payload){
      db.collection("usersAlums").where("nControl","==",payload.nControl).get()
      .then(async(e)=>{
        if(!e.empty){
          return commit("setAlertStatus",{
            status:true,
            msg:"no se creo usuario nControl ya usado"
          })
        }
        await db.collection("usersAlums").add({
          ...payload,
          role:"alumno",
          statusPre:"none",
        
        })
      .then((doc)=>{
        commit("setSuccesStatus",{
          status:true,
          msg:`usuario: ${payload.nControl} Agregado`
        })
        localStorage.setItem("isLoggedAlumn",true)
        localStorage.setItem("idAlumn",doc.id)
        localStorage.setItem("role","alumno")
        router.push("/homeAlumn")
      })
      .catch((error)=>{
        console.log(error)
        commit("setAlertStatus",{
          status:true,
          msg:"no se pudo crear el usuario"
        })
      })
      })
      .catch(
        (error)=>{
          console.log(error)
          commit("setAlertStatus",{
            status:true,
            msg:"no se creo usuario nControl ya usado"
          })
        }
      )
    },
    async loginUserAlumno({commit},payload){
      db.collection("usersAlums").where("email","==",payload.email).where("password","==",payload.password).get()
      .then((doc)=>{
        if(doc.docs.length === 1){
          doc.forEach((user)=>{  
            const id = user.id;
            const {nControl,role}= user.data();
            localStorage.setItem("isLoggedAlumn",true);
            localStorage.setItem("idAlumn",id);
            localStorage.setItem("role",role);
            router.push("/homeAlumn")
            commit("setSuccesStatus",{
              status:true,
              msg:`vienvenido: ${nControl} `
            })
          })
        }
        else{
          commit("setAlertStatus",{
            status:true,
            msg:"Email o correo incurrecto"
          })
        }
      })
      .catch((error)=>{
        console.log(error)
        commit("setAlertStatus",{
          status:true,
          msg:"Algo salio mal"
        })
      })

    },
    async onAddProyectToAlumn({commit},idProyect){
      const idUser = localStorage.getItem("idAlumn")
      if(!idUser){        
        commit("setAlertStatus",{
          status:true,
          msg:"Algo salio mal, intenta de nuevo"
        });
        return
      }
      const proyect = await db.collection("proyects").doc(idProyect);
      proyect.get().then(async(proy)=>{
        const {actualResidents,residents,picked,AlumnsInThisProyect } = await proy.data();
        if(picked){
          commit("setAlertStatus",{
            status:true,
            msg:"Proyecto lleno!"
          });
          return
        }
        const isLleno = (actualResidents+1 >= residents);
        await proyect.update({picked:isLleno,AlumnsInThisProyect:[...AlumnsInThisProyect,idUser],actualResidents:actualResidents+1});
       const userref= await db.collection("usersAlums").doc(idUser)
        userref.update({myProyect:idProyect}).then(()=>{
          userref.get().then(data =>commit("setAlumno",data.data()))
          commit("setSuccesStatus",{
            status:true,
            msg:`Se agrego el proyecto`
          })
        })
        .catch(()=>{
          commit("setAlertStatus",{
            status:true,
            msg:"Algo salio mal, sal de cuenta e inicia sesion de nuevo"
          });
          return
        })
      })
      
    },
    async onGetProyectForId({commit},id){
      db.collection("proyects").doc(id).get()
      .then(proyc=>{
        commit("setActiveProyect",proyc.data())
      })
    },
    async onSavePdfPreeliminarProyect({commit},payload){
      const refpdf = firebase.storage().ref(`/preliminares/${payload.name}-preliminar`);
      await refpdf.put(payload.file).then((snapshot)=>{
        snapshot.ref.getDownloadURL().then((url)=>{
          console.log(url);
        db.collection("usersAlums").doc(localStorage.getItem("idAlumn")).update({
          urlPreliminar:url,
          statusPre:"pendiente"
        })
        .then(()=>{
          commit("setStatusPdfPreliminarLocal")
          commit("setSuccesStatus",{
            status:true,
            msg:`Se agrego el PDF preliminar`
          })
        })
        .catch(()=>{
          commit("setAlertStatus",{
            status:true,
            msg:"Algo salio mal, sal de cuenta e inicia sesion de nuevo"
          });
          return
        })
        })
      })
    },
    // 
    // logout
    OnLogOutApplication(){
      localStorage.removeItem("isLoggedAlumn")
      localStorage.removeItem("idAlumn")
      localStorage.removeItem("role")
      localStorage.removeItem("isLogged")
      router.push("/")
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
    getSuccesStatus(state){
      return state.succesStatus;
    },
    getPublicProyects(state){
      return state.publicProyects;
    },
    getAllPeriods(state){
      return state.periods;
    },
    getDataAlumn(state){
      return state.alumno;
    },
    getActiveProyect(state){
      return state.activeProyect;
    }
  }
})
