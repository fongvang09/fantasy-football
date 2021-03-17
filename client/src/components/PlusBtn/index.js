import React from "react";
import "./style.css";

function PlusBtn(props) {
  return (
    <span className="plus-btn" {...props}  tabIndex="0" role="button">
 <span id="plus-btn">+</span>
    </span>
  );
}

export default PlusBtn;