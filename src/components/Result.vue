<template>
    <div class="results">
        {{movies}}
        <div class="mySlides fade" v-for="movie in movies" :key="movie.getimdbID()">
            <div class="numbertext">{{movie.getTitle()}}</div>
            <div class="text">{{movie.getyear()}}</div>
            <div class="text">{{movie.getimdbID()}}</div>
            <div class="text">{{movie.gettype()}}</div>
            <img :src="movie.getposter()" style="width:100%">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Result',
        props: {
        },
        data() {
            return {
                movies: []
            }
        },
        created() {
          this.$on('movie-data', (movies) => {
            console.log(movies)
          })
        }
    }
</script>

<style scoped>
    .results {
        max-width: 1000px;
        position: relative;
        margin: auto;
    }
</style>
