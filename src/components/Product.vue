<template>
  <router-link :to="'/product/'+product.isbn">
    <div class="card">
        <div class="card-body">
            <img class="card-img-top img-dim" :src="product.imageUrl" alt="Card image cap">
            <h5 class="card-title">{{product.title}}</h5>
            <h5 class="card-title text-warning">${{product.price}}</h5>
        </div>
    </div>
  </router-link>
</template>

<script>
    export default{
      props: ['product']
    }

</script>

<style scoped>
.img-dim{
  width: 100%;
  height: 250px;
}
</style>
