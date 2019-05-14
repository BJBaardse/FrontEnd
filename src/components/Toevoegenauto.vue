<template>
  <div>

    <h1>{{$t('Registercar')}}</h1>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <!--<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />-->
        </div>

        <!-- Login Form -->
        <form class="" method="post" @submit.prevent="dopost">
          <input type="text" id="car.license" class="fadeIn second" name="license" v-model="car.license"
                 v-bind:placeholder="$t('license')">
          <select class="form-control" v-model="car.brand" style="margin-left: 8%; width:84%">
            <option v-for="option in brand" v-bind:value="option">
              {{ option }}
            </option>
          </select>
          <input type="text" id="car.model" class="fadeIn second" name="model" v-model="car.model"
                 v-bind:placeholder="$t('Model')">


          <input type="number" id="car.wheels" class="fadeIn second" name="wheels" v-model="car.wheels"
                 v-bind:placeholder="$t('Wheels')">
          <input type="number" id="car.weight" class="fadeIn second" name="weight" v-model="car.weight"
                 v-bind:placeholder="$t('Weight')">
          <input type="submit" class="fadeIn fourth" v-bind:value="$t('createcar')">
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
        car:
          {
            "license": '',
            "stolen": false,
            "weight": 0,
            "wheels": 4,
            "model": '',
            "brand": ''
          },
        errors: []
      }
    },
    mounted() {
      axios.get(`http://192.168.25.110:8080/Registreren/Vehicle/brand`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          this.brand = response.data;
        })
        .catch(function (error) {
          alert("No rights");
        })
    },
    methods: {
      dopost: function () {
        axios.post(`http://192.168.25.110:8080/Registreren/Vehicle/ADD`,
          this.car,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(response => {
            if (response.status == 200) {
              alert("Succesful");
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
