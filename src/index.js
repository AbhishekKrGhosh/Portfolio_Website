import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Certificate from './components/Certificate'
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
          <Route index element={<About/>} />
          <Route path='Portfolio_Website' element={<About/>} />
          <Route path='About' element={<About/>} />
          <Route path='Project' element={<Project/>} />
          <Route path='Skills' element={<Skills/>} />
          <Route path='Certificate' element={<Certificate/>} />
          <Route path='Contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
