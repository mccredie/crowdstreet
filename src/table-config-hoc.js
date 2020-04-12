import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import classNames from "classnames";

import { close } from "./config/actions";
import ConfigComponent from "./components/Config";


export default ({form, initialValues}) => connect(
    ({config}) => ({
        isOpen: config === form,
    }),
    (dispatch) => ({
        close: () => dispatch(close()),
    })
)(reduxForm({ form, initialValues })(
    ({reset, initialize, isOpen, close, ...props}) => (
        <ConfigComponent
            {...props}
            className={classNames({isOpen})}
            onSubmit={(values) => {
                initialize(values);
                close();
            }}
            onCancel={() => {
                    reset();
                    close();
            }}
        />
    )
));

