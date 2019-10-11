export const SET_FILMS = "SET_FILMS"
export const GET_FILM = "GET_FILM"


const initialState = {
    films: [
        {imdbID: 0, Title: "Spider-Man 1", Year: 2001, Poster:"https://media.kg-portal.ru/movies/k/kapitanmarvel/posters/kapitanmarvel_30t.jpg"},
    ],
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