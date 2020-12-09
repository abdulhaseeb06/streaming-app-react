import React, { useEffect, useState } from "react";

export default function GoogleAuth() {
  let auth = "";
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authChangeHandler = () => {
    setIsSignedIn(auth.isiSgnedIn.get());
  };

  const signInHandler = () => {
    auth.signIn();
  };

  const signOutHandler = () => {
    auth.signOut();
  };
  const renderText = () => {
    if (isSignedIn) {
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
      console.log(window.gapi);
      window.gapi.client
        .init({
          clientId:
            "209646786895-k1f2l57a7683o3qas2ue22isc2ppctq5.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          auth.isSignedIn.listen(authChangeHandler);
        });
    });
  }, []);
  return <div>{renderText()}</div>;
}
