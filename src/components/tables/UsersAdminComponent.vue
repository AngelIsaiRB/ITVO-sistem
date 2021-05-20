<template>
  <div class="my-2 mx-2">
      <div>
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-black">
            <th class="px-16 py-2">
              <span class="text-gray-300">Foto</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Name</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Email</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Opciones</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
           <tr  
            v-for="user in admins.admins" :key="user"
           class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row justify-center">
              <img
                class="h-14 w-14  object-cover"
                :src="user.img"
                alt=""
              />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold justify-center">{{user.name}}</span>
            </td>
            <td class="px-16 py-2 justify-center">
              <span>{{user.email}}</span>
            </td>
            <td class="px-16 py-2 justify-center">
              <button class="bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-red-600 hover:border-indigo-500 ">
                Eliminar
              </button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            admins: {}
        }
    },
    methods:{
        ...mapActions(["getAllUsers"]),
        async getDbAllUsers(){
            await this.getAllUsers()
            this.admins = this.getUsersAdmin;
            console.log("despues de commit")
            console.log(this.admins.admins)
        }
    },
    computed:{
        ...mapGetters(["getUsersAdmin"])
    },
    mounted () {
       this.getDbAllUsers()
    },
}
</script>

<style>

</style>