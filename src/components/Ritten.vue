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
                    To: {{ride.movements[ride.movements.length-1].street}}
                  </small>
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
          <div class="col-md-6">
            <button type="button" class="btn btn-light btn-outline-dark btn-lg btn-block" v-on:click="showStreets()">
              Show driven streets
            </button>
          </div>
          <div v-show="detailstoggle">
            <div class="container">
              <div class="row">
                <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                  <thead>
                  <tr>
                    <th>Street</th>
                    <th>Distance</th>
                    <th>Base price</th>
                    <th>Additional price</th>
                    <!--<th>Total price</th>-->
                  </tr>
                  </thead>
                  <tfoot>
                  <tr>
                    <th>Street</th>
                    <th>Distance</th>
                    <th>Base price /km</th>
                    <th>Additional price</th>
                    <!--<th>Total price</th>-->
                  </tr>
                  </tfoot>
                  <tbody>
                    <!--<div >-->
                  <tr v-for="movement in movements">
                    <td>{{movement.street}}</td>
                    <td>{{movement.kilometers}}km</td>
                    <td>{{movement.baseTarief.price}},- /km</td>
                    <td v-if="movement.additionTarief != null">{{movement.additionTarief.price}}%</td>
                    <td v-else>0%</td>
                    <!--<td></td>-->
                  </tr>
                  <!--</div>-->
                  </tbody>
                </table>

              </div>
            </div>
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
        rides: [],
        errors: [],
        label: '',
        clicked: false,
        model: null,
        detailstoggle: false,
        movements: []
      }
    },

    mounted() {
      this.rides = JSON.parse(sessionStorage.getItem("selectedfactuur"));

    },
    methods: {
      loadride: function (ride) {
        this.model = ride;
        this.movements = ride.movements
        this.clicked = true;
      },
      showStreets: function () {
        this.detailstoggle = !this.detailstoggle;
      }
    },
    computed: {
      sortedBills: function () {
        this.bills.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        return this.bills;

      }

    }
  }
</script>
