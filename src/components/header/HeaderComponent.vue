<template>
  <header class="bg-white shadow-sm w-full fixed z-10 top-0">
    <div class="max-auto px-8 py-2 bg-white">
      <div class="flex justify-between">
        <div 
        @click="goToHome()"
        class="logo flex items-center space-x-4 mr-10 cursor-pointer">
          <img
            class="h-14"
            src="https://www.voaxaca.tecnm.mx/wp-content/uploads/2020/05/itvo.ico"
            alt=""
          />
          <h1 class="text-black text-2xl">ITVO</h1>
        </div>
        <div 
        v-if="!isUser"
        class="flex-1 ml-8">
          <div class="w-full inline-flex">
            <input
              type="text"
              placeholder="Buscar en sistema"
              class="w-full rounded-md text-gray-800 bg-gray-100 focus:bg-white focus:outline-none focus:shadow-lg py-3 px-10 max-w-xl text-md focus:text-gray-800"
            />
            <svg
              class="h-5 mt-4 px-4 absolute text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div class="menu flex justify-end items-center flex-1 space-x-4">
          <div v-if="isUser">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div v-else>
            <i class="fas fa-user-cog"></i>            
            </div>          
          <div>
            <button 
            @click="onLogOut"
            class="mx-2">Salir</button>
            </div>          
        </div>
      </div>
    </div>
  </header>

</template>

<script>
import { mapActions } from 'vuex';
import router from '../../router/index.js';
export default {
  methods: {
    ...mapActions(["OnLogOutApplication"]),
    goToHome() {
      router.push("/")
    },
     onLogOut() {
        this.OnLogOutApplication()
    }
  },
  props: {
    isUser: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style>

</style>