<template>
  <aside class="col-span-4 bg-white h-screen py-5 w-60">
      <button
      @click="functionNewPyoyect()"
        class="flex items-center cursor align-middle py-2 bg-white shadow-md rounded-3xl text-gray-800 text-sm font-semibold ml-3 border border-gray-200 hover:shadow-xl transition-all w-36 focus:outline-none"
      >
        <svg class="h-8 px-4" viewBox="0 0 36 36">
          <path class="ng-tns-c17-1" d="M16 16v14h4V20z" fill="#34A853"></path>
          <path
            class="ng-tns-c17-1"
            d="M30 16H20l-4 4h14z"
            fill="#4285F4"
          ></path>
          <path class="ng-tns-c17-1" d="M6 16v4h10l4-4z" fill="#FBBC05"></path>
          <path class="ng-tns-c17-1" d="M20 16V6h-4v14z" fill="#EA4335"></path>
          <path class="ng-tns-c17-1" d="M0 0h36v36H0z" fill="none"></path></svg
        >Nuevo
      </button>

      <div class="mt-5">
        <div
        @click="goTo('/proyects')"
          class="bg-blue-50 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold"
        >
          <button
            class="text-blue-500 text-sm font-semibold flex items-center focus:outline-none"
          >
               <i class="fas fa-th-list a-lg mx-4"></i>
            Proyectos
          </button>
        </div>
        <div
          class="mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold"
        >
          <button
            class="text-black text-sm font-semibold flex items-center focus:outline-none"
          >
               <i class="fas fa-cubes fa-lg mx-4"></i>
            Proyectos Activos
          </button>
        </div>

        <div class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
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

        <div class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Eliminados
          </button>
        </div>

        <hr class="my-2" />
        <div 
        @click="goTo('/admin')"
          class="mt-1 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold hover:bg-gray-100 cursor-pointer">
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