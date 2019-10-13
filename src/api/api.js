import * as axios from "axios";

const instanse = axios.create({
    // withCredentials: true,
    baseURL: 'http://www.omdbapi.com',

})

export const filmsAPI = {
    getFilms(filmName, year, currentPage) {
        return instanse.get(`/?apikey=711ef504&s=${filmName}&y=${year}&page=${currentPage}`)
    },

    getFilmId(filmId) {
        return instanse.get(`/?apikey=bcb1b6a3&i=${filmId}`)
    }
}