import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "theo", age: 28 },
      { name: "theo1", age: 29 },
      { name: "theo2", age: 30 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "theo1", age: 29 },
        { name: "theo2", age: 30 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "theo1", age: 29 },
        { name: "theo2", age: 30 },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <button onClick={this.switchNameHandler.bind(this, 'theodor')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'theodorrr!!!')}
        >
          My Hobbies: ...
        </Person>
      </div>
    );
  }
}

export default App;
