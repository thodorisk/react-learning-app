import React from 'react';
import './Person.css';
import Validation from "../Validation/Validation";
import Charbox from "../Charbox/Charbox";


const person = (props) => {
    const charList = props.name.split('').map((char, index) => {
        return <Charbox character={char} key={index} />;
    })
    return (
        <div className="Person">
            <p onClick={props.click}>i am {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <Validation inputLength={props.name.length} />
            {charList}
        </div>
    )
}

export default person;