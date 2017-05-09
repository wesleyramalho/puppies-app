import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactRouter from 'react-router';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


class App extends Component {
  render() {
    return (
    /*
    	<Router history={browserHistory}>
        <Route path="/" >
        <IndexRoute component={Login} />
          <Route path="Cadastro" component={Cadastro} />
        </Route>
        <Route path="/logado" component={Layout} >
	</Route>
  	</Router>
  */

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    
    );
  }
}

export default App;
