import React from 'react';
import { Outlet } from 'react-router-dom';

import '@pages/dashboard/Dashboard.scss';
import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';

const SideBar = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <div className="home-sidebar-content">
          <div className="side-bar-holder">
            <Sidebar />
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
      {/* <div className="dashboard">
        <div className="dashboard_sidebar">
          <Sidebar />
        </div>

        <div className="dashboard_content">
          <Outlet />
        </div>
      </div> */}
    </>
  );
};

export default SideBar;
