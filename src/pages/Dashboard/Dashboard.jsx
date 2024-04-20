import React from 'react';
import Sidebar from '../../components/Sidebar';
import Home from '../../components/Home';

function Dashboard(props) {
    return (
        <>
            <div className="dashboard">
                <Home />
            </div>
        </>
    );
}

export default Dashboard;