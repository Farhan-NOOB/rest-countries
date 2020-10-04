import React from 'react';

import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:numericCode">
                <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
      
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
