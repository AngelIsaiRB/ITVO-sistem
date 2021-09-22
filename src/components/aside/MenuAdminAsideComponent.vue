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
            <svg
              class="h-6 px-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Profesores
          </button>
        </div>
        <div
          class=" mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer"
        >
        </div>

        <div class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
         
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