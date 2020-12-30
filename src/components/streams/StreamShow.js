import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream } from "../../actions/index";
import flv from "flv.js";

export default function StreamShow(props) {
  const stream = useSelector((state) => state.streams[props.match.params.id]);
  const videoRef = useRef(null);
  let player;
  const dispatch = useDispatch();

  const renderContent = () => {
    if (!stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <video ref={videoRef} style={{ width: "100%" }} controls></video>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      );
    }
  };

  useEffect(() => {
    if (player) {
      player.destroy();
    }
  }, []);

  useEffect(() => {
    if (stream) {
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${stream.id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    }
  }, [stream]);

  useEffect(() => {
    dispatch(fetchStream(props.match.params.id));
  }, [dispatch]);

  return <div>{renderContent()}</div>;
}
