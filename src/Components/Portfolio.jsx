import React from 'react'
import { projects } from '../data/projects'
import {Link} from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>

      {
        projects.map( project => {
          return (
              <article key={project.id}>
                <span>{project.categories}</span>
                <h2><Link to={"/project/" + project.name}>{project.name}</Link></h2>
                <h3>{project.technologies}</h3>
              </article>
          )
        })
      }

    </div>
  )
}
