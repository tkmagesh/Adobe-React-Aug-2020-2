import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'react-redux';

/* 
function renderApp() {
  const value = store.getState();
  ReactDOM.render(<Spinner value={value} dispatch={store.dispatch}  />
    , document.getElementById('root'));
}
renderApp();
store.subscribe(renderApp); 
*/

ReactDOM.render(
  <Provider store={store}>
    <App></App>
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