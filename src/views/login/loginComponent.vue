<template>
  <div>
      <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide">ITVO</h1>
                <p class="text-3xl my-4">Sistema de residencias</p>
            </div>
            </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style="background-color: #161616;">
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <h1 class="my-6">
                    <p class="text-5xl font-bold text-center tracking-wide">Administradores</p>
                </h1>
                <p class="text-gray-100">
                    Credenciales
                </p>
                <form @submit.prevent="onSubmitForm()" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div class="pb-2 pt-4">
                        <input 
                        v-model.trim="email"
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        class="block w-full p-4 text-lg rounded-sm bg-black">
                        
                    </div>
                    <div class="pb-2 pt-4">
                        <input 
                        v-model="password"
                        class="block w-full p-4 text-lg rounded-sm bg-black" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Contraseña">
                    </div>
                    <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <a href="#">¿Olvidaste la contraseña?</a>
                    </div>
                    <div class="px-4 pb-2 pt-4">
                        <button 
                        class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                        type="submit"
                        >
                        Ingresar</button>
                    </div>
                </form>
                <div class="w-full flex justify-end">
                    <button 
                    @click="goToLoginAlumn"
                        class="block text-base rounded-full bg-indigo-800 hover:bg-indigo-900 focus:outline-none px-4 py-2"                        
                        >
                        ¿Eres alumno?</button>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import router from '../../router'

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods:{
        ...mapActions(["LoginUser"]),
        onSubmitForm(){
            this.LoginUser({email:this.email, password : this.password })
            this.email = "";
            this.password = "";
        },
        goToLoginAlumn(){
            router.push("/loginAlumn")
        }
    }
}
</script>

<style>

</style>