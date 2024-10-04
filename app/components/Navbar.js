'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const [showNavbar, setShowNavbar] = useState(false)
    const handleNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    useEffect(() => {
        setShowNavbar(false)
    }, [pathname]);
    return (
        <nav className='sticky top-0 flex flex-row items-center justify-between bg-white-blur backdrop-blur-lg py-4 lg:px-24 px-8 z-50'>
            <div>
                <Image className="w-auto h-10" src="/img/logo-helby.svg" width={1000} height={1000} alt="image" quality={100}/>
            </div>
            <ul className={`navbar-menu ${showNavbar ? 'flex' : 'hidden'} lg:flex lg:flex-row md:flex-row flex-col items-center lg:justify-end justify-between lg:px-0 lg:py-0 px-7 md:py-5 py-6 lg:gap-8 gap-3`}>
                <div className='flex lg:flex-row flex-row items-center gap-0'>
                    <li className='lg:text-base text-xs font-medium lg:px-4 px-3 lg:py-[10px] py-2 rounded-lg'>
                        <Link href='/'>Features</Link>
                    </li>
                    <li className='lg:text-base text-xs font-medium lg:px-4 px-3 lg:py-[10px] py-2 rounded-lg'>
                        <Link href='/'>Pricing</Link>
                    </li>
                    <li className='lg:text-base text-xs font-medium lg:px-4 px-3 lg:py-[10px] py-2 rounded-lg'>
                        <Link href='/'>About Us</Link>
                    </li>
                    <li className='lg:text-base text-xs font-medium lg:px-4 px-3 lg:py-[10px] py-2 rounded-lg'>
                        <Link href='/'>Blog</Link>
                    </li>
                    <li className='lg:text-base text-xs font-medium lg:px-4 px-3 lg:py-[10px] py-2 rounded-lg'>
                        <Link href='/'>Contact</Link>
                    </li>
                </div>
                <div className='flex lg:flex-row flex-row items-center gap-2'>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lg:w-4 w-3 lg:h-4 h-3 stroke-gray-primary">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search" className="block w-full lg:text-sm text-xs text-gray-primary placeholder-gray-primary font-normal lg:py-3 py-2 ps-9 pe-3 rounded-full border border-gray-secondary focus:outline-none focus:border-blue" />
                    </div>
                    <button className='w-fit lg:text-sm text-xs font-medium bg-black-primary text-white-primary lg:px-6 px-5 lg:py-3 py-2 rounded-full'>Get started free</button>
                </div>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:hidden block cursor-pointer" onClick={() => handleNavbar()}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
            </svg>
        </nav>
    );
}