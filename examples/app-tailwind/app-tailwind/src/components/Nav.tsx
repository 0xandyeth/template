import React from 'react'

const Nav = () => {
    return (
        <nav className=' bg-white dark:bg-slate-80 grid grid-cols-2 w-full place-content-between items-center'>
            <h4 className='font-bold'>Resume</h4>
            <button>Toggle</button>
        </nav>
    )
}

export default Nav
