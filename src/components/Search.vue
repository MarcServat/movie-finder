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
    import search from '../services/search.service';

    export default {
        name: 'Search',
        props: {
            nextPage: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                search: search,
                error: '',
                loading: ''
            }
        },
        methods: {
            query (e) {
                e.preventDefault();
                this.loading = 'loading';
                this.search.init(e.target.value);
                this.search.getMovies().then(data => {
                    this.loading = '';
                    if (data instanceof Error) this.error = data.message;
                    else {
                        this.$emit('movie-data', data);
                        this.$router.push(`/result?page=${this.search.page}`)
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
