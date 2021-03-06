import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './assets/sass/App.scss';
import Home from './components/pages/Home';
import SignIn from './components/shared/signup_signin/SignIn';
import SignUp from './components/shared/signup_signin/SignUp';

function App() {
  return (
    <Router basename='/' onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/indiancoin" component={Home} />
        <Route exact path="/indiancoin/signin" component={SignIn} />
        <Route exact path="/indiancoin/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;