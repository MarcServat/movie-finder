<template>
  <div id="app">
    <Header></Header>
    <router-view @movie-data="showResults"
                 @retrive-movies="retrieveMovies"
                 :movie-data="movieResponse"
                 :retrieve-movie="nextPage">
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
      this.movieResponse = response
    },
    retrieveMovies() {
      this.nextPage = true
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
}
</style>
