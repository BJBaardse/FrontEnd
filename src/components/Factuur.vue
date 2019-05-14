<template>
  <div>
    <NavBar></NavBar>
    <h1>{{$t('tarieven')}}</h1>
    <div class="row">
      <div class="col-md-4">
        <h2>{{$t('list_rates')}}:<br></h2>
        <div>
              <div>
                <b-list-group style="margin: 5%">
                  <b-list-group-item href="#" active class="flex-column align-items-start" v-for="bill in bills"
                                     :key="bill.id" style="margin-bottom: 10px" v-on:click="loadbill(bill)">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{bill.date}}</h5>
                    </div>
                  </b-list-group-item>
                </b-list-group>
              </div>
        </div>



      </div>
      <div class="col-md-8" v-if="model !== null">
        <h2>Bill:<br></h2>

        <div class="form-group" style=" width: 50%; alignment: center; text-align: left">
          <div>
            <label>Date:</label>
            <label v-if="model.dateReadable != null" style="float: right;">{{dateReadable}}</label>
            <label v-else style="float: right;">Unknown</label>
          </div>


        </div>


      </div>

    </div>

  </div>

</template>
<script>
  import axios from 'axios';
  var moment = require('moment');

  const qs = require('qs');
  export default {
    name: 'app',
    components: {},
    data() {
      return {
        bills: [],
        errors: [],
        label: '',
        clicked: false,
        model: null,
        dateReadable: ''
      }
    },

    mounted() {
      axios.get(`http://192.168.25.110:8080/Registreren/bill/all`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          this.bills = response.data;
        })
        .catch(function (error) {
          alert("No rights");
        })


    },
    methods: {
      loadbill: function (bill) {
        this.model = bill;
        this.clicked = true;
        this.dateReadable = this.moment(bill.date).format('YYYY-MM-DD');
      }

    }
  }
</script>
