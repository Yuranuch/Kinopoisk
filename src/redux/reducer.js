export const SET_FILMS = "SET_FILMS"
export const GET_FILM = "GET_FILM"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


const initialState = {
    films: [],
    profile:{},
    isFetching: false
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
    }

    return state;
}


export const setFilms = (films) => ({type: SET_FILMS, films})
export const getFilm = (film) => ({type: GET_FILM, film})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})