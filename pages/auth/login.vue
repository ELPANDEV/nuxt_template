<template>
  <main>
    <input v-model="data.email" type="text">
    <input v-model="data.password" type="password">
    <button @click="login()">login</button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'auth',
  data() {
    return {
      data: {
        email:    'javoavmystery@gmail.com',
        password: 'fm:zW4Pa[Zb6cmV,'
      }
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('laravelJWT', { data: this.data })
    }
  }
})
</script>
