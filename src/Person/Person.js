import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>i am {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person;