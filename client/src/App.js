import React from "react";
import './index.css';
import Home from './pages/Home';
import Team from './pages/Team';
// import Inputpage from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

function App() {
  // const { isLoading } = useAuth0;

  // if (isLoading) return <div>Loading ... </div>

  return (
    <>
    <Router>
    <Nav />
    <Route component={Home} exact path='/'/>
    <Route component={Team} exact path='/team'/>
    </Router>
    </>
  );
}

export default App;
 

   
