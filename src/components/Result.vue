<template>
    <div class="results ui segment stacked">
        <div class="slides fade">
            <div class="header">{{movie.getTitle()}}</div>
            <div class="description">{{movie.getYear()}}</div>
            <div class="ui small image">
                <img :src="movie.getPoster()" style="width:100%">
            </div>
            <div class="meta">{{movie.getImdbID()}}</div>
            <div class="meta">{{movie.getType()}}</div>
        </div>
        <!-- Next and previous buttons -->
        <a class="prev" @click="onLeft(-1)">&#10094;</a>
        <a class="next" @click="onRight(1)">&#10095;</a>
    </div>
</template>

<script>

    import {Movie} from "../Models/Movie";

    export default {
        name: 'Result',
        props: {
            movieData: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                movie: new Movie({}),
                pages: 0,
                slide: {
                    pos: 0,
                    max: this.movieData.data.length - 1,
                }
            }
        },
        methods: {
            onLeft(n) {
                this.slide.pos <= 0 ? this.slide.pos = 0 : this.slide.pos += n;
                this.movie = this.movieData.data[this.slide.pos];
            },
            onRight(n) {
                if(this.slide.pos >= this.slide.max) {
                    this.slide.pos = this.slide.max;
                    this.$emit('retrieve-movies', true);
                } else {
                    this.slide.pos += n;
                }
                this.movie = this.movieData.data[this.slide.pos];
            }
        },
        created() {
            if(this.movieData.data.length > 0) {
                this.movie = this.movieData.data[0];
                this.pages = this.movieData.pages;
            } else {
                this.$router.push('/404');
            }
        }
    }
</script>

<style scoped>
    .results {
        max-width: 1000px;
        position: relative;
        margin: auto;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: #5a51ff;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }

    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    .header {
        font-weight: bold;
    }

    /* Fading animation */
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

    /* Position the "next button" to the right */
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
    }
</style>
