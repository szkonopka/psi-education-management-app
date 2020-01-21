import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <ul className="menu__options-wrapper">
                    <li>Efekty ministerialne</li>
                    <li>Programy ksztacenia</li>
                    <li>Przedmioty</li>
                </ul>
            </div>
        );
    }
};

export default Menu;