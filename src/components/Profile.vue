<template>
  <div>

    <NavBar></NavBar>
  <div class="container">
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills float-right">
        </ul>
      </nav>
      <h3 class="text-muted" style="float: none; text-align: center;">{{$t('profileinfo')}}</h3>
    </div>


    <div class="form-group" style="text-align: left;">
      <label>{{ $t('naam') }}:</label> <label style="float: right;">{{user.name}}</label>
      <div>
        <label>{{ $t('lastname') }}:</label> <label style="float: right;">{{user.lastname}}</label>
      </div>
      <div>
        <label>{{ $t('bsn') }}:</label> <label style="float: right;">{{user.bsn}}</label>
      </div>
      <div>
        <label>{{ $t('email') }}:</label> <label style="float: right;">{{user.email}}</label>
      </div>
    </div>




  </div> <!-- /container -->
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'app',
    data () {
      return {
        user: null,
        errors: []
      }
    },
    mounted () {
      axios.get(`http://192.168.25.110:8080/Registreren/User`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          this.user = response.data;
        })
        .catch(function (error) {
          alert("No rights");
        })
    }
  }
</script>

<style scoped>

</style>
