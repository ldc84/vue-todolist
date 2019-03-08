<template>
  <div class="todo-list">
    <ul class="list">
      <li v-for="(item, index) in todoList" :key="index">
        <!-- <mdc-checkbox v-model="item.checked" /> -->
        <p v-if="!item.modify" @dblclick="item.modify = !item.modify">{{ item.title }}</p>
        <p v-if="item.modify">
          <input type="text" v-model="item.title" @keydown.enter="listModify(index)">
        </p>
        <span class="del" @click="listDelete(index)">
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
    listDelete(todo){
      this.setListDetete(todo);
    },
    listModify(idx){
      console.log(idx);
      // this.setListModify(val);
    },
    ...mapActions(['setListDetete', 'setListModify', 'getListShow'])
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
      /* .mdc-checkbox-wrapper {
        position:absolute;
        top:0;
        left:0;
        display:inline-block;
      } */
      p {
        padding:10px 30px 10px 10px;
        font-size:14px;
      }
      input[type=text] {
        border:1px solid #999;
      }
      .del {
        position:absolute;
        top:50%;
        right:10px;
        transform:translateY(-50%);
        font-size:16px;
        cursor:pointer;
      }
    }
  }
</style>
