<template>
  <button
            @click="functionOpen"
              class="bg-gray-100 text-sm font-semibold flex items-center 
              focus:outline-none border border-gray-300 rounded-md px-2 py-2
              hover:bg-blue-400"
            >
             <i class="fas fa-plus mr-6"></i>
              {{text}}
            </button>
</template>

<script>
export default {
props: {
    functionOpen: {
        type: Function,
        default: ()=>{console.log("no asigando")}
    },
    text:{
        type: String,
        default:"default"
    }
},
}
</script>

<style>

</style>