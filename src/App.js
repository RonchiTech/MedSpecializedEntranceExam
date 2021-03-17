import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Caption from './components/Caption/Caption'
import Login from './components/Login/Login'
function App() {
  return (
    <>
      <div className="main-section">
        <Navigation />
        <Caption/>
        <Login/>
      </div>
    </>
  );
}

export default App;
