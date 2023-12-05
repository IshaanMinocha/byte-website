import React from 'react';
import Type from "./Type";

function Hero() {
    return (
        <>
             {/* <div className="bg-[url('bg-70.png ')] h-[75vh] bg-no-repeat bg-fixed bg-center bg-[length:200vh] mt-40">  */}
             <div className="h-[75vh] bg-gradient-to-b from-secondary via-secondary via-95% to-dark to-100% pt-8"> 
                <h1 className='text-7xl text-center font-head text-light tracking-wider pt-10'>
                    <span className='text-9xl text-primary'>B.Y.T.E.</span> fraternity
                </h1>
                <p className='text-5xl my-4 px-40 flex justify-center font-bold font-thinspaced text-dark tracking-wider'>
                    <span className='mr-2 text-3xl pt-2 font-thinspaced font-normal tracking-widest'>working in </span>  <span className='text-dark'><Type/></span>                    
                </p>
                <div className="flex space-x-4 pt-20 justify-center text-xl">
                    <a href="#projects" className="text-light border-solid rounded-full border-2 border-dark font-semibold m-2 p-3 px-10 duration-200 hover:bg-dark">View our Projects</a>
                    <a href="#join" className="text-light hover:bg-opacity-90 rounded-full border-2 border-dark font-semibold m-2 p-3 px-10 duration-200 bg-dark">Reqruitment</a>
                </div>
            </div>
            <div className="container mx-auto text-center scroll-smooth">
                <a href="#about-section">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto my-10 animate-bounce text-light">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default Hero