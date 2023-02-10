import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/avatar2.png'

function Navbar() {
  return (
    <div className='Navbar'>
      <img className='avatar2' src={Avatar}/>
      <h1 className='name'>Abhishek Kumar</h1>
      <Link to='/About'><button className='btn btn1'>About</button></Link><br></br>
      <Link to='/Project'><button className='btn btn2'>Project</button></Link><br></br>
      <Link to='/Skills'><button className='btn btn3'>Skills</button></Link><br></br>
      <Link to='/Certificate'><button className='btn btn4'>Certificates</button></Link><br></br>
      <Link to='/Contact'><button className='btn btn5'>Contact Me</button></Link>
    </div>
  )
}

export default Navbar
