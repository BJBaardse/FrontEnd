<template>
  <div>
    <NavBar></NavBar>
    <h1>{{ $t('cars') }}</h1>
    <div class="row">
      <div class="col-md-4">
        <h2>{{$t('carlist')}}:<br></h2>
        <b-list-group style="margin: 5%">
          <b-list-group-item href="#" active class="flex-column align-items-start" v-for="auto in autos"
                             :key="auto.vehicleID" style="margin-bottom: 10px" v-on:click="loadauto(auto)">
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
      <div class="col-md-8" v-if="model !== null">
        <h2>{{$t('selectcar')}}: {{model.license}}<br></h2>

        <div class="form-group" style=" width: 50%; alignment: center; text-align: left">
          <div>
            <label>{{$t('brand')}}:</label>
            <label v-if="model.brand !== null" style="float: right;">{{model.brand}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Model:</label>
            <label v-if="model.model !== null" style="float: right;">{{model.model}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>{{$t('license')}}:</label>
            <label v-if="model.license !== null" style="float: right;">{{model.license}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>{{$t('weight')}}:</label>
            <label v-if="model.weight !== null" style="float: right;">{{model.weight}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>{{$t('wheels')}}:</label>
            <label v-if="model.wheels !== null" style="float: right;">{{model.wheels}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>{{$t('stolen')}}:</label>
            <label v-if="model.stolen !== null" style="float: right;">{{model.stolen}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <button type="button" class="btn btn-secondary btn-lg btn-block" v-on:click="deleteauto">Verwijderen
            </button>
          </div>


        </div>


      </div>

    </div>

  </div>

</template>
<script>
  import axios from 'axios';

  const qs = require('qs');
  export default {
    name: 'app',
    data() {
      return {
        autos: [],
        errors: [],
        label: '',
        clicked: false,
        model: null
      }
    },
    mounted() {

      var jwt = jwtcode(localStorage.getItem('token'));

      if(jwt.Roles.toString().includes("ADMINISTRATION")){
        axios.get(`http://192.168.25.110:8080/Registreren/Vehicle/all`, {
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
      }else{
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
    },
    methods: {
      loadauto: function (auto) {
        this.model = auto;
        this.clicked = true;
      },
      deleteauto: function () {
        axios.put(`http://192.168.25.110:8080/Registreren/Vehicle/remove`, qs.stringify({
            'id': this.model.vehicleID
          }),
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
          .catch(function (error) {
            if (error.response.status == 403) {
              alert("Incorrect credentials");
            }
          })

      }
    }
  }
</script>
