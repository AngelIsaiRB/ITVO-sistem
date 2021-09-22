<template>
 <div>
     <div class="w-full grid grid-cols-5 mx-4">
         <div class="h-10 m-1 bg-gray-200">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">Nombre</p>
             </div>
         </div>
         <div class="h-10 m-1 bg-gray-200">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">Numero de resdientes</p>
             </div>
         </div>
         <div class="h-10 m-1 bg-gray-200">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">Espacios disponibles</p>
             </div>
         </div>
         <div class="h-10 m-1 bg-gray-200">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">Nombre de la empresa</p>
             </div>
         </div>
         <div class="h-10 m-1 bg-gray-200">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">Nombre de responsable</p>
             </div>
         </div>
     </div>
     <div 
     @click="openLogin()"
     v-for="(proyect,index) in getPublicProyects" :key="proyect.id"
        class="my-2 mx-4 cursor-pointer"
     >
         <hr>
     <div class="w-full grid grid-cols-5"
          :class="((index%2) === 0 )?'bg-blue-100':'bg-blue-300'"
          >          
         <div class="h-auto">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">{{proyect.name}}</p>
             </div>
         </div>
         <div class="h-10 ">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">{{proyect.residents}}</p>
             </div>
         </div>
         <div class="h-10 ">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">{{proyect.residents - proyect.actualResidents}}</p>
             </div>
         </div>
         <div class="h-10 ">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">{{proyect.empresa}} </p>
             </div>
         </div>
         <div class="h-10 ">
             <div class="h-full w-full flex items-center justify-center">
                 <p class="text-xl font-semibold ">{{proyect.externalAsesor}} </p>
             </div>
         </div>
     </div>
     </div>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '../../router'
export default {
    data() {
        return {
            toggle: true
        }
    },
    methods: {
        ...mapActions(["getAllPublicProyects"]),
        async onGetPublicProyects(){
            this.getAllPublicProyects()
        },
        openLogin(){
            router.push("/loginDecision")
        }
    },
    computed: {
        ...mapGetters(["getPublicProyects"])
    },
    created () {
        this.onGetPublicProyects();
    },
}
</script>

<style>

</style>