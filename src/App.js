import React, { useEffect } from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Caption from './components/Caption/Caption';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import * as action from './store/actions/';
const App = ({ isAuth, onLogOut, onLogIn }) => {
  useEffect(() => {
    onLogIn();
  }, [onLogIn]);
  const logout = () => {
    onLogOut();
    window.location.reload();
  };
  let display = (
    <div className="main-section">
      <Navigation />
      <Caption />
      <Login />
    </div>
  );
  if (isAuth) {
    display = (
      <h2 style={{ color: 'black' }}>
        You are currently logged in <button onClick={() => logout()}>Log out</button>
      </h2>
    );
  }

  return display;
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.localId !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.logout()),
    onLogIn: () => dispatch(action.loginSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
