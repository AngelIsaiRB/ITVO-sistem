<template>
  <div class="z-30 top-0 absolute h-screen w-screen bg-black bg-opacity-50">
      <div class="flex justify-center items-center w-full h-full">
      <div class="w-8/12 max-w-xl h-5/6  bg-white rounded-lg">
      <div class="w-full flex justify-end cursor-pointer"
            @click="fucntionClose()"    
            >
          <p class="text-black text-2xl my-2 mx-4">X</p>
      </div>
        <div class="w-full mt-10">
            <p class="text-base md:text-2xl text-center">Nuevo proyecto</p>
        </div>
        <div class="mt-6 mx-4">
            <p class="text-sm md:text-xl">tipo de proyecto:</p>
            <select name="tipeOfProyect" id="tipeProyect">
                <option value="1">opcion 1 </option>
                <option value="2">opcin 2</option>
                <option value="3">opcin 3</option>
            </select>
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