/** @format */

import React, { useState } from "react";
import Form from "./Form";

function Delete({ context, match, history }) {
  const [errors, setErrors] = useState([]);
  const { username, password } = context.credentials;
  const courseId = match.params.id;
  const cancel = () => {
    history.push(`/courses/${courseId}`);
  };
  const submit = (e) => {
    context.data
      .deleteACourse(username, password, courseId)
      .then((errors) => {
        if (errors.length) {
          setErrors(errors);
        } else {
          history.push(`/`);
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          history.push("forbidden");
        } else {
          console.error(error);
          history.push("/error");
        }
      });
  };

  return (
    <div className="wrap delete">
      <h1 className="delete">ARE YOU SURE YOU WANT TO DELETE COURSE ?</h1>
      <Form
        cancel={cancel}
        errors={errors}
        submit={submit}
        buttonclassName="btn btn__danger"
        submitButtonText="Delete Course"
        elements={() => {
          return null;
        }}
      />
    </div>
  );
}

export default Delete;
