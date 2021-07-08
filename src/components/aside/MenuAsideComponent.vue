<template>
  <aside class="col-span-4 bg-white h-screen py-5 w-60">
     <div class="mt-5">
        <div
          class="bg-blue-50 mr-50 hover:bg-blue-300 cursor-pointer  pl-6 py-3 font-semibold"
        >
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
          >
               <i class="fas fa-cubes fa-lg mx-4"></i>
            Activos
          </button>
        </div>
        <div
        @click="goTo('/proyects')"
          class="mr-50 hover:bg-blue-300 cursor-pointer  pl-6 py-3 font-semibold"
        >
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
          >
               <i class="fas fa-th-list a-lg mx-4"></i>
            Proyectos
          </button>
        </div>

        <div class="mt-1 mr-50 hover:bg-blue-300 cursor-pointer  pl-6 py-3 font-semibold">
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
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
            proyectos por profesores
          </button>
        </div>
        <hr class="my-2" />
        <div 
        @click="goTo('/admin')"
          class="mt-1 mr-50 hover:bg-blue-300 cursor-pointer  pl-6 py-3 font-semibold hover:bg-gray-100 cursor-pointer">
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
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
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            Administracion
          </button>
        </div>
      </div>
    </aside>
</template>

<script>
import router from '../../router/index.js'
export default {
    props: {
        functionNewPyoyect: {
            type: Function,
            default: ()=>{}
        },
    },
    methods: {
      goTo(route) {
        router.push(route)
      }
    },
}
</script>

<style>

</style>