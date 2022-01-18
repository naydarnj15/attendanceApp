<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary justify-content-center">
      <a class="navbar-brand abs" href="#">Attendance App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

      <div class="navbar-collapse collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav">
          <li class="nav-item active" v-for="(page, i) in pages" :key="i">
            <router-link class="nav-link" :to="'/' + page.slug">{{ page.name }}</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/report">Reports</router-link>
          </li>
        </ul>
      </div>
    </nav>

</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["pages"])
  }
}
</script>

<style scoped>
.navbar-brand.abs
{
  position: absolute;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
