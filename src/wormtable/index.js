/* Defines a HOC for worm tables that makes it easy to reuse the state logic.
 * This is similar to the way redux-form works.  */

import { connect } from "react-redux";

import reduce from "./state";
import { open, close } from "../config/actions"

export const wormTable = ({table, initialValues}) => (component) => {
    const mapStateToProps = (state) => ({...initialValues, ...state.worms[table]});
    const mapDispatchToProps = (dispatch) => ({
        onConfigure: () => dispatch(open(table)),
        onCancel: () => dispatch(close()),
    });
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export const reduceWormTables = (state={}, action) => {
    const { type, table } = action;
    if (type.startsWith("WORM/") && typeof table !== "undefined") {
        return {...state, [table]: reduce(state[table], action)};
    }
    return state;
}
