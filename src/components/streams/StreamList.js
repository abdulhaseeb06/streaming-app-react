import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams } from "../../actions";

function StreamList() {
  const streams = useSelector((state) => state.streams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

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
    </div>
  );
}

export default StreamList;
