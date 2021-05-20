<template>
  <div>
      <HeaderComponentVue/>
      <div class="mt-20 flex"> 
          <div>
            <MenuAdminAsideComponentVue/>
          </div>
          <div class="h-full w-full bg-gray-100">
              <UsersAdminComponentVue/>
        </div>          

      </div>      
  </div>
</template>

<script>
import MenuAdminAsideComponentVue from '../../components/aside/MenuAdminAsideComponent.vue'
import HeaderComponentVue from '../../components/header/HeaderComponent.vue'
import UsersAdminComponentVue from '../../components/tables/UsersAdminComponent.vue'
export default {
    components:{
        HeaderComponentVue,
        MenuAdminAsideComponentVue,
        UsersAdminComponentVue,
    }

}
</script>

<style>

</style>