/* Defines a HOC for worm tables that makes it easy to reuse the state logic.
 * This is similar to the way redux-form works.  */

import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import reduce from "./state";
import { set } from "./actions"

export const wormTable = ({table, initialValues}) => (component) => {
    const mapStateToProps = (state) => ({...initialValues, ...state.worms[table]});
    const mapDispatchToProps = (dispatch) => ({
        onSubmit: (payload) => dispatch({ ...set(payload), table }),
    });
    return connect(mapStateToProps, mapDispatchToProps)(
        reduxForm({ form: `worm/${table}`, initialValues })(component)
    )
}

export const reduceWormTables = (state={}, action) => {
    const { type, table } = action;
    if (type.startsWith("WORM/") && typeof table !== "undefined") {
        return {...state, [table]: reduce(state[table], action)};
    }
    return state;
}
