import { createStore, combineReducers } from 'redux';

import { reduceWormTables } from "../wormtable";

export const initStore = () => (
    createStore(
        combineReducers({
            worms: reduceWormTables,
        }),
    )
)
