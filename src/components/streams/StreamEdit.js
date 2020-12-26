import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";
export default function StreamEdit(props) {
  const stream = useSelector((state) => state.streams[props.match.params.id]);

  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(editStream(props.match.params.id, formValues));
  };

  useEffect(() => {
    dispatch(fetchStream(props.match.params.id));
  }, [dispatch]);

  const renderContent = () => {
    if (!stream) {
      <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={{
              title: stream.title,
              description: stream.description,
            }}
            onSubmit={onSubmit}
          />
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
