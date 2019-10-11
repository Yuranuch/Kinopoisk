import {filmsReducer} from "./reducer";
import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    filmsPagesPage: filmsReducer,
    form: formReducer
})


const store = createStore(reducers);


export default store;
