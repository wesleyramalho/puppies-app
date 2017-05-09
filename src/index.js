import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialTestComponent from './MaterialTestComponent';
 
const App = () => (
  <MuiThemeProvider>
    <MaterialTestComponent />
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
