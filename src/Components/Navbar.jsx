import React from 'react'

function Navbar() {
    return (
        <nav className="bg-secondary  sticky top-0 opacity-90 p-1">
            <div className="container mx-auto flex items-center justify-between">
                <div className="logo">
                    <a href="/">
                        <img className='h-20' src="/logo.png" alt="BYTE" />
                    </a>
                </div>

                <div className="flex space-x-4 text-xl">
                    <a href="/" className="text-white font-semibold m-2 p-3 duration-200 hover:opacity-80 flex">
                        Home
                    </a>
                    <a href="#about-section" className="text-white font-semibold m-2 p-3 duration-200 hover:opacity-80 flex">
                        About
                    </a>
                    <a href="#achievements-section" className="text-white font-semibold m-2 p-3 duration-200 hover:opacity-80 flex">
                        Achievements
                    </a>
                    <a href="#project-section" className="text-white font-semibold m-2 p-3 duration-200 hover:opacity-80 flex">
                        Projects
                    </a>
                    <a href="team" className="text-white font-semibold m-2 p-3 duration-200 hover:opacity-80 flex">
                        Team
                    </a>
                    <a href="connect" className="text-white duration-300 bg-dark rounded-full font-semibold my-2 py-3 px-10 hover:bg-transparent border-2 border-dark flex">
                        Join us!
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar