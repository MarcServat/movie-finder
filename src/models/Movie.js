export class Movie {
  constructor(movie) {
    this.title = movie.Title || "";
    this.year = movie.Year || "";
    this.imdbID = movie.imdbID || "";
    this.director = movie.Director || "";
    this.poster = movie.Poster || "";
  }

  getTitle() {
    return this.title;
  }

  getYear() {
    return this.year;
  }

  getPoster() {
    return this.poster;
  }
}
