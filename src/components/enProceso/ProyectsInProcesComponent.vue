<template>
<div class="h-full w-full">
              <div>
                  <div class="">
                <div class="">
      
    
    <div class="">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 ">
                <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <!-- <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th> -->
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">nombre</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Tipo</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Periodo</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Alumno</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Reporte</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Opciones</th>                                
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                        <tr v-for="proyect in getAllPoryectsModePreliminar" :key="proyect.id">
                            <!-- <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div class="flex items-center">
                                    <div>
                                        <div class="text-sm leading-5 text-gray-800">{{proyect.id}}</div>
                                    </div>
                                </div>
                            </td> -->
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div class="text-sm leading-5 text-blue-900">{{proyect.name}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{{
                                    (proyect.type === 0)?'Proyecto interno':
                                    (proyect.type === 1)?'Proyecto externo':'Propuesta propia'
                                }}</td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{{proyect.periodo}}</td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                               <div v-for="alumn in proyect.AlumnsInThisProyect" :key="alumn">
                                  <p>{{alumn}}                                    
                                  </p>
                               </div>
                            </td>
                            <td>
                              <button 
                              @click="getLink(proyect.AlumnsInThisProyect[0])"
                              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>                              
                              <span>Download</span>
                            </button>
                            </td>
                            <td 
                                class=" px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button 
                                class="my-1 w-20 py-1 bg-green-500 border-green-500 border text-black rounded 
                                transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">
                                    Concluir
                                </button>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</div>
                    </div>                  
              </div>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    },
  data() {
    return {
      proyects: []
    }
  },
    methods: {
      ...mapActions(["getAllProyects","getLinkToDownloadReporteDeRecidencia","getDataAlumnPerID"]),
      async getLink(id){
        await this.getLinkToDownloadReporteDeRecidencia(id)
      }
    },
    computed: {
      ...mapGetters(["getAllPoryectsModePreliminar"])
    },
    async mounted () {
    },
}
</script>

<style>

</style>