import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Weather from './views/weather'; // no need to put index.js
import Header from './components/header';
import Animal from './views/animal';
import Racer from './views/racer';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header><Header /></header>

        <main>
        <div className="container">
          <Switch>
          <Route exact path='/' render={() => <Weather />} />
          <Route exact path='/racer' render={() => <Racer />} />
          <Route exact path='/animal' render={() => <Animal />} />
          </Switch>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
