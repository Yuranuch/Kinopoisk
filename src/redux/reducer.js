export const SET_FILMS = "SET_FILMS"
export const GET_FILM = "GET_FILM"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const CLEAR_ALL = "CLEAR_ALL"
export const CURRENT_PAGE_CLICK = "CURRENT_PAGE_CLICK"


const initialState = {
    films: [],
    profile:{},
    isFetching: false,
    pageSize: 3,
    totalFilmsCount: 23,
    currentPage: 1,
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
    }

    return state;
}


export const setFilms = (films) => ({type: SET_FILMS, films})
export const getFilm = (film) => ({type: GET_FILM, film})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const clearAll = (clear) => ({type: CLEAR_ALL, clear})
export const currentPageClick =(currentPage) => ({type: CURRENT_PAGE_CLICK, currentPage})