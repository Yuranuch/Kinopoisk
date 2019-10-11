export const SET_FILMS = "SET_FILMS"


const initialState = {
    films: [
        {id: 0, Title: "Spider-Man 1", Year: 2001, Poster:"https://media.kg-portal.ru/movies/k/kapitanmarvel/posters/kapitanmarvel_30t.jpg"},


    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.films

            }

    }

    return state;
}


export const setFilms = (films) => ({type: SET_FILMS, films})