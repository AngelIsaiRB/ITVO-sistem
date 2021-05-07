<template>
  <div class="flex justify-between">
          
          <h3 class="font-semibold text-gray-500">Agregar proyecto</h3>
          <div class="flex items-center">
            <h3 class="font-semibold text-gray-500">proyectos</h3>
            <svg
              class="h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" >
          <div class="flex mt-5 cursor-pointer "  @click="openModalNew()">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="https://ssl.gstatic.com/analytics/rap/20210322_00020000/static/pngs/blank_google_add_2x.png" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">nuevo proyecto</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
          <div v-for="x in (10)" :key="x" >
            <CardAlimnoProyectsVue />
          </div>
        </div>
</template>

<script>
import CardAlimnoProyectsVue from '../cards/CardAlimnoProyects.vue'
export default {
  components: {
    CardAlimnoProyectsVue,
  },
    props: {
        openModalNew: {
            type: Function,
            default: ()=>{}
        },
    },
}
</script>

<style>

</style>