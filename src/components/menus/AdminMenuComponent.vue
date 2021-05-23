<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-4 w-full h-full">
        <div class=" w-full h-full flex justify-center items-center">
            <button 
              @click="functionOpen"
              class="flex justify-center min-w-xl items-center bg-green-200 h-4/6 w-10/12 hover:bg-green-500 text-black hover:text-white rounded-lg">
                <i class="fas fa-plus mr-6"></i>
                <p class="font-black text-sm md:text-xl"> Agregar profesor</p>
            </button>
        </div>           
    </div>
  </div>
</template>

<script>
export default {
  props: {
    functionOpen: {
       type: Function,
       default: () =>{}
    },
  },
}
</script>

<style>

</style>