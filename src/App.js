import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'
import Home from './Home'
import Contact from './Contact'
import Navigator from './Navigator'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <Router>
        <div>
          <Navigator />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ToDoList/" component={ToDoList} />
            <Route path="/contact/" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
