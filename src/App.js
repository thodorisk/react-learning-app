import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "theo", age: 28 },
      { id: 2, name: "theo1", age: 29 },
      { id: 3, name: "theo2", age: 30 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsVisibilityHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons,
    });
  };

  render() {
    const style = {
      backgroundColor: "blue",
      color: "white",
      cursor: "pointer",
      padding: "8px",
      border: "1px solid white",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'cyan';
    }

    let classes = ['red', 'bold'].join(' ');

    return (
      <div className="App">
        <h1 className={classes}>Welcome to React</h1>
        <button style={style} onClick={this.togglePersonsVisibilityHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
