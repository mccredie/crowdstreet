/* Defines a HOC for worm tables that makes it easy to reuse the state logic.
 * This is similar to the way redux-form works.  */

import { connect } from "react-redux";

import reduce from "./state";

export const wormTable = ({table, initialValues}) => (component) => {
    const mapStateToProps = (state) => ({...initialValues, ...state.worms[table]});
    return connect(mapStateToProps)(component)
}

export const reduceWormTables = (state={}, action) => {
    const { type, table } = action;
    if (type.startsWith("WORM/") && typeof table !== "undefined") {
        return reduce(state.worms[table], action);
    }
    return state;
}
