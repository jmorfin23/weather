import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Weather from './views/weather'; // no need to put index.js
import Header from './components/header';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header><Header /></header>

        <main>
        <div className="container">
          <Switch>
          <Route exact path='/' render={() => <Weather />} />
          <Route exact path='racer' render={() => <h1>Render the racer component here</h1>} />
          </Switch>
          </div>
        </main>
      </div> 
    );
  }
}
export default App;
