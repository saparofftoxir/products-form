import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='w-full sticky top-0 py-3 px-20 rounded bg-white shadow-xl '>
            <ul className='font-semibold flex items-center justify-between'>
                <li>
                    <NavLink to={"/"}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <div className='flex items-center gap-10  '>
                        <NavLink className="active:underline " to={"/services"} >
                            Services
                        </NavLink>
                        <NavLink className="active:underline " to={"/admin/books"}>
                            Admin
                        </NavLink>
                        <NavLink className="active:underline " to={"/about"}>
                            About
                        </NavLink>
                    </div>
                </li>
                <li>
                    <button className='p-1 text-white rounded-2xl bg-cyan-600 hover:bg-cyan-500 transition w-32'>Contact</button>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
