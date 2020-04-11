import { createStore, combineReducers } from 'redux';

import reduceWormTable from "../wormtable/state";

export const initStore = () => (
    createStore(
        combineReducers({
            red: reduceWormTable,
            green: reduceWormTable,
            blue: reduceWormTable,
        }),
        {
            red: {
                n: 8,
                x: 1,
                m: 29,
            },
            green: {
                n: 231,
                x: 1,
                m: 247,
            },
            blue: {
                n: 47,
                x: 2,
                m: 81,
            },
        }
    )
)
