import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Survey from './components/createSurvey';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route  path="/" exact component={Form}/>
            <Route  path="/path2" component={Survey}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
