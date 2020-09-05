import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Spinner from './Spinner';
import BugTracker from './BugTracker';
import Home from './Home';

import bugActions from './BugTracker/actions';
function App() {
  const dispatch = useDispatch();
  const userData = useSelector(storeState => storeState.userData);
  const loadBugs = () => {
    dispatch(bugActions.load());
  }
  useEffect( loadBugs ,[]);
  return (
    <Router>
      <h1>My App</h1>
      { !userData.isLoggedIn ? (
        <Login></Login>
      ) : (
      <div>
      <div>
        <span> [ <Link to="/">Home</Link> ] </span>
        <span> [ <Link to="/spinner">Spinner</Link> ] </span>
        <span> [ <Link to="/bugs">Bugs</Link> ] </span>
      </div>
      <hr />
      <Switch>
        <Route path="/spinner">
          <Spinner />
        </Route>
        <Route path="/bugs">
          <BugTracker />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
          </div>
      )}
    </Router>
  );
}

export default App;
