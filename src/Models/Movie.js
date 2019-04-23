export class Movie {
    constructor(movie) {
        this.title = movie.Title;
        this.year = movie.Year;
        this.imdbID = movie.imdbID;
        this.type = movie.Type;
        this.poster = movie.Poster;
    }

    getTitle() {
        return this.title;
    }

    getyear() {
        return this.year;
    }
    getimdbID() {
        return this.imdbID;
    }
    gettype() {
        return this.type;
    }
    getposter() {
        return this.poster;
    }

}
