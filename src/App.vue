<template>
  <div id="app ui items">
    <Header></Header>
    <router-view @movie-data="showResults"
                 :movie-data="movieResponse">
    </router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      movieResponse: {},
      nextPage: false
    }
  },
  methods:{
    showResults(response) {
      console.log(response)
      this.movieResponse = response;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh !important;
}
</style>
