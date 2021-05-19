<template>
  <div>
      <HeaderComponentVue/>
      <div class="mt-20 ">
        <MenuAsideComponentVue  />  
      </div>
      pagina de administracion
  </div>
</template>

<script>
import MenuAsideComponentVue from '../../components/aside/MenuAsideComponent.vue'
import HeaderComponentVue from '../../components/header/HeaderComponent.vue'

export default {
    components:{
        HeaderComponentVue,
        MenuAsideComponentVue
    }

}
</script>

<style>

</style>