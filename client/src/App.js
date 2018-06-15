import React, { Component } from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Write It Down. Get It Done.</h1>
        </header>
        <TodoApp />
      </div>
    );
  }
}

export default App;
