import React from 'react'
import Form from "./Form";

function Connect() {
    return (
        <>
            <h1 className='text-9xl font-head text-primary m-10 '>Connect With Us!</h1>
            <h1 className='text-5xl font-head text-light m-20 '>
                Are you a tech enthusiast? We are on the lookout for innovators like you! Join our community of innovators, where your ideas take flight. Join us now!
            </h1>
            <h2 className='text-7xl font-subhead text-secondary my-20 text-center'>Recruitment Form</h2>
            <Form />

            <h2 className='text-7xl font-subhead text-secondary my-20 text-center'>Social Handles</h2>
            <div className="grid grid-cols-2">
            <SocialButtons />
            <SocialButtons />
            <SocialButtons />
            <SocialButtons />
            <SocialButtons />
            <SocialButtons />
            </div>



        </>
    )
}

function SocialButtons() {
    return (

        <a href="" class="flex items-center border border-gray-700 rounded-lg shadow flex-row max-w-2xl m-20">
            <img class="object-cover rounded-lg w-80 " src="/logo.png" alt="ig" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-3xl font-bold tracking-widest font-head text-primary text-center">Instagram</h5>
                <button href="/" class="font-bold px-10 py-4 rounded-xl m-6 text-2xl font-subhead text-light bg-secondary hover:opacity-80 duration-200">Follow!</button>
            </div>
        </a>
    )
}

export default Connect