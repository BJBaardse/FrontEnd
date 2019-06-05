<template>
  <div>
    <NavBar></NavBar>
    <h1>Rides</h1>
    <div class="row">
      <div class="col-md-4">
        <h2>List of rides:<br></h2>
        <div>
          <div>
            <b-list-group style="margin: 5%">
              <b-list-group-item href="#" active class="flex-column align-items-start" v-for="ride in rides"
                                 :key="ride.id" style="margin-bottom: 10px" v-on:click="loadride(ride)">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ ride.date | moment("hh:mmA | MMMM Do YYYY") }}</h5>
                  <small>From: {{ride.movements[0].street}} <br>
                  To: {{ride.movements[ride.movements.length-1].street}}</small>
                </div>
              </b-list-group-item>
            </b-list-group>
          </div>
        </div>


      </div>
      <div class="col-md-8" v-if="model !== null">
        <h2>Ride:<br></h2>

        <div class="form-group" style=" width: 50%; alignment: center; text-align: left">
          <div>
            <label>Date:</label>
            <label v-if="model.date != null" style="float: right;">{{ model.date | moment("dddd, MMMM Do YYYY ")
              }}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Time:</label>
            <label v-if="model.date != null" style="float: right;">{{ model.date | moment("hh:mm A")
              }}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Kilometer:</label>
            <label v-if="model.kilometers != null" style="float: right;">{{model.kilometers}} km</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <div>
            <label>Price:</label>
            <label v-if="model.price != null" style="float: right;">{{model.price}} euro</label>
            <label v-else style="float: right;">Unknown</label>
          </div>
          <!--<div class="col-md-6">-->
            <!--<button type="button" class="btn btn-light btn-outline-dark btn-lg btn-block" v-on:click="showStreets()">Show driven streets-->
            <!--</button>-->
          <!--</div>-->
          <!--<div>-->
            <!---->
          <!--</div>-->

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
        rides: [],
        errors: [],
        label: '',
        clicked: false,
        model: null
      }
    },

    mounted() {
      this.rides = JSON.parse(sessionStorage.getItem("selectedfactuur"));

    },
    methods: {
      loadride: function (ride) {
        this.model = ride;
        this.clicked = true;
      }

    },
    computed: {
      sortedBills: function () {
        this.bills.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        return this.bills;

      },
      showStreets: function () {

      }
    }
  }
</script>
