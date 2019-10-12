export const SET_FILMS = "SET_FILMS"
export const GET_FILM = "GET_FILM"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const CLEAR_ALL = "CLEAR_ALL"
export const CURRENT_PAGE_CLICK = "CURRENT_PAGE_CLICK"
export const GET_YEAR = "GET_YEAR"
export const GET_FILM_NAME ="GET_FILM_NAME"
export const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT"



const initialState = {
    films: [],
    profile:{},
    isFetching: false,
    pageSize: 10,
    totalFilmsCount: 0,
    currentPage: 1,
    year: 1985,
    filmName: ""
}

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.films
            }
        case GET_FILM:
            return {
                ...state,
                profile: action.film
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case CLEAR_ALL:
            return {
                ...state,
                films: action.clear
            }
        case CURRENT_PAGE_CLICK:

            return{
                ...state,
                currentPage: action.currentPage
            }
        case GET_YEAR:

            return {
                ...state,
                year: action.year
            }
        case GET_FILM_NAME:
            return {
                ...state,
                filmName: action.filmName
            }
        case SET_TOTAL_PAGE_COUNT:
            return {
                ...state,
                totalFilmsCount: action.count
            }
    }

    return state;
}


export const setFilms = (films) => ({type: SET_FILMS, films})
export const getFilm = (film) => ({type: GET_FILM, film})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const clearAll = (clear) => ({type: CLEAR_ALL, clear})
export const currentPageClick =(currentPage) => ({type: CURRENT_PAGE_CLICK, currentPage})
export const getYear = (year) => (({type: GET_YEAR, year}))
export const getFilmName = (filmName) => ({type: GET_FILM_NAME, filmName})
export const setTotalPageCount = (count) => ({type: SET_TOTAL_PAGE_COUNT, count})