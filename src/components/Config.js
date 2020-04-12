import React from 'react';

import { Field } from "redux-form";


export default ({ handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="n">N</label>
        <Field name="n" component="input" type="text"  parse={(value) => parseInt(value)} />
      </div>
      <div>
        <label htmlFor="x">X</label>
        <Field name="x" component="input" type="text" parse={(value) => parseInt(value)} />
      </div>
      <div>
        <label htmlFor="m">M</label>
        <Field name="m" component="input" type="text" parse={(value) => parseInt(value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
};
