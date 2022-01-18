<template>
  <div class="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// Import mapActions from vuex
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    Header
  },
  // Define mapActions to dispatch Store Actions in methods
  methods: {
    ...mapActions(["setPagesAction"])
  },
  // Hook the actions when vue/app lifecycle is created to call them
  created() {
    this.setPagesAction()
  }
}
</script>

