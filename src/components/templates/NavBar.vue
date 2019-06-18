<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand v-bind:to="'home'">Monaco</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav v-if="Checkrole('USER')">
          <b-nav-item v-bind:to="'mijnautos'">
            {{$t('menu_cars')}}
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="Checkrole('ADMINISTRATION')" >
          <b-nav-item v-bind:to="'tarieven'">
            {{$t('menu_tarieven')}}
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item v-if="Checkrole('USER')" v-bind:to="'factuur_user'">
            {{$t('menu_facturen')}}
          </b-nav-item>

          <b-navbar-nav>
            <b-nav-item v-if="Checkrole('ADMINISTRATION')" v-bind:to="'factuur'">
              {{$t('menu_facturen')}}
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item v-if="Checkrole('ADMINISTRATION')" v-bind:to="'administration/autos'">
            {{$t('menu_car')}}
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item v-if="Checkrole('ADMINISTRATION')" v-bind:to="'toevoegenauto'">
            {{$t('menu_Addcar')}}
          </b-nav-item>
        </b-navbar-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-bind:text="$t('menu_lang')" right v-model="$i18n.locale">
            <b-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" v-on:click="SwitchLang(lang)">{{ lang }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>{{$t('menu_user')}}</em></template>
            <b-dropdown-item v-bind:to="'profile'">{{$t('menu_settings')}}</b-dropdown-item>
            <b-dropdown-item v-on:click="Logout">{{$t('menu_logoff')}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import jwtcode from 'jwt-decode'

  export default {
    name: 'Nav',
    data () {
      return {
        role: "",
        langs: ['nl', 'en']
      }
    },
    mounted(){
      const jwt = jwtcode(localStorage.getItem('token'));
      this.role = jwt.Roles.toString();
    }
    ,
    methods: {
      Logout: function () {
        localStorage.removeItem('token');
        this.$router.push('/');
      },
      SwitchLang: function (lang) {
        this.$i18n.locale = lang;
        this.$router.push(this.$route);
      },
      Checkrole: function (role) {
        if(this.role.includes(role)){
          return true;
        }
        return false;
      }
    }
  }
</script>
