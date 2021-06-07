<template>
  <div class="w-full bg-red-100">
    <div v-if="true" class="w-full flex justify-center h-screen bg-gray-200 items-center">
        <div class="w-6/12 h-1/6 bg-blue-900 p-4 ">
        <div class="w-full flex justify-center">
            <p class="text-white font-bold text-2xl ">Hola {{`nombre de alumno`}}</p>
        </div>
        <div class="w-full flex justify-center">
            <p class="text-white font-bold text-2xl ">No tienes proyecto seleccionado</p>
        </div>
        <div class="w-full flex justify-center mt-6">
            <button class="px-4 py-1 bg-white rounded-xl text-black font-bold text-xl ">Seleccionar uno +</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>