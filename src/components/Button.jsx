import React from 'react';
import './Button.css';

function Button(props) {
    return <div className={props.buttonClass}>{props.name}</div>;
}

export default Button;