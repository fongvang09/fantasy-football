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
        <h1>Welcome To Fantasy-Football</h1>
      <div className="container divMain">
          
          
          
          
      </div>
      <br/>
      <div className="container">
      <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Find A Player" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </div>
      </>
    );
  }
  
  export default Home;