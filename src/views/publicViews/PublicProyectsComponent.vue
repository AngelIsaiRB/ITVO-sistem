<template>
  <div class="">
      <div class="bg-blue-800 py-2 w-full  flex justify-around">
          <div>
              <img 
              class="w-20"
              src="https://www.voaxaca.tecnm.mx/wp-content/uploads/2020/05/itvo.ico" alt="">
          </div>
          <div class="h-auto flex items-center">
              <div class="mx-8">
                <p class="text-white font-bold text-2xl">ITVO - Proyectos para Recidencia profesional </p>
              </div>
          </div>
      </div>
      <!-- end header -->
      <div class="">
          <TablePublicProyectComponentVue/>
      </div>
  </div>
</template>

<script>
import TablePublicProyectComponentVue from './TablePublicProyectComponent.vue'
export default {
    components: {
        TablePublicProyectComponentVue,
    },
}
</script>

<style>

</style>