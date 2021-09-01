<template>
<div class="">
      
    
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
                                
                                
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Empresa</th>
                                
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
                            
                            
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                                {{proyect.empresa}}
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
export default {
    components: {
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