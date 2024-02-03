import React from 'react'
import { Link } from 'react-router-dom'

export const Index = () => {
  return (
    <div>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam aut, soluta quae minus explicabo cum modi quos quasi illum eligendi neque molestiae officia. Amet dignissimos eum voluptates non provident.
      </h1>

      <h2>Numquam sint dolorem aliquid similique expedita voluptate fugit tempore consectetur animi natus repudiandae <Link to="/contact">Contact me</Link></h2>

      <section className='lastsProjects'>
        <h2>Some of my projects</h2>
        <p>These are some of my web development works</p>

        <div className='projects'>

        </div>
      </section>
    </div>
  )
}
