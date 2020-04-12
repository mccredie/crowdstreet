import { createStore, combineReducers } from 'redux';
//import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { reduceWormTables } from "../wormtable";
import { reducer as formReducer } from 'redux-form'

export const initStore = () => (
    createStore(
        combineReducers({
            worms: reduceWormTables,
            form: formReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);





