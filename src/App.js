import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/TimeConunt';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <CountdownTimer/>
      <UserList/>
    </div>
  );
}

export default App;
