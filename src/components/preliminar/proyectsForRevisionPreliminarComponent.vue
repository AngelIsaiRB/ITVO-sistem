<template>
<div class="h-full w-full">
              <div>
                  <div class="">
                 <proyectListTakedVue/>
                    </div>                  
              </div>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import proyectListTakedVue from '../../views/proyect/proyectListTaked.vue';
export default {
  components: {
    proyectListTakedVue
    },
  data() {
    return {
      proyects: []
    }
  },
    methods: {
      ...mapActions(["getAllProyects"])
    },
    computed: {
      ...mapGetters(["getAllPoryects"])
    },
    async mounted () {
      await this.getAllProyects();
      this.proyects = this.getAllPoryects;  
    },
}
</script>

<style>

</style>