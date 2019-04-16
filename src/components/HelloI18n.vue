<template>
  <div>
  <p>{{ $t('test') }}</p>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</div>
</template>

<script>


  export default {
    name: 'locale-changer',
    data() {
      return {
        langs: ['nl', 'en']
      }
    }
  }


</script>



<i18n>

</i18n>
