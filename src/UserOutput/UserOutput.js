import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>username: {props.username}</p>
            <p>some other random text</p>
        </div>
    )
}

export default userOutput;