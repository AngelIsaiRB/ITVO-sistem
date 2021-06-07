<template>
<div class="">
      <div>
        <div v-if="isModalOpenNewPeriod">
        <NewPeriodComponentVue
            :functionModal="onNewPeriodModal"
        />
    </div>    
    <div v-if="isModalOpenNewProyect">
        <NewProyectComponentVue
         :functionModal="onNewProyect"
         :isUpdate="isUpdate"
         :proyectToUpdate="proyectUpdate"
        />   
    </div>
    </div>
    <div class="z-20  h-20 w-full bg-blue-800 flex items-center px-4 justify-between">        
        <div class="flex">
            <div class="mx-3">
            <BtnAddComponentVue :functionOpen="onNewProyect" :text='"Nuevo proyecto"'/>
        </div>        
        <div class="mx-3">
            <BtnAddComponentVue :functionOpen="()=>onNewPeriodModal(true)" :text='"Nuevo periodo"'/>
        </div> 
        </div>    
        <div class="flex">
            <div class="flex items-center">
            <select
                   v-model="periodo"
                      class="w-7/12 px-5 py-1 text-black bg-gray-200 rounded"
                      name="monthStart" id="start">                             
                        <option  v-for="period in getAllPeriods" :key="period" :value="period.period">{{period.period}}</option>                              
            </select>
            <button 
                    @click="getAllProyectsForPeriod"
                    class=" mx-2 px-4  py-1 text-white font-light tracking-wider bg-black rounded">Filtrar
                  <i class="fas fa-search  "></i>
            </button>
            </div> 
            </div>          
    </div>
    <div class="">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 ">
                <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">nombre</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Tipo</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Periodo</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Estatus publico</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Tomado por alumnos</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Empresa</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                        <tr v-for="proyect in proyects" :key="proyect.id">
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div class="flex items-center">
                                    <div>
                                        <div class="text-sm leading-5 text-gray-800">{{proyect.id}}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div class="text-sm leading-5 text-blue-900">{{proyect.name}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{{
                                    (proyect.type === 0)?'Proyecto interno':
                                    (proyect.type === 1)?'Proyecto externo':'Propuesta propia'
                                }}</td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{{proyect.periodo}}</td>
                            <td 
                                @click="()=>{
                                    toggleProyectPublicStatus(proyect.status,proyect.id);
                                    proyect.status =! proyect.status
                                }"                                    
                                class="px-6 cursor-pointer py-4 whitespace-no-wrap border-b text-black border-gray-500 text-sm leading-5">
                                <span class="relative inline-block px-3 py-1 font-semibold tex-black leading-tight">
                                <span aria-hidden class="absolute inset-0opacity-50 rounded-full"></span>
                                <span 
                                 :class="(proyect.status)?'bg-green-500':'bg-red-500'"
                                class="flex relative text-xs p-2 rounded-full items-center">{{
                                   ( proyect.status)?'Visible':'Oculto'
                                    }} 
                                    <i class="fas fa-exchange-alt mx-1"></i>
                                    </span>
                                    
                            </span>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span class="relative inline-block px-3 py-1 font-semibold tex-black leading-tight">
                                <span aria-hidden class="absolute inset-0opacity-50 rounded-full"></span>
                            <!-- TODO: arreglar overflow de texto muy grnade -->
                                <span 
                                 :class="(!proyect.picked)?'bg-green-500':'bg-red-500'"
                                class="relative text-xs p-2 rounded-full overflow-hidden ">{{
                                   (!proyect.picked)?'Libre':'Tomado'
                                   
                                    }}</span>
                            </span>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                                {{proyect.empresa}}
                            </td>
                            <td 
                                @click="onUpdatePryoyect(proyect)"
                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button class="my-1 w-20 py-1 border-yellow-500 border text-blue-500 rounded 
                                transition duration-300 hover:bg-yellow-700 hover:text-white focus:outline-none">
                                    Editar
                                </button>
                                <button 
                                @click="onDeleteProyect(proyect.id)"
                                class="my-1 w-20 py-1 border-red-500 border text-blue-500 rounded 
                                transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                    Eliminar
                                </button>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BtnAddComponentVue from '../../components/buttons/BtnAddComponent.vue'
import NewPeriodComponentVue from '../../components/modals/NewPeriodComponent.vue'
import NewProyectComponentVue from '../../components/modals/NewProyectComponent.vue'
export default {
    components: {
        NewProyectComponentVue,
        BtnAddComponentVue,
        NewPeriodComponentVue,
    },
    data() {
        return {
            proyects:[],
            isModalOpenNewPeriod:false,   
            isModalOpenNewProyect:false,   
            periodo:"",
            isUpdate:false,
            proyectUpdate:{},
        }
    },
    methods: {
        ...mapActions(["getAllProyects",
        "getProyectsForPeriod",
        "getAllPeriodsFirebase",
        "toggleStatusProyect",
        "deleteProyect",
        ]),
        async onGetAllProyects(){
           await this.getAllProyects(),
           this.proyects = await this.getAllPoryects;
        },
        async getAllProyectsForPeriod(){
            await this.getProyectsForPeriod(this.periodo);
            this.proyects = await this.getAllPoryects;
        },
        onNewProyect(payload) {
            this.isModalOpenNewProyect =payload
        },
        onNewPeriodModal(payload){
            this.isModalOpenNewPeriod= payload;
        },
        async onGetAllPeriods(){
                await this.getAllPeriodsFirebase();
        },
        toggleProyectPublicStatus(status,id){
            status = !status;
            this.toggleStatusProyect({status,id})
        },
        onDeleteProyect(id){
            if (confirm(`Desea eliminar el proyecto`)) { 
            this.deleteProyect({id});
             this.onGetAllProyects();  
          } else
            console.log('no.');
        },
       async  onUpdatePryoyect(payload){          
            this.isUpdate=true;
            this.proyectUpdate = payload;
            await this.onNewProyect(true);
        }
    },
    computed: {
        ...mapGetters(["getAllPoryects","getAllPeriods"])
    },
    mounted () {
           this.onGetAllProyects()
           this.onGetAllPeriods()
    },
}
</script>

<style>

</style>