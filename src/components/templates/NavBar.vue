<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand v-bind:to="'home'">Monaco</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-bind:to="'mijnautos'">
            Mijn auto's
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item v-bind:to="'tarieven'">
            Tarieven
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item v-bind:to="'factuur'">
            Facturen
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Taal" right v-model="$i18n.locale">
            <b-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" v-on:click="SwitchLang(lang)">{{ lang }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>Gebruiker</em></template>
            <b-dropdown-item v-bind:to="'profile'">Settings</b-dropdown-item>
            <b-dropdown-item v-on:click="Logout">Uitloggen</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'Nav',
    data () {
      return {
        langs: ['nl', 'en']
      }
    },
    methods: {
      Logout: function () {
        localStorage.removeItem('token');
        this.$router.push('/');
      },
      SwitchLang: function (lang) {
        this.$i18n.locale = lang;
        this.$router.push(this.$route);
      }
    }
  }
</script>
