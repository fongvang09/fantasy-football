import React from "react";
import {Link} from 'react-router-dom'


function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link" to="/team">Your Team <span class="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>
       
          

      
    );
  }
  
  export default Nav;
  