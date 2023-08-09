import React from "react";

export default function Form({
  getLocation,
  inputText,
  handleChange,
  handleSubmit,
  errorMsg,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`input-box btn ${errorMsg ? "error" : ""}`}
          placeholder="Enter city name"
          value={inputText}
          onChange={handleChange}
        />
        <p className="error-msg">{errorMsg}</p>
      </form>

      <div className="pb-1 divider flex">
        <hr />
        <p className="">or</p>
        <hr />
      </div>
      <button onClick={getLocation} className="btn btn-fill link">
        Get Device Location
      </button>
    </>
  );
}
