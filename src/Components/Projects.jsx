import React from 'react'
import Card from './Card'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <>
      <h1 className='text-9xl font-head text-primary m-10 '>Our Projects</h1>
      <h1 className='text-5xl font-head text-light m-20 '>Witness the collaborative projects of our innovators and explore the limitless possibilities that define our technological journey.</h1>
      
      <h2 className='text-7xl font-subhead text-secondary my-20 text-center'>Hackathons</h2>
      <div className="grid grid-cols-2 justify-items-center">
        <span className='m-20'><ProjectCard /></span>
        <span className='m-20'><ProjectCard /></span>
        <span className='m-20'><ProjectCard /></span>
        <span className='m-20'><ProjectCard /></span>
        <span className='m-20'><ProjectCard /></span>
        <span className='m-20'><ProjectCard /></span>
      </div>
      <h2 className='text-7xl font-subhead text-secondary my-20 text-center'>Designs</h2>
      <div className="grid grid-cols-2 justify-items-center">
      <span className='m-20'><ProjectCard /></span>
      <span className='m-20'><ProjectCard /></span>
      <span className='m-20'><ProjectCard /></span>
      <span className='m-20'><ProjectCard /></span>
      <span className='m-20'><ProjectCard /></span>
      <span className='m-20'><ProjectCard /></span>
      </div>
    </>
  )
}

export default Projects