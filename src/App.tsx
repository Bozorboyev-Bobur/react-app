import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Main />
      <SideBar />
    </div>
  );
}

export default App;
