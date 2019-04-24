import OmdbAPI from '../api/omd-api';
import {Movie} from "../models/Movie";

// export class Search {
//
//     constructor() {
//         this.omdb = OmdbAPI;
//         this.page = 1;
//     }
//
//     getMovies(title, page = null) {
//         const params = {
//             apikey:'f331e7f',
//             s: title,
//             page: page || this.page
//         };
//
//         return this.omdb.get('', {params})
//             .then(res => {
//                 try {
//                     const {Search, totalResults} = res.data;
//                     return {data: Search.map(getMovies => new Movie(getMovies)), pages: totalResults};
//                 } catch (e) {
//                     e.message = res.data.Error;
//                     return e;
//                 }
//             })
//             .catch(err => err)
//     }
//
// }




const Search = (function() {
    const _apiKey = 'f331e7f';
    const _omdb = OmdbAPI;
    let _page = 0;
    let _query = '';
    
    function getParams() {
         return {
            apikey: _apiKey,
            s: _query,
            page: _page
        }
    }

    function nextPage() {
        _page = _page + 1;
    }

    return {
        init: (text) => {
          _query = text
        },
        getMovies: () => {
            nextPage();
            return _omdb.get('', {params: getParams()})
                .then(res => {
                    try {
                        const {Search, totalResults} = res.data;
                        return {data: Search.map(movie => new Movie(movie)), pages: totalResults};
                    } catch (e) {
                        e.message = res.data.Error;
                        return e;
                    }
                })
                .catch(err => err)
        },

        getPage: () => {
            return _page;
        },
        setPage: (page) => {
            _page = page;
        },

        getQuery: () => {
            return _query;
        },

        setQuery: (text) => {
            _query = text;
        }
    };
})();

export default Search;

//
//
//
//
//
//
//
// class Search {
//
//     constructor(){
//         this.omdb = OmdbAPI;
//         this.apiKey = 'f331e7f';
//     }
//
//     getMovies(text = '') {
//         this.setQuery(text);
//         const params = {
//             apikey: this.getApiKey(),
//             s: text,
//             page: this.getPage()
//         };
//
//         return this.omdb.get('', {params})
//             .then(res => {
//                 try {
//                     const {Search, totalResults} = res.data;
//                     return {data: Search.map(movie => new Movie(movie)), pages: totalResults};
//                 } catch (e) {
//                     e.message = res.data.Error;
//                     return e;
//                 }
//             })
//             .catch(err => err)
//     }
//
//     getQuery() {
//         return this.query;
//     }
//     setQuery(text) {
//         this.query = text;
//     }
//
//     getPage() {
//         return this.page;
//     }
//
//     setPage(page) {
//         this.page = page;
//     }
//     getApiKey() {
//         return this.apiKey;
//     }
//
// }
//
// const searchInstance = new Search();
// Object.freeze(searchInstance);
//
// export default searchInstance;
