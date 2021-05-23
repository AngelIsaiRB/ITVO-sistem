<template>
  <div>
    <div 
      v-if="newProfesorPop"
      class="z-50 fixed  top-0 h-screen w-screen bg-black bg-opacity-70">
      <div class="flex w-full h-full justify-center items-center">
        <NewProfesorComponentVue 
          :fucntionClose="closeModalNewProyect"
        />
      </div>
    </div>
      <HeaderComponentVue/>
      <div class="mt-20 flex"> 
          <div>
            <MenuAdminAsideComponentVue/>
          </div>
          <div class="h-full w-full bg-gray-100 ">
              <div>
                  <div class="h-20 w-full bg-gray-100 my-2 mx-4">
                      <AdminMenuComponentVue
                      :functionOpen="openModalNew"
                      />
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
import NewProfesorComponentVue from '../../components/modals/NewProfesorComponent.vue'
import UsersAdminComponentVue from '../../components/tables/UsersAdminComponent.vue'
export default {
  components:{
    HeaderComponentVue,
        MenuAdminAsideComponentVue,
        UsersAdminComponentVue,
        AdminMenuComponentVue,
      NewProfesorComponentVue,
    },
    data() {
      return {
        newProfesorPop: false
      }
    },
    methods: {
      openModalNew() {
        this.newProfesorPop = true
    },
    closeModalNewProyect(){
      this.newProfesorPop = false      
    },
    },

}
</script>

<style>

</style>