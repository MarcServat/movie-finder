export class Movie {
    constructor(movie) {
        this.title = movie.Title || '';
        this.year = movie.Year || '';
        this.imdbID = movie.imdbID || '';
        this.type = movie.Type || '';
        this.poster = movie.Poster || '';
    }

    getTitle() {
        return this.title;
    }

    getYear() {
        return this.year;
    }
    getImdbID() {
        return this.imdbID;
    }
    getType() {
        return this.type;
    }
    getPoster() {
        return this.poster;
    }

}
