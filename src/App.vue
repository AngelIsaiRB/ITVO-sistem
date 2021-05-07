<template>
<AlertPopUpComponentVue />
  <router-view/>
</template>

<script>
import AlertPopUpComponentVue from './components/popUp/AlertPopUpComponent.vue'
export default {
  components: {
    AlertPopUpComponentVue,
  },
}
</script>

<style>

</style>