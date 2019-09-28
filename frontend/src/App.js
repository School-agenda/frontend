import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//Nav bar
import NavBar from './components/NavBar';

//Components
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className = "App">
      <NavBar/>

      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/signup" component = {Signup} />
      </Switch>



      </div>


    </Router>
  );
}

export default App;
