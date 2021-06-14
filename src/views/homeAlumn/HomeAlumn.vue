<template>
  <div class="w-screen">
      <HeaderComponentVue :isUser="true" />
      <MenuAsideAlumnComponentVue :changePage="onchangePage"/>
      <div class=" top-0 pl-60 mt-20 w-full">
          <div v-if="page ===0">
            <InicioAlumnoComponetVue :changePage="onchangePage"/> 
          </div>
          <div v-if="page ===1">
            <ProyectsSelectComponentVue />
          </div>
    </div>      
</div>
</template>

<script>
import { mapActions } from 'vuex'
import InicioAlumnoComponetVue from '../../components/alumno/InicioAlumnoComponet.vue'
import ProyectsSelectComponentVue from '../../components/alumno/ProyectsSelectComponent.vue'
import MenuAsideAlumnComponentVue from '../../components/aside/MenuAsideAlumnComponent.vue'
import HeaderComponentVue from '../../components/header/HeaderComponent.vue'
export default {
    components: {
        MenuAsideAlumnComponentVue,
        InicioAlumnoComponetVue,
        HeaderComponentVue,
        ProyectsSelectComponentVue,
    },
    data() {
        return {
            page: 0
        }
    },
    methods: {
        ...mapActions(["onGetAlumnForFirebase"]),
        onchangePage(pageA) {
            this.page= pageA;
        }
    },
    created () {
        this.onGetAlumnForFirebase();
    },
}
</script>

<style>

</style>