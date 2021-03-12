import React, { useEffect } from "react";
import API from "../utils/API.js"
const Home = () => {
    useEffect(()=>{
        console.log("message from frontend")
        API.getMessage().then(message=>{
            console.log(message)
        })
    }, [])
    return (
        <>
       
      <div className="container maindiv">
        
       <h2><center>An App for creating your very own, personalized dream team</center></h2>
          <form class="form-inline my-2 my-lg-0">
            <input id="findinput" class="form-control mr-sm-2" type="search" placeholder="Find A Player" aria-label="Search"/>
      
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
          
      </div>
      
   
      </>
    );
  }
  
  export default Home;