import React from "react";
import "./style.css";

function PlusBtn(props) {
  return (
    <button className="plus-btn" {...props}  tabIndex="0" role="button">
    <span>{props.children}+</span>
    </button>
  );
}

export default PlusBtn;