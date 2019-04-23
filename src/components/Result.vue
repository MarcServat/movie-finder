<template>
    <div class="results">
        <div class="mySlides fade" v-for="movie in movies" :key="movie.getimdbID()">
            <div class="numbertext">{{movies.getTitle()}}</div>
            <div class="text">{{movie.getyear()}}</div>
            <div class="text">{{movie.getimdbID()}}</div>
            <div class="text">{{movie.gettype()}}</div>
            <img :src="movie.getposter()" style="width:100%">
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../main";

    export default {
        name: 'Search',
        props: {
        },
        data() {
            return {
                movies: []
            }
        },
        created() {
            // eslint-disable-next-line no-console
            EventBus.$on('movie-data', (movies) => {
                // eslint-disable-next-line no-console
                console.log(this.movies)
                this.movies = movies;
            });
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
