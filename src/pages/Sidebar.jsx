import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiMeta } from "react-icons/si";
import { IoChevronUpOutline } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { PiTableFill } from "react-icons/pi";
function Sidebar() {
    return (
        <aside className='w-60 p-3 flex flex-col min-h-screen shadow-2xl rounded'>
            <div className=''>
                <h1 className=' font-bold text-lg'>Manage page</h1>
                <div className='flex pt-3 items-center gap-3'>
                    <div className='w-10 flex items-center justify-center h-10 rounded-full bg-gray-300'>
                        <img className='w-10 rounded-full h-10 bg-cover bg-center' src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Creative-businessman-using-laptop-in-co-working-space-characteristics-of-a-determined-person.jpg" alt="" />
                    </div>
                    <h1>Old page name</h1>
                </div>
            </div>
            <hr className='mt-3 font-bold' />
            <div className='w-full pt-7 h-10 flex items-center justify-between'>
                <div className='w-9 h-9 items-center justify-center flex rounded-full bg-gray-300'>
                    <SiMeta className='w-6 h-6' />
                </div>
                <h1>Meta Busines Suite</h1>
                <IoChevronUpOutline />

            </div>
            <ul className='flex pl-9 w-full pt-5 flex-col cursor-pointer'>
                <li className='flex gap-1 w-full' >
                    <NavLink className='flex flex-1 p-1 transition  items-center gap-2 ' to={'/admin/basket'}>
                        <div className='w-8 flex  items-center justify-center h-8 bg-gray-200 rounded-full'>
                            <BiCart className='w-5 h-5' />
                        </div>
                        Basket
                    </NavLink>
                </li>
                <li className='flex gap-1 w-full' >
                    <NavLink className='flex flex-1 p-1 transition  items-center gap-2 ' to={'/admin/books'}>
                        <div className='w-8 flex  items-center justify-center h-8 bg-gray-200 rounded-full'>
                            <SiBookstack className='w-4 h-4' />
                        </div>
                        Books
                    </NavLink>
                </li>
                <li className='flex gap-1 w-full' >
                    <NavLink className='flex flex-1 p-1 transition  items-center gap-2 ' to={'/admin/tasks'}>
                        <div className='w-8 flex  items-center justify-center h-8 bg-gray-200 rounded-full'>
                            <FaTasks className='w-4 h-4' />
                        </div>
                        Tasks
                    </NavLink>
                </li>
                <li className='flex gap-1 w-full' >
                    <NavLink className='flex flex-1 p-1 transition  items-center gap-2 ' to={'/admin/products'}>
                        <div className='w-8 flex  items-center justify-center h-8 bg-gray-200 rounded-full'>
                            <FaProductHunt className='w-5 h-5' />
                        </div>
                        Products
                    </NavLink>
                </li>
                <li className='flex gap-1 w-full' >
                    <NavLink className='flex flex-1 p-1 transition  items-center gap-2 ' to={'/admin/users'}>
                        <div className='w-8 flex  items-center justify-center h-8 bg-gray-200 rounded-full'>
                            <HiUsers className='w-5 h-5' />
                        </div>
                        Users
                    </NavLink>
                </li>
                <li className='flex gap-1 w-full' >
                    <NavLink className='flex flex-1 p-1 transition  items-center gap-2 ' to={'/admin/plans'}>
                        <div className='w-8 flex  items-center justify-center h-8 bg-gray-200 rounded-full'>
                            <PiTableFill className='w-5 h-5' />
                        </div>
                        Plans
                    </NavLink>
                </li>


            </ul>

        </aside>
    )
}

export default Sidebar
