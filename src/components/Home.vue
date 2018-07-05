<template>
    <div>
      <b-alert class="" :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      <p><strong>Get all books with 30% off</strong>. This offer will expires in {{dismissCountDown}} seconds...</p>
      <b-progress variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px">
      </b-progress>
    </b-alert>
      <h1>Home</h1>
      <hr>
      <img class="img-fluid" src="../assets/sale.png" alt="">

      <div class="mt-3">
        <h2>Bestsellers</h2>
        <div class="row">
          <product  v-for="product in bestsellers" class="col-sm m-3" :product="product"></product>
        </div>
      </div>
      <div class="mt-3">
        <h2>New Books</h2>
        <div class="row">
          <product  v-for="product in newProducts" class="col-sm m-3" :product="product"></product>
        </div>
      </div>

    </div>
</template>

<script>
    export default{
      created(){
        this.showAlert();
      },
      data () {
        return {
          dismissSecs: 100,
          dismissCountDown: 0,
          showDismissibleAlert: false
        }
      },
      methods: {
        countDownChanged (dismissCountDown) {
          this.dismissCountDown = dismissCountDown
        },
        showAlert () {
          this.dismissCountDown = this.dismissSecs
        }
      },
      computed: {
        bestsellers(){
          var best = this.$store.getters.getCategoryProducts('Internet');
          return best.slice(3,6);
        },
        newProducts(){
          var best = this.$store.getters.getCategoryProducts('Web Development');
          return best.slice(1,4);
        }
      }
    }

</script>
