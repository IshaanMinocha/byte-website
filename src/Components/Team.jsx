import React from 'react'
import Card from './Card'

function Team() {
    return (
        <>
            <h1 className='text-9xl font-head text-primary m-10 '>People Behind BYTE</h1>
            <h1 className='text-5xl font-head text-light m-20 '>Meet the visionaries behind our society, a group of sophomores from the halls of MAIT who have a shared passion for technology.</h1>
            <h2 className='text-7xl font-subhead text-secondary my-20 text-center'>Admins</h2>
            <div id="admins" className="flex justify-around">
                <Card name="Ishaan Minocha" position="Technical Admin" quote="Creating his own world" />
                <Card name="Shivam Kumar Jha" position="Research Admin" quote="nigga" />
                <Card name="Abir Thakur" position="Community Admin" quote="his master" />
            </div>
            <h2 className='text-7xl font-subhead text-secondary my-20 text-center'>Heads</h2>
            <div id="subadm" className="flex justify-around">
                <Card name="Ansh Kapila" position="PR Head" quote="2nd master" />
                <Card name="Gehna Gautam" position="GIT Head" quote="ameer" />
            </div>
            <h2 className='text-7xl font-subhead text-secondary my-20 text-center'>Professors</h2>
            <div id="profmentors" className="flex justify-around">
                <Card name="Prof. Namita Gupta" position="CSE HOD & Professor" quote="bhen" />
                <Card name="Prof. Alok Sharma" position="System Admin & Assistant Professor" quote="bhai" />
            </div>
            
        </>
    )
}

export default Team