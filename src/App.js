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
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";
import UploadPage from "./pages/UploadPage";
import { ToastProvider } from 'react-toast-notifications';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage";
import PrivateRoute from "./Guard/auth";

function App() {  
  return (
    <ToastProvider placement="top-center">
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'><Homepage/></Route>
        <Route path='/about'><Aboutpage/></Route>
        <Route path='/product'><ProductPage/></Route>
        <Route path='/detail/:id/title/:title'><DetailPage/></Route>
        <Route path='/hospital'><HospitalPage/></Route>
        <Route path='/upload'><UploadPage/></Route>
        <Route path='/register'><RegisterPage/></Route>
        <Route path='/login'><LoginPage/></Route>
        <PrivateRoute path='/member'><MemberPage/></PrivateRoute>

        
         {/*<Route path='/category'><indexPage/></Route>*/}
         <Route path='/category' render={ ({match : {url}}) => (
            <>
            <Route path={`${url}/`} exact><IndexPage></IndexPage></Route>
            <Route path={`${url}/create`}><CreatePage></CreatePage></Route>
            <Route path={`${url}/edit/:id`}><EditPage></EditPage></Route>
            </>
          )}></Route>

      </Switch>
      <Footer/>
 
    </Router>
    </ToastProvider>
  );
}

export default App;
