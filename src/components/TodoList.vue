<template>
  <div class="todo-list">
    <ul class="list">
      <li v-for="(item, index) in todoList" :key="index">
        <transition name="flip" mode="out-in" appear>
          <p :class="{'active' : item.checked}" @click="setListChecked(index)" @dblclick="modify(index)">{{ item.title }}</p>
          <!-- <p v-if="!item.modify" :class="{'active' : item.checked}" @click="setListChecked(index)" @dblclick="modify(index)">{{ item.title }}</p>
          <p v-else class="input-area">
            <mdc-textfield v-model="item.title" @keypress.enter="modifySuccess(item.title, index)" />
          </p> -->
        </transition>
        <span class="del" @click="setListDetete(index)">
          <mdc-icon icon="cancel"></mdc-icon>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; 
export default {
  data(){
    return {
      
    }
  },
  created() {
    this.getListShow();
  },
  computed: {
    todoList(){
      return this.$store.state.list;
    }
  },
  methods: {
    modify(payload){
      this.$store.state.list.map( (item, index)=> {
        item.modify = false ;
      })
      this.$store.state.list[payload].modify = !this.$store.state.list[payload].modify;
    },
    modifySuccess(tit, idx){
      this.$store.state.list[idx].title = tit;
      this.$store.state.list[idx].modify = !this.$store.state.list[idx].modify;
      this.$store.commit('M_SET_LOCALSTORAGE');
    },
    ...mapActions(['setListDetete', 'setListChecked', 'setListModify', 'getListShow'])
  }
}
</script>

<style lang="scss" scoped>
  .list {
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    flex-flow: column;
    width:100%;
    padding:2px 0 0 0;
    text-align:left;
    li {
      position:relative;
      border-bottom:1px solid #f0f0f0;
      overflow:hidden;
      p {
        position:relative;
        height:50px;
        line-height:50px;
        font-size:14px;
        transition:all .3s ease-in-out;
        &.active {
          padding-left:15px;
          text-decoration: line-through;
          opacity:0.3;
        }
        &.input-area {
          padding:0;
          .mdc-textfield-wrapper {
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            margin:0;
          }
        }
      }
      input[type=text] {
        border:1px solid #999;
      }
      .del {
        position:absolute;
        top:50%;
        right:-40px;
        transform:translateY(-50%);
        cursor:pointer;
        opacity:0;
        transition:all .2s ease-in-out;
        .mdc-icon.mdc-icon--material {
          font-size:18px;
        }
      }
      &:hover {
        .del {
          right:10px;
          opacity:1;
        }
      }
    }
  }

  .flip-enter-active {
    transition: all .45s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
  }

  .flip-leave-active {
    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
  }

  .flip-enter, .flip-leave-to {
    transform: scaleY(0) translateZ(0);
    opacity: 0;
  }
</style>
