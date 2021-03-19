import React from "react";
import "../index.css";
import "../components/List/style.css";


const InputPage = () => {
  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput"></label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Username"
      />
      <br/>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Password"
      />
    <button type="submit">Sign In</button>
    </div>
  );
}

export default InputPage;