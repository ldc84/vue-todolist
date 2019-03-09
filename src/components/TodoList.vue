<template>
  <div class="todo-list">
    <ul class="list">
      <li v-for="(item, index) in todoList" :key="index">
        <p :class="{'active' : item.checked}" @click="setListChecked(index)" @dblclick="modify">{{ item.title }}</p>
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
    modify(){
      console.log(1);
    },
    ...mapActions(['setListDetete', 'setListChecked', 'getListShow'])
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
        padding:10px 30px 10px 10px;
        font-size:14px;
        transition:all .3s ease-in-out;
        &.active {
          padding-left:15px;
          text-decoration: line-through;
          opacity:0.3;
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
</style>
