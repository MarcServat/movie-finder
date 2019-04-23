import OmdbAPI from '../api/omd-api';
import {Movie} from "../Models/Movie";

export class Search {

    constructor() {
        this.omdb = OmdbAPI;
        this.page = 1;
    }

    movie(title) {
        const params = {
            apikey:'f331e7f',
            s: title,
            page: this.page
        };

        return this.omdb.get('', {params})
            .then(res => {
                try {
                    return res.data.Search.map(movie => new Movie(movie));
                } catch (e) {
                    e.message = res.data.Error;
                    return e;
                }
            })
            .catch(err => err)
    }

}
