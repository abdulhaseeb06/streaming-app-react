import React from "react";
import { Link } from "react-router-dom";

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
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
}
