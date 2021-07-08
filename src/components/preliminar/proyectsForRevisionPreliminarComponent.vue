<template>
  <div>
      <div v-for="(proyect,index) in proyects" :key="index">
          {{proyect.name}}
      </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
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