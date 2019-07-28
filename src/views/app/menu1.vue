<template>
  <v-container fluid>
    <form-json :formFields="jsonFields" :formName="'userProfil'" />
  </v-container>
</template>

<script>
import 'bulma/css/bulma.min.css'
import 'vue-form-json/dist/vue-form-json.css'
import formJson from 'vue-form-json'
import jsonFields from '@/assets/fields'

export default {
  name: 'app',
  components: {
    formJson
  },
  data: () => ({
    jsonFields
  }),
  mounted() {
    this.$root.$on('formSubmitted', values => alert(JSON.stringify(values)))
  }
}
</script>
<style>
  form 
    {
      border-left-width: 10px;
      border-right-width: 10px;
      max-width:80rem
    }
</style>
