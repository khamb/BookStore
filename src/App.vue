<template>
  <div>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <span class="navbar-brand">
            <router-link to="/">BookStore</router-link>
          </span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item dropdown mr-md-5">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categories
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link v-for="category in this.$store.state.categories" class="dropdown-item" :to="'/category/'+category.category" :key="category.category">{{category.category}}</router-link>
                </div>
              </li>
              <li class="ml-md-5 mr-md-5"></li>
              <form class="form-inline my-2 my-lg-0 ml-md-5">
                <div class="input-group">
                  <div class="input-group-prepend">

                    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter by
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">title</a>
                      <a class="dropdown-item" href="#">keyword</a>
                      <a class="dropdown-item" href="#">author</a>
                      <a class="dropdown-item" href="#">isbn</a>
                    </div>
                  </div>
                  <input class="form-control" type="search" placeholder="Search by title,keyword,isbn,authors..." aria-label="Search" size="38">
                  <router-link to="/search">
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                  </router-link>
                </div>
              </form>
            </ul>
            <div>
              <router-link to="/cart">
                <button class="btn btn-primary">
                    <span class="badge badge-light">{{this.$store.state.cart.length}}</span>
                    <i class="text-white fas fa-shopping-cart"></i>
                </button>
              </router-link>
            </div>
          </div>
        </nav>
      </div>

      <!--Content div-->
      <div class="container">
          <router-view></router-view>
      </div>
      <!--End content div-->

      <footer class="footer bg-light text-center">
        <div class="offset-sm-9 col-sm-3">
          <h4 class="text-muted">Accepted Payment Methods</h4>
          <img class="img-fluid" src="./assets/payments.png" alt="accepted payments" width="300">
        </div>
        <hr>
        <div class="text-muted">&copy;2018 BookStore. All Rights Reserved.</div>
      </footer>
  </div>
</template>

<script>
  export default{
  }
</script>

<style scoped>
  .container{
    margin-top: 35px;
  }

</style>
