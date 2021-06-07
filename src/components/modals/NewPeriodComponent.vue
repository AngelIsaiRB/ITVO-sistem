<template>  
    <div 
        class="z-40 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75">
        <div class="h-full w-full flex justify-center items-center">
            <div class="z-50 w-4/12 max-w-sm bg-white flex justify-center">
                <div class="m-10">
                    <p class="text-gray-800 font-medium my-2 ">Nuevo Periodo</p>
                <form 
                         @submit.prevent="onSavePeriod()"
                    >
                    <p class="block text-sm text-gray-600 mt-2">Mes de inicio</p>
                    <select
                    v-model="monthStart"
                        class="w-full px-5 py-1 text-black bg-gray-200 rounded"
                        name="monthStart" id="start">
                        <option selected value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>

                    <p class="block text-sm text-gray-600 mt-2">Mes de fin</p>
                    <select
                    v-model="monthEnd"
                        class="w-full px-5 py-1 text-black bg-gray-200 rounded"
                        name="monthStart" id="end">
                        <option selected value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                    <p class="block text-sm text-gray-600 mt-2">Año</p>
                    <input type="number" 
                    v-model="year"
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    placeholder="Año">
                    <div class="flex w-full justify-between">
                    <button type="submit"  class=" mt-4 px-4 py-1 text-white font-light tracking-wider bg-black rounded"
                    >Guardar</button>
                    <button type="button" 
                     @click="functionModal(false)"
                     class=" mt-4 px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    >Cancelar</button>                        
                    </div>
                </form>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        functionModal: {
            type: Function,
            default: ()=>{
                console.log("no asigando")
            }
        },
    },
    data() {
        return {
            monthStart: "",
            monthEnd:"",
            year:"",
        }
    },
    methods: {
        ...mapActions(["onSaveNewPeriod"]),
        onSavePeriod(){
            this.onSaveNewPeriod({
                period:`${this.monthStart}-${this.monthEnd}-${this.year}`
            })
            this.functionModal(false)
        }
    },
}
</script>

<style>

</style>