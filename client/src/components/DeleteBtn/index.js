import React from "react";
import "./style.css";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react"

function DeleteBtn(props) {
  const { user } = useAuth0();

  function dltPlayer(e){
    e.preventDefault();
    console.log("hello");
    let callObj = {
      owner: user.email,
      id: e.target.id
    };
    console.log(callObj);
    API.deletePlayer(callObj)
      .then(res => {console.log(res)})
      .catch(err => console.log(err))
  }

  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0" onClick={e => dltPlayer(e)}>
      ✗
    </span>
  );
}

export default DeleteBtn;
