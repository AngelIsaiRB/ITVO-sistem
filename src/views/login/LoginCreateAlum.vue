<template>
  <div>
      <section class="min-h-screen  flex  text-white ">
        <div class=" flex w-full  bg-no-repeat bg-gray-900 items-center" >
            <div class="w-full ">
                 <p class="text-5xl font-bold text-center tracking-wide">Registro</p>
                 <form @submit.prevent="onSubmitFormRegister()" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div class="pb-1 pt-2">
                        <p>nombre</p>
                        <input 
                        v-model="name"
                        type="text"                                                 
                        placeholder="Nombre" 
                        required
                        class="block w-full p-4 text-lg rounded-sm bg-black">                        
                    </div>
                    <div class="pb-1 pt-2">
                        <p>Carrera</p>
                        <select name="assesor" id="asesor"
                        v-model="carrera"
                        required
                            class="block w-full p-4 text-lg rounded-sm bg-black">
                            <option value="tics">TICS</option>
                            <option value="informatica">INFORMATICA</option>                            
                        </select>                       
                    </div>
                    <div class="pb-1 pt-2">
                        <p>No. de control</p>
                        <input 
                        v-model.trim="nControl"
                        type="number" 
                        name="ncontrol" 
                       placeholder="No. de control" 
                        required
                        class="block w-full p-4 text-lg rounded-sm bg-black">                        
                    </div>
                    <div class="pb-1 pt-2">
                        <p>Domicilio</p>
                        <input 
                        v-model="street"
                        type="text" 
                        name="ncontrol" 
                       placeholder="Domicilio" 
                        required
                        class="block w-full p-4 text-lg rounded-sm bg-black">                        
                    </div>
                    <div class="pb-1 pt-2">
                        <p>Colonia</p>
                        <input 
                        v-model="colony"
                        type="text" 
                        name="ncontrol" 
                       placeholder="Colonia" 
                        required
                        class="block w-full p-4 text-lg rounded-sm bg-black">                        
                    </div>
                    <div class="pb-1 pt-2">
                        <p>Municipio</p>
                        <input 
                        v-model.trim="municipio"
                        type="text" 
                        name="ncontrol" 
                       placeholder="Municipio" 
                        required
                        class="block w-full p-4 text-lg rounded-sm bg-black">                        
                    </div>
                    <div class="pb-1 pt-2">
                        <p>Email</p>
                        <input 
                        v-model.trim="email"
                        type="email" 
                        name="ncontrol" 
                       placeholder="Email" 
                        required
                        class="block w-full p-4 text-lg rounded-sm bg-black">                        
                    </div>
                    <div class="pb-1 pt-2">
                        <p>Telefono</p>
                        <input 
                        v-model.trim="tel"
                        type="number" 
                        name="ncontrol" 
                       placeholder="Telefono" 
                        required
                        class="block w-full p-4 text-lg rounded-sm bg-black">                        
                    </div>
                    <div class="pb-1 pt-2">
                        <input 
                        v-model="password"
                        class="block w-full p-4 text-lg rounded-sm bg-black" 
                        type="password" 
                        name="password" 
                        
                        placeholder="Contraseña">
                    </div>
                    <div class="px-4 pb-1 pt-2">
                        <button 
                        class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                        type="submit"
                        >
                        Registrarse</button>
                    </div>
                </form>
            </div>
            </div>
        <div class=" w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style="background-color: #161616;">
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <h1 class="my-6">
                    <p class="text-5xl font-bold text-center tracking-wide">Login Alumno</p>
                </h1>
                <p class="text-gray-100">
                    Credenciales
                </p>
                <form @submit.prevent="onSubmitForm()" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div class="pb-2 pt-4">
                        <input 
                        v-model.trim="emaillogin"
                        type="email" 
                        name="email" 
                       placeholder="Email" 
                        class="block w-full p-4 text-lg rounded-sm bg-black">
                        
                    </div>
                    <div class="pb-2 pt-4">
                        <input 
                        v-model="passwordlogin"
                        class="block w-full p-4 text-lg rounded-sm bg-black" 
                        type="password" 
                        name="password" 
                        
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
                        ¿Eres Administrador?</button>
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
            emaillogin:"",
            passwordlogin:"",
            email: "",
            password: "",
            name:"",
            carrera:"",
            nControl:0,
            street:"",
            colony:"",
            municipio:"",
            tel:0,
        }
    },
    methods:{
        ...mapActions(["createUserAlumn","loginUserAlumno"]),
        onSubmitForm(){
            this.loginUserAlumno({
                email:this.emaillogin,
                password:this.passwordlogin,
            })
            this.emaillogin = "";
            this.passwordlogin = "";
        },
        onSubmitFormRegister(){
            this.createUserAlumn({
                email:this.email,
                password:this.password,
                name:this.name,
                carrera:this.carrera,
                nControl:this.nControl,
                street:this.street,
                colony:this.colony,
                municipio:this.municipio,
                tel:this.tel,
            })
        },
        goToLoginAlumn(){
            router.push("/login")
        }
    }
}
</script>

<style>

</style>