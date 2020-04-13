import React from 'react';
import { Field } from "redux-form";
import classNames from "classnames";

import "./Config.css";

const number = (value, allValues, props, name) => {
    const asNumber = parseInt(value);
    if (!Number.isInteger(asNumber) || !Number.isFinite(asNumber)) {
        return `The value of ${name} should be an integer`
    }
}

const normInt = (value) => {
    const intValue = parseInt(value);
    if (isNaN(intValue)) {
        return value;
    }
    return intValue;
}

const renderField = ({
  input,
  meta: { touched, error },
  ...rest
}) => (
  <>
      <input {...input} {...rest}/>
      {touched &&
        (error && <span>{error}</span>)}
  </>
);

export default ({ className, handleSubmit, onSubmit, onCancel }) => (
    <form className={classNames("Config", className)} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="n">N =</label>
        <Field name="n" component={renderField} type="text" normalize={normInt} validate={number} />
      </div>
      <div>
        <label htmlFor="x">X = </label>
        <Field name="x" component={renderField} type="text" normalize={normInt} validate={number}/>
      </div>
      <div>
        <label htmlFor="m">M = </label>
        <Field name="m" component={renderField} type="text" normalize={normInt} validate={number}/>
      </div>
      <div>
        <label htmlFor="w">W = </label>
        <Field name="w" component={renderField} type="text" normalize={normInt} validate={number}/>%
      </div>
      <div>
        <label htmlFor="d">D = </label>
        <Field name="d" component="select" type="text">
          <option value="ltr-up">LTR-UP</option>
          <option value="rtl-up">RTL-UP</option>
        </Field>
      </div>
      <button type="submit">Ok</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
);
