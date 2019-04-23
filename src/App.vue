<template>
  <div id="app">
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
      data: []
    }
  },
  methods:{
  },
  beforeUpdate() {
    this.$on('movie-data', (movies) => {
      // eslint-disable-next-line no-console
      console.log(movies)
      this.data = movies;
    });
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
}
</style>
