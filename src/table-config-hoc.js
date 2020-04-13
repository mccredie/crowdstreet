import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import classNames from "classnames";

import { close } from "./config/actions";


export default ({form, ...options}) => (Component) => connect(
    ({config}) => ({
        isOpen: config === form,
    }),
    (dispatch) => ({
        close: () => dispatch(close()),
    })
)(reduxForm({ form, ...options })(
    ({reset, initialize, isOpen, close, onSubmit, ...props}) => (
        <Component
            {...props}
            className={classNames({isOpen})}
            onSubmit={(values) => {
                initialize(values);
                onSubmit && onSubmit(values);
                close();
            }}
            onCancel={() => {
                    reset();
                    close();
            }}
        />
    )
));

