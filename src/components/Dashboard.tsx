import React, { Component } from 'react';
import Menu from './Menu';
import { Navigation } from './Navigation';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Navigation historyList={["Dashboard", "Plan"]}/>
                <Menu />
            </div>
        )
    }
};

export default Dashboard;