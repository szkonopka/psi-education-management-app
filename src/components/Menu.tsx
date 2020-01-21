import React, { Component } from 'react';
import Button from './Button';

class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <ul className="menu__options-wrapper">
                    <li><Button name="Efekty ministerialne" buttonClass="main-btn"/></li>
                    <li><Button name="Programy ksztacenia" buttonClass="main-btn"/></li>
                    <li><Button name="Przedmioty" buttonClass="main-btn"/></li>
                    <li><Button name="Prowadzący" buttonClass="main-btn"/></li>
                </ul>
            </div>
        );
    }
};

export default Menu;