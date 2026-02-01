import React , { useState } from 'react'
import { ReactComponent as MenuIcon } from '../assets/HomePage2.svg';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const buttonClasses = 'text-gray-100 font-bold-text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300';

    const buttons = (
        <>
            <button className={buttonClasses}>About Me</button>
            <button className={buttonClasses}>Experience</button>
            <button className={buttonClasses}>Projects</button>
        </>
    )
  return (
    <nav className='bg-gray-800 text-white fixed w-full z-10 top-0 shadow'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex flex-row w-full justify-between'>
                    <div className='text-xl font-bold'>
                        Charlize
                    </div>
                    <div className='hidden md: block'>
                        <div className='flex ml-10 items-baseline space-x-2'>
                            {buttons}
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button onClick={()=>{setIsOpen(!isOpen)}} type='button'className='fill-gray-100'>
                        <svg>
                            <MenuIcon className='w-6 h-6' /> {/* adjust size with Tailwind classes */}
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {
            isOpen && (
                <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
                    {buttons}
                </div>
            )
        }
    </nav>
  )
}

export default Header