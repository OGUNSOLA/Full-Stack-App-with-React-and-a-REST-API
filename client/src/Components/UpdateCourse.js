/** @format */

import React, { useEffect, useState } from "react";
import Form from "./Form";

function UpdateCourse({ context, history, match }) {
  const courseId = match.params.id;
  const authUser = context.authenticatedUser;
  const authUserId = context.authenticatedUser.id;

  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");
  const [errors, setErrors] = useState([]);
  const [courseOwner, setOwner] = useState([]);

  //CHANGE HANDLERS

  const handleCourseTitleChange = (e) => {
    setCourseTitle(e.target.value);
    console.log(courseTitle);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };
  const handleEstimatedTimeChange = (e) => {
    setEstimatedTime(e.target.value);
    console.log(estimatedTime);
  };
  const handleMaterialsNeededChange = (e) => {
    setMaterialsNeeded(e.target.value);
    console.log(materialsNeeded);
  };

  const cancel = () => {
    history.push(`/courses/${courseId}`);
  };

  const submit = () => {
    const { emailAddress, password } = authUser;
    console.log(emailAddress);
    console.log(password);
  };

  useEffect(() => {
    let ownerId;
    context.data
      .getACourse(courseId)
      .then((data) => {
        console.log(data);
        setCourseTitle(data.title);
        setDescription(data.description);
        setEstimatedTime(data.estimatedTime);
        setMaterialsNeeded(data.materialsNeeded);
        ownerId = data.userId;
        return ownerId;
      })
      .then((ownerId) => {
        if (String(ownerId) !== String(authUserId)) {
          history.push("/error");
        }
      });
  }, [context.data, courseId, history, authUserId]);

  return (
    <div>
      <main>
        <Form
          cancel={cancel}
          errors={errors}
          submit={submit}
          submitButtonText="Update Course"
          elements={() => (
            <>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                value={courseTitle}
                onChange={handleCourseTitleChange}
                placeholder="Title"
              />
              <input
                id="courseAuthor"
                name="courseAuthor"
                type="text"
                value={courseOwner}
                disabled={true}
                placeholder="Author"
              />
              <textarea
                rows="15"
                id="courseDescription"
                name="courseDescription"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Course Description"
              />
              <input
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                value={estimatedTime}
                onChange={handleEstimatedTimeChange}
                placeholder="Time to complete course (ie: 14 hours)"
              />
              <textarea
                rows="10"
                id="materialsNeeded"
                name="materialsNeeded"
                type="password"
                value={materialsNeeded}
                onChange={handleMaterialsNeededChange}
                placeholder="Materials Needed"
              />
            </>
          )}
        />
      </main>
    </div>
  );
}

export default UpdateCourse;
