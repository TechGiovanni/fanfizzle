import React from 'react';
import { Outlet } from 'react-router-dom';

import '@pages/dashboard/Dashboard.scss';
import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';

const SideBar = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard_sidebar">
          <div>
            <Sidebar />
          </div>
        </div>
        <div className="dashboard_content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
