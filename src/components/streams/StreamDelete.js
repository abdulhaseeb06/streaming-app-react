import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";

export default function StreamDelete(props) {
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[props.match.params.id]);

  const actions = (
    <div className="actions">
      <button
        className="ui button negative"
        onClick={() => {
          deleteS(props.match.params.id);
        }}
      >
        Delete
      </button>
      <button
        className="ui button"
        onClick={() => {
          history.push("/");
        }}
      >
        Cancel
      </button>
    </div>
  );

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream";
    } else {
      return `Are you sure you want to delete this stream : ${stream.title}`;
    }
  };

  const deleteS = (id) => {
    dispatch(deleteStream(id));
  };

  useEffect(() => {
    dispatch(fetchStream(props.match.params.id));
  }, [dispatch]);

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={renderContent}
        actions={actions}
        onDismiss={() => {
          history.push("/");
        }}
      />
    </div>
  );
}
