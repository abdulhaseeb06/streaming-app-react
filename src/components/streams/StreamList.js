import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import StreamNew from "./StreamNew";
function StreamList() {
  const streams = useSelector((state) => state.streams);
  const currentUserId = useSelector((state) => state.auth.userId);
  const userSignedIn = useSelector((state) => state.auth.isSigned);
  console.log(userSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  const renderCreate = () => {
    if (userSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  const renderList = () => {
    if (streams && Object.keys(streams).length > 0) {
      var arr = [],
        keys = Object.keys(streams);

      for (var i = 0, n = keys.length; i < n; i++) {
        var key = keys[i];
        arr[key] = streams[key];
      }
      return arr.map((item) => {
        return (
          <div className="item " key={item.id}>
            {renderAdmin(item)}
            <i className="large middle aligned icon camera"></i>
            <div className="content">
              {item.title}
              <div className="description">{item.description}</div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>

      {renderCreate()}
    </div>
  );
}

export default StreamList;
