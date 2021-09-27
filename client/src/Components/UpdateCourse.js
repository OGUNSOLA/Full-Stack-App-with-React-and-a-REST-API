/** @format */

import React, { useEffect, useState } from "react";
import Form from "./Form";

function UpdateCourse({ context, history, match }) {
  const courseId = match.params.id;
  const authUserId = context.userId;
  const { username, password } = context.credentials;
  const [courseTitle, setCourseTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [estimatedTime, setEstimatedTime] = useState(" ");
  const [materialsNeeded, setMaterialsNeeded] = useState(" ");
  const [errors, setErrors] = useState([]);

  //CHANGE HANDLERS

  const handleCourseTitleChange = (e) => {
    setCourseTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleEstimatedTimeChange = (e) => {
    setEstimatedTime(e.target.value);
  };
  const handleMaterialsNeededChange = (e) => {
    setMaterialsNeeded(e.target.value);
  };

  const cancel = () => {
    history.push(`/courses/${courseId}`);
  };

  const submit = () => {
    const course = {
      title: courseTitle,
      description,
      materialsNeeded,
      estimatedTime,
    };

    context.data
      .editACourse(username, password, courseId, course)
      .then((errors) => {
        if (errors.length) {
          console.log(errors);
          setErrors(errors);
        } else {
          history.push(`/courses/${courseId}`);
        }
      })
      .catch((error) => {
        console.error(error);
        history.push("/error");
      });
  };

  useEffect(() => {
    let ownerId;
    context.data
      .getACourse(courseId)
      .then((data) => {
        setCourseTitle(data.title);
        setDescription(data.description);
        setEstimatedTime(data.estimatedTime);
        setMaterialsNeeded(data.materialsNeeded);
        ownerId = data.userId;
        return ownerId;
      })
      .then((ownerId) => {
        if (String(ownerId) !== String(authUserId)) {
          history.push("/forbidden");
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          history.push("/error");
        }
        console.error(err);
      });
  }, [context.data, courseId, history, authUserId]);

  return (
    <div className="updateFormWrapper">
      <Form
        cancel={cancel}
        errors={errors}
        submit={submit}
        submitButtonText="Update Course"
        elements={() => (
          <div className="info">
            <h1>UPDATE FORM </h1>
            <label htmlFor="courseTitle"> Course Title</label>
            <input
              id="courseTitle"
              name="courseTitle"
              type="text"
              value={courseTitle}
              onChange={handleCourseTitleChange}
              placeholder="Title"
            />

            <label htmlFor="courseDescription"> Course Description</label>
            <textarea
              rows="15"
              id="courseDescription"
              name="courseDescription"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Course Description"
            />

            <label htmlFor="estimatedTime"> Estimated Time</label>
            <input
              id="estimatedTime"
              name="estimatedTime"
              type="text"
              value={estimatedTime}
              onChange={handleEstimatedTimeChange}
              placeholder="Time to complete course (ie: 14 hours)"
            />
            <label htmlFor="materialsNeeded"> Materials Needed</label>
            <textarea
              rows="10"
              id="materialsNeeded"
              name="materialsNeeded"
              type="password"
              value={materialsNeeded}
              onChange={handleMaterialsNeededChange}
              placeholder="Materials Needed"
            />
          </div>
        )}
      />
    </div>
  );
}

export default UpdateCourse;
