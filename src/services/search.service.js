import OmdbAPI, { getRequest } from "../api/omd-api";
import { Movie } from "../models/Movie";

const Search = (function() {
  const _apiKey = "f331e7f";
  const _omdb = OmdbAPI;
  const type = "movie";
  let _totalPages = 0;
  let page = 0;
  let query = "";

  function getParams() {
    return {
      apikey: _apiKey,
      s: query,
      page,
      type
    };
  }

  function nextPage() {
    page = page + 1;
  }

  function previousPage() {
    page = page - 1;
  }

  return {
    init: text => {
      query = text;
    },

    getPage: () => {
      return page;
    },

    setPage: num => {
      page = num;
    },

    getTotalPages() {
      return _totalPages;
    },

    getMovies: (num = 1) => {
      num > 0 ? nextPage() : previousPage();
      return _omdb
        .get("", { params: getParams() })
        .then(res => {
          try {
            const { Search, totalResults } = res.data;
            _totalPages = totalResults;
            return {
              data: Search.map(movie => new Movie(movie))
            };
          } catch (e) {
            e.message = res.data.Error;
            return e;
          }
        })
        .catch(err => err);
    },

    coverMovie(url) {
      return getRequest(url)
        .then(() => Promise.resolve(url))
        .catch(() => Promise.resolve(false));
    }
  };
})();

export default Search;
