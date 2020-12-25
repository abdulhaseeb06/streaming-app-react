import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const authChangeHandler = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(signIn(window.auth.currentUser.get().getId()));
    } else {
      dispatch(signOut());
    }
  };

  const signInHandler = () => {
    window.auth.signIn();
  };

  const signOutHandler = () => {
    window.auth.signOut();
  };
  const renderText = () => {
    if (authState.isSigned) {
      return (
        <button className="ui button red google" onClick={signOutHandler}>
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui button red google"
          onClick={() => signInHandler()}
        >
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  };

  useEffect(function () {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "209646786895-k1f2l57a7683o3qas2ue22isc2ppctq5.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          window.auth = window.gapi.auth2.getAuthInstance();
          authChangeHandler(window.auth.isSignedIn.get());
          window.auth.isSignedIn.listen(authChangeHandler);
        });
    });
  }, []);
  return <div>{renderText()}</div>;
}
