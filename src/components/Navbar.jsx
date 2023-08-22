import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800'>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <Link href='/'>
                    <h3 className='text-white font-bold text-3xl'>TODO NEXT</h3>
                </Link>
                

                <ul className='flex gap-3 text-lg font-bold'>
                    <li>
                        <Link href='/' className='text-slate-400 hover:text-slate-100'>
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link href='/new' className='text-slate-400 hover:text-slate-100'>
                            New task
                        </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar