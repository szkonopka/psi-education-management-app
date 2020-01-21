import React from 'react';
import './Button.css';

function Button(props) {
    return <button className={props.buttonClass}>{props.name}</button>;
}

export default Button;