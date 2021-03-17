import React from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardNavList.scss';

import CareerPath from '../../../../assets/icons/career-white.svg';
import Checked from '../../../../assets/icons/checked-white.svg';
import Edit from '../../../../assets/icons/edit.svg';
import Lock from '../../../../assets/icons/lock.svg';
import Message from '../../../../assets/icons/message.svg';
import Trash from '../../../../assets/icons/trash.svg';
import User from '../../../../assets/icons/user-default.svg';
import View from '../../../../assets/icons/view.svg';

const DashboardNavList = () => {
  return (
    <ul className="dashboard-nav-list">
      <li>
        <img src={CareerPath} alt="logo" />
        <span>Dashboard</span>
      </li>
      <li>
        <img src={View} alt="logo" />
        <span>Career Path</span>
      </li>
      <li>
        <img src={Trash} alt="logo" />
        <span>Learning Course</span>
      </li>
      <li>
        <img src={CareerPath} alt="logo" />
        <span>Assessments</span>
      </li>
      <li>
        <img src={Message} alt="logo" />
        <span>Module Library</span>
      </li>
      <li>
        <img src={CareerPath} alt="logo" />
        <span>Teams</span>
      </li>

      <NavLink to="/users"  activeClassName="active">
        <li>
          <img src={User} alt="logo" />
          <span>Users</span>
        </li>
      </NavLink>

      <li>
        <img src={Lock} alt="logo" />
        <span>Reports</span>
      </li>
      <li>
        <img src={Edit} alt="logo" />
        <span>Profile</span>
      </li>
      <li>
        <img src={Checked} alt="logo" />
        <span>Health and Feedback</span>
      </li>
    </ul>
  );
};
export default DashboardNavList;
