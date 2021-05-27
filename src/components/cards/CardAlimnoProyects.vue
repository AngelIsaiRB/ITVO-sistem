<template>
  <div 
    @click="clickUser(proyect)"
    class=" mt-5 cursor-pointer mx-2 h-64 max-h-64 w-52">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
                <div class="font-semibold text-sm mb-2 flex justify-center">{{proyect.nameAlumno}}</div>
                <div class="flex justify-center">
                  <img class="h-28 px-8 object-cover" :src="proyect.img" alt="Sunset in the mountains"/>
                </div>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2 flex justify-start truncate">{{proyect.nameProyect}}</div>
                <div class="font-semibold text-gray-500 text-sm mb-2">{{proyect.carrera}}</div>
                <p class="font-semibold text-gray-400 text-xs">{{proyect.type}}</p>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    methods: {
        clickUser(proyect) {
            alert(`click en  ${proyect.nameProyect}`);  
        }
    },
    props: {
      proyect: {
        default: {}
      },
    },
}
</script>

<style>

</style>