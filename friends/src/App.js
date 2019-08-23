import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/login">Login</Link>

            <Link to="/friends">Friends: Protected information</Link>
          </nav>
        </header>
        <Route path="/login" render={props => <Login {...props} />} />
        <PrivateRoute path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
