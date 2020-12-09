import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";
export default function Header() {
  return (
    <div className="ui secondary  menu">
      <Link to="/" className=" item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}
