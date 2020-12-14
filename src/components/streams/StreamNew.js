import React from "react";
import { Field, reduxForm } from "redux-form";
const StreamNew = (props) => {
  const renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
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
