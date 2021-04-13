import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Friends from './components/Friends';

function App() {
  const logout = () => {
    localStorage.removeItem('token');
  };


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
