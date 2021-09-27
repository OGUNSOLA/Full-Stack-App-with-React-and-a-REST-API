/** @format */

import React from "react";

export default function Form(props) {
  const { cancel, errors, submit, submitButtonText, elements } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <div className="form">
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit} className="formWrapper">
        {elements()}
        <div className="btns">
          <button className="button" type="submit">
            {submitButtonText}
          </button>
          <button className="button " onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div className="errors">
        <h2>Validation errors</h2>
        <div>
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}
