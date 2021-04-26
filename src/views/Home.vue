<template>
<div v-if="modaNewProyect">
  <NewProyectVue :fucntionClose="closeModalNewProyect"/>
</div>
    <HeaderComponentVue/>
    <div class="grid grid-cols-12 mt-20  ">
    <div class=" col-span-2 ">
      <MenuAsideComponentVue 
      :functionNewPyoyect="openModalNew"
       />      
    </div>
    <!-- Main Page -->
    <div class="col-span-10  px-4 w-full pr-10 ">
      <div class="bg-white  mt-5">
        <div class="flex space-x-12">
          <div class="flex">
            <button
              class="text-blue-600 bg-blue-100 text-sm font-semibold flex items-center focus:outline-none border border-gray-300 rounded rounded-l-md rounded-r-none px-2 py-2"
            >
              Reportes
            </button>
            <button
              class="text-gray-600 text-sm font-semibold flex items-center focus:outline-none border border-l-0 border-r-0 border-gray-300 px-2 py-2"
            >
              revisión
            </button>
            <button
              class="text-gray-600 text-sm font-semibold flex items-center focus:outline-none border border-gray-300 rounded rounded-r-md rounded-l-none px-2 py-2"
            >
              otro...
            </button>
          </div>
        </div>

        <hr class="my-5" />

        <div class="flex justify-between">
          
          <h3 class="font-semibold text-gray-500">Agregar proyecto</h3>
          <div class="flex items-center">
            <h3 class="font-semibold text-gray-500">proyectos</h3>
            <svg
              class="h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4" >
          <div class="flex mt-5 cursor-pointer "  @click="openModalNew()">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="https://ssl.gstatic.com/analytics/rap/20210322_00020000/static/pngs/blank_google_add_2x.png" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">nuevo proyecto</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
          <div class="flex mt-5 cursor-pointer ">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="http://viplifezorrilla.com/sisMercadeo/public/img/usuario.jpg" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">Nombre de alumno</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
          <div class="flex mt-5 cursor-pointer ">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="http://viplifezorrilla.com/sisMercadeo/public/img/usuario.jpg" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">Nombre de alumno</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
          <div class="flex mt-5 cursor-pointer ">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="http://viplifezorrilla.com/sisMercadeo/public/img/usuario.jpg" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">Nombre de alumno</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
          <div class="flex mt-5 cursor-pointer ">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="http://viplifezorrilla.com/sisMercadeo/public/img/usuario.jpg" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">Nombre de alumno</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
          <div class="flex mt-5 cursor-pointer ">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="http://viplifezorrilla.com/sisMercadeo/public/img/usuario.jpg" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">Nombre de alumno</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuAsideComponentVue from '../components/aside/MenuAsideComponent.vue';
import HeaderComponentVue from '../components/header/HeaderComponent.vue';
import NewProyectVue from '../components/modals/NewProyect.vue';
export default {
  components: {
    NewProyectVue,
    HeaderComponentVue,
    MenuAsideComponentVue,
  },
  name: "Home",
  data() {
    return {
      modaNewProyect: false
    }
  },
  methods: {
    openModalNew() {
        this.modaNewProyect = true
    },
    closeModalNewProyect(){
      this.modaNewProyect = false      
    }
  },
};
</script>
