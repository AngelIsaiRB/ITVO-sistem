<template>
  <div class="leading-loose bg-white rounded shadow-xl">      
    <div 
         @click="fucntionClose()"  
        class="flex justify-end px-2 py-2  cursor-pointer">
         <i class=" fas fa-times fa-2x"></i>
    </div>
    <form 
        @submit.prevent="onLoadForm()"
        class="max-w-xl m-4 px-6 pb-6">
      <p class="text-gray-800 font-medium">Agregar profesor</p>
      <div class="">
        <label class="block text-sm text-gray-00" for="cus_name">Nombre</label>
        <input
        v-model="name"
          class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Nombre"
          aria-label="Nombre"
        />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-gray-600" for="cus_email">Email</label>
        <input
        v-model="email"
          class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Email"
          aria-label="Email"
        />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-gray-600" for="cus_email"
          >Imagen</label
        >
        <input
          class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          id="img"
          name="cus_emailimg"
          type="text"
          required=""
          placeholder="Street"
          aria-label="Email"
        />
      </div>
      <div class="mt-4">
        <button
          class="px-4 py-1 text-white font-light tracking-wider bg-black rounded"
          type="submit"
        >
          Agregar
        </button>
      </div>
    </form>
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
    data() {
        return {
            name: "",
            email:"",
            img:""
        }
    },
    methods: {
        onLoadForm() {
            if(this.name === null || this.name.trim() ==="" ){
                alert("falta un campo")
                return
            }
            if(!this.validateEmail(this.email)){
                alert("Email incorrecto")
                return
            }
            console.log({
                name:this.name,
                email:this.email
                })
        },
        validateEmail(email) {
      let isValid = true;
      if (!email.includes("@") || email === null || email.trim() === "") {
        console.log("NO ES VALIDO");
        isValid = false;
      }
      console.log("si es validoo");
      return isValid;
    },
    },
};
</script>

<style>
</style>