<template>
  <div 
    @click="clickUser()"
    class="flex mt-5 cursor-pointer ">
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300 hover:bg-gray-100">
              <img class="h-28 px-8" src="http://viplifezorrilla.com/sisMercadeo/public/img/usuario.jpg" alt="Sunset in the mountains"/>
              <div class="px-2 py-2">
                <div class="font-semibold text-sm mb-2">Nombre de alumno</div>
                <p class="font-semibold text-gray-400 text-xs">Residencia</p>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    methods: {
        clickUser() {
            alert("cliick")  
        }
    },
}
</script>

<style>

</style>