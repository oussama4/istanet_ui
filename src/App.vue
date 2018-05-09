<template>
  <v-app id="inspire">
    <Header></Header>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer color="indigo">
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
  }
</script>

<style>
</style>
