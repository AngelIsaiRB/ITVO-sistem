<template>
  <aside class="fixed col-span-4 bg-white h-screen py-5 w-60">
      <div class="mt-5">
          <div 
          @click="goTo(0)"
            :class="selected === 0
                ?'bg-blue-200'
                :''"
            class="mt-1 mr-50 rounded pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-gray-600 text-sm font-semibold flex items-center focus:outline-none"
          >
              <i class="fas fa-home fa-lg mx-6 "></i>
            Home
          </button>
        </div>
        <hr>
          <div
           @click="goTo(1)"
            :class="selected === 1
                ?'bg-blue-200'
                :''"
            class="mt-1 mr-50 rounded pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
          <button
            class="text-gray-600 text-sm font-semibold flex items-center focus:outline-none"
          >
              <i class="fas fa-folder fa-lg mx-4 "></i>
            Proyectos
          </button>
        </div>
        <div
          class=" mr-50 rounded pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer"
        >
          <button
            class="text-gray-600 text-black text-sm font-semibold flex items-center focus:outline-none"
          >
            <i class="fas fa-comment fa-lg mx-4"></i>
            Comentarios
          </button>
        </div>

        <div class="mt-1 mr-50 rounded pl-6 py-3 font-semibold hover:bg-blue-100 cursor-pointer">
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
        changePage: {
      type: Function,
      default: ()=>{}
    },
    },
    methods: {      
      goTo(n) {
        this.changePage(n)
        this.selected=n
      }
    },
}
</script>

<style>

</style>