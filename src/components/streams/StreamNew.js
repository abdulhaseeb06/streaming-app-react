import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";

const StreamNew = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  const onSubmit = (formValues) => {
    dispatch(createStream(formValues, auth));
  };

  return (
    <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter descripiton"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "streamCreate",
})(StreamNew);
