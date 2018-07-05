<template>
  <tr>
    <b-modal ref="myModalRef" hide-footer title="Delete from cart">
     Are You Sure?
     <b-btn class="mt-3" variant="outline-secondary" block @click="deleteItem">Yes</b-btn>
     <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cancel</b-btn>
   </b-modal>
      <td>
        <button class="btn btn-sm btn-primary" @click="decrementItem"><i class="fas fa-minus-square"></i></button>
        {{item.qty}}
        <button class="btn btn-sm btn-primary" @click="incrementItem"><i class="fas fa-plus-square"></i></button>
      </td>
      <td>{{item.title}}</td>
      <th>${{item.price}}</th>
      <td><button class="btn btn-danger" @click="showModal"><i class="fas fa-trash-alt"></i></button> </td>
  </tr>
</template>

<script>
    export default{
      props: ['item'],
      methods:{
        incrementItem: function(){
          this.$store.commit('addToCart',this.item);
        },
        decrementItem: function(){
          this.$store.commit('removeFromCart',this.item);
        },
        deleteItem:function(){
          this.item.qty = 1;
          this.$store.commit('removeFromCart',this.item);
        },
        showModal () {
          this.$refs.myModalRef.show()
        },
        hideModal () {
          this.$refs.myModalRef.hide()
        }
      }
    }
</script>

<style scoped>
  img{
    height: 180px;
    width: 150px;
  }
</style>
