import React, { Component } from 'react';
import './Navigation.css'

type NavigationProps = {
    historyList: string[]
};

export const Navigation = ({ historyList } : NavigationProps) => {
    const historyElemList = historyList.map((historyElem) => {
        if (historyList.indexOf(historyElem) == historyList.length - 1)
            return <li>{historyElem}</li>
        else
            return <li>{historyElem} > </li>
    });

    return (
        <div className="row">
            <ul className="history row">{historyElemList}</ul>
        </div>
    );    
};

export default Navigation;