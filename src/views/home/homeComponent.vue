<template>
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
            @click="onChangeCategoryMenu(1)"
            :class="activeCategory===1 ?'text-blue-600 bg-blue-100' :'text-gray-600 bg-white'"
              class=" text-sm font-semibold flex items-center focus:outline-none border border-gray-300 rounded rounded-l-md rounded-r-none px-2 py-2"
            >
              Todos
            </button>
            <button
            @click="onChangeCategoryMenu(2)"
            :class="activeCategory===2 ?'text-blue-600 bg-blue-100' :'text-gray-600 bg-white'"
              class=" text-sm font-semibold flex items-center focus:outline-none border border-l-0 border-r-0 border-gray-300 px-2 py-2"
            >
              Revision Preliminar
            </button>
            <button
            @click="onChangeCategoryMenu(3)"
            :class="activeCategory===3 ?'text-blue-600 bg-blue-100' :'text-gray-600 bg-white'"
              class=" text-sm font-semibold flex items-center focus:outline-none border border-gray-300 rounded rounded-r-md rounded-l-none px-2 py-2"
            >
              Concluidos
            </button>
          </div>
        </div>

        <hr class="my-5" />
        <div v-if="activeCategory === 1" class="">
          <ProyectsComponentVue />
        </div>
        <div v-if="activeCategory === 2" class="">          
          <ProyectsForRevisionPreliminarComponentVue/>
        </div>
        <div v-if="activeCategory === 3" class="">
          <p>tercera categ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuAsideComponentVue from '../../components/aside/MenuAsideComponent.vue';
import HeaderComponentVue from '../../components/header/HeaderComponent.vue';
import ProyectsComponentVue from '../../components/home_category/ProyectsComponent.vue';
import ProyectsForRevisionPreliminarComponentVue from '../../components/preliminar/proyectsForRevisionPreliminarComponent.vue';
export default {
  components: {
    HeaderComponentVue,
    MenuAsideComponentVue,
    ProyectsComponentVue,
    ProyectsForRevisionPreliminarComponentVue,
  },
  name: "Home",
  data() {
    return {
      modaNewProyect: false,
      activeCategory : 1,
    }
  },
  methods: {
    openModalNew() {
        this.modaNewProyect = true
    },
    closeModalNewProyect(){
      this.modaNewProyect = false      
    },
    onChangeCategoryMenu(menuSelected){
      this.activeCategory = menuSelected
    },
  },
};
</script>
