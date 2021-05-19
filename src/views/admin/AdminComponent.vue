<template>
  <div>
      <HeaderComponentVue/>
      <div class="mt-20"> 
          <MenuAdminAsideComponentVue/>
      </div>
      pagina de administracion
  </div>
</template>

<script>
import MenuAdminAsideComponentVue from '../../components/aside/MenuAdminAsideComponent.vue'
import HeaderComponentVue from '../../components/header/HeaderComponent.vue'
export default {
    components:{
        HeaderComponentVue,
        MenuAdminAsideComponentVue
    }

}
</script>

<style>

</style>