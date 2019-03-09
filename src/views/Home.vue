<template>
  <div class="home">

    <mdc-layout-app>
  
      <mdc-toolbar slot="toolbar">
        <mdc-toolbar-row>
          <mdc-toolbar-section align-start >
            <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
            <mdc-toolbar-title>TO-DO LIST</mdc-toolbar-title>
          </mdc-toolbar-section>
        </mdc-toolbar-row>
        <!-- <mdc-display>TO-DO LIST</mdc-display> -->
      </mdc-toolbar>
      
      <mdc-drawer slot="drawer" toggle-on="toggle-drawer">
        <mdc-drawer-list>
            <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
            <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
            <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>
      
      <main>

        <Header />
        <List />
        <Footer />
      </main>
      
    </mdc-layout-app>

    
  </div>
</template>

<script>
import Header from '~@/TodoHeader.vue'
import List from '~@/TodoList.vue'
import Footer from '~@/TodoFooter.vue'

export default {
  name: 'home',
  data(){
    return {
      
    }
  },
  components: {
    Header,
    List,
    Footer
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