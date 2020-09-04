import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
import store from './store'
import Spinner from './Spinner';
import { Provider } from 'react-redux';
import BugTracker from './BugTracker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from 'axios';
window['axios'] = axios;


/* 
function renderApp() {
  const value = store.getState();
  ReactDOM.render(<Spinner value={value} dispatch={store.dispatch}  />
    , document.getElementById('root'));
}
renderApp();
store.subscribe(renderApp); 
*/

const Home = () => (
  <div>
    <p>Aliqua sint aute do ipsum ea et excepteur irure nulla exercitation labore. Ullamco cillum in non reprehenderit. Anim excepteur minim minim commodo non nulla. Quis officia eu aliqua enim sunt consectetur proident laboris occaecat amet ad voluptate voluptate ut. Aliquip consectetur mollit ex ea tempor quis ut excepteur.</p>
    <p>Veniam ut magna ea dolore adipisicing culpa excepteur commodo eiusmod eiusmod eu consectetur ipsum nulla. Laboris magna tempor enim et irure eiusmod magna adipisicing id nisi occaecat. Lorem tempor aliqua irure excepteur in quis nulla laborum aliquip cupidatat ut sit qui ex. Commodo consectetur aliquip mollit in velit occaecat in eu nisi aliqua ut et. Do aliquip mollit tempor nostrud eu anim commodo cillum. Consectetur commodo veniam ex nisi amet proident occaecat.</p>
    <p>Sit Lorem nostrud et aliqua dolor dolor elit nisi ad et aute culpa ullamco duis. Et cillum eiusmod sint consequat proident qui voluptate sunt excepteur elit labore in. Minim nostrud proident eu laborum culpa adipisicing. Deserunt duis quis minim eiusmod in sit qui. Consectetur pariatur minim enim dolor id mollit et reprehenderit adipisicing et ex.</p>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <h1>My App</h1>
      <div>
        <span> [ <Link to="/">Home</Link> ] </span>
        <span> [ <Link to="/spinner">Spinner</Link> ] </span>
        <span> [ <Link to="/bugs">Bugs</Link> ] </span>
      </div>
      <hr/>
      <Switch>
        <Route path="/spinner">
          <Spinner/>
        </Route>
        <Route path="/bugs">
          <BugTracker/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  </Provider>
  , document.getElementById('root')
);


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//ES6 modules - import syntax examples

/*
import * as calc from './calculator';
console.log(calc);
*/

/*
import * as calc from './calculator';
const { add } = calc;
*/

/*
import { add } from './calculator';
 */

//importing the default exported object
/*
import calc from './calculator';
*/

/*
import calc, * as calculator from './calculator';
console.log(calc, calculator);
*/

/*
import calc, { add } from './calculator';
*/