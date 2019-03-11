<template>
  <div class="todo-footer">
    <div class="foot">
      <!-- <div class="list-chx" v-if="$store.state.list.length">
        총 {{ $store.state.list.length }}개 항목 중
        <strong>{{ succece }} 완료</strong>
      </div> -->
      <mdc-button raised @click="setListClear">All Clear</mdc-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      
    }
  },
  computed: {
    succece(){
      return this.checkedLeng();
    }
  },
  methods: {
    checkedLeng() {
      let num = 0;
      const result = this.$store.state.list.forEach(element => {
        if(element.checked == true){
          num+1;
        }
        console.log(num);
      });
      return result;
      console.log(result);
    },
    ...mapActions(['setListClear'])
  }
}
</script>

<style lang="scss" scoped>
  .todo-footer {
    padding:20px;
  }
</style>
