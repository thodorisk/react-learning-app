import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "theo", age: 28 },
      { name: "theo1", age: 29 },
      { name: "theo2", age: 30 },
    ],
    showPersons: false,
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
  };

  togglePersonsVisibilityHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      cursor: "pointer",
      padding: "8px",
      border: "1px solid red",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name} 
            age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <button style={style} onClick={this.togglePersonsVisibilityHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
