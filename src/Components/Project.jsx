import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects';

export const Project = () => {

    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(() => {
        let project = projects.filter(project => project.id === params.id);

        setProject(project[0]);
    },[]);


  return (
    <div className='page pageProject'>
        <div className='mask'>
            <img src={"/images/img-"+`${project.id}`+".jpg"} alt="" />
        </div>
      <h2 className='heading'>{(project.id).toUpperCase()}</h2>
      <p>{project.technologies}</p>
      <p>{project.description}</p>
      <a href={"https://"+project.url} target='_blank'>Go to project!</a>
    </div>
  )
}
