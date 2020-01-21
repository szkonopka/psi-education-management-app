import React, { Component } from 'react';
import './Navigation.css'

type NavigationProps = {
    historyList: string[]
};

export const Navigation = ({ historyList } : NavigationProps) => {
    const historyElemList = historyList.map((historyElem) => <li>{historyElem}</li>)

    return (
        <div className="row">
            <ul className="history">{historyElemList}</ul>
        </div>
    );    
};

export default Navigation;