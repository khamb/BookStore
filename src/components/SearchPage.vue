<template>
  <div>
    <h1>Results</h1>
    <hr>
    <div class="col-sm-2 m-3 float-right">
      <label for="validationCustom04">Sort by</label>
      <select class="custom-select  btn-primay" id="inputGroupSelect01">
       <option value="">Popularity</option>
       <option value="">Pertinence</option>
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
    groupedArticles() {
      var groups = [], i;
      for (i = 0; i < this.$store.getters.getCategoryProducts('Mobile').length; i += 3) {
          groups.push(this.$store.getters.getCategoryProducts('Mobile').slice(i, i + 3));
      }
     return groups;
    }
  }
}
</script>
