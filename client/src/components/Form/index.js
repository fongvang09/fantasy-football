import React from "react";
import "./style.css";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input id ="playerinput" className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
   
  );

}

export function FormBtn(props) {
  return (
    <button {...props} style={{  marginBottom: 5 }} className="btnthree">
      {props.children}
    </button>
  );
}


// btn-success
