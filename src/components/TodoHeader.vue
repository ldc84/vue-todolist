<template>
  <header class="todo-header">
    <mdc-textfield v-model="text" label="항목을 입력하세요" @keypress.enter="listUpdate(text)" />
  </header>  
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return{
      text:''
    }
  },
  methods: {
    listUpdate(item){
      if(this.text == '') return;
      this.setListUpdate(item);
      this.text = '';
    },
    ...mapActions(['setListUpdate'])
  }
}
</script>

<style lang="scss" scoped>
  .mdc-textfield-wrapper {
    width:100%;
  }
</style>
