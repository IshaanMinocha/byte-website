import React from 'react'

function AchievementsSection() {
    return (
        <section id='achievements-section' className="bg-gradient-to-t from-dark via-gray-800 to-dark mt-40">
            <div className="gap-16 px-4 mx-auto max-w-screen-2xl text-right">
                <div className="font-light text-dark"><span className="font-semibold text-primary"></span>
                    <h1 className='text-xl text-secondary font-semibold my-5'>Our Latest...</h1>
                    <h2 className="text-6xl font-bold font-head tracking-widest text-primary mb-20">ACHIEVEMENTS!</h2>
                </div >

                <div class="grid rounded-lg shadow-sm mb-12 grid-cols-3 bg-dark">
                    <div class="flex flex-col items-center justify-center p-8 text-centerborder-b border-gray-200 rounded-ss-lg border-e">
                            <h3 class="text-xl font-subhead font-semibold text-primary">HackXtreme Hackathon, IIT Delhi</h3>
                            <img class="rounded-full w-80" src="/logo.png" alt="" />
                            <p class="my-4 text-light text-center text-xl">description</p>
                    </div>
                    <div class="flex flex-col items-center justify-center p-8 text-centerborder-b border-gray-200 rounded-ss-lg border-e">
                            <h3 class="text-xl font-subhead font-semibold text-primary">HackXtreme Hackathon, IIT Delhi</h3>
                            <img class="rounded-full w-80" src="/logo.png" alt="" />
                            <p class="my-4 text-light text-center text-xl">description</p>
                    </div>
                    <div class="flex flex-col items-center justify-center p-8 text-centerborder-b border-gray-200 rounded-ss-lg ">
                            <h3 class="text-xl font-subhead font-semibold text-primary">HackXtreme Hackathon, IIT Delhi</h3>
                            <img class="rounded-full w-80" src="/logo.png" alt="" />
                            <p class="my-4 text-light text-center text-xl">description</p>
                    </div>
                </div>
                <a href="" target='_blank'>
                <div className="text-2xl text-secondary font-semibold mb-10 hover:underline ">View All</div>
                </a>
            </div>
        </section>
    )
}

export default AchievementsSection