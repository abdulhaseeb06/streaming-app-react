import baseStreamAPI from "../apis/streams";
import history from "../history";
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (payload, authState) => {
  const { userId } = authState;
  console.log(userId);
  return async (dispatch) => {
    const response = await baseStreamAPI.post("/streams", {
      ...payload,
      userId,
    });
    dispatch({
      type: "CREATE_STREAM",
      payload: response.data,
    });
    history.push("/");
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const streams = await baseStreamAPI.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: streams.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const stream = await baseStreamAPI.get("/streams/" + id);

    dispatch({ type: FETCH_STREAM, payload: stream.data });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const stream = await baseStreamAPI.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: stream.data });
    history.push("/");
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    const stream = await baseStreamAPI.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
  };
};
