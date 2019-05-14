<template>
  <div>

    <h1>{{$t('Changetarief')}}</h1>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">

        </div>

        <!-- Login Form -->
        <form class="" method="post" @submit.prevent="dopost">

          <input type="text" id="name" class="fadeIn second" name="name" v-model="tarief.name"
                 v-bind:placeholder="$t('tariefname')">
          <div>
            <label>{{$t('price')}}:</label>
            <input type="int" id="price" class="fadeIn second" name="price" v-model="tarief.price"
                   v-bind:placeholder="$t('price')">
          </div>
          <div>
            <label>{{$t('start')}}:</label>
            <input type="date" id="date" class="fadeIn second" name="start" v-model="tarief.start"
                   v-bind:placeholder="$t('start')">
          </div>
          <div>
            <label>{{$t('expire')}}:</label>
            <input type="date" id="date1" class="fadeIn second" name="expire" v-model="tarief.expire"
                   v-bind:placeholder="$t('expire')">
          </div>
          <input type="text" id="street" class="fadeIn second" name="name" v-model="street"
                 v-bind:placeholder="$t('street')">

          <input type="submit" class="fadeIn fourth" v-bind:value="$t('UpdateTarief')">
        </form>

        <!-- Remind Passowrd -->

      </div>
    </div>
  </div>

</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import axios from 'axios';

  const qs = require('qs');
  export default {
    name: 'app',
    data() {
      return {
        brand: [],
        tarief:
          {
            "name": "",
            "price": 0,
            "start": 0,
            "expire": 0,
          },
        "street": "",
        "Engery": "",
        errors: []
      }
    },
    mounted() {


      this.tarief = JSON.parse(sessionStorage.getItem("Tarief"));
      this.street = this.tarief.street;
    },
    methods: {
      dopost: function () {

        var url = 'http://192.168.25.110:8080/Registreren/Kilometertarief';
        if (!this.street.length <= 0) {
          url = url + "/street"
          this.tarief.street = this.street;
        }
        axios.post(url,
          this.tarief,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(response => {
            if (response.status == 200) {
              alert("Succesful");
              this.$router.push('/tarieven');
            }
            location.reload();
          })
          .then(response => {

          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }

</script>
<style>
  @import 'Login.css';
</style>
