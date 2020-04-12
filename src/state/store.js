import { createStore, combineReducers } from 'redux';

import { reduceWormTables } from "../wormtable";
import { reducer as formReducer } from 'redux-form'
import configReducer from "../config/state"

export const initStore = () => (
    createStore(
        combineReducers({
            worms: reduceWormTables,
            form: formReducer,
            config: configReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);





