<template>
  <div>

    <h1>{{$t('register')}}</h1>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <!--<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />-->
        </div>

        <!-- Login Form -->
        <form class="" method="post" @submit.prevent="dopost">
          <input type="text" id="Name" class="fadeIn second" name="login" v-model="Name"
                 v-bind:placeholder="$t('name')">
          <input type="password" id="password" class="fadeIn third" name="login" v-model="password"
                 v-bind:placeholder="$t('password')">
          <input type="text" id="lastname" class="fadeIn second" name="login" v-model="lastname"
                 v-bind:placeholder="$t('lastname')">
          <input type="text" id="email" class="fadeIn second" name="login" v-model="email"
                 v-bind:placeholder="$t('email')">
          <input type="text" id="BSN" class="fadeIn second" name="login" v-model="BSN" v-bind:placeholder="$t('bsn')">
          <input type="submit" class="fadeIn fourth" v-bind:value="$t('createaccount')">
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
        email: '',
        password: '',
        Name: '',
        BSN: '',
        lastname: '',

        errors: []
      }
    },
    methods: {
      dopost: function () {
        axios.post(`http://192.168.25.110:8080/Registreren/authentication/register`, qs.stringify({
          'email': this.email,
          'password': this.password,
          'Name': this.Name,
          'lastname': this.lastname,
          'BSN': this.BSN
        }))
          .then(response => {
            alert(response)
            localStorage.setItem('token', response.data)
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
