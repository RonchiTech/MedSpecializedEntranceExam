import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../../store/actions/';
import { useHistory } from 'react-router-dom';
import './DashboardContents.scss';
const DashboardContents = ({ onLogOut }) => {
  const history = useHistory();
  const logout = () => {
    onLogOut();
    history.replace('/');
    // window.location.reload();

  };

  return (
    <div className="contents">
      <p>Switch to Trainee</p>
      <p>Notification</p>
      <p className="logout" onClick={logout}>
        Logout
      </p>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.logout()),
  };
};
export default connect(null, mapDispatchToProps)(DashboardContents);
