<template>
  <div class="">
    <b-alert :show="dismissCountDown" dismissible variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
      Book successfully added to cart!
    </b-alert>
    <div class="row border rounded mb-5">
      <div class="col-sm-4">
        <img class="img-fluid" :src="product.imageUrl" alt="Card image cap">
      </div>
      <div class="col-sm-8">
        <div class="card-body">
         <h3 class="card-title">{{product.title}}</h3>
         <p class="card-text">
           <dl>
             <dt>ISBN: </dt>
             <dd>{{product.isbn}}</dd>
             <dt>Authors: </dt>
             <dd>{{product.authors}}</dd>
             <dt>Description:</dt>
              <dd>{{product.description}}</dd>
             </details>

           </dl>
         </p>
         <h3 class="card-title float-left text-warning">${{product.price}}</h3>
         <a href="#" @click="addToCart" class="btn btn-primary float-right"><i class="fas fa-cart-plus"></i>&nbsp;Add to Cart</a>
       </div>
      </div>
    </div>

    <div class="">
      <h4 class="">You might also like</h4>
      <div class="row">
        <product  v-for="product in liked" class="col-sm m-3" :product="product"></product>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['category'],
  data: function(){
    return{
      dismissSecs: 2,
      dismissCountDown: 0
    }
  },
  computed: {
    product(){
      return this.$store.getters.getProductById(this.$route.params.id);
    },
    liked(){
      return this.$store.getters.getCategoryProducts('Web Development').slice(1,5);
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
     this.dismissCountDown = this.dismissSecs;
     this.dismissCountDown = dismissCountDown;
   },
   showAlert(){
     this.dismissCountDown = this.dismissSecs;
   },
   addToCart(){
     this.$store.commit('addToCart',this.product);
     this.showAlert();
   }
  }
}
</script>

<style scoped>
  img{
    height: 100%;
  }
</style>
