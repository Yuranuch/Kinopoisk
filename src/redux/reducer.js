export const SET_FILMS = "SET_FILMS"
export const GET_FILM = "GET_FILM"


const initialState = {
    films: [],
    profile:{}

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.films

            }
        case GET_FILM:
            debugger
            return {
                ...state,
                profile: action.film
            }

    }

    return state;
}


export const setFilms = (films) => ({type: SET_FILMS, films})
export const getFilm = (film) => ({type: GET_FILM, film})