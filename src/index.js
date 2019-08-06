import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root')
);

//browserouter takes in an instance and allows it to switch between routes.

//good for development, keeps the page from refreshing, which means that the tate wont reset during the file changes
//just rerenders the components. 
if (module.hot) {
  module.hot.accept();
}
