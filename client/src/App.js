import React from "react";
import './index.css';
import Home from './pages/Home';
import Team from './pages/Team';

import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom';




function App() {
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
 

   
