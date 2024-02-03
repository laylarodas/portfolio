import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>L</span>
            <h3>Layla Rodas WEB</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/index" className={
                ({isActive}) => isActive ? "actived" : ""
              }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={
                ({isActive}) => isActive ? "actived" : ""
              }>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={
                ({isActive}) => isActive ? "actived" : ""
              }>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" className={
                ({isActive}) => isActive ? "actived" : ""
              }>Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={
                ({isActive}) => isActive ? "actived" : ""
              }>Contact</NavLink>
                </li>
                    
            </ul>
        </nav>
    </header>
  )
}
