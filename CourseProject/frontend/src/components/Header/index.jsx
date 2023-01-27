import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsTelephoneInbound } from "react-icons/bs";
import "./style.scss"
const Header = () => {
  return (
    <header>
      <div className="container d-flex justify-contentbetween">
        <div className="leftSide py-4">
          <div className="logo">
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h4>Course</h4>
          </div>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about-us'>About Us</NavLink></li>
              <li><NavLink to='/courses'>Courses</NavLink></li>
              <li><NavLink to='/elements'>Elements</NavLink></li>
              <li><NavLink to='/news'>News</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/add'>Add</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="rightSide">
          <span><BsTelephoneInbound/></span>
          <span>+43 4566 7788 2457</span>
        </div>
      </div>
    </header>
  )
}

export default Header