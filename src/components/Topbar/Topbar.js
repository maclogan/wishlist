import React from 'react';

import './Topbar.css';
import Profile from '../Profile/Profile';

class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <div>Logo</div>
                <ul>
                    <li>Dashboard</li>
                    <li>Friends</li>
                    <li>Following</li>
                    <li><div className="profileIcon"></div></li>
                </ul>
            </div>
        );
    }
}

export default Topbar;