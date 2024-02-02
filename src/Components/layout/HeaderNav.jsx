import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <h3>Layla Rodas WEB</h3>
            <span>W</span>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/index">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/resume">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                    
            </ul>
        </nav>
    </header>
  )
}
