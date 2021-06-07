<template>
<div class="absolute top-0 w-screen">
    <div class="flex justify-center">
        <img class="w-40" src="https://www.voaxaca.tecnm.mx/wp-content/uploads/2020/05/itvo.ico" alt="">
    </div>
</div>
  <div class="flex w-screen h-screen">
      <div 
        @click="goToAdmin"
        class="w-6/12 h-full bg-white text-black hover:text-white hover:bg-black hover:bg-opacity-90">
        <div class="flex h-full w-full justify-center items-center">
            <div class="w-full">
                <div class="flex justify-center">
                    <p class="text-4xl font-semibold">Admnistradores</p>
                </div>
                <div class="flex justify-center">
                    <button class=" text-2xl bg-blue-900 rounded-full px-20 py-4">
                        <i class="fas fa-arrow-left"></i>
                        Entrar
                        </button>                       
                </div>
            </div>

        </div>
      </div>
      <div 
        @click="goToAlum"
        class="w-6/12 h-full bg-white text-black hover:text-white hover:bg-black hover:bg-opacity-90">
        <div class="flex h-full w-full justify-center items-center">
            <div class="w-full">
                <div class="flex justify-center">
                    <p class="text-4xl font-semibold">Alumnos</p>
                </div>
                <div class="flex justify-center">
                    <button class=" text-2xl bg-blue-900 rounded-full px-20 py-4">Entrar
                        <i class="fas fa-arrow-right"></i>
                        </button>                   
                </div>
            </div>
            </div>          
      </div>
  </div>
</template>

<script>
import router from '../../router'
export default {    
    methods: {
        goToAdmin() {
            router.push("/login")            
        },
        goToAlum(){
            router.push("/loginAlumn")
        }
    },

}
</script>

<style>

</style>