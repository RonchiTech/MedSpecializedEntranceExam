import React from 'react';

import Logo from '../../../assets/images/logo-lmc-white.png';
import DashboardNavList from './DashboardNavList/DashboardNavList'
const DashboardNav = () => {
  return (
    <nav className="dashboard-nav">
      <div className='dasboard-nav__logo-container'>
        <img className="dashboard-nav__logo" src={Logo} alt="logo" />
      </div>

      <DashboardNavList />
    </nav>
  );
};
export default DashboardNav;
