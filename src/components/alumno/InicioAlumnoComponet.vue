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
    <div>
    
<div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
    <div class="overflow-hidden shadow-md">
       
        <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
            Ya tienes tu proyecto!
            <p><strong>Nombre: </strong>{{getActiveProyect.name}}</p>
            <p><strong>Empresa: </strong>{{getActiveProyect.empresa}}</p>
            <p><strong>Periodo </strong>{{getActiveProyect.periodo}}</p>
            <p><strong>Asesor externo</strong>{{getActiveProyect.externalAsesor}}</p>
            <p><strong>Telefono</strong>{{getActiveProyect.phone}}</p>
        </div>
        <div class="p-6 bg-white border-b border-gray-200">
           Realiza tu reporte preeliminar y cuando este listo subelo aqui,
           despues "Academia" te valuara y te llegara un email de Aceptado o Rechazado,
           tambien puedes visitar la pagina para ver el estatus
        </div>
        <div class="flex justify-between w-full p-2">
          <div 
            v-if="getDataAlumn.statusPre !=='none' "
            class="w-full flex items-center justify-center">            
              <p class="bg-yellow-100 text-2xl font-bold text-yellow-500" v-if="getDataAlumn.statusPre ==='pendiente'">En revision</p>
              <p class="bg-red-100 text-2xl font-bold text-red-500" v-if="getDataAlumn.statusPre ==='rechazado'">No validado</p>
              <p class="bg-green-100 text-2xl font-bold text-green-500" v-if="getDataAlumn.statusPre ==='aceptado'">Validado</p>            
          </div>
        <div v-else class="w-full flex items-center justify-center">
          <p class="bg-gray-100 text-2xl font-bold text-gray-500" v-if="true">sube tu archivo PDF</p>
        </div>
          <div>
            <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Subir archivo</span>
        <span class="mt-2 text-base leading-normal">{{name}}</span>
        <input 
        @change="addFile"
        accept="application/pdf"
        type='file' 
        class="hidden" />
    </label>
          </div>
</div>
    </div>
</div>
    </div>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      pdf: File,
      name:""
    }
  },
  props: {
     changePage: {
      type: Function,
      default: ()=>{}
    },
  },
  computed: {
    ...mapGetters(["getDataAlumn","getActiveProyect"])
  },
  methods: {
    ...mapActions(["onSavePdfPreeliminarProyect"]),
    addFile(e){      
             this.pdf = e.target.files[0];             
             if(this.pdf.type === "application/pdf"){
               this.name = this.pdf.name
               this.onSavePdfPreeliminarProyect({
                 file:this.pdf,
                 name:this.getDataAlumn.nControl
               })
             }
        },
  },
}
</script>

<style>

</style>