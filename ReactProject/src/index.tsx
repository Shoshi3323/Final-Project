
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage/HomePage';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";
import AddCall from './components/Addcall/AddCall';


ReactDOM.render((
  <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/New-call" component={AddCall} />
        </Switch>
      </div>‏
    </BrowserRouter>
  ), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
