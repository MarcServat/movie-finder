<template>
    <main>
        <div :class="'ui center aligned category search ' + loading">
            <div class="ui icon input">
                <input class="prompt" type="text" placeholder="Search movies..." @keydown.13="query">
                <i class="search icon"></i>
            </div>
        </div>
        <div class="results">{{error}}</div>
    </main>
</template>

<script>
    import {Search} from '../services/search';
    import {EventBus} from "../main";

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
                    if (movies instanceof Error) this.error = movies.message;
                    else EventBus.$emit('movie-data', movies);
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
</style>
