<template>
<div class="">
    <div class="z-20  h-20 w-full bg-blue-800 flex items-center px-4 ">        
        <div class="mx-3">
            <BtnAddComponentVue :functionOpen="onNewProyect" :text='"Nuevo proyecto"'/>
        </div>        
        <div class="mx-3">
            <BtnAddComponentVue :functionOpen="onNewPeriod" :text='"Nuevo periodo"'/>
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
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Tomado</th>
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
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span class="relative inline-block px-3 py-1 font-semibold tex-black leading-tight">
                                <span aria-hidden class="absolute inset-0opacity-50 rounded-full"></span>
                                <span 
                                 :class="(proyect.status)?'bg-green-500':'bg-red-500'"
                                class="relative text-xs p-2 rounded-full">{{
                                   ( proyect.status)?'Visible':'No visible'
                                    }}</span>
                            </span>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span class="relative inline-block px-3 py-1 font-semibold tex-black leading-tight">
                                <span aria-hidden class="absolute inset-0opacity-50 rounded-full"></span>
                            <!-- TODO: arreglar overflow de texto muy grnade -->
                                <span 
                                 :class="(!proyect.picked)?'bg-green-500':'bg-red-500'"
                                class="relative text-xs p-2 rounded-full overflow-hidden ">{{
                                   (!proyect.picked)?'Disponible':'No disp.'
                                   
                                    }}</span>
                            </span>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                                {{proyect.empresa}}
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                                    detalles
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
export default {
    data() {
        return {
            proyects:[],          
        }
    },
    components: {
        BtnAddComponentVue,
    },
    methods: {
        ...mapActions(["getAllProyects"]),
        async onGetAllUsrs(){
           await this.getAllProyects(),
           this.proyects = await this.getAllPoryects;
           console.log(this.proyects)            
        },
        onNewProyect() {
            console.log("click en onNewProyect")
        },
        onNewPeriod(){
            console.log("click en onNewPeriod")
        }
    },
    computed: {
        ...mapGetters(["getAllPoryects"])
    },
    mounted () {
           this.onGetAllUsrs()
    },
}
</script>

<style>

</style>