import React, { Component } from 'react';
import Menu from './Menu';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Menu />
            </div>
        )
    }
};

export default Dashboard;