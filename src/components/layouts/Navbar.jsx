import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Navlink from '../buttons/Navlink'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
    const nav = <div className="flex items-center space-x-6">
        <Navlink href={"/"}>Home</Navlink>
        <Navlink href={"/services"}>Services</Navlink>
        <Navlink href={"/blog"}>Blog</Navlink>
        <Navlink href={"/contact"}>Contact</Navlink>
        <Navlink href={"/my-booking-page"}>My Booking Page</Navlink>
    </div>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={"/dashboard"} className='btn btn-primary space-x-4 mr-4'>
                    dashBoard
                </Link>
                <Link href="/login"><button className='btn btn-primary btn-outline'>Login</button></Link>
            </div>
        </div>
    )
}

export default Navbar