<template>
  <div class="z-30 top-0 absolute h-screen w-screen bg-black bg-opacity-50">
      <div class="flex justify-center items-center w-full h-full">
      <div class="w-8/12 max-w-xl h-auto py-10 bg-white rounded-lg">
      <div class="w-full flex justify-end cursor-pointer"
            @click="fucntionClose()"    
            >
          <p class="text-black text-2xl  mx-4">X</p>
      </div>
        <div class="w-full mt-10">
            <p class="text-base md:text-2xl font-bold text-center">Nuevo proyecto</p>
        </div>
        <div class="mt-6 mx-4">
            <p class="text-sm md:text-xl">tipo de proyecto:</p>
            <select name="tipeOfProyect" id="tipeProyect">
                <option value="1">opcion 1 </option>
                <option value="2">opcin 2</option>
                <option value="3">opcin 3</option>
            </select>
        </div>
        <div class="mx-4 mt-2">
             <p class="text-sm md:text-xl">Nombre de alumno</p>
             <input 
                    class="bg-gray-100 border-2 border-black"
                    type="text"
                    placeholder="nombre"
                    >
        </div>
        <div class="mx-4 mt-2">
             <p class="text-sm md:text-xl">Nombre de Proyecto</p>
             <input 
                    class="bg-gray-100 border-2 border-black"
                    type="text"
                    placeholder="nombre"
                    >
        </div>
        <div class="mt-6 mx-4">
            <p class="text-sm md:text-xl">Carrera:</p>
            <select name="carrera" id="carrera">
                <option value="1">Tics </option>
                <option value="2">Informatica</option>
            </select>
        </div>
        <div class="mx-4 mt-mt-6 mx-4">
            <p class="text-sm md:text-xl">Asesor</p>
            <select name="assesor" id="asesor">
                <option value="p1">Profesor 1</option>
                <option value="p2">Profesor</option>
                <option value="p3">Profesor</option>
            </select>
        </div>
        <div class="w-full flex justify-end">
            <div><button class="px-6 mx-4 py-2 text-black font-bold text-base bg-red-400 hover:bg-red-600   rounded-xl" >Cancelar</button></div>
            <div><button class="px-6 mx-4 py-2 text-black font-bold text-base bg-green-300 hover:bg-green-600   rounded-xl" >Crear</button></div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        fucntionClose: {
            type: Function,
            default: () =>{}
        },
    },
}
</script>

<style>

</style>