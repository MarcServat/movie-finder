<template>
    <main class="ui container center aligned segment searcher">
        <div :class="'ui category search ' + loading">
            <div class="ui icon input">
                <input type="text" placeholder="Type a title..." @keydown.13="query">
                <i class="search icon"></i>
            </div>
        </div>
        <div class="results">{{error}}</div>
        <button class="ui purple basic button" @click="query">Find Movie</button>
    </main>
</template>

<script>
    import {Search} from '../services/search';

    export default {
        name: 'Search',
        props: {
        },
        data() {
            return {
                search: new Search(),
                error: '',
                loading: ''
            }
        },
        methods: {
            query (e) {
                e.preventDefault();
                this.loading = 'loading';
                this.search.movie(e.target.value).then(movies => {
                    this.loading = '';
                    if (movies instanceof Error) {
                      this.error = movies.message;
                    } else {
                      console.log('movies', movies)
                      this.$emit('movie-data', movies);
                      this.$router.push('/result')
                    }
                }).catch(err => err);
            }

        }
    }
</script>

<style scoped>
    .results {
        margin: 10px;
        color: red;
    }

    .searcher {
        line-height: 100px;
        position: absolute;
        top: 30%;
        left: 20%;
    }
</style>
