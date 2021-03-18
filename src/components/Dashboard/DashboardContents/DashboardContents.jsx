import React from 'react';
import User from './User/User';
import AddUser from './AddUsers/AddUsers';
import { connect } from 'react-redux';
import { useHistory, Route, Switch } from 'react-router-dom';

import * as action from '../../../store/actions/';

import './DashboardContents.scss';

const DashboardContents = ({ onLogOut }) => {
  const history = useHistory();
  const logout = () => {
    onLogOut();
    history.replace('/');
    // window.location.reload();
  };

  return (
    <div className="container">
      <div className="contents">
        <p>Switch to Trainee</p>
        <p>Notification</p>
        <p className="logout" onClick={logout}>
          Logout
        </p>
      </div>
      <Switch>
        <Route path="/users/add-users" component={AddUser} />
        <Route path="/users"  component={User} />
      </Switch>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.logout()),
  };
};
export default connect(null, mapDispatchToProps)(DashboardContents);
