<template>
  <div>

  <h1>Login</h1>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <!--<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />-->
        </div>

        <!-- Login Form -->
        <form class="" method="post" @submit.prevent="dopost">
          <input type="text" v-model="email" id="email" class="fadeIn second" name="login" placeholder="username">
          <input type="password" v-model="password" id="password" class="fadeIn third" name="login" placeholder="password">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <!-- Remind Password -->

        <div id="formFooter">
          <a class="underlineHover" ><router-link v-bind:to="'register'">Maak nieuw account </router-link></a><br>
          <a class="underlineHover" href="www.google.com">Wachtwoord vergeten</a>
        </div>

      </div>
    </div>
  </div>

</template>

<style>
  @import 'Login.css';
</style>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import axios from 'axios';

  const qs = require('qs');
  export default {
    name: 'app',
    data () {
      return {
        email: '',
        password: '',
        errors: []
      }
    },
    methods: {
      dopost: function () {
        axios.post(`http://192.168.25.110:8080/Registreren/authentication`, qs.stringify({
          'email': this.email,
          'password': this.password
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
