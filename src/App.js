import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Outlet/>
      
    </div>
  );
}

export default App;
