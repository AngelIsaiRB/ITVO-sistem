<template>
  <div class="w-screen">
      <HeaderComponentVue :isUser="true"/>
      <MenuAsideAlumnComponentVue/>
      <div class=" top-0 pl-60 mt-10 w-full">
          <InicioAlumnoComponetVue />
    </div>      
</div>
</template>

<script>
import InicioAlumnoComponetVue from '../../components/alumno/InicioAlumnoComponet.vue'
import MenuAsideAlumnComponentVue from '../../components/aside/MenuAsideAlumnComponent.vue'
import HeaderComponentVue from '../../components/header/HeaderComponent.vue'
export default {
    components: {
        MenuAsideAlumnComponentVue,
        InicioAlumnoComponetVue,
        HeaderComponentVue,
    },
}
</script>

<style>

</style>