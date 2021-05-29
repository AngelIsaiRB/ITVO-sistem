<template>
  <div>
      <HeaderComponentVue/>
      <div class="mt-20 flex"> 
        <div class="fixed">
            <MenuAsideProyectsComponentVue/>
        </div>
        <div class="h-full w-full ml-60">
              <div>
                  <div class="">
                 <ProyectListVue/>
                    </div>                  
              </div>
        </div> 
      </div>  
  </div>
</template>

<script>
import MenuAsideProyectsComponentVue from '../../components/aside/MenuAsideProyectsComponent.vue'
import HeaderComponentVue from '../../components/header/HeaderComponent.vue'
import ProyectListVue from './ProyectList.vue'
export default {
    components: {
        HeaderComponentVue,
        MenuAsideProyectsComponentVue,
        ProyectListVue,
        
    },
}
</script>

<style>

</style>