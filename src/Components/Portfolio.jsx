import React from 'react'
import { projects } from '../data/projects'
import {Link} from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>

      <section className='projects'>
        {
          projects.map( project => {
            return (
                <article className='itemProject' key={project.id}>
                  <div className='mask'>
                    <img src={"/images/img-"+`${project.id}`+".jpg"} alt="" />
                  </div>
                  <span>{project.categories}</span>
                  <h2><Link to={"/project/" + project.id}>{project.name}</Link></h2>
                  <h3>{project.technologies}</h3>
                </article>
            )
          })
        }
      </section>

    </div>
  )
}
