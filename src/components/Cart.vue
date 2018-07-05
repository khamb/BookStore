<template>
  <div class="mb-5 mm">
  <h1 class="mb-5">Your Shopping Cart ({{cart.length}})</h1>
    <div v-if="cart.length>0">
      <table class="table">
        <cartItem v-for="item in cart" :item="item"></cartItem>
      </table>

      <div class="float-right text-right">
        <h3 class="">Total: ${{this.$store.state.cartTotal.toFixed(2)}}</h3>
        <router-link to="/checkout" class="btn btn-lg btn-primary">Checkout</router-link>
      </div>
    </div>
    <div v-else><h2 class="text-center">There are no items in your shopping cart.</h2></div>
  </div>
</template>

<script>
  export default{
    data: function(){
      return{
        cart: this.$store.state.cart
      }
    }
  }
</script>

<style scoped>
  .mm{
    padding-bottom: 500px;
  }
</style>
