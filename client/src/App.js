import React, { Component } from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/todolist' component={TodoApp} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
