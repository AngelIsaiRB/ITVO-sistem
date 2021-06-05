<template>
<AlertPopUpComponentVue />
<SuccessPopUpComponentVue />
  <router-view/>
</template>

<script>
import AlertPopUpComponentVue from './components/popUp/AlertPopUpComponent.vue'
import SuccessPopUpComponentVue from './components/popUp/SuccessPopUpComponent.vue'
export default {
  components: {
    AlertPopUpComponentVue,
    SuccessPopUpComponentVue,
  },
}
</script>

<style>

</style>