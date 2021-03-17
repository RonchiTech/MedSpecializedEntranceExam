import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Caption from './components/Caption/Caption';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import * as action from './store/actions/';
const App = ({ isAuth, onLogOut }) => {
  const logout = () => {
    window.location.reload();
  };
  let display = (
    <>
      <Navigation />
      <Caption />
      <Login />
    </>
  );
  if (isAuth) {
    display = (
      <h2>
        You are currently in <button onClick={() => logout()}>Log out</button>
      </h2>
    );
  }

  return (
    <>
      <div className="main-section">{display}</div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.localId !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
