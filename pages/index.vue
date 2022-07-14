<template>
  <main>
    <h1>Index {{ $auth.user.name }}</h1>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: 'auth'
})
</script>
