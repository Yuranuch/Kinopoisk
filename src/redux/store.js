import {filmsReducer} from "./reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleWare from "redux-thunk"

const reducers = combineReducers({
    filmsPagesPage: filmsReducer,
    form: formReducer
})


const store = createStore(reducers,applyMiddleware(thunkMiddleWare));


export default store;
