import React from "react";
import { Link } from 'react-router-dom'


function Nav() {
  return (
    
    
<nav class="navbar navbar-expand-lg navbar-light ">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="navbar-brand" to="/">Home <span class="sr-only">(current)</span></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <Link className="navbar-brand" to="/team">Your Team <span class="sr-only">(current)</span></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* I ADDED LOGOUT BUTTON.. DO WE WANT ONE OF THESE YALL? */}

            <Link className="navbar-brand" to="/">Log out<span class="sr-only">(current)</span></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <h1>Fantasy-Football</h1>
          </li>
        </ul>


      </div>


    </nav>
  


  );
}

export default Nav;