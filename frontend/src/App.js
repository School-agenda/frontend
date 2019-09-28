import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//Nav bar
import Navigation from './components/NavBar';

//Components
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import ClassList from './components/ClassList';
import Assignments from './components/Assignments';

function App() {
  return (
    <Router>
      <div className = "App">
      <Navigation/>


      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/assignments" component = {Assignments} />
        <Route exact path = "/profile" component = {UserProfile} />
      </Switch>



      </div>


    </Router>
  );
}

export default App;
