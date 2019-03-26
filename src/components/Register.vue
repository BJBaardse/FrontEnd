<template>
  <div>

  <h1>Registreren</h1>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <!--<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />-->
        </div>

        <!-- Login Form -->
        <form>
          <input type="text" id="Name" class="fadeIn second" name="login" placeholder="Naam">
          <input type="password" id="password" class="fadeIn third" name="login" placeholder="Wachtwoord">
          <input type="text" id="lastname" class="fadeIn second" name="login" placeholder="Achternaam">
          <input type="text" id="email" class="fadeIn second" name="login" placeholder="Email">
          <input type="text" id="BSN" class="fadeIn second" name="login" placeholder="BSN">
          <input type="submit" class="fadeIn fourth" value="Maak Account">
        </form>

        <!-- Remind Passowrd -->

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
