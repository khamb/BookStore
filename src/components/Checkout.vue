<template>
  <div>
    <h1>Checkout</h1>
    <hr>
      <div class="row">
      <div class="col-sm-6">
        <form class="needs-validation mb-5" novalidate>
          <h2><span class="badge badge-primary">1</span> Delivery</h2>
          <div class="form-row">
            <div class="col-sm-12 mb-3">
              <label for="validationCustom01">Email</label>
              <input type="email" class="form-control" id="validationCustom00" placeholder="Email" value="" required>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                Invalid Email
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-6 mb-3">
              <label for="validationCustom01">First name</label>
              <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" required>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                Invalid First
              </div>
            </div>
            <div class="col-sm-6 mb-3">
              <label for="validationCustom02">Last name</label>
              <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="" required>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                Invalid Last Name
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-12 mb-3">
              <label for="validationCustom01">Address</label>
              <input type="text" class="form-control" id="validationCustom08" placeholder="Address" value="" required>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom03">Address 2 (Optional)</label>
              <input type="text" class="form-control" id="validationCustom09" placeholder="Address 2">
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom05">Postal Code</label>
              <input type="text" class="form-control" id="validationCustom05" placeholder="Postal Code" required>
              <div class="invalid-feedback">
                Please provide a valid zip.
              </div>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom03">City</label>
              <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
              <div class="valid-feedback">
                looks good!
              </div>
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom04">Province</label>
              <select class="custom-select" id="inputGroupSelect01" required>
               <option value="">Alberta</option>
               <option value="">Colombie-Britannique</option>
               <option value="">Île-du-Prince-Édouard</option>
               <option value="">Manitoba</option>
               <option value="">Nouveau-Brunswick</option>
               <option value="">Nouvelle-Écosse</option>
               <option value="">Nunavut</option>
               <option value="">Ontario</option>
               <option value="">Québec</option>
               <option value="">Saskatchewan</option>
               <option value="">Terre-Neuve-et-Labrador</option>
               <option value="">Territoires du Nord-Ouest</option>
               <option value="">Yukon</option>
             </select>
             <div class="invalid-feedback">
                Please provide a valid province.
              </div>
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-12 mb-3">
              <label for="validationCustom01">Phone number</label>
              <input type="tel" class="form-control" id="validationCustom08" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" value="" required>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                Wrong phone number
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="">Select Delivery Method</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>

                Standard Shipping ($10.00)

            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">

                Express Shipping ($40.00)

            </div>
          </div>
          <button class="btn btn-lg btn-primary float-right" type="submit">Continue</button>
        </form>

        <div class="mt-5">
          <h2><span class=" badge badge-secondary">2</span> Payment</h2>
          <form>
              <div class="form-group owner">
                  <label for="owner">Owner</label>
                  <input type="text" class="form-control" id="owner">
              </div>
              <div class="form-group CVV">
                  <label for="cvv">CVV</label>
                  <input type="text" class="form-control" id="cvv">
              </div>
              <div class="form-group" id="card-number-field">
                  <label for="cardNumber">Card Number</label>
                  <input type="text" class="form-control" id="cardNumber">
              </div>
              <div class="form-group" id="expiration-date">
                  <label>Expiration Date</label>
                  <select>
                      <option value="01">January</option>
                      <option value="02">February </option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                  </select>
                  <select>
                      <option value="16"> 2016</option>
                      <option value="17"> 2017</option>
                      <option value="18"> 2018</option>
                      <option value="19"> 2019</option>
                      <option value="20"> 2020</option>
                      <option value="21"> 2021</option>
                  </select>
              </div>
              <div class="form-group" id="credit_cards">
                  <img src="../assets/visa.jpg" id="visa">
                  <img src="../assets/mastercard.jpg" id="mastercard">
                  <img src="../assets/amex.jpg" id="amex">
              </div>
              <div class="form-group" id="pay-now">
                  <button type="submit" class="btn btn-primary" id="confirm-purchase">Confirm</button>
              </div>
          </form>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
            <div class="card-header">
              <h1>Your Cart</h1>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item row" v-for="item in this.$store.state.cart">
                  <span class="col-sm-3">{{item.qty}}</span>
                  <span class="col-sm-6">{{item.title}}</span>
                  <span class="col-sm-3 float-right">${{item.price}}</span>
                </li>
              </ul>
            </div>

            <span class="float-right">
              <h3 class="card-footer text-right">
                Total: ${{this.$store.state.cartTotal}}
              </h3>
            </span>


        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation mb-5');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

</script>

<style scoped>
  label{
    font-weight: 600;
  }
</style>
