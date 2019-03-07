<template>
  <div class="home">

    <mdc-display><img src="../assets/logo.png" alt="Vue logo"> Todos</mdc-display>

    <Header />
    <List />
    
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
  padding:20px 10px;
  img {
    width:14%;
    margin-top:-6px;
    vertical-align: middle;
  }
}
</style>