<template>
  <div class="todo-footer">
    <div class="foot">
      <div class="list-chx">
        <transition name="fade" appear>
          <div v-if="this.$store.state.list.length">
            총 {{ $store.state.list.length }}개 항목 중
            <strong>{{ success }}</strong> 완료
          </div>
        </transition>
        <transition name="fade" appear>
          <div v-if="!this.$store.state.list.length">
            항목이 없습니다.
          </div>
        </transition>
      </div>
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
    success(){
      return this.checkedLeng();
    }
  },
  methods: {
    checkedLeng() {
      let num = 0;
      if(this.$store.state.list.length) {
        this.$store.state.list.filter(item=> {
          if(item.checked) num = num+1 ;
        });
      }
      return num;
    },
    ...mapActions(['setListClear'])
  }
}
</script>

<style lang="scss" scoped>
  .todo-footer {
    padding:20px 0;
    .foot {
      display:flex;
      justify-content:space-between;
      align-items: center;
      width:100%;
      .list-chx {
        position:relative;
        width:50%;
        font-size:14px;
        > div {
          position:absolute;
          top:50%;
          left:0;
          transform: translateY(-50%);
          line-height:30px;
          strong {
            color:#6200ee;
          }
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
