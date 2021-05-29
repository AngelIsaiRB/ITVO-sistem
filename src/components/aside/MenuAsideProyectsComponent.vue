<template>
  <aside class="col-span-4 bg-white h-screen py-5 w-60 bg-gray-100">
      
      <div class="mt-5">
          <div 
          @click="goToHome()"
            :class="selected === 0
                ?'bg-blue-200'
                :''"
            class="mt-1 mr-50 rounded  pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
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
            class="mt-1 mr-50 rounded  pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
          >
             <i class="fas fa-folder th-list mx-4 "></i>
            Proyectos
          </button>
        </div>
        <div
          class=" mr-50 rounded  pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer"
        >
          <button
            class="text-black text-black text-sm font-semibold flex items-center focus:outline-none"
          >
            <i class="fas fa-cubes fa-lg mx-4"></i>
            algo
          </button>
        </div>

        <div class="mt-1 mr-50 rounded  pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
          >
          <i class="fas fa-folder fa-lg mx-4 "></i>
            algo
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
            selected: 1,
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