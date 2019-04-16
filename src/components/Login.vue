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
          <input type="text" v-model="email" id="email" class="fadeIn second" name="login" v-bind:placeholder="$t('email')">
          <input type="password" v-model="password" id="password" class="fadeIn third" name="login" v-bind:placeholder="$t('password')">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <!-- Remind Password -->

        <div id="formFooter">
          <a class="underlineHover" ><router-link v-bind:to="'register'">{{$t('createaccount')}} </router-link></a><br>
          <a class="underlineHover" href="www.google.com">{{$t('passwordforgot')}}</a>
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
  import { router } from "@/router";

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
            localStorage.setItem('token', response.data);
            this.$router.push('/mijnautos');
          })
          .catch(function (error) {
            if(error.response.status == 403){
              alert("Incorrect credentials")
            }
          })
      }
    }
  }
</script>
