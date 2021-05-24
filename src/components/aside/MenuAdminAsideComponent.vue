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
          <button
            class="text-gray-600 text-black text-sm font-semibold flex items-center focus:outline-none"
          >
            <svg
              class="h-5 px-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Componentes
          </button>
        </div>

        <div class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            otra cosa
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