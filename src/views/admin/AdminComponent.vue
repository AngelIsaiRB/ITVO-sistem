<template>
  <div>
      <HeaderComponentVue/>
      <div class="mt-20 flex"> 
          <div>
            <MenuAdminAsideComponentVue/>
          </div>
          <div class="h-full w-full bg-gray-100 ">
              <div>
                  <div class="h-20 w-full bg-gray-100 my-2 mx-4">
                      <AdminMenuComponentVue/>
                  </div>
                <UsersAdminComponentVue/>
              </div>
        </div>          

      </div>      
  </div>
</template>

<script>
import MenuAdminAsideComponentVue from '../../components/aside/MenuAdminAsideComponent.vue'
import HeaderComponentVue from '../../components/header/HeaderComponent.vue'
import AdminMenuComponentVue from '../../components/menus/AdminMenuComponent.vue'
import UsersAdminComponentVue from '../../components/tables/UsersAdminComponent.vue'
export default {
    components:{
        HeaderComponentVue,
        MenuAdminAsideComponentVue,
        UsersAdminComponentVue,
        AdminMenuComponentVue,
    }

}
</script>

<style>

</style>