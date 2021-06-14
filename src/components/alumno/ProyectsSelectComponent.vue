<template>
  <div class="w-full bg-gray-100">
   <div class="mx-2">
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-800">
            <th class="px-16 py-2">
              <span class="text-gray-300">Nombre</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Institucion</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Numero de residentes</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Lugares Disponibles</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Accion</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          <tr 
            v-for="(proyect,index) in getPublicProyects" :key="index"
          class="bg-white border-4 border-gray-200">
            <td>
              <span class="text-center ml-2 font-semibold">{{proyect.name}}</span>
            </td>
            <td class="px-16 py-2">
              <span>{{proyect.empresa}}</span>
            </td>
            <td class="px-16 py-2">
              <span>{{proyect.residents}}</span>
            </td>
            <td class="px-16 py-2">
              <span class="text-green-500">
                  {{proyect.residents-proyect.actualResidents}}
              </span>
            </td>
            <td class="px-16 py-2">                
                <div v-if="!getDataAlumn.myProyect">
              <button 
                @click="selectProyect(proyect.id)"
                class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Seleccionar
              </button>
                </div>
                <div v-else class="flex">
                    <button 
                class="bg-gray-500 text-white text-line px-4 py-2 border rounded-md line-through ">
                Seleccionar
              </button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

methods: {
        ...mapActions(["getAllPublicProyects","onAddProyectToAlumn"]),
        async onGetPublicProyects(){
            this.getAllPublicProyects()
        },
        async selectProyect(id){
             if (confirm(`¿Deseas tomar este proyecto?`)) { 
           await this.onAddProyectToAlumn(id)         
           
          } else {
            console.log('no.');
          }
        }
    },
    computed: {
        ...mapGetters(["getPublicProyects","getDataAlumn"])
    },
    created () {
        this.onGetPublicProyects();
    },
}
</script>

<style>

</style>