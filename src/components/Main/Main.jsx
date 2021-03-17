import React from 'react';
import Navigation from '../Navigation/Navigation';
import Caption from '../Caption/Caption';
import Login from '../Login/Login';
const Main = () => {
  return (
    <div className="main-section">
      <Navigation />
      <Caption />
      <Login />
    </div>
  );
};
export default Main;
