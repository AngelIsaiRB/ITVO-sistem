import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/roots/Home.vue'
import Login from '../views/roots/Login.vue'
import Admin from '../views/roots/Admin.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{protected :true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name:"Administracion",
    component: Admin,
    meta:{protected :true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.protected){
    if(localStorage.getItem("isLogged")){
      next();
    }
    else{
      next("/login");
    }
  }
  else{
    next();
  }
})
export default router
