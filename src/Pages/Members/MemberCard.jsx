import React from 'react'
// import GradientsBg from '../../Components/Common/Gradients/GradientsBg'
import { NavLink } from 'react-router-dom'

const members = [
    { name: 'Shaurya', image: 'https://avatars.githubusercontent.com/shauryacwt', path: 'https://github.com/shauryacwt', position: 'Owner', work: 'Owner of this website.' },
    { name: 'Yashin', image: 'https://avatars.githubusercontent.com/YasinMemon', path: 'https://github.com/YasinMemon', position: 'Partner', work: 'Share in this website.' },
    { name: 'Mukesh', image: 'https://avatars.githubusercontent.com/dopemukesh', path: 'https://github.com/dopemukesh', position: 'Core Developer', work: 'Developed this website.' },
]

const MemberCard = () => {
    return (
        <>
            <div className='my-8 flex gap-4 flex-wrap justify-center'>
                {members.length > 0 ? (
                    members.map(({ name, image, path, position, work }) => (
                        <NavLink to={path || '#'} key={image}>
                            <div className='w-80 flex-1 flex border border-gray-300 rounded-xl p-4 hover:scale-105 transition-transform duration-500 ease-in-out'>
                                <img src={image} alt="" className='w-14 h-14 rounded-full' />
                                <div className='text-gray-900 w-full ml-4'>
                                    <div className='w-full flex justify-between items-center'>
                                        <p className='text-sm font-semibold'>{name}</p>
                                        <p className='text-[8px] font-medium p-1 bg-gray-200 rounded border border-gray-300'>{position}</p>
                                    </div>
                                    <p className='text-sm text-gray-500'>{work}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))
                ) : <p>No contributors found.</p>}
            </div>
        </>
    )
}

export default MemberCard
