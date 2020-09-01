import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'theo', age: 28},
      {name: 'theo1', age: 29},
      {name: 'theo2', age: 30},
    ],
    otherState: 'some other state'
  });

  console.log(personsState)

  useState('some other value'); // useState() Hook does not merge states but replaces it. Multiple useStates with different states is the way to manage state in a functional component with react hooks.

  const switchNameHandler = () => {
    setPersonsState({ 
      persons: [
        {name: 'theodor', age: 35},
        {name: 'theo1', age: 29},
        {name: 'theo2', age: 30},
      ]
     })
  }


  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
        My Hobbies: ...
      </Person>
    </div>
  );
};

export default app;