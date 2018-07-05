<template>
  <div>
    <h1>{{this.$route.params.name}}</h1>
    <hr>
    <div class="col-sm-2 m-3 float-right">
      <label for="inputGroupSelect01">Sort by</label>
      <select class="custom-select  btn-primay" id="inputGroupSelect01">
       <option value="">Popularity</option>
       <option value="">Low to High</option>
       <option value="">High to Low</option>
     </select>
    </div>
    <div v-for="group in groupedArticles" class="row">
      <product  v-for="(product,i) in group" class="col-sm m-3" :product="product"></product>
    </div>
  </div>
</template>

<script>
  export default{
    computed: {
      products(){
        return this.$store.getters.getCategoryProducts(this.$route.params.name);
      },
      groupedArticles() {
        var groups = [], i;
        for (i = 0; i < this.$store.getters.getCategoryProducts(this.$route.params.name).length; i += 3) {
            groups.push(this.$store.getters.getCategoryProducts(this.$route.params.name).slice(i, i + 3));
        }
       return groups;
      }
    }
  }
</script>
