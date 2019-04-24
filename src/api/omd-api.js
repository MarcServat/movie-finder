import axios from 'axios'

export default axios.create({
    baseURL: 'http://www.omdbapi.com/'
})

export const getRequest = (url) => axios.get(url);
