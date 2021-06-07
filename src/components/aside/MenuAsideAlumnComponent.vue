<template>
  <aside class="col-span-4 bg-white h-screen py-5 w-60">
      <div class="mt-5">
          <div 
          @click="goToHome()"
            :class="selected === 0
                ?'bg-blue-200'
                :''"
            class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-gray-600 text-sm font-semibold flex items-center focus:outline-none"
          >
              <i class="fas fa-home fa-lg mx-6 "></i>
            Home
          </button>
        </div>
        <hr>
          <div 
            :class="selected === 1
                ?'bg-blue-200'
                :''"
            class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-gray-600 text-sm font-semibold flex items-center focus:outline-none"
          >
              <i class="fas fa-folder fa-lg mx-4 "></i>
            Archivos
          </button>
        </div>
        <div
          class=" mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer"
        >
          <button
            class="text-gray-600 text-black text-sm font-semibold flex items-center focus:outline-none"
          >
            <i class="fas fa-comment fa-lg mx-4"></i>
            Comentarios
          </button>
        </div>

        <div class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-gray-600 text-sm font-semibold flex items-center focus:outline-none"
          >
          <i class="fas fa-folder fa-lg mx-4 "></i>
            otro
          </button>
        </div>
      </div>
    </aside>
</template>

<script>
import router from '../../router'
export default {
    data() {
        return {
            selected: 0,
        }    
    },
    props: {
        functionNewPyoyect: {
            type: Function,
            default: ()=>{}
        },
    },
    methods: {      
      goToHome() {
        router.push("/")
      }
    },
}
</script>

<style>

</style>