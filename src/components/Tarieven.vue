<template>
  <div>
    <NavBar></NavBar>
    <h1>{{$t('tarieven')}}</h1>
    <div class="row">
      <div class="col-md-4">
        <h2>{{$t('list_rates')}}:<br></h2>
        <div>
          <b-tabs content-class="mt-3" fill>
            <b-tab v-bind:title="$t('rate_street')" active>
              <div>
                <b-list-group style="margin: 5%">
                  <b-list-group-item href="#" active class="flex-column align-items-start" v-for="tarief in tarieven"
                                     :key="tarief.id" style="margin-bottom: 10px" v-on:click="loadtarief(tarief)" v-if="tarief.street != null">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{tarief.name}} </h5>
                      <div v-if="tarief.street != null">
                        <small>{{tarief.street}}</small>
                      </div>
                    </div>
                  </b-list-group-item>
                </b-list-group>
              </div>
            </b-tab>
            <b-tab v-bind:title="$t('rate_energie')">
              <div>
                <b-list-group style="margin: 5%">
                  <b-list-group-item href="#" active class="flex-column align-items-start" v-for="tarief in tarieven"
                                     :key="tarief.id" style="margin-bottom: 10px" v-on:click="loadtarief(tarief)" v-if="tarief.energy != null">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{tarief.name}} </h5>
                      <div v-if="tarief.energy != null">
                        <small>{{tarief.energy}}</small>
                      </div>
                    </div>
                  </b-list-group-item>
                </b-list-group>
              </div>
            </b-tab>

            <b-tab v-bind:title="$t('rate_rate')" disabled></b-tab>
          </b-tabs>
        </div>



      </div>
      <div class="col-md-8" v-if="model !== null">
        <h2>{{$t('rate_info')}}: {{model.license}}<br></h2>

        <div class="form-group" style=" width: 50%; alignment: center; text-align: left">
          <div>
            <label>{{$t('rate_name')}}:</label>
            <label v-if="model.name != null" style="float: right;">{{model.name}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div v-if="model.street != null" >
            <label>{{$t('rate_price')}}:</label>
            <label v-if="model.price != null" style="float: right;">{{model.price}} %</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div v-else-if="model.energy != null" >
            <label>{{$t('rate_price')}}:</label>
            <label v-if="model.price != null" style="float: right;"> € {{model.price}} </label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div v-else >
            <label>{{$t('rate_price')}}:</label>
            <label v-if="model.price != null" style="float: right;">{{model.price}} </label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>{{$t('rate_start')}}:</label>
            <label v-if="model.start != null" style="float: right;">{{model.start | moment("dddd, MMMM Do YYYY")}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>{{$t('rate_expire')}}:</label>
            <label v-if="model.expire != null" style="float: right;">{{model.expire | moment("dddd, MMMM Do YYYY")}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div v-if="model.street != null">
            <label>{{$t('rate_street')}}:</label>
            <label v-if="model.street != null" style="float: right;" >{{model.street}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>

          <div v-if="model.energy != null">
            <label>{{$t('rate_energie')}}:</label>
            <label v-if="model.energy != null" style="float: right;" >{{model.energy}}</label>
            <label v-else style="float: right;">Unknown</label>
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
    components: {},
    data() {
      return {
        tarieven: [],
        errors: [],
        label: '',
        clicked: false,
        model: null,
        fullname: "old name"
      }
    },

    mounted() {
      axios.get(`http://192.168.25.110:8080/Registreren/Kilometertarief`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          this.tarieven = response.data;
        })
        .catch(function (error) {
          alert("No rights");
        })


    },
    methods: {
      loadtarief: function (auto) {
        this.model = auto;
        this.clicked = true;
        sessionStorage.setItem("Tarief", JSON.stringify(auto));
      }

    }
  }
</script>
