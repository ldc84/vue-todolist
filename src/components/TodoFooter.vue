<template>
  <div class="todo-footer">
    <mdc-button raised @click="setListClear">All Clear</mdc-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      
    }
  },
  methods: {
    ...mapActions(['setListClear'])
  }
}
</script>

<style lang="scss" scoped>
  .todo-footer {
    padding:20px;
  }
</style>
