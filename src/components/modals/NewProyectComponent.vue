<template>  
    <div 
        class="z-40 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 overflow-y-auto">
        <div class="h-full w-full flex justify-center items-center overflow-y-auto">
            <div class="z-50 w-9/12 bg-white px-10 py-2">
               <form 
                        @submit.prevent="onSaveNewProyectLocal()"
                        >
                   <div class="w-full flex justify-center">
                       <p class="text-gray-800 font-medium my-2 ">Nuevo Proyecto</p>
                   </div>
                   <div class="">
                       <p class="text-black text-xl font-medium my-2 ">Datos de Proyecto</p>
                         <p class="block text-base text-gray-600 mr-4">Nombre del proyecto:</p>
                      <textarea 
                      v-model="name"
                      class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none 
                      w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                      name="body" 
                      placeholder='Titutlo de proyecto' required></textarea>
                   </div>
                   <div class="flex justify-center my-4">
                       <div class="flex items-center">
                           <p class="block text-base text-gray-600 mr-4">Tipo de Proyecto:</p>   
                           <input 
                           class=""
                           v-model="type" type="radio"  name="optionProyect"  value="0">
                           <label class="mx-2" for="">Proyecto INTERNO </label>
                           <input 
                           class=""
                            v-model="type" type="radio"  name="optionProyect" value="1">
                           <label class="mx-2" for="">Proyecto EXTERNO </label>
                           <input 
                           class=""
                            v-model="type" type="radio"  name="optionProyect" value="2">
                           <label class="mx-2" for="">Proyecto PROPUESTA </label>
                       </div>
                   </div>
                   <div class="flex w-full">
                       <div class="w-6/12 flex items-center">
                           <p class="block text-base text-gray-600 mr-4">Periodo Proyectado:</p>
                           <select
                           v-model="periodo"
                              class="w-7/12 px-5 py-1 text-black bg-gray-200 rounded"
                              name="monthStart" id="start">                             
                                <option  v-for="period in getAllPeriods" :key="period" :value="period.period">{{period.period}}</option>                              
                    </select>
                       </div>
                       <div class="flex">
                            <p class="block text-base text-gray-600 mr-4">Numero de residentes</p>
                            <input v-model="residents" min="1" max="10" type="number" class="px-4 text-black bg-gray-200 rounded">
                           </div>                       
                   </div>
                   <hr class="my-2">
                   <div>
                         <p class="text-black text-xl font-medium my-2 ">Datos de la empresa</p>
                   </div>
                   <div class="flex my-2">
                       <p class="block text-base text-gray-600 mr-4">Nombre:</p>
                       <input 
                       v-model="empresa"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                   </div>
                   <div class="flex justify-between my-2">
                       <div class="flex w-full">
                        <p class="block text-base text-gray-600 mr-4">Giro, Ramo o Sector:</p>
                        <select
                    v-model="sector"
                        class="w-6/12 px-5 py-1 text-black bg-gray-200 rounded"
                        name="monthStart" id="end">
                        <option selected value="Publico">Publico</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Servicos">Servicos</option>
                        <option value="Privado">Privado</option>
                        <option value="Otro">Otro</option>
                    </select>
                       </div>
                       <div class="flex w-6/12">
                        <p class="block text-base text-gray-600 mr-4">RFC:</p>
                        <input 
                        v-model="rfc"
                        class="w-10/12 px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                   </div>
                    <div class="flex my-2 w-full">
                        <div class="flex w-6/12 mx-2">
                       <p class="block text-base text-gray-600 mr-4">Direccion:</p>
                       <input 
                       v-model="street"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                        <div class="flex w-6/12">
                       <p class="block text-base text-gray-600 mr-4">Colonia:</p>
                       <input 
                       v-model="colony"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                        </div>
                    </div>
                    <div class="flex my-2 w-full">
                        <div class="flex w-6/12 mx-2">
                       <p class="block text-base text-gray-600 mr-4">C.P:</p>
                       <input 
                       v-model="zipCode"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                        <div class="flex w-6/12">
                       <p class="block text-base text-gray-600 mr-4">Municipio:</p>
                       <input 
                       v-model="municipio"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                        </div>
                    </div>
                    <div class="flex my-2 w-full">
                        <div class="flex w-6/12 mx-2">
                       <p class="block text-base text-gray-600 mr-4">Estado:</p>
                       <input 
                       v-model="estado"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                        <div class="flex w-6/12">
                       <p class="block text-base text-gray-600 mr-4">Telefono:</p>
                       <input 
                       v-model="phone"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                        </div>
                    </div>
                    <div class="flex my-2 w-full">
                        <div class="flex w-6/12">
                       <p class="block text-base text-gray-600 mr-4">Ciudad:</p>
                       <input 
                       v-model="city"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                        </div>
                        <div class="flex w-6/12 mx-2">
                       <p class="block text-base text-gray-600 mr-4">email:</p>
                       <input 
                       v-model="email"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                    </div>
                    <div class="flex my-2 w-full">                       
                         <p class="block text-base text-gray-600 mr-4">Mision:</p>
                      <textarea 
                      v-model="mision"
                      class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none 
                      w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                      name="body" 
                      placeholder='Mision de la empresa' required></textarea>
                   </div>
                   <div class="flex my-2 w-full">
                        <div class="flex w-8/12 mx-2">
                       <p class="block text-base text-gray-600 mr-4">Nombre del responsable/titular de la empresa:</p>
                       <input 
                       v-model="titular"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                        <div class="flex w-4/12">
                       <p class="block text-base text-gray-600 mr-4">Puesto:</p>
                       <input 
                       v-model="titularPosition"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                        </div>
                    </div>
                   <div class="flex my-2 w-full">
                        <div class="flex w-8/12 mx-2">
                       <p class="block text-base text-gray-600 mr-4">Nombre del asesor externo:</p>
                       <input 
                       v-model="externalAsesor"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                        <div class="flex w-4/12">
                       <p class="block text-base text-gray-600 mr-4">Puesto:</p>
                       <input 
                       v-model="positionAsesor"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                        </div>
                    </div>
                   <div class="flex my-2 w-full">
                        <div class="flex w-8/12 mx-2">
                       <p class="block text-base text-gray-600 mr-4">Nombre de la persona que firmara el acuerdo de trabajo:</p>
                       <input 
                       v-model="namePersonAcuerdo"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                       </div>
                        <div class="flex w-4/12">
                       <p class="block text-base text-gray-600 mr-4">Puesto:</p>
                       <input 
                       v-model="namePersonAcuerdoPosition"
                       class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text">
                        </div>
                    </div>
                   <!-- btns -->
                   <div class="w-full flex justify-around mb-4">
                    <button type="submit"  class=" mt-4 px-4 px-16 py-1 text-white font-light tracking-wider bg-blue-900 rounded"
                    >Guardar</button>
                    <button type="button" 
                     @click="functionModal(false)"
                     class=" mt-4 px-4 py-1 text-white font-light tracking-wider bg-red-900 rounded"
                    >Cancelar</button> 
                   </div>
               </form>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props: {
        functionModal: {
            type: Function,
            default: ()=>{
                console.log("no asigando")
            },
        },
        isUpdate:{
            type:Boolean,
            default:false,
        },
        proyectToUpdate:{
            default:{}
        }
    },
    data() {
        return {
            name:"",
            type:0,
            periodo:"",
            residents:1,
            empresa:"",
            sector:"",
            rfc:"",
            street:"",
            colony:"",
            zipCode:"",
            municipio:"",
            city:"",
            estado:"",
            phone:"",
            email:"",
            mision:"",
            titular:"",
            titularPosition:"",
            externalAsesor:"",
            positionAsesor:"",
            namePersonAcuerdo:"",
            namePersonAcuerdoPosition:""
        }
    },
    methods: {
        ...mapActions(["onSaveNewPeriod",
        "getAllPeriodsFirebase",
        "onSaveNewProyect",
        "onUpdateProyectFirebase",
        ]),
        onSaveNewProyectLocal(){
            if(!this.isUpdate){
                this.onSaveNewProyect({
                    name:this.name,
                    type:this.type,
                    periodo:this.periodo,
                    residents:this.residents,
                    empresa:this.empresa,
                    sector:this.sector,
                    rfc:this.rfc,
                    street:this.street,
                    colony:this.colony,
                    zipCode:this.zipCode,
                    municipio:this.municipio,
                    city:this.city,
                    estado:this.estado,
                    phone:this.phone,
                    email:this.email,
                    mision:this.mision,
                    titular:this.titular,
                    titularPosition:this.titularPosition,
                    externalAsesor:this.externalAsesor,
                    positionAsesor:this.positionAsesor,
                    namePersonAcuerdo:this.namePersonAcuerdo,
                    namePersonAcuerdoPosition:this.namePersonAcuerdoPosition,
                    statusProyect:0
                })
            }
            else{
                this.onUpdateProyectFirebase({
                    id:this.proyectToUpdate.id,
                    name:this.name,
                    type:this.type,
                    periodo:this.periodo,
                    residents:this.residents,
                    empresa:this.empresa,
                    sector:this.sector,
                    rfc:this.rfc,
                    street:this.street,
                    colony:this.colony,
                    zipCode:this.zipCode,
                    municipio:this.municipio,
                    city:this.city,
                    estado:this.estado,
                    phone:this.phone,
                    email:this.email,
                    mision:this.mision,
                    titular:this.titular,
                    titularPosition:this.titularPosition,
                    externalAsesor:this.externalAsesor,
                    positionAsesor:this.positionAsesor,
                    namePersonAcuerdo:this.namePersonAcuerdo,
                    namePersonAcuerdoPosition:this.namePersonAcuerdoPosition,
                }) 
            }
            this.functionModal(false);
            },
            async onGetAllPeriods(){
                await this.getAllPeriodsFirebase();
            }
    },
    computed: {
        ...mapGetters(["getAllPeriods"])
    },
    created () {
        this.onGetAllPeriods();
        if(this.isUpdate){
            this.name=this.proyectToUpdate.name;
            this.type=this.proyectToUpdate.type;
            this.periodo=this.proyectToUpdate.periodo;
            this.residents=this.proyectToUpdate.residents;
            this.empresa=this.proyectToUpdate.empresa;
            this.sector=this.proyectToUpdate.sector;
            this.rfc=this.proyectToUpdate.rfc;
            this.street=this.proyectToUpdate.street;
            this.colony=this.proyectToUpdate.colony;
            this.zipCode=this.proyectToUpdate.zipCode;
            this.municipio=this.proyectToUpdate.municipio;
            this.city=this.proyectToUpdate.city;
            this.estado=this.proyectToUpdate.estado;
            this.phone=this.proyectToUpdate.phone;
            this.email=this.proyectToUpdate.email;
            this.mision=this.proyectToUpdate.mision;
            this.titular=this.proyectToUpdate.titular;
            this.titularPosition=this.proyectToUpdate.titularPosition;
            this.externalAsesor=this.proyectToUpdate.externalAsesor;
            this.positionAsesor=this.proyectToUpdate.positionAsesor;
            this.namePersonAcuerdo=this.proyectToUpdate.namePersonAcuerdo;
            this.namePersonAcuerdoPosition=this.proyectToUpdate.namePersonAcuerdoPosition;
        }
    },
}
</script>

<style scope>
input[type="radio"] + label span {
    transition: background.2s,
      transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  background-color: #3490DC; 
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #3490DC; 
}

</style>