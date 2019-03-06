<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <mdc-button raised @click="showSnackbar">Show Snackbar</mdc-button>
    <mdc-snackbar ref="snackbar"/>

    <mdc-tab-bar>
      <mdc-tab>item one</mdc-tab>
      <mdc-tab>item two</mdc-tab>
      <mdc-tab>item three</mdc-tab>
    </mdc-tab-bar>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    showSnackbar() {
      this.$refs.snackbar.show({ 
        message: 'Message' 
      })
    },
  }
}
</script>


<style lang="scss">
/* theme.scss */

</style>
