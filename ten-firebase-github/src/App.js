import React,{useState} from 'react';
import UserContext from './Context/UserContext';

import logo from './logo.svg';
import './App.css';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//Router
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

//Toastify
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//Firebase
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from"./Config/firebaseConfig"

//Components
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import Footer from './Layout/Footer';
import Header from './Layout/Header';


//init firebase
firebase.initializeApp(firebaseConfig)

const App =()=> {

  const [user, setUser] = useState(null)
  return (
    <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}} >
    <Header/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/signin" component={Signin}/>
      <Route exact path ="/signup" component={Signup}/>
      <Route exact path ="*" component={PageNotFound}/>
    </Switch>
    <Footer/>
    </UserContext.Provider>

    </Router>
  )
}

export default App;
