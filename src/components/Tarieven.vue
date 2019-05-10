<template>
  <div>
    <NavBar></NavBar>
    <h1>Tarieven</h1>
    <div class="row">
      <div class="col-md-4">
        <h2>lijst:<br></h2>
        <div>
          <b-tabs content-class="mt-3" fill>
            <b-tab title="Straat" active>
              <div>
                <b-list-group style="margin: 5%">
                  <b-list-group-item href="#" active class="flex-column align-items-start" v-for="tarief in tarieven"
                                     :key="tarief.id" style="margin-bottom: 10px" v-on:click="loadtarief(tarief)">
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
            <b-tab title="Energie"><p>I'm the second tab</p></b-tab>
            <b-tab title="Tarief" disabled></b-tab>
          </b-tabs>
        </div>



      </div>
      <div class="col-md-8" v-if="model !== null">
        <h2>{{$t('selectcar')}}: {{model.license}}<br></h2>

        <div class="form-group" style=" width: 50%; alignment: center; text-align: left">
          <div>
            <label>Naam:</label>
            <label v-if="model.name != null" style="float: right;">{{model.name}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Prijs:</label>
            <label v-if="model.price != null" style="float: right;">{{model.price}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Start:</label>
            <label v-if="model.start != null" style="float: right;">{{model.start}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Expire:</label>
            <label v-if="model.expire != null" style="float: right;">{{model.expire}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Straat:</label>
            <label v-if="model.street != null" style="float: right;">{{model.street}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <!--<div>-->
            <!--<button type="button" class="btn btn-secondary btn-lg btn-block" v-on:click="deleteauto">Verwijderen-->
            <!--</button>-->

            <!--<button type="button" class="btn btn-secondary btn-lg btn-block" v-on:click="ChangeCar">Change-->
            <!--</button>-->
          <!--</div>-->


        </div>
        <udmodal :fname="fullname"></udmodal>


      </div>

    </div>

  </div>

</template>
<script>
  import axios from 'axios';
  import jwtcode from 'jwt-decode'


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
      }

    }
  }
</script>
