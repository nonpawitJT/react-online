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
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import Contactus from "./pages/Contactus";
import HospitalPage from "./pages/Hospital/HospitalPage";
import IndexPage from "./pages/category/IndexPage";

function App() {  
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'><Homepage/></Route>
        <Route path='/about'><Aboutpage/></Route>
        <Route path='/product'><ProductPage/></Route>
        <Route path='/detail/:id/title/:title'><DetailPage/></Route>
        <Route path='/hospital'><HospitalPage/></Route>
        <Route path='/category'><IndexPage/></Route>

      </Switch>
      <Footer/>
 
    </Router>
  );
}

export default App;
