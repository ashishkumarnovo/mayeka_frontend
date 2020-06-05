import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/login';
import Singup from './components/singup';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/singup" component={Singup} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )

}

export default App;
