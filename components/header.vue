<template>
  <header>
    <template v-if="$auth.loggedIn">
      <button @click="$auth.logout()">logout</button>
    </template>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
