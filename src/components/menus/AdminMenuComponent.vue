<template>
  <div class="w-full h-full">
            <!-- <button 
              @click="functionOpen"
              class="flex justify-center min-w-xl items-center bg-green-200 h-4/6 w-10/12 hover:bg-green-500 text-black hover:text-white rounded-lg">
                <i class="fas fa-plus mr-6"></i>
                <p class="font-black text-sm md:text-xl"> Agregar profesor</p>
            </button> -->
            <div class="flex ">
          <div class="flex">
            <button
            @click="functionOpen"
            :class="activeCategory===1 ?'text-blue-600 bg-blue-100' :'text-gray-600 bg-white'"
              class=" text-sm font-semibold flex items-center focus:outline-none border border-gray-300 rounded-md px-2 py-2
              hover:bg-blue-200"
            >
             <i class="fas fa-plus mr-6"></i>
              Nuevo profesor
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