<template>
  <div class="w-full ">
    <div v-if="!getDataAlumn.myProyect" class="w-full flex justify-center h-screen bg-gray-200 items-center">
        <div class="w-6/12 h-1/6 bg-blue-900 p-4 ">
        <div class="w-full flex justify-center">
            <p class="text-white font-bold text-2xl ">Hola {{getDataAlumn.name}}</p>
        </div>
        <div class="w-full flex justify-center">
            <p class="text-white font-bold text-2xl ">No tienes proyecto seleccionado</p>
        </div>
        <div class="w-full flex justify-center mt-6">
            <button 
              @click="changePage(1)"
              class="px-4 py-1 bg-white rounded-xl text-black font-bold text-xl ">Seleccionar uno +</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
     changePage: {
      type: Function,
      default: ()=>{}
    },
  },
  computed: {
    ...mapGetters(["getDataAlumn"])
  },
  created () {
    
  },
}
</script>

<style>

</style>