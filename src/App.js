import React from "react";

import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";

function App() {  
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'><Homepage/></Route>
        <Route path='/about'><Aboutpage/></Route>
      </Switch>
      <Footer/>
 
    </Router>
  );
}

export default App;
