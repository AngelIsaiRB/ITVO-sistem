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
              <span class="text-gray-300">Fecha</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Administrador</span>
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
              <span>{{user.date}}</span>
            </td>
            <td class="px-16 py-2 justify-center">
              <span class="text-green-500">
                <div 
                    :class="user.root ? 'bg-green-500' : 'bg-red-500'"
                    class="h-6 w-6  rounded-full">
                </div>
              </span>
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
    },
    computed:{
        ...mapGetters(["getUsersAdmin"])
    },
    mounted () {
        this.getAllUsers()
        this.admins = this.getUsersAdmin;
        console.log(this.admins.admins[0].name)
    },
}
</script>

<style>

</style>