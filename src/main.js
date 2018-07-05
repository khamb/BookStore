import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import Home from './components/Home.vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Product from './components/Product.vue';
import CategoryProducts from './components/CategoryProducts.vue';
import ProductDetails from './components/ProductDetails.vue';
import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';
import CartItem from './components/CartItem.vue';
import SearchPage from './components/SearchPage.vue';

const books = require("./books.json");

Vue.component('home', Home);
Vue.component('cart', Cart);
Vue.component('cartItem', CartItem);
Vue.component('checkout', Checkout);
Vue.component('product', Product);
Vue.component('productDetails', ProductDetails);
Vue.component('SearchPage', SearchPage);
Vue.component('categoryProducts', CategoryProducts);

Vue.use(Vuex);
Vue.use(Router);
Vue.use(BootstrapVue);

//creating a Book Class Model
class Book{
  constructor(title, authors, category, isbn, description, imageUrl, price){
    this.title = title;
    this.authors = authors;
    this.category = category;
    this.isbn = isbn;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

class MyCartItem{
  constructor(qty,title,price,isbn){
    this.qty = qty;
    this.title = title;
    this.price = price;
    this.isbn = isbn;
  }
}


//configuring the router
const router = new Router({
  linkActiveClass: "",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/category/:name',
      name: 'CategoryProducts',
      component: CategoryProducts,

    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    }
  ]
});

//configuring store instance
const store = new Vuex.Store({
  state: {
    cart: [],
    cartTotal: 0.0,
    products: [],
    categories: [{category: "Mobile"}, {category: "Java Programming"}, {category: "Software Engineering"}, {category: "Internet"}, {category: "Web Development"}],

  },
  getters: {
    getCategoryProducts: state => category => {
      return state.products.filter(product => product.category==category);
    },
    getProductById: state => id => {
      return state.products.filter(product => product.isbn==id)[0];
    }
  },
  mutations:{
    addToCart: (state, product) => {
       const index = state.cart.findIndex(p => p.isbn === product.isbn);
       if(index==-1){
         var item = new MyCartItem(1,product.title,product.price,product.isbn);
         state.cart.push(item);
       }else{
        state.cart[index].qty++;
       }

       state.cartTotal += parseFloat(product.price);
    },
    removeFromCart: (state, product)=>{
      const index = state.cart.findIndex(p => p.isbn === product.isbn);
      if(state.cart[index].qty>1){
        state.cart[index].qty--;
      }else{
        state.cart.splice(index,1);
      }

      state.cartTotal -= parseFloat(product.price);
    }
  }
});


//mounting root component
new Vue({
  el: '#app',
  router,
  store,
  created: function(){
    //parsing books.json
    for(var book of books["books"]){
      let bookObj = new Book(book["title"],book["authors"],book["category"],book["isbn"],book["longDescription"],"../src/assets/"+book["isbn"]+".jpg",book["price"]);
      store.state.products.push(bookObj);
    }

  },
  render: h => h(App)
});
