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
    import {Search} from '../services/search.service';

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
                search: new Search(),
                error: '',
                loading: ''
            }
        },
        methods: {
            query (e) {
                e.preventDefault();
                this.loading = 'loading';
                this.search.movie(e.target.value).then(data => {
                    this.loading = '';
                    if (data instanceof Error) this.error = data.message;
                    else {
                        console.log(data)
                        console.log(this.search)
                        this.$emit('movie-data', data);
                        this.$router.push(`/result?page=${this.search.page}`)
                    }
                }).catch(err => err);
            }
        },
        beforeUpdate() {
            if(this.nextPage) {
                this.search.movie(e.target.value).then(data => {
                    if (data instanceof Error) this.error = data.message;
                    else {
                        console.log(data)
                        console.log(this.search)
                        this.$emit('movie-data', data);
                        this.$router.push(`/result?page=${this.search.page}`)
                    }
                })
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
