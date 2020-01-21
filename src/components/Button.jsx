import React from 'react';

function Button(props) {
    return <button className="{props.buttonClass}">{props.name}</button>;
}

export default Button;