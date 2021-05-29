<template>
<div class="">
    <div class="z-20  h-20 w-full bg-blue-800 flex items-center px-4 ">        
        <div class="mx-3">
            <BtnAddComponentVue :functionOpen="onNewProyect" :text='"Nuevo proyecto"'/>
        </div>        
        <div class="mx-3">
            <BtnAddComponentVue :functionOpen="onNewPeriod" :text='"Nuevo periodo"'/>
        </div>                
    </div>
    <div class="">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 ">
                <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">nombre</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Tipo</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Periodo</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Empresa</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                        <tr v-for="x in 100" :key="x">
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div class="flex items-center">
                                    <div>
                                        <div class="text-sm leading-5 text-gray-800">#1</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span class="relative text-xs">active</span>
                            </span>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                            <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import BtnAddComponentVue from '../../components/buttons/BtnAddComponent.vue'
export default {
    components: {
        BtnAddComponentVue,
    },
    methods: {
        onNewProyect() {
            console.log("click en onNewProyect")
        },
        onNewPeriod(){
            console.log("click en onNewPeriod")
        }
    },
}
</script>

<style>

</style>