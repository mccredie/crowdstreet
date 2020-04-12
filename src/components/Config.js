import React from 'react';
import { Field } from "redux-form";
import classNames from "classnames";

import "./Config.css";

export default ({ className, handleSubmit, onSubmit, onCancel }) => (
    <form className={classNames("Config", className)} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="n">N = </label>
        <Field name="n" component="input" type="text"  parse={(value) => parseInt(value)} />
      </div>
      <div>
        <label htmlFor="x">X = </label>
        <Field name="x" component="input" type="text" parse={(value) => parseInt(value)} />
      </div>
      <div>
        <label htmlFor="m">M = </label>
        <Field name="m" component="input" type="text" parse={(value) => parseInt(value)} />
      </div>
      <div>
        <label htmlFor="w">W = </label>
        <Field name="w" component="input" type="text" parse={(value) => parseInt(value)} />
      </div>
      <button type="submit">Ok</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
);
