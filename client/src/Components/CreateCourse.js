/** @format */

import React, { useState } from "react";
import Form from "./Form";

function CreateCourse({ context, history }) {
  const [errors, setErrors] = useState([]);
  const [courseTitle, setCourseTitle] = useState([]);
  const [courseOwner, setCourseOwner] = useState([]);
  const [description, setDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [materialsNeeded, setMaterialsNeeded] = useState("");
  const { username, password } = context.credentials;
  const userId = context.userId;
  // handlers get the values in the input fields

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

  const handleCourseOwnerChange = (e) => {
    setCourseOwner(e.target.value);
  };

  const cancel = () => {
    history.push(`/`);
  };

  const submit = () => {
    const course = {
      title: courseTitle,
      description,
      userId,
    };

    if (materialsNeeded) {
      course.materialsNeeded = materialsNeeded;
    }

    if (estimatedTime) {
      course.estimatedTime = estimatedTime;
    }
    context.data
      .createCourse(username, password, course)
      .then((errors) => {
        if (errors.length) {
          setErrors(errors);
        } else {
          history.push("/courses");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.error(error);
          history.push("/error");
        }
      });
  };
  return (
    <div>
      <Form
        cancel={cancel}
        errors={errors}
        submit={submit}
        submitButtonText="Create Course"
        elements={() => (
          <div className="createCourseWrapper">
            <label for="courseTitle">Course Title</label>
            <input
              id="courseTitle"
              name="courseTitle"
              type="text"
              value={courseTitle}
              onChange={handleCourseTitleChange}
              placeholder="Title"
            />
            <label for="Course Author">Course Title</label>
            <input
              id="courseAuthor"
              name="courseAuthor"
              type="text"
              value={courseOwner}
              onChange={handleCourseOwnerChange}
              placeholder="Author"
            />
            <label for="courseDescription">CourseDescription</label>
            <textarea
              rows="15"
              id="courseDescription"
              name="courseDescription"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Course Description"
            />
            <label for="estimatedTime">Estimated Time</label>

            <input
              id="estimatedTime"
              name="estimatedTime"
              type="text"
              value={estimatedTime}
              onChange={handleEstimatedTimeChange}
              placeholder="Time to complete course (ie: 14 hours)"
            />
            <label for="materialsNeeded">Materials Needed</label>

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

export default CreateCourse;
