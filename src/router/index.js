import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/roots/Home.vue'
import Login from '../views/roots/Login.vue'
import LoginCreateAlum from '../views/login/LoginCreateAlum.vue'
import Admin from '../views/roots/Admin.vue';
import Proyects from '../views/roots/Proyects.vue';
import LoginDecision from '../views/roots/LoginDecision.vue';
import PublicViewProyects from '../views/roots/PublicViewProyects.vue';
import HomeAlumn from "../views/homeAlumn/HomeAlumn.vue"
const routes = [
  // Public
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginDecision',
    name: 'loginDecision',
    component: LoginDecision
  },
  {
    path: '/loginAlumn',
    name: 'LoginAlum',
    component: LoginCreateAlum
  },
  {
    path: '/publicProyects',
    name: 'publicProyects',
    component: PublicViewProyects
  },
  // Alums
  {
    path:"/homeAlumn",
    name:"homeAlum",
    component:HomeAlumn,
    meta:{
      isAlumnProtected:true
    }
  },

  // Admisn
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{protected :true}
  },
  {
    path: '/admin',
    name:"Administracion",
    component: Admin,
    meta:{protected :true}
  },
  {
    path: '/proyects',
    name:"proyects",
    component: Proyects,
    meta:{protected :true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.isAlumnProtected){
    if(localStorage.getItem("isLoggedAlumn")){
      next();
    }
    else{
      next("/loginDecision");
    }
  }
  else{
    next();
  }
})

router.beforeEach((to,from,next)=>{
  if(to.meta.protected){
    if(localStorage.getItem("isLogged")){
      next();
    }
    else{
      if(localStorage.getItem("isLoggedAlumn")){
        next("/homeAlumn");
      }
      next("/loginDecision");
    }
  }
  else{
    next();
  }
})
export default router
