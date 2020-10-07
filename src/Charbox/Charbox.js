import React from 'react';

const charbox = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border:  '1px solid blue',
        textAlign: 'center'
    }
    return (
        <div style={style}>
            {props.character}
        </div>
    )
}

export default charbox;