<template>
  <div>
    <h1>Auto's</h1>
    <div class="row">
      <div class="col-md-4">
      <h2>Lijst met auto's:<br></h2>
      <b-list-group style="margin: 5%">
        <b-list-group-item href="#" active class="flex-column align-items-start" v-for="auto in autos" style="margin-bottom: 10px">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{auto.brand}} {{auto.model}}</h5>
            <small>{{auto.license}}</small>
          </div>
        </b-list-group-item>
        <!---->
        <!--<b-list-group-item href="#" active class="flex-column align-items-start">-->
          <!--<div class="d-flex w-100 justify-content-between">-->
            <!--<h5 class="mb-1">List group item heading</h5>-->
            <!--<small>small tag first</small>-->
          <!--</div>-->

          <!--<p class="mb-1">-->
            <!--p tag middle-->
          <!--</p>-->

          <!--<small>small tag 2</small>-->
        <!--</b-list-group-item>-->


      </b-list-group>

      </div>
      <div class="col-md-8" >
        <h2>Select auto: {{model.license}}<br></h2>

        <div class="form-group" style=" width: 50%; alignment: center"  >
          <label >Merk:</label> <label style="float: right;">{{model.brand}}</label>
          <div>
            <label>Model:</label> <label style="float: right;" >{{model.model}}</label>
          </div>
          <div>
            <label>Kenteken:</label> <label style="float: right;">{{model.license}}</label>
          </div>
          <div>
            <label>Gewicht:</label> <label style="float: right;">{{model.weight}}</label>
          </div>
          <div>
            <label>wielen:</label> <label style="float: right;">{{model.wheels}}</label>
          </div>
          <div>
            <label>Gestolen:</label> <label style="float: right;">{{model.stolen}}</label>
          </div>
        </div>


      </div>





  </div>

    </div>

    </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'app',
    data () {
      return {
        autos: [],
        errors: []
      }
    },
    mounted () {
      axios.get(`http://192.168.25.110:8080/Registreren/Vehicle`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          this.autos = response.data;
        })
        .catch(function (error) {
          alert("No rights");
        })
    }
  }
</script>
