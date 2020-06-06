import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/login';
import Signup from './components/signup';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )

}

export default App;
