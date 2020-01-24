import React, { Component } from 'react';
import Button from './Button';
import './Menu.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <h3 className="menu__header">Uczelnia</h3>
                <ul className="menu__options-wrapper column">
                    <li><NavLink to="/outcomes"><Button name="Efekty kształcenia" buttonClass="main-btn"/></NavLink></li>
                    <li><NavLink to="/programs"><Button name="Plany ksztacenia" buttonClass="main-btn"/></NavLink></li>
                    <li><NavLink to="/faculties"><Button name="Kierunki" buttonClass="main-btn"/></NavLink></li>
                    <li><NavLink to="/subjects"><Button name="Przedmioty" buttonClass="main-btn"/></NavLink></li>
                    <li><NavLink to="/lecturers"><Button name="Prowadzący" buttonClass="main-btn"/></NavLink></li>
                </ul>
                <h3 className="menu__header">Inne</h3>
                <ul className="menu__options-wrapper column">
                   
                </ul>
            </div>
        );
    }
};

export default Menu;