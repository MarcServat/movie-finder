<template>
    <div :class="'results ui segment ' + loading">
        <div class="slides fade">
            <div>{{this.search.getPage()}} of {{this.search.getTotalPages()}} pages</div>
            <div class="header">{{movie.getTitle()}}</div>
            <div class="description">{{movie.getYear()}}</div>
            <div v-if="movie.getPoster() !== 'N/A' && getImage()" class="ui small image">
               <img :src="movieImage" style="width:100%" alt="Movie Cover">
            </div>
            <div v-else class="ui ui icon header">
                <i class="ban icon"></i>
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

    import {Movie} from "../models/Movie";
    import SearchService from "../services/search.service"

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
          search: SearchService,
          movieImage: '',
          pages: 0,
          slide: {
            pos: 0,
            max: this.movieData.data.length - 1,
          },
          loading: ''
        }
      },
      methods: {
        onLeft(n) {
          if (this.search.getPage() > 1 && this.slide.pos === 0) {
            this.requestImages(n);
          } else {
            this.slide.pos === 0 ? this.slide.pos : this.slide.pos += n;
            this.movie = this.movieData.data[this.slide.pos];
          }
        },
        onRight(n) {
            if (this.search.getPage() < this.search.getTotalPages() && this.slide.pos === this.slide.max) {
              this.requestImages(n);
            } else {
              this.slide.pos === this.search.getTotalPages() ? this.slide.pos : this.slide.pos += n;
              this.movie = this.movieData.data[this.slide.pos];
            }
            this.movie = this.movieData.data[this.slide.pos];
        },
        requestImages(n) {
          this.loading = 'loading';
          this.search.getMovies(n).then(res => {
            this.movieData.data = res.data;
            this.loading = '';
            this.slide.pos = 0;
            this.movie = this.movieData.data[this.slide.pos];
            this.slide.max = this.movieData.data.length - 1;
          }).catch(err => console.log(err));
        },
        getImage() {
          this.search.coverMovie(this.movie.getPoster()).then(res => {
            this.movieImage = res;
          });
          return this.movieImage;
        }
      },
      created() {
        if (typeof this.movieData.data !== 'undefined') {
          this.movie = this.movieData.data[0];
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

    .slides {
        text-align: center;
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
