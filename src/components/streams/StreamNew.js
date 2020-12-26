import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
const StreamNew = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (formValues) => {
    createStream(formValues, auth);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default StreamNew;
