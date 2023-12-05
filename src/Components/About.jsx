import React from 'react'
import Team from './Team'

function About() {
    return (
        <section id='about-section' className="bg-dark">
            <div className="gap-16 items-center px-4 mx-auto max-w-screen-2xl grid grid-cols-2">
                <div className="font-light text-dark "><span className="font-semibold text-primary"></span>
                    <h1 className='text-xl text-left text-secondary font-semibold my-5'>How it all started...</h1>
                    <h2 className="text-6xl font-bold font-head tracking-widest text-primary mb-20">ABOUT US!</h2>
                    <p className="mb-6 text-3xl font-thinspaced text-left flex-col text-secondary">
                    Founded by sophomores at Maharaja Agrasen Institute of Technology, B.Y.T.E i.e.<span className="font-semibold text-primary">  Brains Yielding Technical Endevours</span>  is a recently established Technical Society redefining the outlook of R & D. Apart from this it is a vibrant community where innovators solve real world problems and push technical boundaries.
                    </p><p className="mb-6 text-3xl font-thinspaced text-left flex-col text-secondary">
                    From coding competitions to hackathons we offers vaious opportunities to members to build and enhance their skills. Beyond technology, we prioritize connections and have networking sessions. Join us to be part of a community and contribute to shaping the future.
                    </p> 
                </div>
                <div className="grid grid-cols-2 gap-4 mt-20">
                    <img className="w-full rounded-lg h-96" src="/logo.png" alt="1" />
                    <img className="w-full mt-10 rounded-lg h-96" src="/logo.png" alt="2" />
                </div>
            </div>
        </section>
    )
}

export default About