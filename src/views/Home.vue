<template>
  <div class="home">

    <mdc-layout-app>
  
      <mdc-toolbar slot="toolbar">
        <mdc-display>TO-DO LIST</mdc-display>
      </mdc-toolbar>
      
      <mdc-drawer slot="drawer">
        <!--  drawer markup here -->      
      </mdc-drawer>
      
      <main>

        <Header />
        <List />
      </main>
      
    </mdc-layout-app>

    
  </div>
</template>

<script>
import Header from '~@/TodoHeader.vue'
import List from '~@/TodoList.vue'

export default {
  name: 'home',
  data(){
    return {
      
    }
  },
  components: {
    Header,
    List
  },
}
</script>


<style lang="scss" scoped>
/* theme.scss */
.home {
  h1 {
    height:80px;
    line-height:80px;
    font-size:50px;
    background:url("../assets/logo.png") no-repeat -30px center;
    background-size:auto 60px;
  }
  main {
    padding:20px;
  }
}
</style>