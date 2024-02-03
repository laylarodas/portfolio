import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='home'>
        <h1 className='heading'>Error 404</h1>
        <strong>This page doesn't exist </strong><br/><br/>
        <Link to="/index">Back to Home</Link>
    </div>
  )
}
