<template>
<div v-if="active">
  <div class="z-50 fixed top-0">
    <div @click="onCloseAlert()" class="w-screen flex justify-center min-w-min mt-4 h-12 cursor-pointer">
      <div class="bg-red-200 border flex border-red-400">
        <div class="block flex items-center rounded-sm" role="alert">
          <div class="text-sm text-left text-red-600 mx-10">
            ¡Algo salio mal!
          </div>
        </div>
        <div class="justify-end">
          <i class="fas fa-times mx-1"></i>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    
   data() {
       return {
           active: true
       }
   },
   methods: {
       onCloseAlert() {
           this.active =false
       }
   },
};
</script>

<style></style>
