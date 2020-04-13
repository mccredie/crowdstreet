import { connect } from "react-redux";
import { formValueSelector } from 'redux-form'


import { open } from "./config/actions";


export default (table) => {
    const selector = formValueSelector(table)
    const mapStateToProps = (state) => ({
        n: selector(state, 'n'),
        x: selector(state, 'x'),
        m: selector(state, 'm'),
        w: selector(state, 'w'),
        d: selector(state, 'd'),
    });
    const mapDispatchToProps = (dispatch) => ({
        onConfigure: () => dispatch(open(table)),
    });

    return connect(mapStateToProps, mapDispatchToProps);
};
