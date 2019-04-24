<template>
  <div id="app ui items">
    <Header></Header>
    <router-view movieData="movieData"></router-view>
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
      movies: []
    }
  },
  methods:{
  },
  created() {
    this.$on('movie-data', (movies) => {
      this.movies = movies;
      console.log('APP', movies)
    })
  }
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
