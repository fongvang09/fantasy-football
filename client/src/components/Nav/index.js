import React from "react";
import { Link } from 'react-router-dom';
import LoginButton from '../Login';
import LogoutButton from '../Logout';

function Nav() {
  return (
    
    
<nav className="navbar navbar-expand-lg navbar-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link id= "top" className="navbar-brand" to="/">Home <span class="sr-only">(current)</span></Link></li>

          <li><Link id= "top" className="navbar-brand" to="/team">Your Team <span class="sr-only">(current)</span></Link></li>
           
           <li><LoginButton /></li>
           <li><LogoutButton /></li>
           
        </ul>


      </div>


    </nav>
  


  );
}

export default Nav;