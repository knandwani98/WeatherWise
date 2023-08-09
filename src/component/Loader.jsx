import React from "react";
import "../styles/loader.scss";

export default function Loader() {
  return (
    <div className="g-center">
      <div className="ripple-loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
