import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import DashboardHome from '../Layout/Dashboard/DashboardHome'
import './style.css';
import { links } from '../Data/data'; 

const Sidebar = ({open,setOpen}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  

    return (
        <div className='grid grid-cols-12'>
            <div
                className={` ${
                    open ? "w-40" : "w-60 "
                } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300 col-span-2`}>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">
                                Dashboard
                            </h2>
                            <button onClick={() => setOpen(!open)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center py-4">
                                <button
                                    type="submit"
                                    className="p-2 focus:outline-none focus:ring"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Search..."
                                className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="pt-2 pb-4 space-y-1 text-sm">
                            {links.map((item) => (
                                <div key={item.title}>
                                    <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                    </p>
                                    {item.links.map((link) => (
                                    <NavLink
                                        to={link.href}
                                        key={link.name}
                                        style={({ isActive }) => ({
                                        backgroundColor: isActive ? "blue" : '',
                                        })}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                    ))}
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-10'>
                    <Outlet/>
                </div>
        </div>
  )
}

export default Sidebar