<template>  
    <div 
        class="z-40 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75">
        <div class="h-full w-full flex justify-center items-center">
            <div class="z-50 w-9/12 bg-white px-10 py-2">
               <form 
                        @submit.prevent="onSaveNewProyect()"
                        >
                   <div class="w-full flex justify-center">
                       <p class="text-gray-800 font-medium my-2 ">Nuevo Proyecto</p>
                   </div>
                   <div class="">
                       <p class="text-black text-xl font-medium my-2 ">Datos de Proyecto</p>
                         <p class="block text-base text-gray-600 mr-4">Nombre del proyecto:</p>
                      <textarea 
                      v-model="name"
                      class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none 
                      w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                      name="body" 
                      placeholder='Titutlo de proyecto' required></textarea>
                   </div>
                   <div class="flex justify-center my-4">
                       <div class="flex items-center">
                           <p class="block text-base text-gray-600 mr-4">Tipo de Proyecto:</p>   
                           <input 
                           class=""
                           v-model="typeProyect" type="radio"  name="optionProyect"  value="0">
                           <label class="mx-2" for="">Proyecto INTERNO </label>
                           <input 
                           class=""
                            v-model="typeProyect" type="radio"  name="optionProyect" value="1">
                           <label class="mx-2" for="">Proyecto EXTERNO </label>
                           <input 
                           class=""
                            v-model="typeProyect" type="radio"  name="optionProyect" value="2">
                           <label class="mx-2" for="">Proyecto PROPUESTA </label>
                       </div>
                   </div>
                   <div class="flex w-full">
                       <div class="w-6/12 flex items-center">
                           <p class="block text-base text-gray-600 mr-4">Periodo Proyectado:</p>
                           <select
                           v-model="period"
                              class="w-7/12 px-5 py-1 text-black bg-gray-200 rounded"
                              name="monthStart" id="start">                             
                                <option  v-for="period in getAllPeriods" :key="period" :value="period.period">{{period.period}}</option>                              
                    </select>
                       </div>
                       <div class="flex">
                            <p class="block text-base text-gray-600 mr-4">Numero de residentes</p>
                            <input min="1" max="10" type="number" class="px-4 text-black bg-gray-200 rounded">
                           </div>                       
                   </div>
                   <hr class="my-2">
                   <div>
                         <p class="text-black text-xl font-medium my-2 ">Datos de la empresa</p>
                   </div>
                   <div class="flex my-2">
                       <p class="block text-base text-gray-600 mr-4">Nombre:</p>
                       <input 
                       v-model="nameEmpresa"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                   </div>
                   <div class="flex justify-between my-2">
                       <div class="flex w-full">
                        <p class="block text-base text-gray-600 mr-4">Giro, Ramo o Sector:</p>
                        <select
                    v-model="sector"
                        class="w-6/12 px-5 py-1 text-black bg-gray-200 rounded"
                        name="monthStart" id="end">
                        <option selected value="Publico">Publico</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Servicos">Servicos</option>
                        <option value="Privado">Privado</option>
                        <option value="Otro">Otro</option>
                    </select>
                       </div>
                       <div class="flex w-6/12">
                        <p class="block text-base text-gray-600 mr-4">RFC:</p>
                        <input 
                        v-model="rfc"
                        class="w-10/12 px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                   </div>
                    <div class="flex my-2">

                    </div>
                   <!-- btns -->
                   <div class="w-full flex justify-around mb-4">
                    <button type="submit"  class=" mt-4 px-4 py-1 text-white font-light tracking-wider bg-black rounded"
                    >Guardar</button>
                    <button type="button" 
                     @click="functionModal(false)"
                     class=" mt-4 px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    >Cancelar</button> 
                   </div>
               </form>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props: {
        functionModal: {
            type: Function,
            default: ()=>{
                console.log("no asigando")
            },
        },
    },
    data() {
        return {
            name:"",
            typeProyect:0,
            period:"",
            numberOfResidents:1,
            nameEmpresa:"",
            sector:"",
            rfc:"",

        }
    },
    methods: {
        ...mapActions(["onSaveNewPeriod","getAllPeriodsFirebase"]),
        onSaveNewProyect(){
                console.log({
                    name:this.name,
                    typeProyect:this.typeProyect,
                    period:this.period,
                    residents:this.numberOfResidents,
                    nameEmpresa:this.nameEmpresa,
                    sector:this.sector,
                    rfc:this.rfc

                })
            },
            async onGetAllPeriods(){
                await this.getAllPeriodsFirebase();
            }
    },
    computed: {
        ...mapGetters(["getAllPeriods"])
    },
    created () {
        this.onGetAllPeriods();
    },
}
</script>

<style scope>
input[type="radio"] + label span {
    transition: background.2s,
      transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  background-color: #3490DC; 
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #3490DC; 
}

</style>