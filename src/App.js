import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <Person name="theo" age="28" />
        <Person name="theo1" age="29" />
        <Person name="theo2" age="30">My Hobbies: ...</Person>
      </div>
    );
  }
}

export default App;
