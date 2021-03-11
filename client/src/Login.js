import './index.css';
import './App.css';


import React from "react";

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
      {/* <form ref="form" onSubmit={this.handleSubmit}> */}
    <button type="submit">Sign In</button>
{/* </form> */}
    </div>
  );
}

export default InputPage;


