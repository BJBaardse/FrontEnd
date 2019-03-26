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
        <form>
          <input type="text" id="email" class="fadeIn second" name="login" placeholder="username">
          <input type="password" id="password" class="fadeIn third" name="login" placeholder="password">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <!-- Remind Passowrd -->

        <div id="formFooter">
          <a class="underlineHover" ><router-link v-bind:to="'register'">Maak nieuw account </router-link></a><br>
          <a class="underlineHover" href="www.google.com">Wachtwoord vergeten</a>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>
<style>
  @import 'Login.css';
</style>
