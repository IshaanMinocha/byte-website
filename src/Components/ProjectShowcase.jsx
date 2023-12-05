import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectShowcase() {
    return (
        <>
            <section id='project-section' className="bg-dark mt-20">
                <div className="gap-16 items-center px-4 mx-auto max-w-screen-2xl">
                    <div className="font-light text-dark "><span className="font-semibold text-primary"></span>
                        <h1 className='text-xl text-left text-secondary font-semibold my-5'>Some of our...</h1>
                        <h2 className="text-6xl font-bold font-head tracking-widest text-primary mb-20">Projects!</h2>
                        <div className="grid grid-cols-3 justify-items-center">
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                        <a href="" target='_blank'>
                            <div className="text-2xl text-right my-10 text-secondary font-semibold mb-10 hover:underline ">View All</div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectShowcase